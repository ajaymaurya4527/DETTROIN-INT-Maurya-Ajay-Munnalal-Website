import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-950 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>CBSE Affiliated • Premier Co-Ed Institution in Aligarh</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Inspiring Success, <br />
              <span className="text-blue-950">Nurturing Character.</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Welcome to Pavna International School. We provide holistic education, world-class modern facilities, and a supportive environment for global leadership.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/admission/apply" className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-7 py-3.5 rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about/overview" className="inline-flex items-center gap-2 bg-blue-950 text-white font-bold px-7 py-3.5 rounded-full hover:bg-blue-900 transition-all">
                Learn More
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-blue-950 text-white p-8 rounded-3xl shadow-xl space-y-4">
            <Trophy className="w-12 h-12 text-amber-400" />
            <h3 className="text-2xl font-bold">Why Pavna School?</h3>
            <p className="text-xs text-blue-200 leading-relaxed">
              Equipped with a 20+ acre green campus, modern STEM laboratories, smart classrooms, and international-standard sports fields.
            </p>
            <div className="pt-4 border-t border-blue-900 flex items-center gap-3 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-5 h-5" /> 100% CBSE Board Examination Result Standard
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};