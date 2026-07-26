import React, { useState } from 'react';
import { Mail, Award, Quote, ChevronRight, UserCheck } from 'lucide-react';

interface CommitteeMember {
  name: string;
  role: string;
  designation: string;
  category: 'management' | 'academic' | 'parent_rep';
  image: string;
  bio: string;
  quote?: string;
}

export const ManagingCommittee: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'management' | 'academic' | 'parent_rep'>('all');

  const members: CommitteeMember[] = [
    {
      name: "Shri Pawan Jain",
      role: "Chairman & Founder",
      designation: "Chairman, Pavna Educational Trust",
      category: "management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      bio: "A visionary industrialist and philanthropist dedicated to creating modern educational infrastructure in Western Uttar Pradesh.",
      quote: "Our goal is simple: to prepare students with global competence while keeping them anchored in strong Indian ethics."
    },
    {
      name: "Mrs. Sunita Jain",
      role: "Vice Chairperson",
      designation: "Educationist & Social Worker",
      category: "management",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      bio: "Spearheading child psychology initiatives and inclusive education models across all Pavna institutions.",
      quote: "Every child possesses a unique spark. Our duty is to provide the soil where that spark can flourish."
    },
    {
      name: "Dr. Rajesh Kumar Sharma",
      role: "Director Academics",
      designation: "Former Dean, Academic Excellence",
      category: "academic",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      bio: "Over 28 years of academic leadership experience in implementing CBSE and Cambridge curricula across premier schools.",
      quote: "Modern education must focus on critical thinking, coding literacy, and compassionate leadership."
    },
    {
      name: "Ms. Ananya Roy",
      role: "Principal & Member Secretary",
      designation: "Principal, Pavna International School",
      category: "academic",
      image: "https://images.unsplash.com/photo-1580894732413-a70d2a233499?auto=format&fit=crop&q=80&w=600",
      bio: "National Awardee educator with expertise in experiential learning, STEM integration, and student wellness.",
    },
    {
      name: "Er. Amit Singh",
      role: "Parent Representative",
      designation: "Senior Software Architect & PTA Member",
      category: "parent_rep",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      bio: "Active bridge between the parent community and management, ensuring technology integration in daily school life."
    },
    {
      name: "Dr. Meenakshi Verma",
      role: "CBSE Nominee Member",
      designation: "Professor of Education",
      category: "academic",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600",
      bio: "Appointed expert ensuring full compliance with the National Education Policy (NEP 2020) frameworks."
    }
  ];

  const filteredMembers = members.filter(m => filter === 'all' || m.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
            School Governance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            School Managing Committee
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our School Managing Committee (SMC) comprises esteemed educationists, community leaders, parent representatives, and administrative visionaries who guide the strategic growth of Pavna.
          </p>
        </div>

        {/* Chairman Feature Message */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />
          
          <div className="lg:col-span-4 text-center">
            <img
              src={members[0].image}
              alt={members[0].name}
              className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl mx-auto shadow-lg border-4 border-amber-500/20"
            />
            <h3 className="text-xl font-black text-slate-900 mt-4">{members[0].name}</h3>
            <p className="text-xs font-bold text-amber-600">{members[0].role}</p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <Quote className="w-10 h-10 text-amber-500/30" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              "We believe education is not merely preparation for life; education is life itself."
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              At Pavna International School, our vision is to establish a learning sanctuary where innovation meets traditional values. Our committee works relentlessly to ensure our students have access to top-tier academic facilities, global curricula, and nurturing mentors.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-bold text-blue-950">
              <span className="p-2 bg-blue-50 rounded-xl"><UserCheck className="w-4 h-4 text-amber-500" /></span>
              Guiding 1,500+ Students toward Academic & Personal Success
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center gap-2 flex-wrap">
          {[
            { id: 'all', label: 'All Committee Members' },
            { id: 'management', label: 'Trust & Management' },
            { id: 'academic', label: 'Academic Leadership' },
            { id: 'parent_rep', label: 'Parent Representatives' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-blue-950 text-white shadow-lg shadow-blue-950/20 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Committee Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-100 group-hover:border-amber-500 transition-colors"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-950 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-amber-600">{member.role}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{member.designation}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {member.bio}
                </p>

                {member.quote && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-700 italic">
                    "{member.quote}"
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">SMC Member</span>
                <span className="text-amber-500 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Profile <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};