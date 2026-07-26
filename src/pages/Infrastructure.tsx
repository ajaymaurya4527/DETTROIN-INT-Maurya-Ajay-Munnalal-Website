import React from 'react';
import { Cpu, ShieldCheck, Dumbbell, BookOpen, Wifi, Bus } from 'lucide-react';

export const Infrastructure: React.FC = () => {
  const facilities = [
    {
      icon: <Cpu className="w-6 h-6 text-amber-500" />,
      title: "Advanced STEM & Robotics Labs",
      description: "Dedicated modern laboratories equipped with 3D printers, robotics kits, and high-speed workstations for practical innovation."
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-amber-500" />,
      title: "Olympic-Standard Sports Turf",
      description: "20-acre sports field featuring full-size football turf, synthetic basketball courts, lawn tennis, and an indoor swimming pool."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-500" />,
      title: "Digital Library Resource Center",
      description: "Over 15,000+ print volumes along with digital subscription access to worldwide journals, e-books, and research publications."
    },
    {
      icon: <Wifi className="w-6 h-6 text-amber-500" />,
      title: "Smart Interactive Classrooms",
      description: "Digitally enabled classrooms equipped with interactive smartboards, audio visual tools, and high-speed campus Wi-Fi."
    },
    {
      icon: <Bus className="w-6 h-6 text-amber-500" />,
      title: "GPS-Tracked Air-Conditioned Transport",
      description: "Safe and comfortable bus fleet equipped with real-time GPS tracking and dedicated female conductors for student safety."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: "24/7 Security & Health Clinic",
      description: "Round-the-clock CCTV surveillance, gated security personnel, and a fully equipped infirmary with a resident qualified nurse."
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Campus & Facilities</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-950">World-Class Campus Infrastructure</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Designed to foster learning, sports, and safety across a sprawling green environment in Aligarh.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 bg-blue-950/5 rounded-xl flex items-center justify-center">
                {fac.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-950">{fac.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{fac.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};