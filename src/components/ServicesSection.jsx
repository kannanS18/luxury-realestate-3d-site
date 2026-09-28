import React from 'react';
import { realEstateData } from '../data/realEstateData';
import { Key, TrendingUp, Compass, Shield, Landmark, Sparkles, ArrowRight } from 'lucide-react';

const icons = { Key, TrendingUp, Compass, Shield, Landmark, Sparkles };

export function ServicesSection({ onOpenBooking }) {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#C9A96E] mb-2">Architectural Stewardship</div>
        <h2 className="text-4xl sm:text-5xl font-bold font-heading uppercase text-white">CURATED ARCHITECTURAL EXPERTISE</h2>
        <div className="w-16 h-1 bg-[#C9A96E] mx-auto my-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base">Tailored acquisition, disposition, and development advisory for generational real estate assets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {realEstateData.services.map((item, i) => {
          const Icon = icons[item.icon] || Key;
          return (
            <div key={i} className="p-7 rounded-2xl glass-panel border border-[#C9A96E]/20 hover:border-[#C9A96E]/60 transition-all group shadow-lg">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-black transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-400">{item.tag}</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-[#C9A96E] transition-colors">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 font-body">{item.desc}</p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-mono font-semibold text-[#C9A96E]">{item.metric}</span>
                <button onClick={onOpenBooking} className="text-gray-400 group-hover:text-[#C9A96E] font-heading font-bold uppercase flex items-center gap-1">
                  <span>Advisory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}