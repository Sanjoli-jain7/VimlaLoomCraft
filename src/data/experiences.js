// Experience packages, grouped by visitor type. Prices, titles,
// descriptions and inclusions all live here so the owner can edit or
// correct them without touching any component or animation code.
//
// PRICING: confirmed by Vimla — ₹1,500 per person for Artisan
// Introduction, ₹3,000 per person for Full Village Immersion.
// Pickup (from the fixed pickup point) and return, plus the vintage
// car / Gypsy journey, are included in every package below.

export const experiences = {
  indian: {
    artisanIntroduction: {
      id: 'indian-artisan-introduction',
      title: 'Artisan Introduction',
      order: '01',
      duration: '2\u20133 Hours',
      price: '\u20b91,500 per person',
      priceConfirmed: true,
      description:
        'A first, close look at the craft \u2014 garlanded and welcomed with folk music, then through the dye pots and the loom itself, with tea to close the visit. Fixed-point pickup and return included.',
      guide: null,
      heroImage:
        '/images/visitors-dyeing-hall-1.jpg',
      heroImageAlt: 'Guests arriving by open Gypsy at the Vimla workshop gate',
      inclusions: [
        {
          label: 'Traditional Welcome',
          image: '/images/visit-family-welcome.jpg',
        },
        {
          label: 'Vintage Car / Gypsy Journey',
          image: '/images/visit-vintage-ambassador.jpg',
        },
        {
          label: 'Village Journey',
          image: '/images/journey-walk-village.jpg',
        },
        {
          label: 'Rug-Making Workshop',
          image: '/images/visitors-loom-hall.jpg',
        },
        {
          label: 'Hands-on Craft',
          image: '/images/visit-artisans-craft.jpg',
        },
        {
          label: 'Showroom Visit',
          image: '/images/visit-showroom-wall.jpg',
        },
        {
          label: 'Tea & Light Snacks',
          image: '/images/finishing-rug-terrace.jpg',
        },
      ],
    },

    fullVillageImmersion: {
      id: 'indian-full-village-immersion',
      title: 'Full Village Immersion',
      order: '02',
      duration: '4\u20135 Hours',
      price: '\u20b93,000 per person',
      priceConfirmed: true,
      mostPopular: true,
      description:
        'The complete day \u2014 a traditional Rajasthani welcome, the workshop, hands-on weaving, a shared meal, and time to rest before you head home. Fixed-point pickup and return included.',
      guide: null,
      heroImage:
        '/images/visitors-dyeing-hall-3.jpg',
      heroImageAlt: 'A shared Rajasthani thali laid out for lunch',
      inclusions: [
        {
          label: 'Traditional Welcome',
          image: '/images/visit-family-welcome.jpg',
        },
        {
          label: 'Vintage Car / Gypsy Journey',
          image: '/images/visit-vintage-ambassador.jpg',
        },
        {
          label: 'Village Experience',
          image: '/images/journey-walk-village.jpg',
        },
        {
          label: 'Rug Manufacturing Experience',
          image: '/images/visitors-loom-hall.jpg',
        },
        {
          label: 'Hands-on Weaving',
          image: '/images/weaving-loom.jpg',
        },
        {
          label: 'Village Walk',
          image: '/images/journey-walk-village.jpg',
        },
        {
          label: 'Local Artisan Interactions',
          image: '/images/spinning-artisan.jpg',
        },
        {
          label: 'Traditional Lunch',
          image: '/images/journey-eat-thali.jpg',
        },
        {
          label: 'Tea & Snacks',
          image: '/images/finishing-rug-terrace.jpg',
        },
        {
          label: 'Showroom & Souvenir',
          image: '/images/gallery/gallery-storage-room.jpg',
        },
      ],
    },
  },

  international: {
    artisanIntroduction: {
      id: 'international-artisan-introduction',
      title: 'Artisan Introduction',
      order: '01',
      duration: '2\u20133 Hours',
      price: '\u20b91,500 per person',
      priceConfirmed: true,
      description:
        'A guided first look at the craft, from raw wool to finished rug, with a traditional Rajasthani welcome and an English-speaking guide throughout. Fixed-point pickup and return included.',
      guide: 'An English-speaking guide stays with you throughout the journey.',
      heroImage:
        '/images/visitors-loom-hall.jpg',
      heroImageAlt: 'A guide showing a visitor the dyeing process',
      inclusions: [
        {
          label: 'Traditional Welcome',
          image: '/images/visit-family-welcome.jpg',
        },
        {
          label: 'Vintage Car / Gypsy Journey',
          image: '/images/visit-vintage-ambassador.jpg',
        },
        {
          label: 'Village Journey',
          image: '/images/journey-walk-village.jpg',
        },
        {
          label: 'Guided Craft Process',
          note: 'Spinning \u00b7 Dyeing \u00b7 Washing \u00b7 Weaving \u00b7 Tufting \u00b7 Block Printing \u00b7 Finishing',
          image: '/images/dyeing-indigo.jpg',
        },
        {
          label: 'Hands-on Craft',
          image: '/images/visit-artisans-craft.jpg',
        },
        {
          label: 'Showroom Visit',
          image: '/images/visit-showroom-wall.jpg',
        },
        {
          label: 'Tea & Snacks',
          image: '/images/finishing-rug-terrace.jpg',
        },
      ],
    },

    fullVillageImmersion: {
      id: 'international-full-village-immersion',
      title: 'Full Village Immersion',
      order: '02',
      duration: '4\u20135 Hours',
      price: '\u20b93,000 per person',
      priceConfirmed: true,
      mostPopular: true,
      description:
        'Everything in Artisan Introduction, extended into a full day \u2014 hands-on weaving, a traditional lunch, and time to rest, guided throughout. Fixed-point pickup and return included.',
      guide: 'An English-speaking guide stays with you throughout the journey.',
      heroImage:
        '/images/visitors-spinning-wheel.jpg',
      heroImageAlt: 'Visitors walking through the village with their guide',
      inclusions: [
        {
          label: 'Traditional Welcome',
          image: '/images/visit-family-welcome.jpg',
        },
        {
          label: 'Vintage Car / Gypsy Journey',
          image: '/images/visit-vintage-ambassador.jpg',
        },
        {
          label: 'Guided Craft Process',
          note: 'Spinning \u00b7 Dyeing \u00b7 Washing \u00b7 Weaving \u00b7 Tufting \u00b7 Block Printing \u00b7 Finishing',
          image: '/images/dyeing-indigo.jpg',
        },
        {
          label: 'Extended Hands-on Craft',
          image: '/images/visitors-spinning-wheel.jpg',
        },
        {
          label: 'Village Walk',
          image: '/images/journey-walk-village.jpg',
        },
        {
          label: 'Pottery & Lakh Bangles',
          image: '/images/spinning-artisan.jpg',
        },
        {
          label: 'Traditional Vegetarian Lunch',
          image: '/images/journey-eat-thali.jpg',
        },
        {
          label: 'Tea & Snacks',
          image: '/images/finishing-rug-terrace.jpg',
        },
        {
          label: 'Showroom & Souvenir',
          image: '/images/gallery/gallery-storage-room.jpg',
        },
      ],
    },
  },
};
