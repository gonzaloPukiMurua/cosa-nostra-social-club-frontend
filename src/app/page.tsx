import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Menu from '@/sections/Menu';
import Club from '@/sections/Club';
import LocationSection from '@/sections/Location';
import Footer from '@/sections/Footer';

// ----------------------------------------------------------------------
// 1. CONFIGURATION & DATA (The "Single Source of Truth")
// ----------------------------------------------------------------------

const BRAND = {
  name: "COSA NOSTRA",
  subtext: "SOCIAL CLUB",
  emoji: "🍔",
  accentColor: "#9F2A1F", // Main brand red
  contact: {
    whatsapp: "https://wa.me/5493548638444",
    phone: "tel:03548638444",
    address: "Villa Giardino, Córdoba",
  },
  socials: {
    instagram: "https://instagram.com/cosanostra",
    facebook: "https://facebook.com/cosanostra",
  }
};

const NAV_LINKS = [
  { label: 'Menu', href: 'menu' },
  { label: 'El Club', href: 'club' },
  { label: 'Ubicación', href: 'location' },
];

const HERO_CONTENT = {
  title: (
    <>
      ADICTOS A LAS<br />
      <span style={{ color: BRAND.accentColor }}>SMASH</span> BURGERS
    </>
  ),
  subtitle: `${BRAND.contact.address} • Delivery & Takeaway`,
  backgroundImage: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=2070&auto=format&fit=crop",
  ctas: {
    primary: { label: "Pedir por WhatsApp", href: BRAND.contact.whatsapp },
    secondary: { label: "Llamar Ahora", href: BRAND.contact.phone }
  }
};

const MENU_CATEGORIES = ["Todos", "Burgers", "Sides", "Bebidas"];

const MENU_ITEMS = [
  {
    id: "1",
    title: "Godfather Burger",
    description: "Doble smash patty (200g), triple cheddar, bacon ahumado y nuestra salsa secreta Cosa Nostra.",
    price: 12500,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
    tags: ["Best Seller"]
  },
  {
    id: "2",
    title: "Papas Criminales",
    description: "Papas triple cocción bañadas en cheddar fundido, verdeo y trozos de bacon crocante.",
    price: 6500,
    category: "Sides",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1000",
  },
  {
    id: "3",
    title: "Stella Artois",
    description: "Cerveza premium tirada, bien fría. 500ml.",
    price: 4500,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1535954439472-475348d753ad?q=80&w=1000",
  }
];

// ----------------------------------------------------------------------
// 2. MAIN PAGE COMPONENT
// ----------------------------------------------------------------------

export default function CosaNostraPage() {
  return (
    <div className="relative min-h-screen bg-[#131313] text-white antialiased selection:bg-[#9F2A1F]/30">
      
      {/* Navigation Layer */}
      <Navbar 
        brandName={BRAND.name}
        brandSubtext={BRAND.subtext}
        logoEmoji={BRAND.emoji}
        links={NAV_LINKS}
        ctaLabel="PEDIR AHORA"
        ctaHref={BRAND.contact.whatsapp}
        accentColor={BRAND.accentColor}
      />

      <main>
        {/* Hero Section: Entry Point */}
        <section id="hero">
          <Hero 
            title={HERO_CONTENT.title}
            subtitle={HERO_CONTENT.subtitle}
            backgroundImage={HERO_CONTENT.backgroundImage}
            primaryCTA={HERO_CONTENT.ctas.primary}
            secondaryCTA={HERO_CONTENT.ctas.secondary}
            accentColor={BRAND.accentColor}
          />
        </section>

        {/* 
            Note: As we refactor the sections below, 
            we will pass them props just like Navbar and Hero.
        */}
        <section id="menu" className="scroll-mt-20">
          <Menu 
            categories={MENU_CATEGORIES}
            items={MENU_ITEMS}
            accentColor={BRAND.accentColor}/>
        </section>

        <section id="club" className="scroll-mt-20">
          <Club />
        </section>

        <section id="location" className="scroll-mt-20">
          <LocationSection />
        </section>
      </main>

      {/* Footer: Global Brand presence */}
      <Footer 
        brandName={BRAND.name}
        accentColor={BRAND.accentColor}
        links={NAV_LINKS}
        contact={{
          address: BRAND.contact.address,
          phone: BRAND.contact.phone,
          whatsapp: BRAND.contact.whatsapp
        }}
        socials={BRAND.socials}
      />

    </div>
  );
}