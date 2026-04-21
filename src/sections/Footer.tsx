'use client';

const NAV_LINKS = [
  { label: 'Menú',      id: 'menu' },
  { label: 'El Club',   id: 'club' },
  { label: 'Ubicación', id: 'location' },
];

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.518 5.83L.057 23.5l5.806-1.523A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.001-1.373l-.36-.213-3.44.902.919-3.352-.233-.374A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0e0e] border-t border-white/[0.04]">

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8 flex items-center justify-center bg-[#9F2A1F] shrink-0">
                  <span className="text-sm leading-none">🍔</span>
                </div>
                <div className="leading-none">
                  <span className="block font-headline font-black text-sm tracking-[0.12em] text-white uppercase">COSA NOSTRA</span>
                  <span className="block text-[9px] tracking-[0.22em] text-[#9F2A1F] uppercase mt-[2px]">SOCIAL CLUB</span>
                </div>
              </div>
              <p className="text-[#a78a86] text-sm leading-relaxed max-w-xs">
                Los mejores Smash Burgers de las Sierras de Córdoba. Calidad suprema, cultura de club, ingredientes locales.
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { href: 'https://instagram.com/cosa.nostrasc', Icon: InstagramIcon, label: 'Instagram' },
                { href: 'https://facebook.com', Icon: FacebookIcon, label: 'Facebook' },
                { href: 'https://wa.me/5493548638444', Icon: WhatsAppIcon, label: 'WhatsApp' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-[#ffffff08] text-[#58413e] hover:text-[#9F2A1F] hover:border-[#9F2A1F]/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9F2A1F]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[9px] font-headline font-bold tracking-[0.25em] uppercase text-[#58413e] mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-[#a78a86] hover:text-white text-sm transition-colors duration-200 uppercase tracking-wider font-headline focus-visible:outline-none focus-visible:text-[#9F2A1F]"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snapshot */}
          <div className="md:col-span-3">
            <h4 className="text-[9px] font-headline font-bold tracking-[0.25em] uppercase text-[#58413e] mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-[#a78a86]">
              <li>
                <address className="not-italic leading-relaxed">
                  Av. Tomillo 172<br />
                  Villa Giardino, Córdoba
                </address>
              </li>
              <li>
                <a href="tel:03548638444" className="hover:text-white transition-colors duration-200 font-headline">
                  03548 63-8444
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5493548638444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  +54 9 3548 63-8444
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/[0.04]" />

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[9px] text-[#58413e] uppercase tracking-[0.25em]">
          © {year} Cosa Nostra Social Club · Todos los derechos reservados.
        </p>
        <p className="text-[9px] text-[#58413e] uppercase tracking-[0.25em]">
          Desarrollado por{' '}
          <a
            href="https://gelumdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9F2A1F] hover:text-[#ffb4a9] transition-colors duration-200 font-bold"
          >
            Gelum Digital
          </a>
        </p>
      </div>

    </footer>
  );
}
