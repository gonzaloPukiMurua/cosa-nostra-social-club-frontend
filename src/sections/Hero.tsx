"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { MessageCircle, Phone, ChevronDown } from 'lucide-react';

interface HeroProps {
  title: React.ReactNode; // Allows passing <span> for highlights
  subtitle: string;
  backgroundImage: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  accentColor?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  accentColor = "#9F2A1F"
}: HeroProps) {
  
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars: Variants  = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Image with subtle Scale effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-60"
          quality={90}
        />
        {/* Advanced Gradient Overlay: Top-down and bottom-up for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#131313]" />
      </motion.div>

      {/* Content */}
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center"
      >
        <motion.h1 
          variants={itemVars}
          className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-6 text-white uppercase"
        >
          {title}
        </motion.h1>

        <motion.p 
          variants={itemVars}
          className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide"
        >
          {subtitle}
        </motion.p>

        <motion.div 
          variants={itemVars}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary Button */}
          <a
            href={primaryCTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto overflow-hidden px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95"
          >
            <div 
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" 
              style={{ backgroundColor: accentColor }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
              <MessageCircle size={18} />
              {primaryCTA.label}
            </span>
          </a>

          {/* Secondary Button */}
          <a
            href={secondaryCTA.href}
            className="w-full sm:w-auto px-10 py-5 border border-white/30 hover:border-white text-white font-bold uppercase tracking-widest text-sm transition-all backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            {secondaryCTA.label}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Explorar</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={20} className="text-gray-400" />
        </motion.div>
      </motion.div>

    </section>
  );
}