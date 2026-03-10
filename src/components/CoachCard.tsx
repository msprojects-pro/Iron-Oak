import React from 'react';

interface CoachCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  certs: string[];
}

const CoachCard: React.FC<CoachCardProps> = ({ name, role, bio, image, certs }) => {
  return (
    <div className="group relative overflow-hidden bg-secondary border border-white/5">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-black mb-1">{name}</h3>
        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{role}</p>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {certs.map((cert, i) => (
            <span key={i} className="text-[10px] uppercase font-bold tracking-tighter bg-steel px-2 py-1 text-gray-300">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
