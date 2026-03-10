import React from 'react';
import HeroSection from '../components/HeroSection';
import { IMAGES } from '../constants/data';
import { motion } from 'motion/react';

const Gallery = () => {
  return (
    <div>
      <HeroSection 
        title="The Gallery"
        subtitle="A visual journey through the Iron & Oak experience."
        image={IMAGES.gallery[4]}
      />

      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {IMAGES.gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group overflow-hidden cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/ironoak${i}/800/1200`;
                  }}
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-black uppercase tracking-widest text-xs border-2 border-white px-4 py-2">View Larger</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
