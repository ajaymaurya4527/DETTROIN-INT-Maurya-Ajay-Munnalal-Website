import React from 'react';
import { Palette, Music, Trophy, Sparkles, HeartHandshake } from 'lucide-react';

export const BeyondAcademics: React.FC = () => {
  const activities = [
    {
      icon: <Palette className="w-6 h-6 text-amber-500" />,
      title: "Creative & Visual Arts",
      description: "Painting, sculpture, pottery, and digital design studios where students express their creativity."
    },
    {
      icon: <Music className="w-6 h-6 text-amber-500" />,
      title: "Performing Arts & Music",
      description: "Indian classical and western vocal training, instrumental music, and theatre arts."
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-500" />,
      title: "Competitive Athletics & Sports",
      description: "Professional coaching in cricket, football, basketball, swimming, archery, and taekwondo."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: "Clubs & Societies",
      description: "Robotics club, MUN (Model United Nations), Literary society, Eco club, and Debate club."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-500" />,
      title: "Community Outreach",
      description: "Social awareness drives, tree plantation initiatives, and community engagement projects."
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Co-Curricular</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-950">Beyond Academics</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Education extends far beyond textbooks. We encourage students to discover their passions through diverse sports, arts, and leadership activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                {act.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-950">{act.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{act.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};