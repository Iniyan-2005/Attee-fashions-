export const WHATSAPP_NUMBER = '918148380989';
export const STORE_PHONE = '+91 81483 80989';
export const STORE_ADDRESS =
  '12/5b, 12/5b, Mugalivakkam Main Rd, Madanandapuram, Madhanandapuram, Chennai, Tamil Nadu 600125';
export const STORE_HOURS = 'Open · Closes 10:00 PM';
export const INSTAGRAM = '@attee_fashions_gift';
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Attee+fashions/@13.0210447,80.158762,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5261e70674ccb1:0xf4da274d5c0a08bf!8m2!3d13.0210395!4d80.1613316!16s%2Fg%2F11sj55nlr6';
export const GOOGLE_MAPS_EMBED =
  'https://maps.google.com/maps?q=Attee+fashions,+12/5b,+12/5b,+Mugalivakkam+Main+Rd,+Madanandapuram,+Madhanandapuram,+Chennai,+Tamil+Nadu+600125&t=&z=16&ie=UTF8&iwloc=&output=embed';

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildProductWhatsAppMessage(name: string, price: number): string {
  return `Hi Attee Fashions! I saw "${name}" (₹${price.toLocaleString('en-IN')}) on your website. Is this currently available in store?`;
}
