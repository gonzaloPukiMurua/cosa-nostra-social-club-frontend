'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react'; // Better icons
import Link from 'next/link';

// 1. Define Types for Reusability
interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface NavbarProps {
  brandName: string;
  brandSubtext?: string;
  logoEmoji?: string;
  links: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  accentColor?: string; // e.g., "#9F2A1F"
}

export default function Navbar({
  brandName,
  brandSubtext,
  logoEmoji = "🍔",
  links,
  ctaLabel,
  ctaHref,
  accentColor = "#9F2A1F"
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 2. Handle scroll effect for professional feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 
      ${scrolled ? 'bg-[#131313]/90 backdrop-blur-xl border-b border-white/10 shadow-xl' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform">{logoEmoji}</span>
          <div className="flex flex-col">
            <span className="font-black text-xl md:text-2xl tracking-tighter uppercase leading-none" style={{ color: accentColor }}>
              {brandName}
            </span>
            {brandSubtext && <p className="text-[10px] text-gray-500 tracking-[0.2em]">{brandSubtext}</p>}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              {link.label}
            </button>
          ))}
          
          <a 
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs transition-all hover:brightness-110 active:scale-95"
            style={{ backgroundColor: accentColor }}
          >
            <MessageCircle size={16} />
            {ctaLabel}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-20 bg-[#131313] z-40 lg:hidden flex flex-col p-8"
          >
            <div className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-2xl font-black tracking-tighter uppercase border-b border-white/5 pb-4"
                >
                  {link.label}
                </motion.button>
              ))}
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                href={ctaHref}
                className="mt-4 text-white py-5 flex justify-center items-center gap-3 font-bold uppercase tracking-widest"
                style={{ backgroundColor: accentColor }}
              >
                <MessageCircle size={20} />
                {ctaLabel}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}