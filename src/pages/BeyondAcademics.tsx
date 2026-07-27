
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Music, 
  Trophy, 
  Sparkles, 
  HeartHandshake, 
  Globe, 
  ArrowRight, 
  ChevronRight,  
  Award, 
  Users, 
  Flame 
} from 'lucide-react';

export const BeyondAcademics: React.FC = () => {

  const activities = [
    {
      id: 'arts',
      icon: <Palette className="w-5 h-5 text-amber-400" />,
      title: "Creative & Visual Arts",
      category: "Expressive Arts",
      description: "Painting, sculpture, pottery, and digital design studios where students explore form, color, and medium to express their vision.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop",
      highlights: ["3D Clay & Pottery Studio", "Digital Illustration & Animation", "Fine Arts Exhibitions"],
      link: "/beyond-academics/visual-arts"
    },
    {
      id: 'music',
      icon: <Music className="w-5 h-5 text-amber-400" />,
      title: "Performing Arts & Music",
      category: "Stage & Sound",
      description: "Indian classical and western vocal training, multi-instrumental ensembles, and theatrical productions that build stage presence.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Orchestral Ensembles", "Annual Theatre Production", "Acoustic Vocal Labs"],
      link: "/beyond-academics/performing-arts"
    },
    {
      id: 'sports',
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      title: "Competitive Athletics & Sports",
      category: "Physical Mastery",
      description: "Professional coaching in cricket, football, basketball, Olympic-sized swimming, archery, and taekwondo.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1000&auto=format&fit=crop",
      highlights: ["State-of-the-Art AstroTurf", "Olympic Spec Pool", "National Level Coaches"],
      link: "/beyond-academics/sports"
    },
    {
      id: 'clubs',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      title: "Clubs & Societies",
      category: "Intellectual Pursuits",
      description: "Robotics club, Model United Nations (MUN), Literary society, Eco club, and Debate forums fostering critical inquiry.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
      highlights: ["VEX Robotics Competitions", "Annual MUN Conference", "Debating Society"],
      link: "/beyond-academics/clubs"
    },
    {
      id: 'outreach',
      icon: <HeartHandshake className="w-5 h-5 text-amber-400" />,
      title: "Community Outreach & Service",
      category: "Social Leadership",
      description: "Social awareness drives, tree plantation initiatives, and community partnership projects building empathetic citizens.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Rural Education Partnerships", "Environmental Eco-Drives", "Social Impact Grants"],
      link: "/beyond-academics/community"
    },
    {
      id: 'global',
      icon: <Globe className="w-5 h-5 text-amber-400" />,
      title: "Global Exposure & Immersions",
      category: "World View",
      description: "International student exchange programs, overseas university visits, and cross-cultural collaborative summits.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Global Student Exchange", "International Summits", "Cultural Exchanges"],
      link: "/beyond-academics/global-exposure"
    }
  ];

  return (
    <div className="bg-[#090d16] text-slate-100 min-h-screen font-sans selection:bg-violet-500 selection:text-white relative overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-violet-600/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-[40%] -left-40 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* SECTION 1: HERO SPOTLIGHT */}
      <section className="relative pt-16 pb-20 border-b border-indigo-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex justify-start mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-violet-800/50 text-violet-300 text-xs font-bold uppercase tracking-widest shadow-xl shadow-violet-950/50 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Co-Curricular Life • Beyond Academics</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Nurturing Passions, <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
                  Inspiring Purpose.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                Our school fosters a vibrant, dynamic ecosystem where students explore, engage, and excel beyond conventional classrooms. Through creative arts, athletics, global summits, and community initiatives, we cultivate well-rounded leaders equipped for the future.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link 
                  to="/admission/apply" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 hover:opacity-95 text-white font-black px-7 py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-violet-900/40 transition-all hover:scale-[1.02]"
                >
                  Explore Admissions <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="#activities" 
                  className="inline-flex items-center gap-2 bg-slate-900/90 border border-violet-900/50 text-slate-200 font-bold px-7 py-4 rounded-2xl text-xs uppercase tracking-widest hover:border-violet-500/60 transition-all backdrop-blur-xl"
                >
                  View All Programs <ChevronRight className="w-4 h-4 text-violet-400" />
                </a>
              </div>

              {/* Stat Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">25+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Clubs</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">12+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sports Arenas</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student Participation</div>
                </div>
              </div>
            </div>

            {/* Right Editorial Hero Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-violet-900/40 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop" 
                  alt="Student Performing on Stage" 
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/80 border border-violet-500/30 backdrop-blur-xl space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4" /> Creative Mastery
                  </div>
                  <p className="text-xs text-slate-300">
                    Encouraging self-expression, stage confidence, and artistic exploration every day.
                  </p>
                </div>
              </div>

              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-violet-600/30 to-amber-500/20 blur-xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: GRID OF CO-CURRICULAR OPPORTUNITIES */}
      <section id="activities" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">A World of Opportunity</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Explore Our Spheres of Excellence</h2>
          <p className="text-slate-400 text-sm">
            From stage performances to robotics labs and athletics, discover where your passions lie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act) => (
            <div 
              key={act.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-violet-500/50 rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-xl"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={act.image} 
                    alt={act.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-slate-200 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-700 backdrop-blur-md uppercase tracking-wider">
                    {act.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-violet-950/80 border border-violet-800/50">
                      {act.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                      {act.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {act.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    {act.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-6 pt-0">
                <Link 
                  to={act.link} 
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-violet-300 hover:text-white bg-slate-950/60 border border-slate-800 hover:border-violet-600/50 py-3 px-4 rounded-xl transition-all"
                >
                  <span>Discover Program</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: HOLISTIC PHILOSOPHY & IMPACT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-violet-900/40 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Paradigm</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Why Co-Curricular Engagement Matters</h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                True education extends beyond test scores. Participating in team sports builds resilience and empathy; mastering an instrument sharpens discipline and focus; participating in Model UN strengthens public speaking and international awareness.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-violet-400 font-bold text-xs">
                    <Users className="w-4 h-4" /> Teamwork & Leadership
                  </div>
                  <p className="text-[11px] text-slate-400">Collaborative projects that build confidence and communication.</p>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                    <Flame className="w-4 h-4" /> Character & Grit
                  </div>
                  <p className="text-[11px] text-slate-400">Competitive athletic events teaching perseverance and fair play.</p>
                </div>
              </div>
            </div>

            {/* Visual Accent Box */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-violet-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1000&auto=format&fit=crop" 
                  alt="Students Working Together" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION BANNER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-violet-950/80 via-slate-900 to-indigo-950/80 border border-violet-800/40 p-8 sm:p-12 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-black text-white">Ready to Discover Your Talent?</h3>
            <p className="text-xs sm:text-sm text-slate-400">Schedule a campus visit or get in touch with our co-curricular coordinators.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link 
              to="/contact" 
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider border border-slate-700 transition-all"
            >
              Contact Us
            </Link>
            <Link 
              to="/admission/apply" 
              className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-violet-900/40 flex items-center gap-2"
            >
              Apply Online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};