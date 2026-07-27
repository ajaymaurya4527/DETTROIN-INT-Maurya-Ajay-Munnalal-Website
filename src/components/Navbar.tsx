import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  User, 
  GraduationCap, 
  Phone, 
  Mail,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Helper function for active link styling
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `font-bold text-xs uppercase tracking-wider transition-all py-2 px-1 flex items-center gap-1 ${
      isActive 
        ? 'text-emerald-400 border-b-2 border-emerald-400' 
        : 'text-slate-300 hover:text-emerald-400'
    }`;

  const isParentActive = (paths: string[]) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl transition-all">
      {/* Top Banner */}
      <div className="bg-slate-900/90 border-b border-slate-800/60 text-slate-300 text-[11px] py-2 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4 sm:gap-6">
          <a 
            href="tel:+919021337316" 
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold">+91 9021337316</span>
          </a>
          <a 
            href="mailto:ajaymaurya1725@gmail.com" 
            className="hidden sm:flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold">ajaymaurya1725@gmail.com</span>
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 font-bold tracking-wider uppercase text-[10px] sm:text-[11px]">
            Admissions Open Session 2026-27
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" onClick={closeMobile} className="flex items-center gap-3 group">
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-2.5 rounded-2xl group-hover:border-emerald-400 transition-all shadow-lg shadow-emerald-950/50">
            <GraduationCap className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-wider text-white block leading-none">
              PAVNA
            </span>
            <span className="text-[10px] tracking-widest text-emerald-400 font-bold uppercase">
              International School
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          <NavLink to="/" end className={navLinkStyle}>
            Home
          </NavLink>

          {/* About Us Dropdown */}
          <div 
            className="relative group py-6" 
            onMouseEnter={() => setActiveDropdown('about')} 
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1 ${isParentActive(['/about']) ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>
              About Us <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
            </button>
            <div className={`absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-2 space-y-1 transition-all duration-200 backdrop-blur-xl ${activeDropdown === 'about' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <NavLink to="/about/overview" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Overview</NavLink>
              <NavLink to="/about/policies" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">CBSE & School Policies</NavLink>
              <NavLink to="/about/managing-committee" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">School Managing Committee</NavLink>
              <NavLink to="/about/blog" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Blog</NavLink>
            </div>
          </div>

          {/* Academics Dropdown */}
          <div 
            className="relative group py-6" 
            onMouseEnter={() => setActiveDropdown('academics')} 
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1 ${isParentActive(['/academics']) ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>
              Academics <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
            </button>
            <div className={`absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-2 space-y-1 transition-all duration-200 backdrop-blur-xl ${activeDropdown === 'academics' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <NavLink to="/academics/faculty" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Faculty</NavLink>
              <NavLink to="/academics/assessment-policy" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Assessment & Evaluation Policy</NavLink>
            </div>
          </div>

          <NavLink to="/beyond-academics" className={navLinkStyle}>Beyond Academics</NavLink>
          <NavLink to="/infrastructure" className={navLinkStyle}>Infrastructure</NavLink>

          {/* Admission Dropdown */}
          <div 
            className="relative group py-6" 
            onMouseEnter={() => setActiveDropdown('admission')} 
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1 ${isParentActive(['/admission']) ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>
              Admission <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
            </button>
            <div className={`absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-2 space-y-1 transition-all duration-200 backdrop-blur-xl ${activeDropdown === 'admission' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <NavLink to="/admission/process" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Admission Process</NavLink>
              <NavLink to="/admission/apply" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Apply Online</NavLink>
              <NavLink to="/admission/interaction-syllabus" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Interaction Syllabus</NavLink>
              <NavLink to="/admission/fee-structure" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Fee Structure</NavLink>
              <NavLink to="/admission/enquiry" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Enquiry</NavLink>
              <NavLink to="/admission/prospectus" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Download Prospectus</NavLink>
              <NavLink to="/admission/faq" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">FAQ</NavLink>
            </div>
          </div>

          <NavLink to="/contact" className={navLinkStyle}>Contact Us</NavLink>

          {/* Our Alumni Dropdown */}
          <div 
            className="relative group py-6" 
            onMouseEnter={() => setActiveDropdown('alumni')} 
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1 ${isParentActive(['/alumni']) ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>
              Our Alumni <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
            </button>
            <div className={`absolute top-full right-0 w-56 bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-2 space-y-1 transition-all duration-200 backdrop-blur-xl ${activeDropdown === 'alumni' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <NavLink to="/alumni/overview" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Alumni Network</NavLink>
              <NavLink to="/alumni/register" className="block px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl transition-all">Registration</NavLink>
            </div>
          </div>

          <NavLink to="/hostel" className={navLinkStyle}>Hostel</NavLink>

          {/* Login Button */}
          <Link 
            to="/login" 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-5 py-2.5 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all hover:scale-105"
          >
            <User className="w-4 h-4" /> Login
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="lg:hidden text-white p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6 text-emerald-400" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800/80 px-6 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto backdrop-blur-2xl">
          
          <NavLink to="/" onClick={closeMobile} className="block font-bold text-xs uppercase tracking-wider text-slate-200 py-2 border-b border-slate-900">
            Home
          </NavLink>

          {/* Mobile Dropdown: About */}
          <div className="border-b border-slate-900 py-1">
            <button 
              onClick={() => toggleDropdown('mobileAbout')} 
              className="w-full flex justify-between items-center font-bold text-xs uppercase tracking-wider text-slate-200 py-2"
            >
              About Us <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform ${activeDropdown === 'mobileAbout' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'mobileAbout' && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-emerald-500/40 bg-slate-900/50 rounded-r-xl">
                <NavLink to="/about/overview" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">Overview</NavLink>
                <NavLink to="/about/policies" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">CBSE & School Policies</NavLink>
                <NavLink to="/about/managing-committee" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">School Managing Committee</NavLink>
                <NavLink to="/about/blog" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">Blog</NavLink>
              </div>
            )}
          </div>

          {/* Mobile Dropdown: Academics */}
          <div className="border-b border-slate-900 py-1">
            <button 
              onClick={() => toggleDropdown('mobileAcademics')} 
              className="w-full flex justify-between items-center font-bold text-xs uppercase tracking-wider text-slate-200 py-2"
            >
              Academics <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform ${activeDropdown === 'mobileAcademics' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'mobileAcademics' && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-emerald-500/40 bg-slate-900/50 rounded-r-xl">
                <NavLink to="/academics/faculty" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">Faculty</NavLink>
                <NavLink to="/academics/assessment-policy" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">Assessment Policy</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/beyond-academics" onClick={closeMobile} className="block font-bold text-xs uppercase tracking-wider text-slate-200 py-2 border-b border-slate-900">
            Beyond Academics
          </NavLink>
          
          <NavLink to="/infrastructure" onClick={closeMobile} className="block font-bold text-xs uppercase tracking-wider text-slate-200 py-2 border-b border-slate-900">
            Infrastructure
          </NavLink>

          {/* Mobile Dropdown: Admission */}
          <div className="border-b border-slate-900 py-1">
            <button 
              onClick={() => toggleDropdown('mobileAdmission')} 
              className="w-full flex justify-between items-center font-bold text-xs uppercase tracking-wider text-slate-200 py-2"
            >
              Admission <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform ${activeDropdown === 'mobileAdmission' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'mobileAdmission' && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-emerald-500/40 bg-slate-900/50 rounded-r-xl">
                <NavLink to="/admission/process" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">Admission Process</NavLink>
                <NavLink to="/admission/apply" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">Apply Online</NavLink>
                <NavLink to="/admission/interaction-syllabus" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">Interaction Syllabus</NavLink>
                <NavLink to="/admission/fee-structure" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">Fee Structure</NavLink>
                <NavLink to="/admission/enquiry" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">Enquiry</NavLink>
                <NavLink to="/admission/prospectus" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">Download Prospectus</NavLink>
                <NavLink to="/admission/faq" onClick={closeMobile} className="block text-xs text-slate-300 hover:text-emerald-400 py-1">FAQ</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" onClick={closeMobile} className="block font-bold text-xs uppercase tracking-wider text-slate-200 py-2 border-b border-slate-900">
            Contact Us
          </NavLink>

          <NavLink to="/hostel" onClick={closeMobile} className="block font-bold text-xs uppercase tracking-wider text-slate-200 py-2 border-b border-slate-900">
            Hostel
          </NavLink>

          {/* Contact Details Footer inside Drawer */}
          <div className="pt-2 space-y-2 text-xs text-slate-400 border-t border-slate-800">
            <a href="tel:+919021337316" className="flex items-center gap-2 hover:text-emerald-400">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 9021337316
            </a>
            <a href="mailto:ajaymaurya1725@gmail.com" className="flex items-center gap-2 hover:text-emerald-400">
              <Mail className="w-3.5 h-3.5 text-emerald-400" /> ajaymaurya1725@gmail.com
            </a>
          </div>

          <Link 
            to="/login" 
            onClick={closeMobile} 
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 mt-4"
          >
            <User className="w-4 h-4" /> Login
          </Link>
        </div>
      )}
    </header>
  );
};