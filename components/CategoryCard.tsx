import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  image: string;
  categoryKey: string;
}

export default function CategoryCard({ name, image, categoryKey }: CategoryCardProps) {
  return (
    <Link
      href={`/collection?category=${encodeURIComponent(categoryKey)}`}
      className="group relative rounded-3xl overflow-hidden block aspect-[3/5]"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-serif text-xl text-white leading-tight">{name}</h3>
        <div className="flex items-center gap-1 mt-2 text-stone-300 text-xs font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          VIEW ALL
          <ArrowUpRight size={13} />
        </div>
      </div>
    </Link>
  );
}
