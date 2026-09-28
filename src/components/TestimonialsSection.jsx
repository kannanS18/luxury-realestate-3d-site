import React from 'react';
import { realEstateData } from '../data/realEstateData';
import { Quote, CheckCircle } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#C9A96E] mb-2">Patron Testimonials</div>
        <h2 className="text-4xl sm:text-5xl font-bold font-heading uppercase text-white">PATRON TESTIMONIALS</h2>
        <div className="w-16 h-1 bg-[#C9A96E] mx-auto my-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {realEstateData.testimonials.map((item, i) => (
          <div key={i} className="p-8 sm:p-10 rounded-3xl glass-panel border border-[#C9A96E]/20 flex flex-col justify-between">
            <Quote className="w-8 h-8 text-[#C9A96E] mb-6" />
            <blockquote className="text-base sm:text-lg text-white font-heading leading-relaxed mb-8 italic">
              "{item.quote}"
            </blockquote>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A96E]" />
                <div>
                  <div className="font-heading font-bold text-lg text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle className="w-4 h-4 text-[#C9A96E]" />
                  </div>
                  <div className="text-xs text-gray-400 font-body">{item.title}</div>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#C9A96E]/15 text-[#C9A96E]">
                {item.car}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}