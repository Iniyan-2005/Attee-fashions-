'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import gsap from 'gsap';
import { Filter } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import type { Product } from '@/data/products';

type CategoryKey = Product['category'] | 'All';

const filterCategories: { label: string; key: CategoryKey }[] = [
  { label: 'All', key: 'All' },
  { label: "Men's Wear", key: 'Mens Wear' },
  { label: "Women's Wear", key: 'Womens Wear' },
  { label: "Kids Wear", key: 'Kids Wear' },
  { label: "Casual Wear", key: 'Casual Wear' },
  { label: "Formal Wear", key: 'Formal Wear' },
];

export default function CollectionContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [active, setActive] = useState<CategoryKey>('All');
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categoryParam) {
      const matched = filterCategories.find((c) => c.key === categoryParam);
      if (matched) setActive(matched.key);
    }
  }, [categoryParam]);

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  const countFor = (key: CategoryKey) =>
    key === 'All' ? products.length : products.filter((p) => p.category === key).length;

  // Header entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.collection-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from('.filter-bar', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate grid cards whenever filtered category changes
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.collection-card-item');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power2.out',
        }
      );
    }
  }, [active]);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-cream pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="collection-header max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-widest text-terracotta uppercase mb-4">
            THE CATALOGUE
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-obsidian mb-4">
            Everything <em className="italic">in store.</em>
          </h1>
          <p className="text-stone-500 text-base max-w-lg leading-relaxed">
            13 pieces across every category — sample catalogue until the store&apos;s full range is listed.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-surface pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="filter-bar flex items-center gap-2 flex-wrap py-8 border-b border-stone-200 mb-10">
            <Filter size={14} className="text-stone-400 mr-1" />
            {filterCategories.map(({ label, key }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide border transition-all ${
                  active === key
                    ? 'bg-obsidian text-cream border-obsidian scale-105'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:text-obsidian hover:scale-102'
                }`}
              >
                {label} ({countFor(key)})
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-stone-400">
              No products in this category yet.
            </div>
          ) : (
            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((product) => (
                <div key={product.id} className="collection-card-item">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
