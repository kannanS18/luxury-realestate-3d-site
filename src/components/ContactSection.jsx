import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { realEstateData } from '../data/realEstateData';
import { Send, MapPin, Phone, Clock, Mail, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', target: '', budget: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: ['#C9A96E', '#10B981', '#FFFFFF'] });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', target: '', budget: '', details: '' });
    }, 5000);
  };

  const { workshopInfo } = realEstateData.contact;

  return (
    <section id="contact" className="py-24 bg-[#0A0A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#C9A96E] mb-2">Confidential Acquisitions</div>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading uppercase text-white">REQUEST A PRIVATE VIEWING</h2>
          <div className="w-16 h-1 bg-[#C9A96E] mx-auto my-4 rounded-full" />
          <p className="text-gray-400 text-sm font-body">Our managing partners coordinate confidential property tours and architectural monographs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-[#C9A96E]/30 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C9A96E]/20 text-[#C9A96E] flex items-center justify-center mx-auto border-2 border-[#C9A96E] animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Viewing Dossier Dispatched</h3>
                <p className="text-sm text-gray-400 font-body">Our private client partner will verify credentials and contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-400 mb-2">Principal Full Name *</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Lord Julian Rothschild" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#C9A96E] focus:outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-400 mb-2">Confidential Email *</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="rothschild@familyoffice.ch" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#C9A96E] focus:outline-none text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-400 mb-2">Direct Phone / Signal *</label>
                    <input type="tel" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 (212) 555-0144" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#C9A96E] focus:outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-gray-400 mb-2">Asset Target / Region *</label>
                    <input type="text" required value={formData.target} onChange={e => setFormData({ ...formData, target: e.target.value })} placeholder="e.g. Villa Cielo Mare / Bel Air / Central Park Duplex" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#C9A96E] focus:outline-none text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-gray-400 mb-2">Investment Capital Allocation *</label>
                  <select required value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#181A1F] border border-white/10 text-white focus:border-[#C9A96E] focus:outline-none text-sm">
                    <option value="">Select Capital Allocation</option>
                    <option value="$10M - $25M">$10,000,000 - $25,000,000</option>
                    <option value="$25M - $50M">$25,000,000 - $50,000,000</option>
                    <option value="$50M - $100M">$50,000,000 - $100,000,000</option>
                    <option value="$100M+">$100,000,000+ Generational Trophy Reserve</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-gray-400 mb-2">Acquisition Criteria & Timeline</label>
                  <textarea rows={3} value={formData.details} onChange={e => setFormData({ ...formData, details: e.target.value })} placeholder="Share desired architectural pedigree, private airfield proximity, security requirements, or off-market search directives..." className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-600 focus:border-[#C9A96E] focus:outline-none text-sm resize-none" />
                </div>

                <button type="submit" className="w-full py-4 rounded-xl font-heading font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 bg-gradient-to-r from-[#C9A96E] to-[#A8884C] text-black shadow-[0_0_25px_rgba(201,169,110,0.4)] hover:shadow-[0_0_35px_rgba(201,169,110,0.6)] transition-all">
                  <span>Submit Confidential Viewing Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white uppercase">Client Advisory Gallery</h3>
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-400 uppercase">New York Reserve</div>
                    <div className="font-medium text-white mt-0.5">{workshopInfo.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] shrink-0"><Phone className="w-5 h-5" /></div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-400 uppercase">VIP Concierge Desk</div>
                    <div className="font-bold text-[#C9A96E] mt-0.5">{workshopInfo.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] shrink-0"><Clock className="w-5 h-5" /></div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-400 uppercase">Consultation Hours</div>
                    <div className="font-medium text-white mt-0.5">{workshopInfo.hours}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] shrink-0"><Mail className="w-5 h-5" /></div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-400 uppercase">Encrypted Portfolio Wire</div>
                    <div className="font-medium text-white mt-0.5">{workshopInfo.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}