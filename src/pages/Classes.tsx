import React from 'react';
import HeroSection from '../components/HeroSection';
import ClassSchedule from '../components/ClassSchedule';
import { IMAGES } from '../constants/data';
import { Clock, Users, Zap } from 'lucide-react';

const Classes = () => {
  const classTypes = [
    {
      name: "HIIT",
      desc: "High-intensity interval training designed to maximize calorie burn and improve metabolic health.",
      icon: <Zap className="text-accent" />
    },
    {
      name: "Strength Circuits",
      desc: "Compound movements organized in circuits to build lean muscle mass and structural integrity.",
      icon: <Clock className="text-accent" />
    },
    {
      name: "Bootcamp",
      desc: "A high-energy group session that combines functional movements with team-based challenges.",
      icon: <Users className="text-accent" />
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Class Schedule"
        subtitle="Small group training with a maximum of 15 participants per class."
        image={IMAGES.gallery[3]}
      />

      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-4">Weekly <span className="text-accent">Schedule</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Find the time that works for you. All classes are led by our expert coaching staff.</p>
          </div>

          <ClassSchedule />
        </div>
      </section>

      {/* Class Info */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {classTypes.map((type, i) => (
              <div key={i} className="p-10 border border-white/5 bg-primary">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-widest">{type.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
