import React from 'react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  height?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  image, 
  ctaText, 
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  height = "h-[70vh]"
}) => {
  return (
    <section className={`relative ${height} w-full overflow-hidden flex items-center`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-accent block" : "text-white block"}>
                {word}
              </span>
            ))}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium max-w-lg">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            {ctaText && (
              <a href={ctaLink} className="btn-primary">
                {ctaText}
              </a>
            )}
            {secondaryCtaText && (
              <a href={secondaryCtaLink} className="btn-outline">
                {secondaryCtaText}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
