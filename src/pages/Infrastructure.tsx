import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  ShieldCheck, 
  Dumbbell, 
  BookOpen, 
  Wifi, 
  Bus, 
  Atom, 
  FlaskConical, 
  Gamepad2, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Activity, 
  Eye 
} from 'lucide-react';

export const Infrastructure: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academic' | 'sports' | 'safety'>('all');

  const facilities = [
    {
      id: 'physics',
      category: 'academic',
      icon: <Atom className="w-5 h-5 text-amber-400" />,
      title: "Advanced Physics Laboratory",
      tagline: "Experiencing Fundamental Laws of Nature",
      description: "Explore the fundamental principles of the universe in our advanced Physics Lab. Equipped with precision optics, electromagnetic rigs, and digital sensor arrays where students transition from theory to hands-on experimental discovery.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Digital Motion Sensors", "Optics & Laser Setup", "Expert Faculty Supervision"],
      link: "/infrastructure/physics-lab"
    },
    {
      id: 'chemistry',
      category: 'academic',
      icon: <FlaskConical className="w-5 h-5 text-amber-400" />,
      title: "Modern Chemistry Suite",
      tagline: "Precision Analytics & Molecular Science",
      description: "A state-of-the-art laboratory featuring modern fume hoods, digital titration stations, and organic synthesis units designed under strict safety protocols for real-world chemical research.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Fume Extraction Hoods", "Spectrophotometer Workstations", "Emergency Safety Showers"],
      link: "/infrastructure/chemistry-lab"
    },
    {
      id: 'computer',
      category: 'academic',
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      title: "STEM & Computer Innovations Lab",
      tagline: "Coding, AI & Robotics Hub",
      description: "Dedicated technology workstation lab equipped with high-speed computing rigs, 3D printing equipment, IoT developmental boards, and VEX robotics kits for practical software and hardware engineering.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Gigabit Fiber Ethernet", "3D Rapid Prototyping", "AI & Robotics Kits"],
      link: "/infrastructure/computer-lab"
    },
    {
      id: 'sports',
      category: 'sports',
      icon: <Dumbbell className="w-5 h-5 text-amber-400" />,
      title: "Olympic-Standard Sports Arenas",
      tagline: "Athletic Excellence & Physical Mastery",
      description: "Sprawling multi-sport complex featuring a FIFA-grade AstroTurf football pitch, professional synthetic basketball courts, lawn tennis arenas, archery ranges, and an indoor heated swimming pool.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop",
      highlights: ["FIFA-Grade AstroTurf", "Heated Indoor Pool", "National Certified Coaches"],
      link: "/infrastructure/sports-complex"
    },
    {
      id: 'playroom',
      category: 'sports',
      icon: <Gamepad2 className="w-5 h-5 text-amber-400" />,
      title: "Early Years Exploratory Playroom",
      tagline: "Motor Skill & Social Development",
      description: "A vibrant, child-safe indoor arena engineered with soft-surfaced play zones, sensory activity modules, and tactical games to develop cognitive ability and motor coordination in younger learners.",
      image: "https://images.unsplash.com/photo-1566454825481-4e48f80aa4d7?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Child-Safe Non-Toxic Materials", "Sensory Activity Wall", "Monitored Interactive Play"],
      link: "/infrastructure/playroom"
    },
    {
      id: 'classrooms',
      category: 'academic',
      icon: <Wifi className="w-5 h-5 text-amber-400" />,
      title: "Smart Interactive Classrooms",
      tagline: "Digitally Augmented Learning Spaces",
      description: "Ergonomically designed classrooms fitted with ultra-definition interactive smartboards, high-speed Wi-Fi, acoustic wall paneling, and climate control to optimize student engagement and focus.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
      highlights: ["4K Interactive Smartboards", "Ergonomic Modular Seating", "High-Speed Campus Wi-Fi"],
      link: "/infrastructure/smart-classrooms"
    },
    {
      id: 'library',
      category: 'academic',
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
      title: "Digital Library & Resource Center",
      tagline: "Knowledge Repository & Research Hub",
      description: "Housing over 15,000+ print titles along with digital terminal access to global scientific journals, research databases, audiobooks, and quiet collaborative study pods.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop",
      highlights: ["15,000+ Print Volumes", "Digital Research Terminals", "Acoustic Quiet Pods"],
      link: "/infrastructure/digital-library"
    },
    {
      id: 'transport',
      category: 'safety',
      icon: <Bus className="w-5 h-5 text-amber-400" />,
      title: "GPS-Tracked AC Transport Fleet",
      tagline: "Safe, Monitored & Comfortable Transit",
      description: "Comprehensive air-conditioned bus fleet operating across city routes. Fully equipped with real-time GPS location tracking, speed governors, speed-alert alarms, and trained female attendants.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Real-Time GPS Tracking App", "Female Bus Attendants", "Speed Governed AC Fleet"],
      link: "/infrastructure/transportation"
    },
    {
      id: 'security',
      category: 'safety',
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: "24/7 Campus Security & Health Wing",
      tagline: "Round-the-Clock Safety & Medical Care",
      description: "Complete peace of mind with 360-degree CCTV coverage, gated access control, verified personnel, and a fully equipped 4-bed infirmary managed by a resident qualified nurse.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
      highlights: ["360° CCTV Surveillance", "Resident Qualified Nurse", "Biometric Gate Access"],
      link: "/infrastructure/security-health"
    }
  ];

  const filteredFacilities = activeCategory === 'all' 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  return (
    <div className="bg-[#090d16] text-slate-100 min-h-screen font-sans selection:bg-violet-500 selection:text-white relative overflow-hidden">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-violet-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-[45%] -right-40 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 border-b border-indigo-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex justify-start mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-violet-800/50 text-violet-300 text-xs font-bold uppercase tracking-widest shadow-xl shadow-violet-950/50 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Campus & Facilities • World-Class Infrastructure</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                State-of-the-Art <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
                  Environments for Growth.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                Our state-of-the-art infrastructure is thoughtfully designed to support holistic learning in a safe, secure, and inspiring environment. From advanced laboratories and modern digital learning spaces to athletic arenas and health wings, every space empowers students to explore new possibilities and excel.
              </p>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link 
                  to="/campus-tour" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 hover:opacity-95 text-white font-black px-7 py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-violet-900/40 transition-all hover:scale-[1.02]"
                >
                  Book Campus Tour <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="#facilities-grid" 
                  className="inline-flex items-center gap-2 bg-slate-900/90 border border-violet-900/50 text-slate-200 font-bold px-7 py-4 rounded-2xl text-xs uppercase tracking-widest hover:border-violet-500/60 transition-all backdrop-blur-xl"
                >
                  Explore Facilities <ChevronRight className="w-4 h-4 text-violet-400" />
                </a>
              </div>

              {/* Quick Campus Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">20+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Acres Green Campus</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CCTV & GPS Coverage</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">12+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Specialized Labs</div>
                </div>
              </div>
            </div>

            {/* Right Hero Feature Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-violet-900/40 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern School Campus Building" 
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/85 border border-violet-500/30 backdrop-blur-xl space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" /> Eco-Friendly Architecture
                  </div>
                  <p className="text-xs text-slate-300">
                    Solar-powered, green, and ergonomically engineered to cultivate focus and creativity.
                  </p>
                </div>
              </div>

              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-violet-600/30 to-amber-500/20 blur-xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* FACILITIES FILTER & GRID SECTION */}
      <section id="facilities-grid" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Designed For Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Explore Campus Amenities</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Discover our cutting-edge spaces built to empower innovation, safety, and physical development.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Facilities' },
              { id: 'academic', label: 'Labs & Academics' },
              { id: 'sports', label: 'Sports & Play' },
              { id: 'safety', label: 'Safety & Transit' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/50'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((fac) => (
            <div 
              key={fac.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-violet-500/50 rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-xl"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={fac.image} 
                    alt={fac.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-amber-300 bg-slate-950/85 px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-md uppercase tracking-wider">
                    {fac.tagline}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-violet-950/80 border border-violet-800/50 shrink-0">
                      {fac.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                      {fac.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {fac.description}
                  </p>

                  {/* Highlight Features */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    {fac.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                <Link 
                  to={fac.link} 
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-violet-300 hover:text-white bg-slate-950/60 border border-slate-800 hover:border-violet-600/50 py-3 px-4 rounded-xl transition-all"
                >
                  <span>Explore Facility Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAFETY, WELLNESS & LIVING PHILOSOPHY SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-violet-900/40 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Uncompromising Standard</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Safety, Comfort & Peace of Mind</h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                A great learning environment starts with complete security and wellbeing. From our air-conditioned bus fleet equipped with live app-based GPS tracking to 24/7 CCTV surveillance and an on-campus health wing with qualified medical staff, we guarantee that your child learns in a safe, nurturing ecosystem.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-violet-400 font-bold text-xs">
                    <Eye className="w-4 h-4" /> Live GPS & App Access
                  </div>
                  <p className="text-[11px] text-slate-400">Parents track bus location and receive arrival alerts in real-time.</p>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                    <Activity className="w-4 h-4" /> On-Campus Infirmary
                  </div>
                  <p className="text-[11px] text-slate-400">Resident qualified nursing staff available throughout school hours.</p>
                </div>
              </div>
            </div>

            {/* Visual Feature Image Box */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-violet-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Student Safety and Learning" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-violet-950/80 via-slate-900 to-indigo-950/80 border border-violet-800/40 p-8 sm:p-12 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-black text-white">Experience Our Campus in Person</h3>
            <p className="text-xs sm:text-sm text-slate-400">Schedule a guided campus walk to inspect our labs, sports arenas, and security systems firsthand.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link 
              to="/contact" 
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider border border-slate-700 transition-all"
            >
              Contact Us
            </Link>
            <Link 
              to="/campus-tour" 
              className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-violet-900/40 flex items-center gap-2"
            >
              Book Campus Tour <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};