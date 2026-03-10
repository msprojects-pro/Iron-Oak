import React from 'react';
import HeroSection from '../components/HeroSection';
import ProgramCard from '../components/ProgramCard';
import { IMAGES } from '../constants/data';

const Programs = () => {
  const categories = [
    {
      name: "Strength Training",
      programs: [
        {
          title: "Powerlifting",
          category: "Strength",
          description: "Focus on the squat, bench press, and deadlift with specialized peaking cycles.",
          image: IMAGES.powerlifting,
          link: "/membership"
        },
        {
          title: "Olympic Lifting",
          category: "Strength",
          description: "Master the snatch and clean & jerk with technical drills and explosive programming.",
          image: IMAGES.olympic,
          link: "/membership"
        },
        {
          title: "Bodybuilding",
          category: "Strength",
          description: "Hypertrophy-focused training designed to build muscle mass and improve body composition.",
          image: IMAGES.bodybuilding,
          link: "/membership"
        },
        {
          title: "Personal Training",
          category: "Strength",
          description: "One-on-one coaching tailored specifically to your individual goals and needs.",
          image: IMAGES.pt,
          link: "/contact"
        }
      ]
    },
    {
      name: "Conditioning",
      programs: [
        {
          title: "HIIT",
          category: "Conditioning",
          description: "High-intensity interval training to boost metabolism and cardiovascular health.",
          image: IMAGES.hiit,
          link: "/membership"
        },
        {
          title: "Bootcamp",
          category: "Conditioning",
          description: "Group-based functional training that challenges your limits in a team environment.",
          image: IMAGES.community,
          link: "/membership"
        },
        {
          title: "Kettlebell Training",
          category: "Conditioning",
          description: "Dynamic movements that build functional strength, power, and endurance.",
          image: IMAGES.kettlebell,
          link: "/membership"
        }
      ]
    },
    {
      name: "Recovery & Specialty",
      programs: [
        {
          title: "Yoga & Mobility",
          category: "Recovery",
          description: "Improve flexibility and joint health to support your heavy lifting and conditioning.",
          image: IMAGES.yoga,
          link: "/membership"
        },
        {
          title: "Nutrition Coaching",
          category: "Specialty",
          description: "Customized meal plans and macro tracking to fuel your performance and recovery.",
          image: IMAGES.nutrition,
          link: "/contact"
        }
      ]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Training Programs"
        subtitle="Intelligent programming designed for every level of athlete."
        image={IMAGES.strength}
      />

      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto">
          {categories.map((cat, i) => (
            <div key={i} className="mb-24 last:mb-0">
              <div className="flex items-center space-x-6 mb-12">
                <h2 className="text-3xl md:text-5xl">{cat.name}</h2>
                <div className="flex-grow h-px bg-white/10"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.programs.map((prog, j) => (
                  <ProgramCard key={j} {...prog} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
