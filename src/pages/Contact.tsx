import React from 'react';
import HeroSection from '../components/HeroSection';
import { IMAGES, GYM_INFO } from '../constants/data';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <HeroSection 
        title="Contact Us"
        subtitle="Have questions? We're here to help you start your journey."
        image={IMAGES.gallery[5]}
      />

      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-6xl mb-12">Get In <span className="text-accent">Touch</span></h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full shrink-0">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Location</h4>
                  <p className="text-gray-400 leading-relaxed">{GYM_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full shrink-0">
                  <Phone className="text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Phone</h4>
                  <p className="text-gray-400 leading-relaxed">{GYM_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full shrink-0">
                  <Mail className="text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2">Email</h4>
                  <div className="space-y-1">
                    <p className="text-gray-400 leading-relaxed">General: {GYM_INFO.emails.general}</p>
                    <p className="text-gray-400 leading-relaxed">Membership: {GYM_INFO.emails.membership}</p>
                    <p className="text-gray-400 leading-relaxed">Training: {GYM_INFO.emails.training}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 bg-secondary border border-white/5">
              <h4 className="text-lg font-bold uppercase tracking-widest mb-6">Business Hours</h4>
              <ul className="space-y-3">
                {GYM_INFO.hours.map((h, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span className="text-gray-400">{h.days}</span>
                    <span className="text-white font-bold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-10 md:p-16 border border-white/5">
            <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-gray-500 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-primary border border-white/10 p-4 text-white focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-primary border border-white/10 p-4 text-white focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-black tracking-widest text-gray-500 mb-2">Subject</label>
                <select className="w-full bg-primary border border-white/10 p-4 text-white focus:border-accent outline-none transition-colors">
                  <option>General Inquiry</option>
                  <option>Membership Question</option>
                  <option>Personal Training</option>
                  <option>Corporate Wellness</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-black tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-primary border border-white/10 p-4 text-white focus:border-accent outline-none transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button className="btn-primary w-full flex items-center justify-center space-x-3">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-steel relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-black uppercase tracking-tighter">Find Us in Denver</h3>
            <p className="text-gray-400 mt-2">{GYM_INFO.address}</p>
          </div>
        </div>
        {/* In a real app, embed Google Maps here */}
        <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Contact;
