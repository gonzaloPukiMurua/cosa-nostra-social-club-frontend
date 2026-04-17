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
          <Menu />
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