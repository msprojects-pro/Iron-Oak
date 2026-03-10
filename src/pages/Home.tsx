import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProgramCard from '../components/ProgramCard';
import { IMAGES, GYM_INFO } from '../constants/data';
import { motion } from 'motion/react';
import { Star, Quote, Users, Trophy, ShieldCheck } from 'lucide-react';

const Home = () => {
  const featuredPrograms = [
    {
      title: "Elite Strength",
      category: "Strength Training",
      description: "Master the big three and build a foundation of raw power with our signature strength program.",
      image: IMAGES.strength,
      link: "/programs"
    },
    {
      title: "Metabolic Burn",
      category: "Conditioning",
      description: "High-intensity circuits designed to torch fat and skyrocket your cardiovascular endurance.",
      image: IMAGES.conditioning,
      link: "/programs"
    },
    {
      title: "Active Recovery",
      category: "Recovery",
      description: "Optimize your performance with mobility work, yoga, and specialized recovery protocols.",
      image: IMAGES.recovery,
      link: "/programs"
    }
  ];

  const stats = [
    { label: "Google Rating", value: "4.9", icon: <Star className="text-accent" /> },
    { label: "Certified Coaches", value: "100%", icon: <ShieldCheck className="text-accent" /> },
    { label: "Member Retention", value: "89%", icon: <Users className="text-accent" /> },
    { label: "Local Impact", value: "$50K+", icon: <Trophy className="text-accent" /> },
  ];

  return (
    <div>
      <HeroSection 
        title="Iron & Oak Fitness"
        subtitle="Premium boutique strength and conditioning studio dedicated to building high-performance humans."
        image={IMAGES.hero}
        ctaText="Join Now"
        ctaLink="/membership"
        secondaryCtaText="View Programs"
        secondaryCtaLink="/programs"
        height="h-screen"
      />

      {/* Intro Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Est. 2019</span>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">More Than Just <br/><span className="text-accent">A Gym.</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Iron & Oak is a community-driven training culture located in the heart of Denver. We specialize in strength and conditioning for those who demand more from themselves. No fluff, no ego—just results.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-black">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src={IMAGES.about} 
              alt="Gym Interior" 
              className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-accent p-10 hidden md:block">
              <p className="text-3xl font-black uppercase tracking-tighter leading-none">
                Strength <br/> Through <br/> Discipline
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl">Training <span className="text-accent">Programs</span></h2>
            </div>
            <Link to="/programs" className="btn-outline py-3 px-8 text-xs">View All Programs</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program, i) => (
              <ProgramCard key={i} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <Quote size={120} className="absolute -top-10 -left-10 text-white/5" />
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl">Member <span className="text-accent">Voices</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Sarah Jenkins",
                role: "Member since 2021",
                text: "The community at Iron & Oak is unmatched. I came for the equipment, but I stayed for the people and the incredible coaching that pushed me beyond my limits."
              },
              {
                name: "David Miller",
                role: "Member since 2020",
                text: "Best strength studio in Denver. The programming is intelligent, the facility is top-tier, and the results speak for themselves. I've never been stronger."
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary p-12 border border-white/5 relative"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-accent fill-accent mr-1" />)}
                </div>
                <p className="text-xl italic text-gray-300 mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-black uppercase tracking-widest">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.community} 
            alt="Community" 
            className="w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl mb-8">Ready to <span className="text-accent">Level Up?</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the Iron & Oak community today and start your journey toward peak performance. Limited memberships available.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/membership" className="btn-primary">Get Started</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
