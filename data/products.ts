export interface Product {
  id: number;
  name: string;
  category: 'Mens Wear' | 'Womens Wear' | 'Kids Wear' | 'Casual Wear' | 'Formal Wear';
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Kanchipuram-Inspired Pure Silk Saree',
    category: 'Womens Wear',
    price: 18499,
    originalPrice: 22000,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    id: 2,
    name: 'Chanderi Cotton-Silk Saree',
    category: 'Womens Wear',
    price: 3899,
    originalPrice: 4800,
    badge: 'HANDBLOCK PRINT',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    id: 3,
    name: 'Festive Silk-Blend Kurta',
    category: 'Mens Wear',
    price: 5299,
    originalPrice: 6500,
    badge: 'NEW SEASON',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    id: 4,
    name: 'Kids Festive Tee Pack',
    category: 'Kids Wear',
    price: 999,
    originalPrice: 1300,
    badge: 'KIDS FAVOURITE',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    id: 5,
    name: 'Breathable Linen Casual Shirt',
    category: 'Casual Wear',
    price: 1999,
    originalPrice: 2600,
    badge: 'SUMMER ESSENTIAL',
    image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    id: 6,
    name: 'Tailored Linen Blazer',
    category: 'Formal Wear',
    price: 8999,
    originalPrice: 11500,
    badge: 'SIGNATURE',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&q=80',
    featured: true,
  },
  {
    id: 7,
    name: 'Classic Denim Shirt',
    category: 'Mens Wear',
    price: 1899,
    originalPrice: 2400,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name: 'Statement Printed Shirt',
    category: 'Mens Wear',
    price: 1499,
    badge: 'PARTY PICK',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    name: 'Banarasi Georgette Saree',
    category: 'Womens Wear',
    price: 12499,
    originalPrice: 15000,
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10,
    name: 'Handloom Cotton Kurti Set',
    category: 'Womens Wear',
    price: 2499,
    originalPrice: 3200,
    badge: 'TRENDING',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 11,
    name: 'Kids Traditional Pattu Pavadai',
    category: 'Kids Wear',
    price: 2199,
    originalPrice: 2800,
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 12,
    name: 'Textured Cuban Collar Casual Shirt',
    category: 'Casual Wear',
    price: 1599,
    originalPrice: 2100,
    image: 'https://images.unsplash.com/photo-1602810316693-3667c854239a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 13,
    name: 'Italian Cut Formal Trousers',
    category: 'Formal Wear',
    price: 2799,
    originalPrice: 3500,
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=600&q=80',
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const categories = [
  {
    name: "Men's Wear",
    key: 'Mens Wear',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: "Women's Wear",
    key: 'Womens Wear',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: "Kids Wear",
    key: 'Kids Wear',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: "Casual Wear",
    key: 'Casual Wear',
    image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: "Formal Wear",
    key: 'Formal Wear',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&q=80',
  },
];
