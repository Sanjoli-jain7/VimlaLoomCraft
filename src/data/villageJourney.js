// The Village page — "Discover the world behind the craft."
// Every section below maps 1:1 to a block in Village.jsx.
// Swap `image` paths as real photography comes in; anything marked
// PLACEHOLDER still needs a real photo dropped into /public/images/.

export const villageHero = {
  eyebrow: 'The Village Experience',
  headline: 'The Village Experience',
  sub: "Where living traditions, skilled hands and Rajasthan's heritage come together.",
  image: '/images/weaving-loom.jpg',
  imageAlt: 'Sunlight falling across a traditional loom mid-weave, threads in red, gold and cream',
  primaryCta: { label: 'Explore the Craft', href: '#beyond-the-loom' },
  secondaryCta: { label: 'Plan Your Visit', href: '/visit' },
};

export const beyondLoom = {
  eyebrow: 'Introduction',
  headline: 'Beyond the Loom',
  body: 'Step beyond the finished rug and discover the hands, traditions and places that bring every creation to life. A visit here moves past the showroom — into workshops where crafts are still shaped by hand, among artisans who carry generations of knowledge, and through a village where heritage isn\u2019t on display, it\u2019s lived in.',
  images: [
    { src: '/images/finishing-rug-terrace.jpg', alt: 'Handwoven dhurries drying on a terrace overlooking the Aravalli hills' },
    { src: '/images/visitors-dyeing-vats.jpg', alt: 'Visitors watching a rug being finished on the workshop terrace' },
    { src: '/images/architecture-detail-3.jpg', alt: 'The haveli workshop\u2019s rooftop and blue-and-white fresco work against the Aravalli hills' },
  ],
};

export const pottery = {
  eyebrow: 'The First Craft Experience',
  headline: 'Shaped by Hand',
  body: 'Long before a pattern reaches the loom, clay is turning on a wheel nearby — the same rhythm of hand and material that runs through everything made here.',
  process: [
    { title: 'Shaping', note: 'Clay is centred and drawn up by hand, no two forms quite alike.' },
    { title: 'Working', note: 'Traditional tools smooth and thin the walls as the wheel turns.' },
    { title: 'Firing', note: 'Pieces are hardened the old way, in an open kiln.' },
    { title: 'Finishing', note: 'A final pass by hand before each piece is set aside to cool.' },
  ],
  images: [
    { src: '/images/pottery-shaping-wheel.jpg', alt: 'A potter centring clay on a spinning wheel' },
    { src: '/images/pottery-hands-closeup.jpg', alt: 'A close-up of hands shaping the rim of a clay pot' },
    { src: '/images/pottery-visitor-shaping.jpg', alt: 'A visitor working clay on the wheel alongside a potter' },
    { src: '/images/pottery-visitor-hands.jpg', alt: 'A visitor with clay-covered hands laughing beside the potter' },
  ],
  hoverNote: 'Every piece carries the small variations of a hand-turned wheel \u2014 that\u2019s the point, not a flaw.',
};

export const lakBangles = {
  eyebrow: 'A Craft of Colour',
  headline: 'The Art of Lak',
  body: 'A few lanes from the loom hall, another craft entirely: lak, heated and worked into bangles by hand, coloured and finished with a precision that takes years to earn.',
  process: [
    { title: 'Heating', note: 'Lak is warmed until pliable, worked quickly before it sets.' },
    { title: 'Shaping', note: 'Rolled and formed around the wrist by hand, entirely by feel.' },
    { title: 'Colouring', note: 'Pigment is worked in while the lak is still warm.' },
    { title: 'Finishing', note: 'Stones, mirrors or gold thread are set into the surface.' },
  ],
  images: [
    { src: '/images/lak-bangles-heating-mold.jpg', alt: 'A cloth-wrapped wooden mould heating over coals, used to shape the lak bangle' },
    { src: '/images/lak-bangles-colouring-coals.jpg', alt: 'A hand-painted lak bangle held over a bed of coals to keep the lak workable' },
    { src: '/images/lak-bangles-workbench.jpg', alt: 'Coloured lak rods and finished bangles laid out on the workbench beside the heating machine' },
    { src: '/images/lak-bangles-finished.jpg', alt: 'A pair of finished braided lak bangles worn on the wrist' },
  ],
  hoverNote: 'The colour is worked in while the lak is still warm \u2014 minutes, before it hardens for good.',
};

