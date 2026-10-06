import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink, buildProductWhatsAppMessage } from '@/lib/constants';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappLink = buildWhatsAppLink(
    buildProductWhatsAppMessage(product.name, product.price)
  );

  const categoryLabel = product.category.replace('Mens', "Men's").replace('Womens', "Women's");

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-cream text-[9px] font-medium px-2.5 py-1 rounded-full tracking-widest uppercase">
            {product.badge}
          </span>
        )}
        {/* WhatsApp Quick Action */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 bg-whatsapp text-white p-2.5 rounded-full shadow-lg hover:bg-whatsapp-hover transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          aria-label={`Enquire about ${product.name} on WhatsApp`}
        >
          <MessageCircle size={16} />
        </a>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-[9px] font-medium tracking-widest text-terracotta uppercase mb-1">
          {categoryLabel}
        </p>
        <h3 className="font-sans font-medium text-sm text-obsidian leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-sans font-semibold text-obsidian text-base">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="font-sans text-stone-400 text-sm line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-medium tracking-wider text-stone-500 hover:text-whatsapp transition-colors flex items-center gap-1"
          >
            <MessageCircle size={11} />
            ENQUIRE
          </a>
        </div>
      </div>
    </div>
  );
}
