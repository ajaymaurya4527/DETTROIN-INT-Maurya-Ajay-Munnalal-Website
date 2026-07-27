import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  ShieldCheck, 
  Star,
  Bot,
  GraduationCap,
  Award,
  Users,
  Heart,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Camera,
  Music,
  Dumbbell,
  Feather
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  // Carousel State
  const [activeSlide, setActiveSlide] = useState(0);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Academic Tracks Tab State
  const [activeTrack, setActiveTrack] = useState<'stem' | 'cbse' | 'sports' | 'arts'>('stem');

  const heroSlides = [
    {
      tag: "Admissions Open 2026-27",
      titleLine1: "Nurturing Future Leaders",
      titleLine2: "Through Holistic Education.",
      description: "Welcome to Pavna School, Aligarh (Formerly DPS Aligarh). Rooted in a 28+ year legacy of excellence, we empower young minds with global-standard learning, cutting-edge AI & robotics, and uncompromised moral values.",
      bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920"
    },
    {
      tag: "Innovation & STEM",
      titleLine1: "Pioneering AI & Robotics",
      titleLine2: "For Tomorrow's Creators.",
      description: "Equipping students with computational thinking, project-based STEM challenges, and real-world technical skills required to excel in modern global industries.",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const current = heroSlides[activeSlide];

  const faqs = [
    {
      question: "What Curricula does Pavna School offer?",
      answer: "Pavna School offers academic pathways catering to diverse learning needs, focusing primarily on the Central Board of Secondary Education (CBSE) for a robust national curriculum enriched with global STEM programs."
    },
    {
      question: "Is boarding mandatory for all students?",
      answer: "No, boarding is optional. We offer both day-scholar options with complete transport connectivity across Aligarh and full residential/day-boarding facilities."
    },
    {
      question: "What is the student-teacher ratio at Pavna School?",
      answer: "We maintain a low student-teacher ratio of approximately 15:1 to ensure personalized attention, individual mentorship, and targeted skill development for every learner."
    },
    {
      question: "How does the admission process work?",
      answer: "The admission process involves filling out the online application form, attending a interactive campus visit/interaction, and completing document verification upon seat allocation."
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-emerald-500 selection:text-slate-950">
      
      {/* ================= SECTION 1: HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
        
        {/* Dynamic Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={current.bgImage} 
            alt="Pavna School Aligarh Campus" 
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        </div>

        {/* Top Announcement Bar */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex justify-between items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-950/50">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">
              Aligarh Campus • #BeYourself
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-300">
            <span className="flex items-center gap-1 font-semibold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> CBSE Affiliated
            </span>
            <span className="text-slate-600">•</span>
            <span>Est. 1998 (Formerly DPS Aligarh)</span>
          </div>
        </div>

        {/* Main Hero Body */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-400 text-xs font-bold tracking-wider uppercase">
                {current.tag}
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                {current.titleLine1} <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  {current.titleLine2}
                </span>
              </h1>
            </div>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
              {current.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                to="/admission/apply" 
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 group text-center"
              >
                Apply For Admission <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/admission/prospectus" 
                className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold px-8 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm text-center"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" /> Download Brochure
              </Link>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 pt-4">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white hover:bg-emerald-500 hover:text-slate-950 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all ${activeSlide === idx ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-700'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white hover:bg-emerald-500 hover:text-slate-950 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-md p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-slate-950 font-black text-xs uppercase px-4 py-2 rounded-xl shadow-lg">
                Legacy Since 1998
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">Pavna School Legacy</span>
                <h3 className="text-2xl font-black text-white">Shaping Excellence in Aligarh</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Founded by Shri Pawan Jain, carrying forward an unmatched tradition of academic brilliance, moral integrity, and holistic growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 space-y-1">
                  <div className="text-2xl font-black text-white">30,000+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Global Learners Base</div>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 space-y-1">
                  <div className="text-2xl font-black text-white">6,000+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Distinguished Alumni</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Top Rated CBSE School</span>
                <span className="font-bold text-emerald-400">Aligarh, UP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Metrics Bar */}
        <div className="relative z-20 border-t border-slate-800/80 bg-slate-900/90 backdrop-blur-md py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1 border-r border-slate-800 last:border-none">
              <div className="text-2xl sm:text-3xl font-black text-white">28+</div>
              <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Years Legacy</div>
            </div>
            <div className="space-y-1 md:border-r border-slate-800 last:border-none">
              <div className="text-2xl sm:text-3xl font-black text-white">30,000+</div>
              <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Learners Base</div>
            </div>
            <div className="space-y-1 border-r border-slate-800 last:border-none">
              <div className="text-2xl sm:text-3xl font-black text-white">20,000+</div>
              <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Happy Parents</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white">250+</div>
              <div className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">Expert Educators</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: ACADEMIC PATHWAYS ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            Offering Global-Standard Learning
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            A Quick Insight Into Our Learning Path
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Empowering students with real-world skills, computational logic, and balanced academic discipline.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: 'stem', label: 'AI & Robotics', icon: Bot },
            { id: 'cbse', label: 'CBSE Curriculum', icon: GraduationCap },
            { id: 'sports', label: 'Sports & Athletics', icon: Dumbbell },
            { id: 'arts', label: 'Music & Creative Arts', icon: Music },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTrack === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTrack(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                  isActive 
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' 
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Track Panel */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" /> High Demand Modern Skills
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {activeTrack === 'stem' && "Future-Ready STEM & Computational Thinking"}
              {activeTrack === 'cbse' && "National Academic Excellence (CBSE)"}
              {activeTrack === 'sports' && "Character Building Through Physical Discipline"}
              {activeTrack === 'arts' && "Fostering Unlimited Creative Expression"}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {activeTrack === 'stem' && "The future belongs to creators and problem-solvers. Our dedicated AI & Robotics program introduces computational thinking, enabling students to program intelligent systems and gain high-demand technical expertise."}
              {activeTrack === 'cbse' && "Robust preparation for board examinations with concept-driven pedagogy. Shifting focus from rote memorization to deep conceptual clarity and critical problem solving."}
              {activeTrack === 'sports' && "International standard sports grounds, professional coaching in cricket, football, lawn tennis, and swimming to cultivate resilience, teamwork, and physical well-being."}
              {activeTrack === 'arts' && "Comprehensive exposure to performing arts, classical & modern music, fine arts, and literary clubs to develop creative articulation and confidence."}
            </p>
            <div className="pt-2">
              <Link 
                to="/academic/overview" 
                className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs hover:underline"
              >
                Explore Full Curriculum <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
            <img 
              src={
                activeTrack === 'stem' ? "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000" :
                activeTrack === 'cbse' ? "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" :
                activeTrack === 'sports' ? "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=1000" :
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000"
              }
              alt="Pavna Learning Track"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: LEADERSHIP & MANAGEMENT ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            School Board of Management
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Guiding Visionaries & Leadership
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Dedicated leadership committed to stress-free, compassionate, and holistic student growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Leadership Card 1 */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-black text-emerald-400 text-xl">
                  PJ
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Ms. Priya Jain</h3>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Our Chairperson</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "At Pavna School (formerly DPS Aligarh), we take pride in shaping not only bright minds but also compassionate hearts. Education is a holistic journey extending beyond academic success to nurture emotional well-being and moral resilience in a stress-free environment."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Executive Board Visionary
            </div>
          </div>

          {/* Leadership Card 2 */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-black text-emerald-400 text-xl">
                  AJ
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Ms. Arti Jha</h3>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Principal</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "Our country's education is shifting from content to concepts. We are dedicated to navigating this paradigm shift comprehensively, preparing students to overcome modern challenges through adaptive, concept-driven learning."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Academic & Campus Principal
            </div>
          </div>
        </div>

        {/* Distinguished Guests Banner */}
        <div className="mt-12 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Distinguished Guests At Pavna School Legacy
          </span>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm font-bold text-slate-300">
            <span className="hover:text-emerald-400 transition-colors">Lal Krishna Advani <span className="block text-[10px] text-slate-500 font-normal">Former Deputy PM</span></span>
            <span className="hidden sm:inline text-slate-800">•</span>
            <span className="hover:text-emerald-400 transition-colors">Mulayam Singh Yadav <span className="block text-[10px] text-slate-500 font-normal">Former Defence Minister</span></span>
            <span className="hidden sm:inline text-slate-800">•</span>
            <span className="hover:text-emerald-400 transition-colors">Akhilesh Yadav <span className="block text-[10px] text-slate-500 font-normal">Former Chief Minister, UP</span></span>
            <span className="hidden sm:inline text-slate-800">•</span>
            <span className="hover:text-emerald-400 transition-colors">Lalu Prasad Yadav <span className="block text-[10px] text-slate-500 font-normal">Former Railway Minister</span></span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: LIFE AT PAVNA & FAQS ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQs (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Information Hub</span>
              <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left text-xs sm:text-sm font-bold text-white flex justify-between items-center gap-4 hover:text-emerald-400"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? 'rotate-180 text-emerald-400' : 'text-slate-500'}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Life at Pavna Preview Card (Right Column) */}
          <div className="lg:col-span-5 bg-slate-900 border border-emerald-500/20 p-8 rounded-3xl space-y-6 shadow-2xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Life At Pavna</span>
              <h3 className="text-2xl font-black text-white">Campus Highlights & Gallery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Step into a vibrant community of scholars, innovators, and future leaders exploring diverse co-curricular avenues.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-center">
                <Dumbbell className="w-5 h-5 text-emerald-400 mx-auto" />
                <div className="text-xs font-bold text-white">Sports & Athletics</div>
                <div className="text-[10px] text-slate-500">Building Character</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-center">
                <Music className="w-5 h-5 text-emerald-400 mx-auto" />
                <div className="text-xs font-bold text-white">Music & Fine Arts</div>
                <div className="text-[10px] text-slate-500">Fostering Creativity</div>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/about/blog" 
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Camera className="w-4 h-4 text-emerald-400" /> View Campus Photo Gallery
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: FINAL ADMISSION CTA BANNER ================= */}
      <section className="py-16 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-t border-slate-800 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold tracking-widest uppercase">
            Begin Your Journey At Pavna
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Step Into a World of Limitless Possibilities
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Admissions are open for the upcoming academic session. Secure your child's spot in Aligarh's premier educational institution today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link 
              to="/admission/apply" 
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/20"
            >
              Apply Now - Start Application
            </Link>
            <Link 
              to="/admission/prospectus" 
              className="bg-slate-900 border border-slate-700 text-white font-bold px-8 py-4 rounded-2xl text-xs uppercase tracking-wider hover:bg-slate-800 transition-all"
            >
              Download School Brochure
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};