import React, { useState } from 'react';
import { 
  Home as House, 
  ShieldCheck, 
  Utensils, 
  BookOpen, 
  Clock, 
  Sparkles, 
  Award, 
  HeartHandshake,  
  PhoneCall, 
  ArrowRight,
  ChevronRight,
  Quote,
  Compass,
  Check,
  Building2,
  TreePine,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hostel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'weekday' | 'weekend'>('weekday');

  const scheduleData = {
    weekday: [
      { time: '06:00 AM', title: 'Morning Rise & Fitness', desc: 'Yoga, jogging, and light conditioning on campus grounds.' },
      { time: '07:30 AM', title: 'Nutritious Breakfast', desc: 'Fresh fruits, organic vegetarian breakfast options, and warm beverages.' },
      { time: '08:30 AM - 03:30 PM', title: 'Academic Hours', desc: 'CBSE & Cambridge curriculum sessions, practical labs, and interactive learning.' },
      { time: '04:00 PM', title: 'Evening Refreshment & Sports', desc: 'Snacks followed by outdoor games, swimming, or athletic training.' },
      { time: '06:30 PM - 08:30 PM', title: 'Supervised Prep / Study', desc: 'Dedicated quiet study with resident faculty available for tutorial assistance.' },
      { time: '08:30 PM', title: 'Dinner & Social Time', desc: 'Community dining followed by common room recreation and reflection.' },
      { time: '10:00 PM', title: 'Lights Out', desc: 'Restful, quiet environment maintained across all residential wings.' }
    ],
    weekend: [
      { time: '07:30 AM', title: 'Extended Morning Routine', desc: 'Leisurely start followed by a wholesome breakfast.' },
      { time: '09:30 AM - 12:30 PM', title: 'Hobby & Club Activities', desc: 'Music, robotics, drama, art workshops, and competitive sports sessions.' },
      { time: '01:00 PM', title: 'Special Sunday Feast', desc: 'Curated multi-course organic vegetarian meals prepared by house chefs.' },
      { time: '03:00 PM - 06:00 PM', title: 'Excursions & Outings', desc: 'Supervised off-campus visits, films, or internal sports tournaments.' },
      { time: '07:00 PM', title: 'Call Home & Family Time', desc: 'Dedicated video call slots for staying connected with families.' },
      { time: '10:00 PM', title: 'Bedtime Rest', desc: 'Preparation for the upcoming academic week ahead.' }
    ]
  };

  const benefitsList = [
    'World-class curriculum: CBSE & Cambridge',
    'Supervised, safe & caring residential life',
    'Pure vegetarian, nutritious meals',
    'Air Conditioned Triple-sharing rooms with attached bathrooms'
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans selection:bg-amber-500/20 selection:text-amber-900">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-slate-950 text-white pt-16 pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Ambient Overlay */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1920&q=80" 
            alt="Pavna School Campus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Residential Life
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
              A Home Away From Home
            </h1>

            <p className="font-serif text-amber-200/90 text-lg sm:text-xl italic font-normal">
              Where Character Is Built Alongside Academics
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Pavna School Boarding Campus offers a nurturing, structured, and inspiring environment — giving every child the freedom to grow, learn, and thrive far beyond the ordinary classroom.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold">
              <Link 
                to="/contact" 
                className="bg-amber-600 hover:bg-amber-500 text-slate-950 px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-600/20 flex items-center gap-2 uppercase tracking-wider active:scale-[0.99]"
              >
                Book a Campus Tour <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/admissions" 
                className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                Boarding Admissions
              </Link>
            </div>
          </div>

          {/* Side Highlights Card */}
          <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-md p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center justify-between">
              Residential Key Highlights
              <Award className="w-5 h-5 text-amber-500" />
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl shrink-0 border border-amber-500/20">
                  <House className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Separate Boys & Girls Wings</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Air-conditioned triple-sharing rooms with attached modern bathrooms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl shrink-0 border border-amber-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">3-Tier Security System</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Biometric access control, 24/7 CCTV surveillance, and dedicated wardens.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl shrink-0 border border-amber-500/20">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Nutritious Organic Dining</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Four balanced, pure vegetarian meals planned daily by certified nutritionists.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Have specific questions?</span>
              <Link to="/contact" className="text-amber-400 font-semibold hover:underline flex items-center gap-1">
                Contact Warden <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Highlights (Three Cards) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-3xl border border-slate-200/80 shadow-xl space-y-3 hover:border-amber-500/40 transition-all group">
            <div className="p-3 bg-amber-50 w-fit rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Utensils className="w-7 h-7 text-amber-600 group-hover:text-white" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-lg">Hygienic Dining Hall</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Four balanced meals per day planned by nutritionists, prepared in a modern stainless-steel kitchen adhering to strict organic hygiene protocols.
            </p>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-slate-200/80 shadow-xl space-y-3 hover:border-amber-500/40 transition-all group">
            <div className="p-3 bg-amber-50 w-fit rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <BookOpen className="w-7 h-7 text-amber-600 group-hover:text-white" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-lg">Evening Tutorial Classes</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Resident teachers provide dedicated study assistance, individual doubt-solving, and homework support during structured evening prep hours.
            </p>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-slate-200/80 shadow-xl space-y-3 hover:border-amber-500/40 transition-all group">
            <div className="p-3 bg-amber-50 w-fit rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Clock className="w-7 h-7 text-amber-600 group-hover:text-white" />
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-lg">Structured Routine</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A balanced daily schedule covering physical fitness, academic rigor, recreational arts, social bonding, and disciplined rest.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Setting The Record Straight */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                Setting The Record Straight
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal leading-tight">
                The Truth About Boarding Schools Today
              </h2>
              <div className="w-16 h-1 bg-amber-600 rounded-full" />

              <p className="text-slate-600 text-sm leading-relaxed">
                There are many myths about boarding schools, often surrounded by half-truths, such as the idea that they’re cold, disconnected, or only available to children whose parents are unavailable. The truth about boarding schools, especially modern ones like Pavna, is something far more rewarding.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Today’s boarding school environment is different from traditional ones. It is warm, well-structured, and deeply intentional, where children develop new skills, independence, time management, and resilience, while building deep social bonds—qualities that no part-time schooling can achieve.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Research reflects that boarding students outperform their peers in academic discipline, emotional intelligence, and long-term career readiness. At Pavna School Boarding Campus, we have built a space where a child doesn’t just study; they discover who they are, what they love, and how to pursue it with integrity.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80" 
                  alt="Students studying together in library" 
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* Quote Block Inside Image */}
                <div className="absolute bottom-0 inset-x-0 p-8 text-white space-y-3">
                  <Quote className="w-8 h-8 text-amber-400 opacity-80" />
                  <blockquote className="font-serif text-lg sm:text-xl italic font-normal leading-snug">
                    “A great boarding school doesn’t take your child away from home. It gives them a second home, one that prepares them for the world.”
                  </blockquote>
                  <p className="text-xs text-amber-300 font-bold uppercase tracking-wider pt-1">
                    — Pavna School Philosophy
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Belief & Lasting Impact (Benefits Section) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider border border-amber-500/20">
                <Compass className="w-3.5 h-3.5" /> Core Belief
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
                The Real Benefits of Boarding That Last a Lifetime
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Understanding the true benefits of the Pavna school boarding campus goes beyond infrastructure. The real transformation happens when a child learns, grows, and lives in a purposefully designed environment.
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-4 pt-2">
                {benefitsList.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <div className="p-1 bg-amber-500 text-slate-950 rounded-full mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link 
                  to="/admissions" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 tracking-wider uppercase"
                >
                  Learn About Our Admissions Process <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80" 
                alt="Sports Activities" 
                className="rounded-2xl object-cover h-64 w-full shadow-lg border border-slate-800"
              />
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                alt="Dining Hall Socializing" 
                className="rounded-2xl object-cover h-64 w-full shadow-lg border border-slate-800 mt-8"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. What We Offer Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900">
            World-Class Facilities, Rooted in Purpose
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
            Every feature of our boarding campus is designed with one aim: to give your child the best possible foundation for life.
          </p>
        </div>

        {/* Feature Banner: Nestled in Nature */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">A Home Away From Home</span>
            <h3 className="font-serif text-2xl sm:text-3xl">Premium Boarding Facilities Nestled in Nature</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Set in a serene, green campus away from city noise, our boarding facilities provide children with the calm and space they need to focus, reflect, and recharge—a true home away from home.
            </p>
          </div>
          <TreePine className="absolute right-6 bottom-6 w-48 h-48 text-slate-800/40 pointer-events-none stroke-[1]" />
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4 hover:shadow-xl transition-shadow">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl w-fit">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h4 className="font-serif font-bold text-xl text-slate-900">Pastoral Care</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated house parents ensuring emotional well-being and academic support around the clock.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4 hover:shadow-xl transition-shadow">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl w-fit">
              <Utensils className="w-7 h-7" />
            </div>
            <h4 className="font-serif font-bold text-xl text-slate-900">Nutritional Advantage</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Organic, balanced vegetarian meals with specialized nutritional options available for dietary needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4 hover:shadow-xl transition-shadow">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl w-fit">
              <Building2 className="w-7 h-7" />
            </div>
            <h4 className="font-serif font-bold text-xl text-slate-900">Smart Living</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Modern dormitories with air purification, air conditioning, and biometric access control for total peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Interactive Routine Schedule */}
      <section className="py-20 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
              Daily Routine
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal">
              A Structured Life for Total Growth
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
              Structuring the day helps students balance academics, physical fitness, personal study, and recreation.
            </p>

            {/* Tab Switcher */}
            <div className="flex justify-center gap-3 pt-6">
              <button
                onClick={() => setActiveTab('weekday')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'weekday'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Weekday Schedule
              </button>
              <button
                onClick={() => setActiveTab('weekend')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'weekend'
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Weekend Schedule
              </button>
            </div>
          </div>

          {/* Routine List */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-lg space-y-3">
            {scheduleData[activeTab].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-300/60 transition-colors gap-2 sm:gap-6"
              >
                <div className="flex items-center gap-3 text-amber-700 font-semibold text-xs min-w-[180px]">
                  <Clock className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>{item.time}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              Experience Pavna Boarding Campus Firsthand
            </h3>
            <p className="text-amber-100 text-xs sm:text-sm max-w-xl">
              Schedule a campus tour, speak with our resident house parents, and explore our state-of-the-art facilities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <Link 
              to="/contact" 
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl text-xs transition-all shadow-md uppercase tracking-wider flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Book Campus Tour
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};