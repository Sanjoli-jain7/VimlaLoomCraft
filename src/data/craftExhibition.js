// Content for the Craft page's exhibition-style redesign.
// Every image path below either points to a real Vimla photograph
// already in the project, or is explicitly marked PLACEHOLDER where
// no real photo exists yet — replace those paths once photography
// is available; nothing else needs to change.

export const heroContent = {
  eyebrow: 'Crafted in Rajasthan',
  title: 'The Art of the Weave',
  line: 'Where thread becomes texture, and tradition becomes design.',
  cue: 'Begin the Journey',
  image: '/images/craft-hero-illustration.jpg',
  imageAlt: 'A hand-painted watercolor illustration of hands threading warp on a traditional loom, in shades of purple and grey',
};

// "The Thread" — six stages of the making, in order.
export const threadStages = [
  {
    order: '01',
    name: 'Fibre',
    note: 'Every piece begins as raw wool, cotton and jute — sorted by hand, nothing synthetic, nothing rushed.',
    detail: 'Wool \u00b7 Cotton \u00b7 Jute \u00b7 Hemp',
    image: '/images/craft-material-yarn.jpg',
    imageAlt: 'Undyed wool and jute yarn drying in hanks in the courtyard',
  },
  {
    order: '02',
    name: 'Colour',
    note: 'Hanks are worked by hand through copper vats of dye \u2014 indigo chief among them \u2014 then hung to dry in the open air.',
    detail: 'Natural & fixed dyes',
    image: '/images/craft-colour-dye.jpg',
    imageAlt: 'Magenta-dyed yarn lifted straight from the dye vat',
  },
  {
    order: '03',
    name: 'Yarn',
    note: 'On a traditional charkha, dyed fibre is drawn out and twisted into even, workable thread \u2014 a skill passed hand to hand for generations.',
    detail: 'Hand-spun on the charkha',
    image: '/images/craft-yarn-spinning.jpg',
    imageAlt: 'A row of artisans spinning yarn on wooden charkhas',
  },
  {
    order: '04',
    name: 'Weave',
    note: 'Weft passes over warp, row by patient row, on looms that have stood in this workshop for decades.',
    detail: 'Pit loom · flatweave',
    image: '/images/craft-loom-weaving.jpg',
    imageAlt: 'An artisan weaving a diamond patterned dhurrie on a traditional pit loom with warp threads and design chart',
  },
  {
    order: '05',
    name: 'Finish',
    note: 'Trimmed, washed and laid out to dry on the terrace, each piece is checked by hand before it is ever shown.',
    detail: 'Trim · wash · stretch',
    image: '/images/craft-finish-beating.jpg',
    imageAlt: 'A finished dhurrie being beaten by hand to set the weave',
  },
  {
    order: '06',
    name: 'Art',
    note: 'Density, edge and colour are checked against the original design — the last, quiet step before a piece becomes part of a home.',
    detail: 'Final inspection',
    image: '/images/craft-quality-rug-styled.jpg',
    imageAlt: 'A finished handwoven rug styled in a living room',
  },
];

// "Before the Loom" — raw materials, scattered like swatches.
export const rawMaterials = [
  {
    name: 'Wool',
    line: 'Softness begins at the fibre.',
    image: '/images/craft-material-yarn.jpg',
  },
  {
    name: 'Jute',
    line: 'Earth-born, textured and enduring.',
    image: '/images/gallery/gallery-round-jute-rug.jpg',
  },
  {
    name: 'Cotton',
    line: 'Lightness woven into everyday living.',
    image: '/images/craft-material-cotton.jpg',
  },
  {
    name: 'Silk',
    line: 'A rare thread, reserved for the finest pieces.',
    image: '/images/craft-material-silk.jpg',
  },
  {
    name: 'Hemp & Loom',
    line: 'Coarse, strong warp on traditional wooden looms.',
    image: '/images/craft-loom-weaving.jpg',
  },
];

// "The Palette of Rajasthan" — colour, not photography.
export const palette = [
  { name: 'Indigo', hex: '#1F3A5F', origin: 'Jaipur’s architecture', note: 'Drawn from the deep blues that echo Jaipur’s architectural heritage.' },
  { name: 'Sand', hex: '#D8C7A1', origin: 'The Thar', note: 'The pale gold of desert dust, carried into undyed cotton and jute.' },
  { name: 'Terracotta', hex: '#B85C38', origin: 'Fired clay', note: 'The warm red-brown of Rajasthan’s pottery and painted havelis.' },
  { name: 'Marigold', hex: '#D99A2B', origin: 'Temple offerings', note: 'The bright orange-gold strung into garlands across every threshold.' },
  { name: 'Charcoal', hex: '#2B2622', origin: 'Hearth & kiln', note: 'A deep, grounding black drawn from smoke and stone.' },
  { name: 'Ivory', hex: '#F1E9D8', origin: 'Undyed cotton', note: 'The natural colour of fibre left as it was grown.' },
  { name: 'Deep Red', hex: '#7A1F2B', origin: 'Bandhani & lac', note: 'The rich red of Rajasthani textiles and lac bangles alike.' },
];


// "Meet the Hands"
export const artisanGallery = [
  {
    image: '/images/craft-hands-quality.jpg',
    alt: 'Two people examining a finished textile together in the showroom',
    caption: 'The Hands Behind the Pattern',
  },
  {
    image: '/images/craft-hands-dyeing.jpg',
    alt: 'An artisan’s hands lifting yarn from the dye vat as visitors watch',
    caption: 'Generations of Knowledge',
  },
  {
    image: '/images/craft-hands-learning.jpg',
    alt: 'A guide explaining the spinning wheels to a group of visitors',
    caption: 'Craft is Learned by Watching',
  },
  {
    image: '/images/craft-hands-washing.jpg',
    alt: 'An artisan washing finished dhurries by hand on the workshop floor',
    caption: 'Every Piece Carries a Human Touch',
  },
  {
    image: '/images/craft-loom-weaving.jpg',
    alt: 'A weaver knotting a geometric dhurrie on the traditional loom',
    caption: 'Patience, Row by Row',
  },
];

// "Patterns" — interactive textile wall.
// "From Hand to Home"
export const handToHome = [
  { label: 'Rugs', image: '/images/gallery/gallery-round-rug-interior.jpg' },
  { label: 'Cushions', image: '/images/gallery/gallery-bed-blue-pillows.jpg' },
  { label: 'Bags', image: '/images/gallery/gallery-bags-on-tree.jpg' },
  { label: 'Baskets', image: '/images/gallery/gallery-basket.jpg' },
];

export const customCraft = {
  eyebrow: 'Made to Order',
  title: 'Your Idea. Our Craft.',
  body: 'Every design can be adjusted \u2014 in size, colour, texture, pattern and finishing \u2014 to fit a space that\u2019s entirely yours.',
  aspects: ['Size', 'Colour', 'Texture', 'Pattern', 'Finishing'],
};

export const finalCta = {
  title: 'Thread by thread, the story continues.',
  body: 'From the hands of Rajasthan\u2019s artisans to spaces around the world.',
  primaryCta: { label: 'Explore the Collection', href: '/gallery' },
  secondaryCta: { label: 'Book Your Experience', href: '/book' },
  image: '/images/craft-final-storage.jpg',
};
