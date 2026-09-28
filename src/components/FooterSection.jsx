import React from 'react';
import { Building2, Award } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="pt-16 pb-12 border-t border-white/10 bg-[#0A0B0D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/40 flex items-center justify-center text-[#C9A96E]"><Building2 className="w-5 h-5" /></div>
              <span className="text-2xl font-bold font-heading tracking-wider">PrimeNest Reserve</span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm font-body">Representing architectural landmarks, coastal villas, and private reserve penthouses for generational global collectors.</p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A96E]">
              <Award className="w-4 h-4" />
              <span>Global Architectural Real Estate Board</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white mb-4">Advisory</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-body">
              <li>Prime Trophy Acquisitions</li>
              <li>Off-Market Dispositions</li>
              <li>Architectural Commissioning</li>
              <li>Family Office Real Estate</li>
              <li>Penthouse Reserves</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white mb-4">New York Gallery</h4>
            <p className="text-xs text-gray-400 leading-relaxed font-body">432 Park Avenue, Suite 6200, New York, NY<br/><br/>Direct: +1 (212) 890-7700<br/>concierge@primenest-reserve.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>© {new Date().getFullYear()} PrimeNest Architectural Realty Reserve LLC. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Confidentiality Protocols</span>
            <span>Terms of Engagement</span>
            <span>Jurisdictional Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}