import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { GYM_INFO } from '../constants/data';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-black tracking-tighter">
            <span className="text-accent">IRON</span>&<span className="text-accent">OAK</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            A boutique strength & conditioning studio dedicated to building high-performance humans through discipline and community.
          </p>
          <div className="flex space-x-4">
            <a href={GYM_INFO.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-steel flex items-center justify-center hover:bg-accent transition-colors"><Instagram size={18} /></a>
            <a href={GYM_INFO.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-steel flex items-center justify-center hover:bg-accent transition-colors"><Facebook size={18} /></a>
            <a href={GYM_INFO.socials.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-steel flex items-center justify-center hover:bg-accent transition-colors"><Youtube size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link to="/programs" className="hover:text-accent transition-colors">Training Programs</Link></li>
            <li><Link to="/coaches" className="hover:text-accent transition-colors">Meet the Coaches</Link></li>
            <li><Link to="/membership" className="hover:text-accent transition-colors">Membership Tiers</Link></li>
            <li><Link to="/classes" className="hover:text-accent transition-colors">Class Schedule</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>{GYM_INFO.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>{GYM_INFO.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>{GYM_INFO.emails.general}</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Gym Hours</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {GYM_INFO.hours.map((h, i) => (
              <li key={i} className="flex justify-between">
                <span>{h.days}</span>
                <span className="text-white font-medium">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} Iron & Oak Fitness. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <Link to="#" className="hover:text-white">Privacy Policy</Link>
          <Link to="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
