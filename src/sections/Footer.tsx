"use client";

import React from 'react';
import { MessageCircle, MapPin, Phone } from 'lucide-react';

// --- Bulletproof Brand Icons (SVG) ---
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

interface FooterProps {
  brandName: string;
  accentColor: string;
  links: { label: string; href: string }[];
  contact: {
    address: string;
    phone: string;
    whatsapp: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
  };
}

export default function Footer({ 
  brandName, 
  accentColor, 
  links, 
  contact, 
  socials 
}: FooterProps) {
  
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80; // height of your navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-black tracking-tighter uppercase" style={{ color: accentColor }}>
                {brandName}
              </span>
              <p className="text-gray-500 text-sm mt-2 max-w-xs leading-relaxed">
                Los mejores Smash Burgers de las Sierras. Calidad suprema, 
                cultura de club.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-500 transition-colors">
                  <InstagramIcon size={20} />
                </a>
              )}
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-500 transition-colors">
                  <FacebookIcon size={20} />
                </a>
              )}
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navegación</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-500 hover:text-white text-sm transition-colors uppercase tracking-wider text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Ubicación & Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} style={{ color: accentColor }} className="shrink-0" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} style={{ color: accentColor }} className="shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">{contact.phone}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © {currentYear} {brandName} • Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            Developed by <a href="#" className="hover:text-white transition-colors font-bold">Gelum Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}