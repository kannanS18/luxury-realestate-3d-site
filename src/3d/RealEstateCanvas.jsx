import React, { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { Sliders, Sun, Moon, Sunset } from 'lucide-react';

function BuildingModel({ timeOfDay, interiorLights, goldenHourParticles, autoRotate }) {
  const groupRef = useRef();
  const { scene, animations } = useGLTF('/models/LittlestTokyo.glb');
  const buildingModel = useMemo(() => scene.clone(true), [scene]);
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (actions) {
      const first = Object.values(actions)[0];
      if (first) first.play();
    }
  }, [actions]);

  const lighting = useMemo(() => {
    switch (timeOfDay) {
      case 'night':
        return { sunColor: '#38BDF8', sunIntensity: 0.8, ambientColor: '#0F172A', ambientIntensity: 0.6, windowColor: '#F59E0B', windowIntensity: 6 };
      case 'day':
        return { sunColor: '#FFFBEB', sunIntensity: 3.5, ambientColor: '#E0F2FE', ambientIntensity: 1.2, windowColor: '#FEF3C7', windowIntensity: 2 };
      case 'sunset':
      default:
        return { sunColor: '#F59E0B', sunIntensity: 3.8, ambientColor: '#451A03', ambientIntensity: 1.0, windowColor: '#D97706', windowIntensity: 5 };
    }
  }, [timeOfDay]);

  const particleCount = 65;
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < particleCount; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 8,
        y: Math.random() * 5 + 0.2,
        z: (Math.random() - 0.5) * 8,
        speedY: 0.005 + Math.random() * 0.015,
        speedX: (Math.random() - 0.5) * 0.008,
      });
    }
    return arr;
  }, []);

  const particlesRef = useRef();

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) groupRef.current.rotation.y += delta * 0.2;
    if (particlesRef.current && goldenHourParticles) {
      const pos = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        let y = pos[i * 3 + 1] + particles[i].speedY;
        if (y > 5.5) y = 0.2;
        pos[i * 3 + 1] = y;
        pos[i * 3] += particles[i].speedX;
        if (Math.abs(pos[i * 3]) > 4) pos[i * 3] *= -0.9;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, -0.6, 0]}>
      <directionalLight color={lighting.sunColor} intensity={lighting.sunIntensity} position={[6, 8, 4]} castShadow />
      <ambientLight color={lighting.ambientColor} intensity={lighting.ambientIntensity} />

      <group ref={groupRef}>
        <primitive object={buildingModel} scale={0.005} />
        {interiorLights && (
          <>
            <pointLight color={lighting.windowColor} intensity={lighting.windowIntensity} distance={4} position={[0, 1.2, 0]} />
            <pointLight color="#FBBF24" intensity={lighting.windowIntensity * 0.8} distance={3.5} position={[0.8, 2.0, 0.5]} />
          </>
        )}
      </group>

      {goldenHourParticles && (
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={particleCount} array={new Float32Array(particles.flatMap(p => [p.x, p.y, p.z]))} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial color="#E5C583" size={0.08} transparent opacity={0.8} blending={THREE.AdditiveBlending} />
        </points>
      )}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color="#121316" roughness={0.4} metalness={0.6} />
      </mesh>
      <gridHelper args={[18, 18, '#C9A96E', '#22252A']} position={[0, 0.005, 0]} />
    </group>
  );
}

useGLTF.preload('/models/LittlestTokyo.glb');

export function RealEstateCanvas() {
  const [timeOfDay, setTimeOfDay] = useState('sunset');
  const [interiorLights, setInteriorLights] = useState(true);
  const [goldenHourParticles, setGoldenHourParticles] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [toolbarOpen, setToolbarOpen] = useState(false);

  return (
    <div className="relative w-full h-[650px] md:h-[750px] lg:h-[820px] overflow-hidden select-none">
      <Canvas shadows camera={{ position: [4.5, 3.5, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={<Html center><div className="text-xs font-mono text-[#C9A96E]">SYNTHESIZING ARCHITECTURE...</div></Html>}>
          <Environment preset="sunset" environmentIntensity={0.6} />
          <BuildingModel timeOfDay={timeOfDay} interiorLights={interiorLights} goldenHourParticles={goldenHourParticles} autoRotate={autoRotate} />
          <OrbitControls enablePan={false} minDistance={2.5} maxDistance={9.5} maxPolarAngle={Math.PI / 2 - 0.05} dampingFactor={0.05} />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-6 left-6 z-30 pointer-events-auto">
        <button
          onClick={() => setToolbarOpen(!toolbarOpen)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-panel shadow-lg hover:border-[#C9A96E] transition-all group"
        >
          <Sliders className="w-4 h-4 text-[#C9A96E]" />
          <span className="text-xs font-semibold tracking-wider uppercase font-heading text-white">Architectural Environment Controls</span>
          <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
        </button>

        {toolbarOpen && (
          <div className="mt-3 p-5 rounded-2xl glass-panel shadow-2xl border border-[#C9A96E]/40 w-80 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C9A96E] font-heading">Atmosphere Deck</span>
              <button onClick={() => setToolbarOpen(false)} className="text-gray-400 hover:text-white text-xs">✕</button>
            </div>
            <div>
              <label className="text-[11px] font-semibold text-gray-400 uppercase block mb-1.5 font-mono">Lighting & Time of Day</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'sunset', label: 'Sunset', icon: Sunset },
                  { id: 'night', label: 'Night', icon: Moon },
                  { id: 'day', label: 'Day', icon: Sun },
                ].map(t => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTimeOfDay(t.id)}
                      className={`py-1.5 flex items-center justify-center gap-1 text-[11px] font-mono rounded-md border transition-all ${timeOfDay === t.id ? 'border-[#C9A96E] bg-[#C9A96E]/20 text-white font-bold' : 'border-white/10 text-gray-400'}`}
                    >
                      <Icon className="w-3 h-3" />
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs pt-1 border-t border-white/10">
              <span>Interior Window Glow</span>
              <input type="checkbox" checked={interiorLights} onChange={e => setInteriorLights(e.target.checked)} className="accent-[#C9A96E]" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Golden Dust Motes</span>
              <input type="checkbox" checked={goldenHourParticles} onChange={e => setGoldenHourParticles(e.target.checked)} className="accent-[#C9A96E]" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Architectural Turntable</span>
              <input type="checkbox" checked={autoRotate} onChange={e => setAutoRotate(e.target.checked)} className="accent-[#C9A96E]" />
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#101114] to-transparent pointer-events-none" />
    </div>
  );
}