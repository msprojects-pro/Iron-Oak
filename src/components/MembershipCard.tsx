import React from 'react';
import { Check } from 'lucide-react';

interface MembershipCardProps {
  tier: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ tier, price, period, features, isPopular }) => {
  return (
    <div className={`relative p-10 border ${isPopular ? 'border-accent bg-secondary' : 'border-white/10 bg-primary'} flex flex-col`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1">
          Most Popular
        </div>
      )}
      
      <div className="mb-10">
        <h3 className="text-xl font-black uppercase tracking-widest mb-4">{tier}</h3>
        <div className="flex items-baseline">
          <span className="text-4xl font-black">${price}</span>
          <span className="text-gray-500 ml-2 text-sm uppercase font-bold">/ {period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-12 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start space-x-3 text-sm text-gray-300">
            <Check size={16} className="text-accent shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 font-black uppercase tracking-widest text-sm transition-all duration-300 ${isPopular ? 'bg-accent text-white hover:bg-accent-hover' : 'bg-white text-black hover:bg-gray-200'}`}>
        Join Now
      </button>
    </div>
  );
};

export default MembershipCard;
