import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GYM_INFO } from '../constants/data';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Coaches', path: '/coaches' },
    { name: 'Membership', path: '/membership' },
    { name: 'Classes', path: '/classes' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass-nav py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center">
          <span className="text-accent">IRON</span>
          <span className="text-white">&</span>
          <span className="text-accent">OAK</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xs uppercase font-bold tracking-widest hover:text-accent transition-colors",
                location.pathname === link.path ? "text-accent" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/membership" className="btn-primary py-2 px-6 text-xs">
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black uppercase tracking-tighter hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          to="/membership" 
          onClick={() => setIsOpen(false)}
          className="btn-primary"
        >
          Join Now
        </Link>
        
        <div className="flex space-x-6 pt-8">
          <a href={GYM_INFO.socials.instagram} target="_blank" rel="noreferrer" className="text-white hover:text-accent"><Instagram /></a>
          <a href={GYM_INFO.socials.facebook} target="_blank" rel="noreferrer" className="text-white hover:text-accent"><Facebook /></a>
          <a href={GYM_INFO.socials.youtube} target="_blank" rel="noreferrer" className="text-white hover:text-accent"><Youtube /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
