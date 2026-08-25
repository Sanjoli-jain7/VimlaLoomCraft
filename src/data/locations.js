// The Golden Triangle route and nearby landmarks.
// Distances are approximate and safe to update as needed.

export const routeStops = ['Delhi', 'Agra', 'Vimla Loom Crafts', 'Jaipur'];

// Drop the custom map graphic in /public/images/ and point this at it
// (e.g. '/images/vimla-route-map.jpg'). Leave as null to show the
// placeholder frame instead.
export const mapImage = '/images/journey-to-loom-map.jpg';
export const mapImageAlt = 'Illustrated map of the journey to Vimla Loom Crafts, showing the starting point, factory visit, village pour, fort and rest stops through Rajasthan';

export const nearbyLandmarks = [
  { name: 'Hawa Mahal', distance: '~38 km', icon: 'hawamahal', note: 'The Palace of Winds' },
  { name: 'Chand Baori, Abhaneri', distance: '~50 km', icon: 'baori', note: 'A 13-storey stepwell' },
  { name: 'Bhangarh', distance: '~45 km', icon: 'fort', note: "Rajasthan's ruined fort" },
  { name: 'Delhi–Mumbai Expressway, Jaipur exit', distance: '~15 km', icon: 'road', note: 'Straight in from the highway' },
];