// Easy to edit — add or remove entries and the horizontal strip
// updates on its own.
export const moreCrafts = [
  { title: 'Weaving', note: 'Pit looms and pattern, thread by thread.', image: '/images/weaving-loom.jpg' },
  { title: 'Natural Dyeing', note: 'Indigo, madder and marigold, worked by hand.', image: '/images/dyeing-indigo.jpg' },
  { title: 'Spinning', note: 'Raw fibre turned to yarn on a charkha.', image: '/images/spinning-artisan.jpg' },
  { title: 'Hand-Finishing', note: 'Every edge, fringe and knot, checked by hand.', image: '/images/gallery/gallery-fabric-swatches.jpg' },
  { title: 'Basket Weaving', note: 'Jute and grass, coiled into everyday form.', image: '/images/gallery/gallery-basket.jpg' },
];

export const heritageFort = {
  eyebrow: 'Where Craft Meets Heritage',
  headline: 'Where Craft Meets Heritage',
  body: 'A short distance from the workshop stands Basko Fort \u2014 weathered, quiet, and part of the same landscape that has shaped this craft for generations. Visiting it isn\u2019t a detour from the experience; it\u2019s the other half of it. The stone that built Rajasthan and the hands that still weave its patterns come from the same soil.',
  // PLACEHOLDER — no Basko Fort photography yet; using an existing
  // haveli-architecture shot as a placeholder backdrop in the meantime.
  image: '/images/architecture-detail-1.jpg',
  imageAlt: 'PLACEHOLDER — Rajasthani haveli architecture detail, standing in for Basko Fort photography',
};

export const journeyContinues = {
  eyebrow: 'The Journey Continues',
  headline: 'The Journey Continues',
  body: 'From the village, the road leads back out \u2014 to Jaipur\u2019s palaces, its markets, and the rest of the Golden Triangle. What you\u2019ve seen here stays with you the rest of the way.',
  image: '/images/architecture-detail-2.jpg',
  imageAlt: 'A blue-and-white painted haveli facade against the Rajasthan hills',
};

export const goldenTriangle = {
  eyebrow: 'Within the Golden Triangle',
  headline: 'Within the Golden Triangle',
  body: 'Come to Jaipur for its monuments. Stay a little longer to discover the crafts, people and traditions behind Rajasthan.',
  // The farmhouse\u2013factory\u2013village\u2013fort\u2013rest illustration doesn\u2019t fit this
  // section \u2014 it needs a proper Delhi \u2192 Agra \u2192 Jaipur \u2192 Vimla route map.
  // Drop the new one in /public/images/ and point mapImage at it.
  mapImage: null,
  mapAlt: 'Illustrated map of the Golden Triangle route from Delhi through Agra and Jaipur to Vimla Loom Crafts',
};

// The three on-site activities that sit within the Golden Triangle leg \u2014
// styled to match the "Worth the Detour" landmark cards on the Home page.
export const villageActivities = [
  { name: 'Pottery', icon: 'pottery', note: 'Shape clay on a traditional wheel', meta: 'On-site' },
  { name: 'Lak Bangles', icon: 'bangles', note: 'Heat, colour and shape lak by hand', meta: 'On-site' },
  { name: 'Basko Fort', icon: 'fort', note: 'A short walk from the workshop', meta: '~5 km' },
];

export const villageFinalCta = {
  headline: 'Come for the craft. Discover the story.',
  body: 'Meet the artisans. Experience living traditions. Discover Rajasthan beyond the usual journey.',
  image: '/images/yarn-drying-courtyard.jpg',
  imageAlt: 'Skeins of yarn drying in the courtyard at golden hour',
  cta: { label: 'Plan Your Visit', href: '/visit' },
};
