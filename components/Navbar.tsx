'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink, STORE_PHONE, WHATSAPP_NUMBER } from '@/lib/constants';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'COLLECTION', href: '/collection' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 bg-obsidian text-cream flex items-center justify-center font-serif font-bold text-lg rounded-sm">
              A
            </div>
            <div className="leading-tight">
              <div className="font-serif font-semibold text-lg text-obsidian tracking-wide">Attee</div>
              <div className="text-[9px] font-sans font-medium tracking-[0.2em] text-stone-500 uppercase">
                FASHIONS · CHENNAI
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-sans font-medium tracking-widest transition-colors ${
                  pathname === link.href
                    ? 'text-obsidian border-b-2 border-obsidian pb-0.5'
                    : 'text-stone-500 hover:text-obsidian'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-obsidian transition-colors"
            >
              <Phone size={13} />
              <span>{STORE_PHONE}</span>
            </a>
            <a
              href={buildWhatsAppLink('Hi! I want to enquire about your collection.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-obsidian text-cream px-4 py-2 rounded-full text-xs font-medium tracking-wider hover:bg-stone-800 transition-colors"
            >
              <MessageCircle size={13} />
              WHATSAPP
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-obsidian"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-stone-200 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-sans font-medium tracking-widest py-2 ${
                pathname === link.href ? 'text-obsidian' : 'text-stone-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-stone-200 space-y-3">
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 text-sm text-stone-600"
            >
              <Phone size={15} />
              {STORE_PHONE}
            </a>
            <a
              href={buildWhatsAppLink('Hi! I want to enquire about your collection.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-obsidian text-cream px-4 py-3 rounded-full text-sm font-medium tracking-wider w-full"
            >
              <MessageCircle size={15} />
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
