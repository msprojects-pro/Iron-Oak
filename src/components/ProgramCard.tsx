import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, category, description, image, link }) => {
  return (
    <div className="group relative overflow-hidden bg-secondary card-hover border border-white/5">
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-8">
        <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">{category}</span>
        <h3 className="text-2xl font-black mb-4">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        <Link to={link} className="flex items-center text-white font-bold text-sm uppercase tracking-widest group/btn">
          Explore Program <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
