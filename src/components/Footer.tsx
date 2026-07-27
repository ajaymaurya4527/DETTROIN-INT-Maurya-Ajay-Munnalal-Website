import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  Navigation, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  BookOpen, 
  UserCheck, 
  ShieldCheck,
  Send
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeCampus, setActiveCampus] = useState<number>(0);

  const campuses = [
    {
      name: "Pavna School, Aligarh",
      address: "Agra Highway, Near Gyan Mahavidyalaya, Aligarh - 202001, Uttar Pradesh, India",
      phone: "+91 8006409344",
      mapUrl: "https://maps.google.com/?q=Pavna+School+Aligarh",
      tag: "Main Campus"
    },
    {
      name: "Pavna International School, Sasni",
      address: "Aligarh–Agra Highway, Sasni, Hathras, Uttar Pradesh – 204216, India",
      phone: "+91 82669 54007",
      mapUrl: "https://maps.google.com/?q=Pavna+International+School+Sasni",
      tag: "International Wing"
    },
    {
      name: "Pavna School, Hathras",
      address: "8 Km Milestone on SH-33, Hathras–Mathura Road, Hathras – 204213 (U.P.), India",
      phone: "+91 7500182182",
      mapUrl: "https://maps.google.com/?q=Pavna+School+Hathras",
      tag: "Hathras Campus"
    }
  ];

  const navigation = {
    about: [
      { name: "Overview", href: "/about/overview" },
      { name: "CBSE & School Policies", href: "/about/policies" },
      { name: "Managing Committee", href: "/about/committee" },
      { name: "Latest Blog", href: "/blog" },
      { name: "Contact Us", href: "/contact" }
    ],
    academics: [
      { name: "Faculty & Educators", href: "/academics/faculty" },
      { name: "Assessment Policy", href: "/academics/assessment" },
      { name: "Beyond Academics", href: "/academics/beyond-academics" },
      { name: "Campus Infrastructure", href: "/about/infrastructure" }
    ],
    admissions: [
      { name: "Admission Process", href: "/admission/process" },
      { name: "Apply Online", href: "/admission/apply" },
      { name: "Interaction Syllabus", href: "/admission/syllabus" },
      { name: "Fee Structure", href: "/admission/fee-structure" },
      { name: "Admission Enquiry", href: "/admission/enquiry" },
      { name: "Download Prospectus", href: "/admission/prospectus" },
      { name: "FAQs", href: "/admission/faq" }
    ],
    studentAlumni: [
      { name: "Alumni Login", href: "/alumni/login" },
      { name: "Alumni Directory", href: "/alumni/directory" },
      { name: "Transfer Certificate", href: "/student/tc" },
      { name: "Residential Hostel", href: "/facilities/hostel" },
      { name: "Student Portal Login", href: "/student/login" }
    ]
  };

  return (
    <footer className="relative bg-slate-600 text-slate-200 pt-20 pb-12 overflow-hidden border-t-4 border-emerald-500 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      
      {/* Background Glows for Depth Separation */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP ROW: Distinct Contrast Header Banner */}
        <div className="grid lg:grid-cols-12 gap-8 pb-16 border-b border-slate-800 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Inspiring Excellence Since 1998</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              PAVNA <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">EDUCATIONAL INSTITUTIONS</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Empowering future leaders through holistic education, dynamic global curriculum, and unwavering core values.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-950/80 border border-slate-700/80 p-6 rounded-3xl shadow-2xl space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" /> Stay Connected With Us
            </h3>
            <p className="text-xs text-slate-400">Subscribe for school updates, admission alerts & news.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter parent email address..." 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
              />
              <button 
                type="submit" 
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 shadow-md shadow-emerald-500/20"
              >
                <span>Join</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* MIDDLE ROW: Campus Directory & Navigation Links */}
        <div className="grid lg:grid-cols-12 gap-12 py-16 border-b border-slate-800">
          
          {/* Campus Selector Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Our Campuses
              </h3>
              <span className="text-[10px] text-slate-400 font-semibold uppercase">3 Locations across UP</span>
            </div>

            {/* Campus Tab Selector */}
            <div className="flex flex-col gap-2">
              {campuses.map((campus, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCampus(idx)}
                  className={`text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                    activeCampus === idx 
                      ? 'bg-slate-950 border-emerald-400 shadow-lg text-white' 
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-950/80'
                  }`}
                >
                  <span className="text-xs font-bold">{campus.name}</span>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                    activeCampus === idx ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {campus.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Campus Detail Card */}
            <div className="bg-slate-950/90 border border-slate-800 p-5 rounded-2xl space-y-4">
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-slate-200 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{campuses[activeCampus].address}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <a 
                  href={`tel:${campuses[activeCampus].phone.replace(/\s+/g, '')}`} 
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{campuses[activeCampus].phone}</span>
                </a>

                <a 
                  href={campuses[activeCampus].mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors border border-slate-700"
                >
                  <Navigation className="w-3 h-3 text-emerald-400" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-white flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> About
              </h3>
              <ul className="space-y-2.5">
                {navigation.about.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      to={item.href} 
                      className="text-xs text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-white flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" /> Academics
              </h3>
              <ul className="space-y-2.5">
                {navigation.academics.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      to={item.href} 
                      className="text-xs text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admissions */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Admissions
              </h3>
              <ul className="space-y-2.5">
                {navigation.admissions.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      to={item.href} 
                      className="text-xs text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student & Alumni */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-white flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" /> Portal
              </h3>
              <ul className="space-y-2.5">
                {navigation.studentAlumni.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      to={item.href} 
                      className="text-xs text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM ROW: Copyright */}
        <div className="pt-8 text-center text-xs text-slate-400 font-medium">
          © {new Date().getFullYear()} Pavna Educational Institutions. All rights reserved. CBSE Affiliated.
        </div>

      </div>
    </footer>
  );
};