import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Trophy, 
  BookOpen, 
  Compass, 
  Target 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/Hero';

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-emerald-500 selection:text-slate-950">
      {/* Expanded Multi-Section Hero */}
      <HeroSection />

      {/* Feature Highlight Section matching dark slate/emerald theme */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>CBSE Affiliated • Premier Co-Ed Institution in Aligarh</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Inspiring Success, <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Nurturing Character.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Welcome to Pavna International School. We provide holistic education, world-class modern facilities, and a supportive environment designed to foster global leadership and ethical values.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                to="/admission/apply" 
                className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 font-black px-7 py-3.5 rounded-2xl text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/about/overview" 
                className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 text-slate-200 font-bold px-7 py-3.5 rounded-2xl text-xs uppercase tracking-wider hover:bg-slate-800 transition-all backdrop-blur-sm"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" /> Learn More
              </Link>
            </div>
          </div>

          {/* Right Highlight Card */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-emerald-500/30 p-8 rounded-3xl backdrop-blur-xl shadow-2xl space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-amber-400" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Why Choose Us</span>
              <h3 className="text-2xl font-black text-white">Why Pavna School?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Equipped with a 20+ acre green campus, state-of-the-art STEM laboratories, interactive smart classrooms, and international-standard sports infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <Compass className="w-4 h-4 text-emerald-400" />
                <div className="text-xs font-bold text-white">20+ Acres</div>
                <div className="text-[10px] text-slate-400">Eco-Friendly Campus</div>
              </div>
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <Target className="w-4 h-4 text-emerald-400" />
                <div className="text-xs font-bold text-white">Smart Labs</div>
                <div className="text-[10px] text-slate-400">AI & Robotics Ready</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2.5 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" /> 
              <span>100% CBSE Board Examination Result Standard</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};