import React from 'react';
import HeroSection from '../components/HeroSection';
import { IMAGES, GYM_INFO } from '../constants/data';
import { motion } from 'motion/react';
import { Target, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Strength",
      desc: "We believe physical strength is the foundation for mental resilience and overall well-being.",
      icon: <Target className="text-accent" size={32} />
    },
    {
      title: "Discipline",
      desc: "Consistency over intensity. We value the daily commitment to showing up and doing the work.",
      icon: <Award className="text-accent" size={32} />
    },
    {
      title: "Community",
      desc: "Training is better together. We foster an environment where everyone supports each other's growth.",
      icon: <Users className="text-accent" size={32} />
    },
    {
      title: "Integrity",
      desc: "No shortcuts. We do things the right way, with proper form and honest effort.",
      icon: <Heart className="text-accent" size={32} />
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Our Story"
        subtitle="Building a legacy of strength in the heart of Denver since 2019."
        image={IMAGES.about}
      />

      {/* Mission Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-8">The <span className="text-accent">Mission</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Founded in 2019 by Marcus Williams, Iron & Oak Fitness was born out of a desire to create a training environment that prioritized performance over aesthetics. We saw a gap in the market for a facility that combined elite-level equipment with a supportive, non-intimidating community.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Today, we are Denver's premier boutique strength and conditioning studio. Our mission remains the same: to empower individuals to discover their true potential through intelligent programming, expert coaching, and a culture of relentless improvement.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img src={IMAGES.strength} alt="Strength" className="w-full h-64 object-cover grayscale" referrerPolicy="no-referrer" />
              <img src={IMAGES.conditioning} alt="Conditioning" className="w-full h-80 object-cover grayscale" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-6 pt-12">
              <img src={IMAGES.community} alt="Community" className="w-full h-80 object-cover grayscale" referrerPolicy="no-referrer" />
              <img src={IMAGES.recovery} alt="Recovery" className="w-full h-64 object-cover grayscale" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-4">Our Core <span className="text-accent">Values</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide every session, every coach, and every member at Iron & Oak.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary p-10 border border-white/5 text-center group hover:border-accent transition-colors duration-500"
              >
                <div className="w-16 h-16 bg-secondary flex items-center justify-center rounded-full mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  {v.icon}
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-widest">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl mb-8">The <span className="text-accent">Community</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                At Iron & Oak, you're not just a number. You're part of a tribe that pushes each other to be better every single day. We host regular community events, from weekend hikes to in-house lifting meets.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our members come from all walks of life, but they share one common goal: the pursuit of excellence. Whether you're a competitive athlete or just starting your fitness journey, you'll find a home here.
              </p>
            </div>
            <div className="relative">
              <img src={IMAGES.community} alt="Community" className="w-full h-[500px] object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 hidden md:block">
                <p className="text-xl font-black uppercase tracking-tighter">Stronger Together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Details */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img src={IMAGES.gallery[0]} alt="Facility" className="w-full h-[500px] object-cover border border-white/5" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl mb-8">The <span className="text-accent">Facility</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our 12,000 sq ft facility is designed for performance. We've curated the best equipment in the industry to ensure you have everything you need to succeed.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Elite Strength Zone",
                  "Functional Training Turf",
                  "Cardio Performance Lab",
                  "Recovery Suite & Sauna",
                  "Locker Rooms with Showers",
                  "Protein Bar & Smoothie Station",
                  "Outdoor Training Area",
                  "Kids Zone Childcare"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
