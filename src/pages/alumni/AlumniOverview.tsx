import React, { useState } from 'react';
import { 
  Users, 
  Globe, 
  Award, 
  Briefcase, 
  Sparkles, 
  Search, 
  MapPin,
  ExternalLink,
  Calendar,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SpotlightAlumnus {
  id: string;
  name: string;
  batch: string;
  role: string;
  company: string;
  location: string;
  image: string;
  achievement: string;
}

export const AlumniOverview: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const spotlightAlumni: SpotlightAlumnus[] = [
    {
      id: 'alm-1',
      name: 'Rohan Sharma',
      batch: 'Class of 2018',
      role: 'Senior Software Engineer',
      company: 'Google Cloud',
      location: 'Bengaluru, India',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
      achievement: 'Pioneered AI search infrastructure components serving millions of global users.'
    },
    {
      id: 'alm-2',
      name: 'Priya Verma',
      batch: 'Class of 2016',
      role: 'Investment Analyst',
      company: 'Goldman Sachs',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      achievement: 'Managed $50M fintech growth funds across emerging markets in Europe & Asia.'
    },
    {
      id: 'alm-3',
      name: 'Dr. Siddharth Mehta',
      batch: 'Class of 2014',
      role: 'Biomedical Researcher',
      company: 'Stanford Medicine',
      location: 'California, USA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      achievement: 'Published 12+ international research papers on non-invasive gene therapy.'
    },
    {
      id: 'alm-4',
      name: 'Ananya Deshmukh',
      batch: 'Class of 2020',
      role: 'Founder & CEO',
      company: 'EcoPack Solutions',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1580894732413-a70d2a233499?auto=format&fit=crop&q=80&w=600',
      achievement: 'Featured in Forbes 30 Under 30 for sustainable biodegradable packaging tech.'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Global Alumni Reunion Summit 2026',
      date: 'Dec 18, 2026',
      location: 'Grand Campus Auditorium & Hybrid Stream',
      type: 'Reunion'
    },
    {
      title: 'Mentorship & Career Connect Workshop',
      date: 'Sep 25, 2026',
      location: 'Virtual Zoom Lounge',
      type: 'Webinar'
    }
  ];

  const filteredAlumni = spotlightAlumni.filter(person => {
    const matchesBatch = selectedBatch === 'All' || person.batch.includes(selectedBatch);
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          person.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBatch && matchesSearch;
  });

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-8 sm:py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Modern Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 p-6 sm:p-12 border border-emerald-500/20 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Alumni Network & Global Community
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Inspiring Success, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Connected for Life.
              </span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Our alumni network spans over 25+ countries, shaping leadership in technology, healthcare, business, and research. Join the portal to connect, mentor, and collaborate.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
              <Link 
                to="/alumni/registration" 
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 text-center"
              >
                Join Alumni Directory
              </Link>
              <a 
                href="#spotlight" 
                className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold px-6 py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all text-center"
              >
                Explore Spotlight
              </a>
            </div>
          </div>
        </div>

        {/* Global Impact Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-900/80 backdrop-blur-lg p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-colors">
            <div className="p-2.5 w-fit bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">5,000+</h3>
            <p className="text-xs text-slate-400 font-medium">Registered Alumni</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-lg p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-colors">
            <div className="p-2.5 w-fit bg-teal-500/10 text-teal-400 rounded-xl">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">25+</h3>
            <p className="text-xs text-slate-400 font-medium">Countries Represented</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-lg p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-colors">
            <div className="p-2.5 w-fit bg-cyan-500/10 text-cyan-400 rounded-xl">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">300+</h3>
            <p className="text-xs text-slate-400 font-medium">Top Global Employers</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-lg p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-colors">
            <div className="p-2.5 w-fit bg-amber-500/10 text-amber-400 rounded-xl">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">$2M+</h3>
            <p className="text-xs text-slate-400 font-medium">Alumni Scholarships Funded</p>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">Upcoming Alumni Gatherings</h2>
              <p className="text-xs text-slate-400 mt-1">Connect in-person and virtually with fellow graduates.</p>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 w-fit">
              Session 2026-27
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-md">
                    {event.type}
                  </span>
                  <h3 className="font-bold text-base text-white">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-emerald-400" /> {event.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> {event.location}</span>
                  </div>
                </div>
                <button className="text-xs font-bold text-emerald-400 hover:text-emerald-300 w-fit inline-flex items-center gap-1">
                  RSVP for Event <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Spotlight Showcase Section */}
        <div id="spotlight" className="space-y-8 scroll-mt-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Global Success Stories</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">Alumni Spotlight</h2>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search alumni or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-800 bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500"
              >
                <option value="All">All Batches</option>
                <option value="2020">2020 Batch</option>
                <option value="2018">2018 Batch</option>
                <option value="2016">2016 Batch</option>
                <option value="2014">2014 Batch</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAlumni.map((alumnus) => (
              <div
                key={alumnus.id}
                className="bg-slate-900/90 rounded-3xl border border-slate-800 p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-950">
                    <img
                      src={alumnus.image}
                      alt={alumnus.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 bg-emerald-500/90 text-slate-950 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                      {alumnus.batch}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-white group-hover:text-emerald-400 transition-colors">
                      {alumnus.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400">{alumnus.role}</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1 pt-0.5">
                      <Building2 className="w-3.5 h-3.5 shrink-0 text-slate-500" /> {alumnus.company}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                    {alumnus.achievement}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-[11px]"><MapPin className="w-3 h-3 text-slate-500" /> {alumnus.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};