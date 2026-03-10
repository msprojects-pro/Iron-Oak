import React from 'react';
import HeroSection from '../components/HeroSection';
import CoachCard from '../components/CoachCard';
import { IMAGES } from '../constants/data';

const Coaches = () => {
  const coaches = [
    {
      name: "Marcus Williams",
      role: "Founder / Head Coach",
      bio: "With over 15 years of experience in strength and conditioning, Marcus founded Iron & Oak to bring elite-level training to the Denver community.",
      image: IMAGES.coach1,
      certs: ["CSCS", "USAW Level 2", "Precision Nutrition L1"]
    },
    {
      name: "Dana Kowalski",
      role: "Strength Director",
      bio: "A competitive powerlifter and biomechanics expert, Dana specializes in technical mastery and injury prevention for heavy lifters.",
      image: IMAGES.coach2,
      certs: ["NASM-CPT", "Westside Barbell Certified", "FMS Level 2"]
    },
    {
      name: "Dr. Aisha Patel",
      role: "Nutrition Coach",
      bio: "Dr. Patel combines her medical background with sports nutrition to help athletes optimize their fuel for performance and longevity.",
      image: IMAGES.coach3,
      certs: ["MD", "RDN", "Sports Nutrition Specialist"]
    },
    {
      name: "Ryan Cho",
      role: "Mobility Specialist",
      bio: "Ryan focuses on the intersection of strength and flexibility, ensuring our members move well before they move heavy.",
      image: IMAGES.coach4,
      certs: ["FRCms", "Yoga Alliance RYT-500", "Kinstretch Level 1"]
    },
    {
      name: "Zoe Martinez",
      role: "Group Fitness Lead",
      bio: "Zoe brings high energy and expert programming to our conditioning classes, making every session a challenge and a celebration.",
      image: IMAGES.coach5,
      certs: ["CrossFit Level 2", "NASM-PES", "Kettlebell Athletics"]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Meet the Team"
        subtitle="Expert coaches dedicated to your performance and growth."
        image={IMAGES.community}
      />

      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-4">The <span className="text-accent">Experts</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our coaches are more than just trainers—they are mentors, athletes, and lifelong students of strength.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {coaches.map((coach, i) => (
              <CoachCard key={i} {...coach} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-8 italic">"We don't just train bodies; we build character through the iron."</h2>
          <p className="text-gray-400 text-lg">— Marcus Williams</p>
        </div>
      </section>
    </div>
  );
};

export default Coaches;
