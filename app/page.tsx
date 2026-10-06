'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
  Star,
  ShieldCheck,
  Sparkles,
  Tag,
  HeartHandshake,
  MessageCircle,
} from 'lucide-react';

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

import Marquee from '@/components/Marquee';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import WhatsAppEnquiryForm from '@/components/WhatsAppEnquiryForm';
import { featuredProducts, categories } from '@/data/products';
import {
  buildWhatsAppLink,
  STORE_ADDRESS,
  STORE_PHONE,
  STORE_HOURS,
  GOOGLE_MAPS_URL,
  GOOGLE_MAPS_EMBED,
  WHATSAPP_NUMBER,
} from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const whyFeatures = [
  {
    icon: ShieldCheck,
    title: 'Quality Products',
    desc: 'Every piece is hand-checked for fabric, stitch and finish before it reaches the shelf.',
  },
  {
    icon: Sparkles,
    title: 'Latest Fashion',
    desc: 'Fresh styles arrive through the season — from everyday casuals to festive wear.',
  },
  {
    icon: Tag,
    title: 'Affordable Pricing',
    desc: 'Honest, fair pricing across the store — premium looks without premium markups.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Service',
    desc: 'Personal attention in store and quick answers on WhatsApp, before and after you buy.',
  },
];

export default function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const storeRef = useRef<HTMLElement>(null);
  const socialRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. HERO ANIMATIONS (Entrance Timeline)
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .from('.hero-tag', { opacity: 0, y: -20, duration: 0.8 })
        .from('.hero-title', { opacity: 0, y: 40, duration: 1 }, '-=0.5')
        .from('.hero-desc', { opacity: 0, y: 25, duration: 0.8 }, '-=0.6')
        .from('.hero-btn', { opacity: 0, y: 20, scale: 0.95, stagger: 0.15, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.5')
        .from('.hero-arch', { opacity: 0, scale: 0.92, y: 35, duration: 1.2 }, '-=1')
        .from('.hero-badge', { opacity: 0, scale: 0, rotate: -90, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.6')
        .from('.hero-rack', { opacity: 0, x: -30, rotate: -5, duration: 0.9 }, '-=0.5');

      // Continuous floating animation for floating card
      gsap.to('.hero-rack', {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Continuous rotation for hero circular badge
      gsap.to('.hero-badge-svg', {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: 'linear',
      });

      // 2. CATEGORIES SECTION (ScrollTrigger)
      if (categoriesRef.current) {
        gsap.from('.categories-header', {
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 35,
          duration: 0.8,
          ease: 'power2.out',
        });

        gsap.from('.category-card-item', {
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          y: 50,
          scale: 0.96,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      // 3. CURATED PICKS / FEATURED (ScrollTrigger)
      if (featuredRef.current) {
        gsap.from('.featured-header', {
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 35,
          duration: 0.8,
          ease: 'power2.out',
        });

        gsap.from('.product-card-item', {
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          y: 45,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      // 4. WHY ATTEE FASHIONS (Dark Section ScrollTrigger)
      if (whyRef.current) {
        gsap.from('.why-left', {
          scrollTrigger: {
            trigger: whyRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          x: -40,
          duration: 1,
          ease: 'power3.out',
        });

        gsap.from('.why-card-item', {
          scrollTrigger: {
            trigger: whyRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          y: 35,
          scale: 0.95,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      // 5. VISIT THE STORE (ScrollTrigger)
      if (storeRef.current) {
        gsap.from('.store-left', {
          scrollTrigger: {
            trigger: storeRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          x: -30,
          duration: 0.9,
          ease: 'power2.out',
        });

        gsap.from('.store-right', {
          scrollTrigger: {
            trigger: storeRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          scale: 0.94,
          y: 40,
          duration: 1,
          ease: 'power3.out',
        });

        gsap.from('.store-badge', {
          scrollTrigger: {
            trigger: storeRef.current,
            start: 'top 70%',
          },
          opacity: 0,
          scale: 0,
          duration: 0.6,
          delay: 0.3,
          ease: 'back.out(2)',
        });
      }

      // 6. SOCIAL PROOF & ENQUIRY (ScrollTrigger)
      if (socialRef.current) {
        gsap.from('.social-rating-pill', {
          scrollTrigger: {
            trigger: socialRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 25,
          scale: 0.9,
          duration: 0.7,
          ease: 'back.out(1.5)',
        });

        gsap.from('.social-map-card', {
          scrollTrigger: {
            trigger: socialRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          x: -30,
          duration: 0.9,
          ease: 'power2.out',
        });

        gsap.from('.social-form-card', {
          scrollTrigger: {
            trigger: socialRef.current,
            start: 'top 75%',
          },
          opacity: 0,
          x: 30,
          duration: 0.9,
          ease: 'power2.out',
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section ref={heroRef} className="bg-cream min-h-[90vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div className="max-w-xl">
              <p className="hero-tag text-[10px] font-medium tracking-[0.25em] text-terracotta uppercase mb-6">
                ATTEE FASHIONS · CLOTHING STORE, CHENNAI
              </p>
              <h1 className="hero-title font-serif text-5xl md:text-6xl lg:text-7xl text-obsidian leading-tight mb-6">
                Fashion that{' '}
                <em className="italic text-stone-600">feels like you.</em>
              </h1>
              <p className="hero-desc text-stone-600 text-base md:text-lg leading-relaxed mb-8">
                A Chennai clothing store for men, women and kids — from everyday casuals to festive silks.
                Browse the collection, enquire instantly on WhatsApp, or visit us in store.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/collection"
                  className="hero-btn flex items-center justify-center gap-2 bg-obsidian text-cream px-7 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  EXPLORE COLLECTION
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="hero-btn flex items-center justify-center gap-2 border border-obsidian text-obsidian px-7 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-obsidian hover:text-cream hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Main Arch Image */}
              <div className="hero-arch relative w-72 h-96 md:w-80 md:h-[30rem] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
                  alt="Attee Fashions Featured Look"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Rotating Badge */}
              <div className="hero-badge absolute top-6 right-0 w-24 h-24">
                <svg viewBox="0 0 100 100" className="hero-badge-svg w-full h-full">
                  <defs>
                    <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="text-[8px] fill-obsidian font-sans tracking-widest uppercase font-medium" fontSize="8">
                    <textPath href="#circle">ATTEE FASHIONS · CHENNAI · </textPath>
                  </text>
                  <circle cx="50" cy="50" r="4" fill="#0F0F0F" />
                </svg>
              </div>

              {/* Floating Rack Card */}
              <div className="hero-rack absolute -bottom-4 -left-4 w-40 h-28 rounded-2xl overflow-hidden shadow-xl rotate-3 border-4 border-cream">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80"
                  alt="Curated Collection Racks"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─────────────────────────────────────────────── */}
      <Marquee />

      {/* ─── 01 CATEGORIES ───────────────────────────────────────── */}
      <section ref={categoriesRef} className="bg-cream py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="categories-header flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-medium tracking-widest text-terracotta uppercase mb-2">
                01 — SHOP BY CATEGORY
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-obsidian">
                Find your <em className="italic">fit.</em>
              </h2>
            </div>
            <Link
              href="/collection"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-obsidian transition-colors group"
            >
              VIEW ALL <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <div key={cat.key} className="category-card-item">
                <CategoryCard name={cat.name} image={cat.image} categoryKey={cat.key} />
              </div>
            ))}
          </div>
          <div className="mt-6 sm:hidden text-center">
            <Link
              href="/collection"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-obsidian transition-colors"
            >
              VIEW ALL <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 02 CURATED PICKS ────────────────────────────────────── */}
      <section ref={featuredRef} className="bg-surface py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="featured-header flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-medium tracking-widest text-terracotta uppercase mb-2">
                02 — CURATED PICKS
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-obsidian">
                Featured <em className="italic">products.</em>
              </h2>
            </div>
            <Link
              href="/collection"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-obsidian transition-colors group"
            >
              FULL COLLECTION <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card-item">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 03 WHY ATTEE (DARK) ─────────────────────────────────── */}
      <section ref={whyRef} className="bg-obsidian py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="why-left">
              <p className="text-xs font-medium tracking-widest text-terracotta uppercase mb-6">
                03 — WHY ATTEE FASHIONS
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-100 leading-tight mb-6">
                A store that treats{' '}
                <em className="italic text-stone-300">every customer</em> like family.
              </h2>
              <p className="text-stone-400 leading-relaxed mb-8">
                We keep it simple — good clothes, fair prices and honest advice. Walk in for a
                conversation, or start one on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="inline-flex items-center gap-2 bg-stone-800 text-stone-200 px-4 py-2.5 rounded-full text-sm">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  4.9 · 434 Google reviews
                </div>
                <a
                  href={buildWhatsAppLink('Hi Attee Fashions! I want to enquire about your collection.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-5 py-2.5 rounded-full text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle size={14} />
                  CHAT ON WHATSAPP
                </a>
              </div>
            </div>

            {/* Right 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyFeatures.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="why-card-item bg-stone-900 rounded-2xl p-6 border border-stone-800 hover:border-stone-700 transition-colors"
                >
                  <Icon size={22} className="text-terracotta mb-4" />
                  <h3 className="font-serif text-lg text-stone-100 mb-2">{title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04 VISIT THE STORE ──────────────────────────────────── */}
      <section ref={storeRef} className="bg-cream py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div className="store-left">
              <p className="text-xs font-medium tracking-widest text-terracotta uppercase mb-6">
                04 — VISIT THE STORE
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-obsidian leading-tight mb-5">
                Come, try it on <em className="italic">in person.</em>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                Nothing beats feeling the fabric yourself. Drop by, browse the racks and let our team
                help you find the right fit.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-surface rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-widest text-stone-400 uppercase mb-0.5">
                      STORE ADDRESS
                    </p>
                    <p className="text-sm text-stone-700 leading-relaxed">{STORE_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-surface rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-widest text-stone-400 uppercase mb-0.5">
                      PHONE &amp; WHATSAPP
                    </p>
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      className="text-sm text-stone-700 hover:text-obsidian transition-colors"
                    >
                      {STORE_PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-surface rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={14} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-widest text-stone-400 uppercase mb-0.5">
                      OPENING HOURS
                    </p>
                    <p className="text-sm text-stone-700">{STORE_HOURS}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-obsidian text-cream px-6 py-3 rounded-full text-sm font-medium tracking-wider hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  GET DIRECTIONS
                </a>
                <a
                  href={buildWhatsAppLink('Hi Attee Fashions! I want to visit the store. Can you guide me?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-obsidian text-obsidian px-6 py-3 rounded-full text-sm font-medium tracking-wider hover:bg-obsidian hover:text-cream hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle size={14} />
                  WHATSAPP US
                </a>
              </div>
            </div>

            {/* Right Store Image */}
            <div className="store-right relative">
              <div className="relative h-96 md:h-[28rem] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80"
                  alt="Attee Fashions Store Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="store-badge absolute -bottom-4 -right-4 bg-obsidian text-cream rounded-2xl p-4 shadow-xl border border-stone-800">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs font-medium text-green-400">Open Now</p>
                </div>
                <p className="text-sm text-stone-300">{STORE_HOURS}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF + ENQUIRY ──────────────────────────────── */}
      <section ref={socialRef} className="bg-surface py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Google Rating Banner */}
          <div className="text-center mb-14">
            <div className="social-rating-pill inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-stone-100 mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-obsidian">4.9 Stars</span>
              <span className="text-sm text-stone-400">· 434 reviews on Google</span>
            </div>
            <p className="text-xs text-stone-400 font-medium">Provided by Google Business Profile</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Map */}
            <div className="social-map-card rounded-3xl overflow-hidden shadow-sm h-80 lg:h-auto min-h-[22rem] bg-stone-100 relative">
              <iframe
                title="Attee Fashions Location"
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp Enquiry Form */}
            <div className="social-form-card">
              <WhatsAppEnquiryForm />
            </div>
          </div>

          {/* Social Bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-stone-500">
            <div className="flex items-center gap-2">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span>Rated 4.9 · 434 reviews on Google</span>
            </div>
            <span className="hidden sm:block text-stone-300">|</span>
            <a
              href="https://instagram.com/attee_fashions_gift"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-obsidian transition-colors"
            >
              <InstagramIcon size={14} />
              Follow @attee_fashions_gift
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
