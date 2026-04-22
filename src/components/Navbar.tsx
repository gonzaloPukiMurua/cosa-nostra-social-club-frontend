'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants } from 'framer-motion';

const NAV_LINKS = [
  { label: 'MENU', id: 'menu' },
  { label: 'EL CLUB', id: 'club' },
  { label: 'UBICACIÓN', id: 'location' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 40);
  });

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  }, []);

  const menuVariants: Variants = {
    closed: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
    open: {
      opacity: 1,
      clipPath: 'inset(0 0 0% 0)',
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      clipPath: 'inset(0 0 100% 0)',
      transition: { duration: 0.3, ease: [0.64, 0, 0.78, 0] as const },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -16 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'h-16 bg-[#0e0e0e]/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
            : 'h-20 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9F2A1F] rounded-sm"
            aria-label="Ir al inicio"
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#9F2A1F] transition-transform duration-300 group-hover:scale-110" />
              <span className="relative text-lg leading-none">🍔</span>
            </div>
            <div className="leading-none">
              <span className="block font-headline font-black text-[15px] tracking-[0.12em] text-white uppercase">
                COSA NOSTRA
              </span>
              <span className="block text-[9px] tracking-[0.25em] text-[#9F2A1F] uppercase mt-[2px]">
                SOCIAL CLUB
              </span>
            </div>
          </button>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-[11px] font-headline font-bold tracking-[0.18em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9F2A1F] rounded-sm
                  ${activeSection === id ? 'text-white' : 'text-[#a78a86] hover:text-white'}`}
              >
                {label}
                {activeSection === id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-px bg-[#9F2A1F]"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* ── CTA ── */}
          <a
            href="https://wa.me/5493548638444"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#9F2A1F] hover:bg-[#b83122] active:bg-[#852318] text-white px-6 py-[10px] font-headline font-bold uppercase tracking-[0.12em] text-[11px] transition-all duration-200 hover:shadow-[0_0_24px_rgba(159,42,31,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.518 5.83L.057 23.5l5.806-1.523A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.001-1.373l-.36-.213-3.44.902.919-3.352-.233-.374A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            PEDIR POR WHATSAPP
          </a>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9F2A1F] rounded-sm"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block w-6 h-px bg-white origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-px bg-white origin-center"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block w-6 h-px bg-white origin-center"
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#0e0e0e] flex flex-col pt-20 md:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Menú de navegación"
          >
            {/* Noise grain overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              }}
            />

            <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Menú móvil">
              {NAV_LINKS.map(({ label, id }, i) => (
                <motion.button
                  key={id}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => scrollTo(id)}
                  className={`group flex items-center justify-between w-full py-5 border-b text-left transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#9F2A1F]
                    ${activeSection === id
                      ? 'border-[#9F2A1F]/40 text-white'
                      : 'border-white/[0.06] text-[#a78a86] hover:text-white hover:border-white/20'
                    }`}
                >
                  <span className="font-headline font-black text-4xl tracking-tighter uppercase leading-none">
                    {label}
                  </span>
                  <span className={`text-[#9F2A1F] transition-transform duration-200 group-hover:translate-x-1 ${activeSection === id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    →
                  </span>
                </motion.button>
              ))}
            </nav>

            <motion.div
              custom={NAV_LINKS.length}
              variants={itemVariants}
              initial="closed"
              animate="open"
              className="px-8 pb-12"
            >
              <a
                href="https://wa.me/5493548638444"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#9F2A1F] hover:bg-[#b83122] active:scale-[0.98] text-white py-5 font-headline font-bold uppercase tracking-[0.15em] text-sm transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.518 5.83L.057 23.5l5.806-1.523A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.001-1.373l-.36-.213-3.44.902.919-3.352-.233-.374A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                PEDIR POR WHATSAPP
              </a>

              <p className="text-center text-[9px] tracking-[0.3em] text-[#58413e] uppercase mt-6">
                Villa Giardino · Córdoba · Argentina
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
