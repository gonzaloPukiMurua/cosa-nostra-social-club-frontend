"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags?: string[]; // e.g., "Best Seller", "New", "Spicy"
}

interface MenuProps {
  categories: string[];
  items: MenuItem[];
  accentColor: string;
}

export default function Menu({ categories, items, accentColor }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredItems = items.filter(
    item => activeCategory.toLowerCase() === 'todos' || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 bg-[#131313] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] font-bold text-sm"
            style={{ color: accentColor }}
          >
            Nuestro Menú
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-black text-5xl md:text-7xl tracking-tighter mt-3 text-white uppercase"
          >
            THE RAW SELECTION
          </motion.h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                activeCategory === cat 
                ? 'bg-white text-black border-white' 
                : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1C1C1C] rounded-3xl overflow-hidden group border border-white/5 hover:border-white/20 transition-colors"
              >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.tags?.map(tag => (
                    <span key={tag} className="absolute top-4 left-4 bg-white text-black text-[10px] font-black uppercase px-3 py-1 rounded-full z-10">
                      {tag}
                    </span>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-60" />
                </div>

                {/* Info Container */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black text-2xl tracking-tighter text-white uppercase group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-bold text-xl tracking-tighter" style={{ color: accentColor }}>
                      ${item.price.toLocaleString('es-AR')}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  
                  <button 
                    className="mt-6 w-full py-4 border border-white/10 text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all"
                  >
                    Detalles
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}