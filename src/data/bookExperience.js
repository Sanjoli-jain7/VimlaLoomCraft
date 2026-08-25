// The dedicated "Book Your Experience" enquiry page at /book.
// This is a visit enquiry form, not a payment or instant-booking flow.

// ============ FORMSUBMIT SETUP ============
// Connected to the Vimla Loom Crafts enquiry inbox. FormSubmit sends a
// one-time "confirm this form" email to that address on its first-ever
// submission — until that link is clicked, submissions won't arrive.
// ============================================================

export const FORMSUBMIT_EMAIL = 'vimlaloomcraftexperience@gmail.com';
export const FORMSUBMIT_AJAX_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

export const bookHero = {
  eyebrow: 'Book Your Experience',
  headline: 'Book Your Experience',
  sub: 'Step into the world of Vimla Loom Crafts.',
  body: 'Meet our artisans, discover traditional crafts and experience the stories behind the hands that create them.',
  image: '/images/haveli-doorway-ornate.jpg',
  imageAlt: 'An ornately painted blue-and-white Rajasthani haveli doorway, richly carved and gilded',
  panelEyebrow: 'Your Visit, Your Way',
  panelBody: 'Choose the experience that interests you and let us help you plan your visit.',
};

export const visitTimeOptions = ['Morning', 'Afternoon', 'Evening'];

export const visitorTypeOptions = ['Indian', 'International'];

// Same two packages, same pricing, for both visitor types — see
// src/data/experiences.js for the full breakdown of each.
export const packageOptions = [
  { value: 'artisan-introduction', label: 'Artisan Introduction (2\u20133 Hrs) \u2014 \u20b91,500 per person' },
  { value: 'full-village-immersion', label: 'Full Village Immersion (4\u20135 Hrs) \u2014 \u20b93,000 per person' },
];

export const visitTypeOptions = [
  'Individual / Couple',
  'Family',
  'School / College Group',
  'Corporate Group',
  'Travel Group',
  'Other',
];

export const referralOptions = ['Google', 'Instagram', 'Friend / Family', 'Travel Agency', 'Hotel', 'Other'];

export const confirmationState = {
  headline: 'Your Journey Begins Here',
  body: 'Thank you for reaching out to Vimla Loom Crafts. We\u2019ve received your request and our team will contact you shortly to help plan your experience.',
  steps: ['Request received', 'Our team will contact you', 'Visit details will be confirmed'],
  cta: { label: 'Return to Experience', href: '/experience' },
};
