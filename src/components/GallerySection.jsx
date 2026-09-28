import React, { useState } from 'react';
import { realEstateData } from '../data/realEstateData';
import { ExternalLink } from 'lucide-react';

export function GallerySection({ onOpenBooking }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Coastal Villas', 'Modernist Mansions', 'Sky Penthouses'];

  const filtered = filter === 'All' ? realEstateData.gallery : realEstateData.gallery.filter(i => i.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0C] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#C9A96E] mb-2">Trophy Real Estate</div>
            <h2 className="text-4xl sm:text-5xl font-bold font-heading uppercase text-white">THE PRIVATE RESERVE PORTFOLIO</h2>
            <p className="text-gray-400 text-sm mt-1 font-body">Current iconic properties available for discreet private acquisition.</p>
          </div>
          <div className="flex gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${filter === c ? 'bg-[#C9A96E] text-black font-bold shadow-md' : 'glass-panel text-gray-400 hover:text-white'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#C9A96E] transition-all flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded bg-[#C9A96E] text-black text-[10px] font-mono font-bold uppercase">{item.badge}</div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#C9A96E] transition-colors">{item.title}</h3>
                  <p className="text-xs text-gray-400 mt-1 font-body">{item.specs}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#C9A96E]">{item.category}</span>
                  <button onClick={onOpenBooking} className="text-gray-400 hover:text-white flex items-center gap-1 font-heading uppercase">
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}