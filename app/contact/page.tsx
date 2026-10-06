'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import WhatsAppEnquiryForm from '@/components/WhatsAppEnquiryForm';
import {
  buildWhatsAppLink,
  STORE_ADDRESS,
  STORE_PHONE,
  STORE_HOURS,
  GOOGLE_MAPS_URL,
  GOOGLE_MAPS_EMBED,
  WHATSAPP_NUMBER,
} from '@/lib/constants';

const infoCards = [
  {
    icon: MapPin,
    title: 'STORE ADDRESS',
    content: STORE_ADDRESS,
    action: { label: 'Open in Google Maps', href: GOOGLE_MAPS_URL },
  },
  {
    icon: Phone,
    title: 'PHONE',
    content: STORE_PHONE,
    action: { label: 'Call now', href: `tel:+${WHATSAPP_NUMBER}` },
  },
  {
    icon: MessageCircle,
    title: 'WHATSAPP',
    content: STORE_PHONE,
    action: {
      label: 'Chat on WhatsApp',
      href: buildWhatsAppLink('Hi Attee Fashions! I want to enquire.'),
    },
  },
  {
    icon: Clock,
    title: 'OPENING HOURS',
    content: STORE_HOURS,
    sub: 'Monday – Sunday',
    action: null,
  },
];

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.contact-card-item', {
        opacity: 0,
        y: 40,
        scale: 0.96,
        stagger: 0.1,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out',
      });

      gsap.from('.contact-bottom-item', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-cream pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="contact-header max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-widest text-terracotta uppercase mb-5">CONTACT US</p>
          <h1 className="font-serif text-5xl md:text-6xl text-obsidian leading-tight mb-4 max-w-xl">
            Visit, call or <em className="italic">WhatsApp us.</em>
          </h1>
          <p className="text-stone-500 text-base max-w-lg leading-relaxed mb-8">
            The fastest way to reach the store is WhatsApp — we usually reply within shopping hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-obsidian text-cream px-7 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone size={14} />
              CALL {STORE_PHONE}
            </a>
            <a
              href={buildWhatsAppLink('Hi Attee Fashions! I want to enquire.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle size={14} />
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infoCards.map(({ icon: Icon, title, content, sub, action }) => (
              <div
                key={title}
                className="contact-card-item bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center mb-4">
                  <Icon size={18} className="text-terracotta" />
                </div>
                <p className="text-[10px] font-medium tracking-widest text-stone-400 uppercase mb-2">
                  {title}
                </p>
                <p className="text-sm text-obsidian font-medium leading-relaxed">{content}</p>
                {sub && <p className="text-xs text-stone-400 mt-1">{sub}</p>}
                {action && (
                  <a
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-terracotta hover:text-obsidian transition-colors"
                  >
                    {action.label}
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Map */}
            <div className="contact-bottom-item rounded-3xl overflow-hidden shadow-sm h-96 lg:h-auto min-h-[24rem] bg-stone-100 relative">
              <iframe
                title="Attee Fashions Map"
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '384px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Form */}
            <div className="contact-bottom-item">
              <WhatsAppEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
