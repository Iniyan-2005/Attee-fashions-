import Link from 'next/link';
import { MapPin, Clock, Phone, MessageCircle, ArrowRight } from 'lucide-react';

function InstagramIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
import {
  buildWhatsAppLink,
  STORE_ADDRESS,
  STORE_PHONE,
  STORE_HOURS,
  INSTAGRAM,
  WHATSAPP_NUMBER,
} from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-obsidian text-stone-300">
      {/* Pre-Footer CTA */}
      <div className="bg-charcoal border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-xs font-medium tracking-widest text-terracotta mb-3 uppercase">
                Come Visit
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-100 leading-tight">
                Ready to visit?{' '}
                <em className="italic text-stone-300">We&apos;d love to show you around.</em>
              </h2>
              <p className="mt-3 text-stone-400 text-sm leading-relaxed max-w-md">
                Find the store, the hours and every way to reach us.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-stone-100 text-obsidian px-6 py-3 rounded-full text-sm font-medium tracking-wider hover:bg-white transition-colors"
              >
                CONTACT US
              </Link>
              <a
                href={buildWhatsAppLink('Hi Attee Fashions! I want to visit the store. Can you share directions and timings?')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-stone-500 text-stone-200 px-6 py-3 rounded-full text-sm font-medium tracking-wider hover:border-stone-300 hover:text-white transition-colors"
              >
                <MessageCircle size={15} />
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark + Main Footer */}
      <div className="relative overflow-hidden">
        {/* Giant Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-serif text-[8vw] font-bold whitespace-nowrap stroke-text text-stone-700 opacity-20 tracking-tight">
            Attee Fashions
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Explore */}
            <div>
              <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-5">Explore</p>
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Collection', href: '/collection' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit */}
            <div>
              <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-5">Visit The Store</p>
              <div className="flex gap-3">
                <MapPin size={15} className="text-terracotta flex-shrink-0 mt-0.5" />
                <p className="text-sm text-stone-300 leading-relaxed">{STORE_ADDRESS}</p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-5">Opening Hours</p>
              <div className="flex gap-3">
                <Clock size={15} className="text-terracotta flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-stone-300">{STORE_HOURS}</p>
                  <p className="text-xs text-stone-500 mt-1">Monday – Sunday</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-5">Contact</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="flex items-center gap-3 text-sm text-stone-300 hover:text-white transition-colors"
                  >
                    <Phone size={13} className="text-terracotta" />
                    {STORE_PHONE}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://instagram.com/attee_fashions_gift`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-stone-300 hover:text-white transition-colors"
                  >
                    <InstagramIcon size={13} />
                    {INSTAGRAM}
                  </a>
                </li>
                <li>
                  <a
                    href={buildWhatsAppLink('Hi Attee Fashions! I have an enquiry.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-stone-300 hover:text-white transition-colors"
                  >
                    <MessageCircle size={13} className="text-whatsapp" />
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-stone-200 text-obsidian flex items-center justify-center font-serif font-bold text-sm rounded-sm">
                A
              </div>
              <span className="text-xs font-medium text-stone-400 tracking-widest">ATTEE FASHIONS · CHENNAI</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-stone-500">
              <p>
                © {new Date().getFullYear()} Attee Fashions. All rights reserved.
              </p>
              <span className="hidden sm:inline text-stone-700">•</span>
              <p>
                Developed by{' '}
                <a
                  href="https://www.iniyan-s.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white font-medium underline underline-offset-4 decoration-stone-600 hover:decoration-white transition-colors"
                >
                  Freelancer - Iniyan S
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
