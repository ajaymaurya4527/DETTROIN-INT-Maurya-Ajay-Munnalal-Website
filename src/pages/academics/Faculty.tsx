import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Mail, 
  Search, 
  Sparkles, 
  Star, 
  Users, 
  Briefcase,
} from 'lucide-react';

import { FeatureHighlightSection } from '../../components/FeatureHighlightSection';

interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department: 'STEM' | 'Humanities' | 'Languages' | 'Arts & Sports';
  qualification: string;
  experience: string;
  image: string;
  specialization: string;
  award?: string;
  bio: string;
}

export const Faculty: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const facultyMembers: FacultyMember[] = [
    {
      id: 'fac-1',
      name: 'Dr. Ananya Mukherjee',
      role: 'Head of Department - Physics & STEM',
      department: 'STEM',
      qualification: 'Ph.D. in Applied Physics (IIT Delhi)',
      experience: '16+ Years',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      specialization: 'Quantum Mechanics & Robotics',
      award: 'National Best Science Teacher Award 2024',
      bio: 'Pioneered the experiential STEM lab curriculum and mentored 40+ national science olympiad winners.'
    },
    {
      id: 'fac-2',
      name: 'Prof. Rajeshwar Verma',
      role: 'Senior Faculty - Advanced Mathematics',
      department: 'STEM',
      qualification: 'M.Sc. Mathematics (Delhi University)',
      experience: '14+ Years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      specialization: 'Calculus & Competitive Coding Logic',
      bio: 'Specializes in making complex mathematical concepts intuitive through interactive visual modeling.'
    },
    {
      id: 'fac-3',
      name: 'Ms. Sarah Jenkins',
      role: 'Lead Educator - English & World Literature',
      department: 'Languages',
      qualification: 'M.A. English Literature (Oxford University)',
      experience: '11+ Years',
      image: 'https://images.unsplash.com/photo-1580894732413-a70d2a233499?auto=format&fit=crop&q=80&w=600',
      specialization: 'Creative Writing & Model UN Coaching',
      award: 'Excellence in Humanities Pedagogy',
      bio: 'Fosters debate, critical thinking, and international literary appreciation through student publication circles.'
    },
    {
      id: 'fac-4',
      name: 'Dr. Suresh Kumar Pandey',
      role: 'Department Head - Social Sciences',
      department: 'Humanities',
      qualification: 'Ph.D. in Modern History (JNU)',
      experience: '18+ Years',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
      specialization: 'Geopolitics & Archaeology',
      bio: 'Curates interactive heritage walks and historical inquiry projects for secondary level students.'
    },
    {
      id: 'fac-5',
      name: 'Coach Vikram Athletic',
      role: 'Director of Physical Education & Sports',
      department: 'Arts & Sports',
      qualification: 'M.P.Ed, NIS Certified Coach',
      experience: '12+ Years',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
      specialization: 'Track & Field, Team Strategy',
      award: 'State Level Coach of the Year',
      bio: 'Has trained multiple state and national level athletics champions with focus on sports psychology.'
    },
    {
      id: 'fac-6',
      name: 'Mrs. Kavita Rao',
      role: 'Fine Arts & Design Mentor',
      department: 'Arts & Sports',
      qualification: 'M.F.A. Fine Arts (BHU)',
      experience: '9+ Years',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600',
      specialization: 'Visual Arts & Digital Illustration',
      bio: 'Guides students in building professional art portfolios for top international design universities.'
    }
  ];

  const departments = ['All', 'STEM', 'Humanities', 'Languages', 'Arts & Sports'];

  const filteredFaculty = facultyMembers.filter(member => {
    const matchesDept = activeDepartment === 'All' || member.department === activeDepartment;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-purple-950 p-8 sm:p-12 border border-indigo-500/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-400" /> Academic Leadership & Educators
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Meet Our World-Class Faculty
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our educators are thought leaders, researchers, and passionate mentors dedicated to unlocking intellectual curiosity, critical thinking, and character growth in every student.
            </p>
          </div>
        </div>

        {/* Highlight Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-slate-800/60 backdrop-blur-md p-5 rounded-2xl border border-slate-700/60 flex items-center gap-4">
            <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white">85%+</h4>
              <p className="text-xs text-slate-400">Post-Graduate & Ph.D. Faculty</p>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md p-5 rounded-2xl border border-slate-700/60 flex items-center gap-4">
            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white">12+ Yrs</h4>
              <p className="text-xs text-slate-400">Average Teaching Experience</p>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md p-5 rounded-2xl border border-slate-700/60 flex items-center gap-4">
            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white">1:12</h4>
              <p className="text-xs text-slate-400">Teacher to Student Ratio</p>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md p-5 rounded-2xl border border-slate-700/60 flex items-center gap-4">
            <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white">15+</h4>
              <p className="text-xs text-slate-400">National Awarded Educators</p>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeDepartment === dept
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by name or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-700 bg-slate-900/90 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-slate-800/80 backdrop-blur-lg rounded-3xl border border-slate-700/70 p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl h-56 bg-slate-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    {member.department}
                  </span>

                  {member.award && (
                    <div className="absolute bottom-3 left-3 right-3 bg-amber-500/90 backdrop-blur-md text-slate-950 text-[11px] font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-slate-950" /> {member.award}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-black text-white group-hover:text-indigo-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-indigo-400">{member.role}</p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-700/50 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{member.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Specialization: <strong className="text-slate-200">{member.specialization}</strong></span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-700/50 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">Experience: <strong className="text-white">{member.experience}</strong></span>
                <button className="text-indigo-400 font-bold hover:text-indigo-300 inline-flex items-center gap-1">
                  Contact <Mail className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <FeatureHighlightSection />

      </div>
    </div>
  );
};