// Edit navigation labels, links and top-level CTAs here.
// Nothing in this file requires touching any component code.

export const siteConfig = {
  brandName: 'Vimla Loom Crafts',
  brandLocation: 'Jaipur \u2022 Rajasthan',
  parentBrand: 'Vimla International',
  navLinks: [
    { label: 'Who We Are', href: '/experience' },
    { label: 'Craft', href: '/craft' },
    { label: 'Village', href: '/village' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Visit', href: '/visit' },
  ],
  // Vimla Retreats will eventually live on its own domain.
  // Swap this URL when it's ready — nothing else needs to change.
  retreatsUrl: 'https://retreats.vimla.example.com',
  bookCta: {
    label: 'Book Your Experience',
    href: '/book',
  },
  hero: {
    eyebrow: 'Jaipur, Rajasthan',
    headline: 'Crafted in Jaipur. Rooted in tradition.',
    subheading:
      'Timeless textiles and handmade creations, woven with heritage and crafted with care.',
    primaryCta: { label: 'Who We Are', href: '/experience' },
    secondaryCta: { label: 'Plan Your Visit', href: '/visit' },
    image: '/images/home-hero-haveli-sunset.jpg',
    imageAlt:
      'The white and blue painted Vimla haveli with Aravalli hills in the background under a sunset sky in Jaipur, Rajasthan',
  },
};

// ============ FOOTER CONTACT INFO ============
// Shown on every page. Fill in the real details below — anything
// still starting with "PASTE_" is treated as not-yet-set and won't
// render, rather than showing a fake address/number on a live site.
//   - phone: full number with country code, e.g. '+91 98765 43210'
//   - whatsapp: digits only, no spaces/+, e.g. '919876543210'
//     (this is what wa.me needs to build the link correctly)
// ================================================

export const contactInfo = {
  address: 'R5H2+J6P, near Jain Temple, Banskho, Chitori, Rajasthan 303305',
  phone: '+91 70733 64676',
  whatsapp: '916376910620',
  email: 'vimlaloomcraftexperience@gmail.com',
};
