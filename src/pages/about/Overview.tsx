import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  Compass, 
  ShieldCheck,  
  BookOpen, 
  Flame, 
  HeartHandshake, 
  Eye, 
  Brain, 
  Globe2, 
  ArrowRight, 
  Award,
  CheckCircle2,
  XCircle,
  Quote
} from 'lucide-react';

import { FeatureHighlightSection } from '../../components/FeatureHighlightSection';

export const Overview: React.FC = () => {
  const [activeEcosystemTab, setActiveEcosystemTab] = useState<'students' | 'parents' | 'curriculum'>('students');

  const coreValues = [
    {
      title: 'Resilience',
      tagline: 'Persevere with Grace',
      desc: 'To persevere through challenges with courage, adaptability, and grace.',
      icon: ShieldCheck,
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Hustle',
      tagline: 'Passion & Purpose',
      desc: 'To bring passion, initiative, and determination to every pursuit.',
      icon: Flame,
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Compassion',
      tagline: 'Kindness in Action',
      desc: 'To act with empathy and kindness toward all living beings.',
      icon: HeartHandshake,
      color: 'from-rose-500 to-pink-600',
    },
    {
      title: 'Respect',
      tagline: 'Honor & Integrity',
      desc: 'To honor self, others, nature, and the truth that binds them all.',
      icon: Compass,
      color: 'from-indigo-500 to-blue-600',
    },
    {
      title: 'Curiosity',
      tagline: 'Boundaryless Inquiry',
      desc: 'To question, explore, and seek knowledge beyond boundaries.',
      icon: Eye,
      color: 'from-cyan-500 to-teal-600',
    },
    {
      title: 'Intellect',
      tagline: 'Critical Reasoning',
      desc: 'To think critically, reason deeply, and make informed, ethical choices.',
      icon: Brain,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Inclusivity',
      tagline: 'Unity in Diversity',
      desc: 'To embrace diversity, respect differences, and build unity in community.',
      icon: Globe2,
      color: 'from-fuchsia-500 to-pink-600',
    },
  ];

  return (
    <div className="bg-[#090d16] text-slate-100 min-h-screen font-sans selection:bg-violet-500 selection:text-white relative overflow-hidden">
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-violet-600/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-[35%] -right-40 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* SECTION 1: HERO SHOWCASE WITH FULL-WIDTH IMAGE & OVERLAY */}
      <section className="relative pt-16 pb-24 border-b border-indigo-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Badge */}
          <div className="flex justify-start mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-violet-800/50 text-violet-300 text-xs font-bold uppercase tracking-widest shadow-xl shadow-violet-950/50 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>About Pavna • 28 Years of Legacy</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Shaping Leaders, <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
                  Inspiring Purpose.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                For nearly three decades, Pavna International School in Aligarh has cultivated a vibrant learning ecosystem—blending academic rigor, modern facilities, and socio-emotional grounding to nurture young minds.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link 
                  to="/admission/apply" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 hover:opacity-95 text-white font-black px-7 py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-violet-900/40 transition-all hover:scale-[1.02]"
                >
                  Apply For Admission <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/admission/prospectus" 
                  className="inline-flex items-center gap-2 bg-slate-900/90 border border-violet-900/50 text-slate-200 font-bold px-7 py-4 rounded-2xl text-xs uppercase tracking-widest hover:border-violet-500/60 transition-all backdrop-blur-xl"
                >
                  <BookOpen className="w-4 h-4 text-violet-400" /> Download Prospectus
                </Link>
              </div>

              {/* Stat Highlights Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">28+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Years Legacy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Board Success</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">20+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Acres Campus</div>
                </div>
              </div>

            </div>

            {/* Right Side Editorial Image Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-violet-900/40 shadow-2xl group">
                {/* High quality campus / student image */}
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
                  alt="Pavna International School Campus" 
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent" />
                
                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/80 border border-violet-500/30 backdrop-blur-xl space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4" /> Academic Excellence
                  </div>
                  <p className="text-xs text-slate-300">
                    Nurturing intellect, creativity, and values in a state-of-the-art campus environment.
                  </p>
                </div>
              </div>

              {/* Decorative Glow Ring Behind Image */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-violet-600/30 to-amber-500/20 blur-xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: VISION & MISSION WITH IMAGE BACKGROUND SPOTLIGHT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Guiding Light</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Vision & Mission</h2>
          <p className="text-slate-400 text-sm">
            Empowering every learner to live with purpose, lead with humility, and learn continuously.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Vision Box */}
          <div className="relative rounded-3xl overflow-hidden border border-violet-900/40 group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" 
              alt="Pavna Vision" 
              className="w-full h-full min-h-[380px] object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/85 to-[#090d16]/60" />

            <div className="relative p-8 sm:p-10 space-y-6 z-10 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-400/30 flex items-center justify-center text-violet-300">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Our Vision</span>
                  <h3 className="text-2xl font-black text-white mt-1">To Enable Every Learner</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To enable every learner to become the best version of themselves – confident in their identity, grounded in values, and inspired to learn, lead, and live with purpose.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-start gap-3 text-xs text-slate-400 italic">
                <Quote className="w-5 h-5 text-violet-400 shrink-0" />
                <span>Blending intellect with humility, tradition with innovation, and ambition with compassion.</span>
              </div>
            </div>
          </div>

          {/* Mission Box */}
          <div className="relative rounded-3xl overflow-hidden border border-violet-900/40 group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop" 
              alt="Pavna Mission" 
              className="w-full h-full min-h-[380px] object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/85 to-[#090d16]/60" />

            <div className="relative p-8 sm:p-10 space-y-6 z-10 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Mission</span>
                  <h3 className="text-2xl font-black text-white mt-1">Nurturing Growth & Purpose</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To provide a nurturing educational environment where every learner feels valued, respected, empowered to reach their full potential, and express themselves freely.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-start gap-3 text-xs text-slate-400 italic">
                <Quote className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Delivering holistic, experiential, inquiry-led learning that shapes confident and curious minds.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE PAVNA ETHOS (SEVEN CORE VALUES - GRID WITH GLOW CARDS) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">The Pavna Ethos</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Seven Timeless Core Values</h2>
          <p className="text-slate-400 text-sm">
            Core principles shaping character and culture across our learning communities.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/60 border border-slate-800 hover:border-violet-500/50 p-6 rounded-3xl backdrop-blur-xl space-y-4 transition-all duration-300 hover:-translate-y-1.5 group shadow-xl"
              >
                <div className="flex justify-between items-center">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${val.color} text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                    {val.tagline}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE ECOSYSTEM COMPARISON */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">A Paradigm Shift</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Pavna vs. Traditional Schooling</h2>
          <p className="text-slate-400 text-sm">
            Explore how we redefine schooling across students, parents, and curriculum.
          </p>

          {/* Pillar Switcher */}
          <div className="inline-flex p-1.5 bg-slate-900 border border-slate-800 rounded-2xl gap-2 mt-4">
            <button
              onClick={() => setActiveEcosystemTab('students')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeEcosystemTab === 'students' 
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/40' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveEcosystemTab('parents')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeEcosystemTab === 'parents' 
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/40' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Parents
            </button>
            <button
              onClick={() => setActiveEcosystemTab('curriculum')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeEcosystemTab === 'curriculum' 
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/40' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Curriculum
            </button>
          </div>
        </div>

        {/* Dynamic Matrix Box */}
        <div className="grid md:grid-cols-2 gap-8 bg-slate-900/60 border border-violet-900/40 p-8 sm:p-12 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {/* Traditional Schools */}
          <div className="space-y-4 border-b md:border-b-0 md:border-r border-slate-800/80 pb-8 md:pb-0 md:pr-8">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-widest">
              <XCircle className="w-4 h-4" /> Traditional Schools
            </div>
            <h3 className="text-xl font-bold text-white">Conventional Approach</h3>
            
            <div className="space-y-3 pt-2">
              {activeEcosystemTab === 'students' && (
                <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                  Heavy reliance on homework, repetitive assignments, and assessment prep centered strictly around rote learning.
                </p>
              )}
              {activeEcosystemTab === 'parents' && (
                <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                  Transactional engagement restricted to standard PTMs and periodic numerical report cards.
                </p>
              )}
              {activeEcosystemTab === 'curriculum' && (
                <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                  Fixed static curriculum where academic rigor is centered almost entirely around memorization.
                </p>
              )}
            </div>
          </div>

          {/* Pavna Schools */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest">
              <CheckCircle2 className="w-4 h-4" /> Pavna Schools
            </div>
            <h3 className="text-xl font-bold text-white">Learner-Led Ecosystem</h3>
            
            <div className="space-y-3 pt-2">
              {activeEcosystemTab === 'students' && (
                <div className="text-xs text-slate-200 leading-relaxed bg-violet-950/40 p-5 rounded-2xl border border-violet-800/40 space-y-2">
                  <p>• Learner-led communities imparting Socio-Emotional and Ethical Learning (SEEL).</p>
                  <p>• Meaningful and impactful conversations focused on self and community engagement.</p>
                </div>
              )}
              {activeEcosystemTab === 'parents' && (
                <div className="text-xs text-slate-200 leading-relaxed bg-violet-950/40 p-5 rounded-2xl border border-violet-800/40 space-y-2">
                  <p>• Parent learning interventions and co-architecting education.</p>
                  <p>• Ongoing feedback loops and active co-curricular participation.</p>
                </div>
              )}
              {activeEcosystemTab === 'curriculum' && (
                <div className="text-xs text-slate-200 leading-relaxed bg-violet-950/40 p-5 rounded-2xl border border-violet-800/40 space-y-2">
                  <p>• Inquiry-based learning, year-long calendars, and Montessori systems.</p>
                  <p>• Co-curricular and super-curricular activities treated as essential pillars.</p>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Footer Link Navigation CTA Banner */}
        <FeatureHighlightSection/>

      </section>

    </div>
  );
};