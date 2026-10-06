'use client';

import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { buildWhatsAppLink, WHATSAPP_NUMBER } from '@/lib/constants';

export default function WhatsAppEnquiryForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hi Attee Fashions!`,
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : null,
      `Message: ${message}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(buildWhatsAppLink(text), '_blank');
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 bg-whatsapp rounded-full flex items-center justify-center">
          <MessageCircle size={18} className="text-white" />
        </div>
        <h3 className="font-serif text-xl text-obsidian">Send a quick enquiry</h3>
      </div>
      <p className="text-sm text-stone-500 mb-6 leading-relaxed">
        Fill this in and it opens WhatsApp with your message ready to send — no accounts, no forms to wait on.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[10px] font-medium tracking-widest text-stone-500 uppercase mb-1.5">
            Your Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-obsidian placeholder-stone-400 focus:outline-none focus:border-obsidian transition-colors bg-cream"
          />
        </div>

        <div>
          <label className="block text-[10px] font-medium tracking-widest text-stone-500 uppercase mb-1.5">
            Your Phone <span className="text-stone-400">(Optional)</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-obsidian placeholder-stone-400 focus:outline-none focus:border-obsidian transition-colors bg-cream"
          />
        </div>

        <div>
          <label className="block text-[10px] font-medium tracking-widest text-stone-500 uppercase mb-1.5">
            Message <span className="text-terracotta">*</span>
          </label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What are you looking for? Tell us your occasion, size, style preference..."
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-obsidian placeholder-stone-400 focus:outline-none focus:border-obsidian transition-colors bg-cream resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white py-3.5 rounded-full text-sm font-medium tracking-wider transition-colors"
        >
          <Send size={15} />
          SEND VIA WHATSAPP
        </button>
      </form>
    </div>
  );
}
