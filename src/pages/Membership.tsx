import React from 'react';
import HeroSection from '../components/HeroSection';
import MembershipCard from '../components/MembershipCard';
import { IMAGES } from '../constants/data';

const Membership = () => {
  const tiers = [
    {
      tier: "Basic",
      price: "129",
      period: "month",
      features: [
        "Access to Strength Zone",
        "Locker Room & Showers",
        "Member App Access",
        "2 Guest Passes per Month",
        "Standard Gym Hours"
      ]
    },
    {
      tier: "Unlimited",
      price: "199",
      period: "month",
      isPopular: true,
      features: [
        "All Basic Features",
        "Unlimited Group Classes",
        "24/7 Key Fob Access",
        "Monthly Mobility Workshop",
        "10% Discount on Apparel",
        "Sauna Access"
      ]
    },
    {
      tier: "Elite",
      price: "349",
      period: "month",
      features: [
        "All Unlimited Features",
        "4 Personal Training Sessions",
        "Nutrition Coaching",
        "Monthly Body Comp Scan",
        "Complimentary Towel Service",
        "Priority Class Booking"
      ]
    },
    {
      tier: "Day Pass",
      price: "30",
      period: "day",
      features: [
        "Full Facility Access",
        "One Group Class Included",
        "Locker Room & Showers",
        "Valid for 24 Hours"
      ]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Membership"
        subtitle="Choose the level of commitment that fits your goals."
        image={IMAGES.gallery[1]}
      />

      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-4">Choose Your <span className="text-accent">Tier</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">No long-term contracts. No hidden fees. Just pure performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, i) => (
              <MembershipCard key={i} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl mb-8">Member <span className="text-accent">Perks</span></h2>
              <div className="space-y-8">
                {[
                  { title: "24/7 Access", desc: "Train on your schedule with secure key fob access for Unlimited and Elite members." },
                  { title: "Member App", desc: "Book classes, track your workouts, and connect with the community via our custom app." },
                  { title: "Community Events", desc: "From BBQ's to in-house competitions, we believe in training hard and celebrating together." },
                  { title: "Recovery Suite", desc: "Optimize your downtime with our infrared sauna and specialized mobility tools." }
                ].map((perk, i) => (
                  <div key={i} className="flex space-x-6">
                    <div className="text-accent font-black text-2xl">0{i+1}</div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-widest mb-2">{perk.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={IMAGES.gallery[2]} alt="Perks" className="w-full h-[600px] object-cover grayscale" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 border-[20px] border-accent/20 -m-6 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
