'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Sparkles, Tag, HeartHandshake } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stockCategories = [
  "Men's Wear",
  "Women's Wear",
  "Kids Wear",
  "Casual Wear",
  "Formal Wear",
  "Festive Collections",
  "Silk Sarees",
  "Ethnic Wear",
];

const promise = [
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

const experience = [
  {
    num: '01',
    title: 'Hand-picked collections',
    desc: "Every style on the floor is chosen in person — fabrics felt, stitching checked, trends shortlisted for Chennai's weather and tastes.",
  },
  {
    num: '02',
    title: 'Personal styling help',
    desc: "Tell us the occasion and we'll pull options for you — from a quick casual pick to a full festive look for the whole family.",
  },
  {
    num: '03',
    title: 'Easy WhatsApp enquiries',
    desc: "Spotted something on this site? Send us a WhatsApp message with the product name and we'll confirm availability and price right away.",
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const stockRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.about-header', {
        opacity: 0,
        y: 35,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Story Section
      if (storyRef.current) {
        gsap.from('.about-story-text', {
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          x: -30,
          duration: 0.8,
          ease: 'power2.out',
        });

        gsap.from('.about-photo-item', {
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 40,
          scale: 0.96,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      // What We Stock + Promise
      if (stockRef.current) {
        gsap.from('.stock-pill', {
          scrollTrigger: {
            trigger: stockRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          scale: 0.9,
          stagger: 0.05,
          duration: 0.5,
          ease: 'back.out(1.5)',
        });

        gsap.from('.promise-item', {
          scrollTrigger: {
            trigger: stockRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 25,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
        });
      }

      // Shopping Experience
      if (expRef.current) {
        gsap.from('.exp-item', {
          scrollTrigger: {
            trigger: expRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-cream pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="about-header max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-widest text-terracotta uppercase mb-5">ABOUT US</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-obsidian leading-tight max-w-3xl">
            A Chennai clothing store built on{' '}
            <em className="italic text-stone-600">fabric you can trust.</em>
          </h1>
        </div>
      </section>

      {/* Story + Photos */}
      <section ref={storyRef} className="bg-surface py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="about-story-text">
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                Attee Fashions is a clothing destination in Chennai, stocking men&apos;s wear, women&apos;s
                wear and kids wear across casual and formal styles. From everyday essentials to festive
                silks, every piece on our racks is hand-picked for quality, comfort and current fashion —
                so you can dress well without overthinking it.
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                We believe shopping should feel easy and personal. That&apos;s why we keep our aisles
                approachable, our prices honest, and our team ready to help — whether you walk in or reach
                us on WhatsApp.
              </p>
            </div>
            {/* Photo Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="about-photo-item rounded-2xl overflow-hidden h-56 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80"
                  alt="Store Interior"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="about-photo-item rounded-2xl overflow-hidden h-56 mt-6 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
                  alt="Clothing Rack"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="about-photo-item rounded-2xl overflow-hidden h-44 col-span-2 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
                  alt="Festive Collection"
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stock + Our Promise */}
      <section ref={stockRef} className="bg-cream py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14">
            {/* What We Stock */}
            <div>
              <p className="text-xs font-medium tracking-widest text-terracotta uppercase mb-5">
                WHAT WE STOCK
              </p>
              <div className="flex flex-wrap gap-2.5">
                {stockCategories.map((cat) => (
                  <span
                    key={cat}
                    className="stock-pill px-4 py-2 bg-surface border border-stone-200 rounded-full text-sm font-medium text-stone-700 hover:border-stone-400 transition-colors"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Our Promise */}
            <div>
              <p className="text-xs font-medium tracking-widest text-terracotta uppercase mb-2">
                OUR PROMISE
              </p>
              <p className="text-sm text-stone-400 mb-6">What you can always expect</p>
              <ul className="space-y-4">
                {promise.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="promise-item flex gap-4">
                    <Icon size={18} className="text-terracotta flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-obsidian text-sm mb-0.5">{title}</h4>
                      <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Experience */}
      <section ref={expRef} className="bg-obsidian py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-medium tracking-widest text-terracotta uppercase mb-5">
              THE SHOPPING EXPERIENCE
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 leading-tight">
              Simple, personal and honest —{' '}
              <em className="italic text-stone-300">the way shopping should be.</em>
            </h2>
          </div>

          <div className="divide-y divide-stone-800">
            {experience.map(({ num, title, desc }) => (
              <div
                key={num}
                className="exp-item py-8 grid md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 items-start hover:bg-stone-900/40 p-4 rounded-xl transition-colors"
              >
                <span className="font-serif text-3xl text-terracotta font-light">{num}</span>
                <h3 className="font-serif text-xl text-stone-100">{title}</h3>
                <p className="text-stone-400 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
