import React from 'react';
import { Building2, ArrowUpRight } from 'lucide-react';

export function Navbar({ onOpenBooking }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-[#C9A96E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/40 flex items-center justify-center text-[#C9A96E]">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold font-heading tracking-wider text-white">PrimeNest</div>
            <div className="text-[10px] tracking-widest font-mono text-gray-400 uppercase">ARCHITECTURAL REALTY RESERVE</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-gray-400">
          <a href="#services" className="hover:text-white transition-colors">Expertise</a>
          <a href="#gallery" className="hover:text-white transition-colors">Reserve Portfolio</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Patrons</a>
          <a href="#contact" className="hover:text-white transition-colors">Viewing</a>
        </nav>

        <button
          onClick={onOpenBooking}
          className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] to-[#A8884C] text-black shadow-md hover:shadow-lg transition-all"
        >
          <span>Private Viewing</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}