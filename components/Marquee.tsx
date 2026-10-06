const items = [
  "Kids Wear",
  "Casual Wear",
  "Formal Wear",
  "Festive Collections",
  "Men's Wear",
  "Women's Wear",
  "Handblock Prints",
  "Silk Sarees",
  "Ethnic Wear",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-cream border-y border-stone-200 overflow-hidden py-4 select-none">
      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 text-sm font-sans font-medium text-obsidian tracking-wide">
            {item}
            <span className="text-terracotta text-lg leading-none">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
