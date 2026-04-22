// ============================================================
//  COSA NOSTRA SOCIAL CLUB — Site Content
//  This is the single source of truth for all editable content.
//  When Sanity is active, these values are used as fallbacks.
// ============================================================

// ── Brand ────────────────────────────────────────────────────
export const BRAND = {
  name: 'COSA NOSTRA',
  subtitle: 'SOCIAL CLUB',
  tagline: 'Adictos a las Smash Burgers',
  description:
    'Los mejores Smash Burgers de las Sierras de Córdoba. Calidad suprema, cultura de club, ingredientes locales.',
};

// ── Contact & Location ───────────────────────────────────────
export const CONTACT = {
  phone: '03548 63-8444',
  phoneTel: 'tel:03548638444',
  whatsapp: 'https://wa.me/5493548638444',
  whatsappDisplay: '+54 9 3548 63-8444',
  instagram: 'https://instagram.com/cosa.nostrasc',
  instagramHandle: '@cosa.nostrasc',
  facebook: 'https://facebook.com',
  address: 'Av. Tomillo 172',
  city: 'Villa Giardino (CP 5176)',
  province: 'Córdoba, Argentina',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+Tomillo+172,+Villa+Giardino,+Córdoba,+Argentina',
  // Replace this with the real embed src from Google Maps → Share → Embed a map
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.4!2d-64.503!3d-31.071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA0JzE1LjYiUyA2NMKwMzAnMTEuOCJX!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar',
};

// ── Hours ────────────────────────────────────────────────────
export const HOURS = [
  { day: 'Lunes – Miércoles', time: '19:00 – 23:00' },
  { day: 'Jueves – Viernes',  time: '19:00 – 00:00' },
  { day: 'Sábado',            time: '12:00 – 00:00' },
  { day: 'Domingo',           time: '12:00 – 23:00' },
];

// ── Hero ─────────────────────────────────────────────────────
export const HERO = {
  headline: 'ADICTOS A LAS',
  headlineAccent: 'SMASH',
  headlineSuffix: 'BURGERS',
  subheadline: 'Villa Giardino • Delivery & Takeaway',
  ctaPrimary: 'Pedir por WhatsApp',
  ctaSecondary: 'Llamar Ahora',
  backgroundImage:
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=2070&auto=format&fit=crop',
};

// ── Menu ─────────────────────────────────────────────────────
export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;    // e.g. "Favorito", "Nuevo"
  category: 'burger' | 'pizza' | 'entrant' | 'dessert';
};

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'GODFATHER BURGER',
    description: 'Doble patty de 120g, queso cheddar fundido, cebolla caramelizada al bourbon y nuestra salsa secreta "Nostra".',
    price: '$12.500',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    badge: 'Favorito',
    category: 'burger',
  },
  {
    name: 'CORLEONE SMASH',
    description: 'Patty aplastado, panceta crocante y cebolla caramelizada.',
    price: '$11.000',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop',
    category: 'burger',
  },
  {
    name: 'LA SICILIANA',
    description: 'Masa madre fermentada 48h, pomodoro san marzano, mozzarella di bufala y albahaca fresca.',
    price: '$14.000',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    category: 'pizza',
  },
  {
    name: 'BROWNIE CRUNCH',
    description: 'Chocolate negro 70% con nueces pecán, helado de vainilla bourbon y escamas de sal maldon.',
    price: '$6.500',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
    category: 'dessert',
  },
];

// ── Club Section ─────────────────────────────────────────────
export const CLUB = {
  label: 'Nuestra Historia',
  heading: ['BIENVENIDOS A', 'COSA NOSTRA', 'SOCIAL CLUB'],
  bodyCopy: [
    'No somos solo una hamburguesería. Somos un refugio para los que aprecian la calidad cruda, el respeto por el ingrediente y el ambiente de un verdadero club social clandestino.',
    'Nuestra cocina se basa en tres pilares: la técnica del Smash perfecta, ingredientes locales de primera y un ambiente donde cada cliente es parte de la familia.',
  ],
  photos: [
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
      alt: 'Interior del Cosa Nostra Social Club',
      caption: 'El Ambiente',
    },
    {
      src: 'https://images.unsplash.com/photo-1627308595229-7830a5c18106?q=80&w=800&auto=format&fit=crop',
      alt: 'Smash burger en la plancha',
      caption: 'La Técnica',
    },
    {
      src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop',
      alt: 'Ingredientes frescos',
      caption: 'El Ingrediente',
    },
  ],
  pillars: [
    {
      number: '01',
      title: 'LA TÉCNICA',
      body: 'El Smash perfecto requiere precisión: 180g de carne, plancha a 260°C y exactamente 10 segundos de presión. Sin trucos.',
    },
    {
      number: '02',
      title: 'EL INGREDIENTE',
      body: 'Proveedores locales de las Sierras de Córdoba. Carne de pastura, pan artesanal horneado a diario, quesos de tambos cercanos.',
    },
    {
      number: '03',
      title: 'EL AMBIENTE',
      body: 'Un club donde cada cliente es familia. Sin reservas, sin pretensiones. Solo buena comida, buena música y buena compañía.',
    },
  ],
};

// ── Footer ───────────────────────────────────────────────────
export const FOOTER = {
  developerName: 'Gelum Digital',
  developerUrl: 'https://gelumdigital.com',
};
