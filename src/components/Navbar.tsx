import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, User, GraduationCap, Phone, Mail } from 'lucide-react';

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

  // Helper function for active styling
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `font-semibold text-sm transition-colors py-2 px-1 flex items-center gap-1 ${
      isActive ? 'text-amber-500 border-b-2 border-amber-500' : 'text-blue-950 hover:text-amber-600'
    }`;

  const isParentActive = (paths: string[]) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      {/* Top Banner */}
      <div className="bg-blue-950 text-white text-xs py-2 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-amber-400" /> +91 91055 00010</span>
          <span className="hidden md:flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-amber-400" /> info@pavnaschool.com</span>
        </div>
        <div className="text-amber-400 font-medium animate-pulse">
          Admissions Open Session 2026-27
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" onClick={closeMobile} className="flex items-center gap-3">
          <div className="bg-blue-950 text-amber-400 p-2 rounded-xl">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-wider text-blue-950 block leading-none">PAVNA</span>
            <span className="text-[10px] tracking-widest text-gray-500 font-bold uppercase">International School</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink to="/" end className={navLinkStyle}>Home</NavLink>

          {/* About Us Dropdown */}
          <div className="relative group py-6" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`font-semibold text-sm transition-colors flex items-center gap-1 ${isParentActive(['/about']) ? 'text-amber-500' : 'text-blue-950 hover:text-amber-600'}`}>
              About Us <ChevronDown className="w-4 h-4" />
            </button>
            <div className={`absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl p-2 space-y-1 transition-all duration-200 ${activeDropdown === 'about' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <NavLink to="/about/overview" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Overview</NavLink>
              <NavLink to="/about/policies" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">CBSE & School Policies</NavLink>
              <NavLink to="/about/managing-committee" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">School Managing Committee</NavLink>
              <NavLink to="/about/blog" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Blog</NavLink>
            </div>
          </div>

          {/* Academics Dropdown */}
          <div className="relative group py-6" onMouseEnter={() => setActiveDropdown('academics')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`font-semibold text-sm transition-colors flex items-center gap-1 ${isParentActive(['/academics']) ? 'text-amber-500' : 'text-blue-950 hover:text-amber-600'}`}>
              Academics <ChevronDown className="w-4 h-4" />
            </button>
            <div className={`absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl p-2 space-y-1 transition-all duration-200 ${activeDropdown === 'academics' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <NavLink to="/academics/faculty" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Faculty</NavLink>
              <NavLink to="/academics/assessment-policy" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Assessment & Evaluation Policy</NavLink>
            </div>
          </div>

          <NavLink to="/beyond-academics" className={navLinkStyle}>Beyond Academics</NavLink>
          <NavLink to="/infrastructure" className={navLinkStyle}>Infrastructure</NavLink>

          {/* Admission Dropdown */}
          <div className="relative group py-6" onMouseEnter={() => setActiveDropdown('admission')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`font-semibold text-sm transition-colors flex items-center gap-1 ${isParentActive(['/admission']) ? 'text-amber-500' : 'text-blue-950 hover:text-amber-600'}`}>
              Admission <ChevronDown className="w-4 h-4" />
            </button>
            <div className={`absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl p-2 space-y-1 transition-all duration-200 ${activeDropdown === 'admission' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <NavLink to="/admission/process" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Admission Process</NavLink>
              <NavLink to="/admission/apply" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Apply Online</NavLink>
              <NavLink to="/admission/interaction-syllabus" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Interaction Syllabus</NavLink>
              <NavLink to="/admission/fee-structure" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Fee Structure</NavLink>
              <NavLink to="/admission/enquiry" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Enquiry</NavLink>
              <NavLink to="/admission/prospectus" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Download Prospectus</NavLink>
              <NavLink to="/admission/faq" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">FAQ</NavLink>
            </div>
          </div>

          <NavLink to="/contact" className={navLinkStyle}>Contact Us</NavLink>

          {/* Our Alumni Dropdown */}
          <div className="relative group py-6" onMouseEnter={() => setActiveDropdown('alumni')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`font-semibold text-sm transition-colors flex items-center gap-1 ${isParentActive(['/alumni']) ? 'text-amber-500' : 'text-blue-950 hover:text-amber-600'}`}>
              Our Alumni <ChevronDown className="w-4 h-4" />
            </button>
            <div className={`absolute top-full right-0 w-52 bg-white border border-gray-100 shadow-xl rounded-xl p-2 space-y-1 transition-all duration-200 ${activeDropdown === 'alumni' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <NavLink to="/alumni/overview" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Alumni Network</NavLink>
              <NavLink to="/alumni/register" className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-50 hover:text-blue-950 rounded-lg">Registration</NavLink>
            </div>
          </div>

          <NavLink to="/hostel" className={navLinkStyle}>Hostel</NavLink>

          {/* Orange Login Button */}
          <Link to="/login" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-full shadow-md flex items-center gap-2 transition-all">
            <User className="w-4 h-4" /> Login
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-blue-950 p-2">
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 pt-4 pb-8 space-y-4 max-h-[80vh] overflow-y-auto">
          <NavLink to="/" onClick={closeMobile} className="block font-semibold text-gray-800 py-1">Home</NavLink>
          
          <div>
            <button onClick={() => toggleDropdown('mobileAbout')} className="w-full flex justify-between items-center font-semibold text-gray-800 py-1">
              About Us <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'mobileAbout' && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-amber-400">
                <NavLink to="/about/overview" onClick={closeMobile} className="block text-sm text-gray-600">Overview</NavLink>
                <NavLink to="/about/policies" onClick={closeMobile} className="block text-sm text-gray-600">CBSE & School Policies</NavLink>
                <NavLink to="/about/managing-committee" onClick={closeMobile} className="block text-sm text-gray-600">School Managing Committee</NavLink>
                <NavLink to="/about/blog" onClick={closeMobile} className="block text-sm text-gray-600">Blog</NavLink>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleDropdown('mobileAcademics')} className="w-full flex justify-between items-center font-semibold text-gray-800 py-1">
              Academics <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'mobileAcademics' && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-amber-400">
                <NavLink to="/academics/faculty" onClick={closeMobile} className="block text-sm text-gray-600">Faculty</NavLink>
                <NavLink to="/academics/assessment-policy" onClick={closeMobile} className="block text-sm text-gray-600">Assessment Policy</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/beyond-academics" onClick={closeMobile} className="block font-semibold text-gray-800 py-1">Beyond Academics</NavLink>
          <NavLink to="/infrastructure" onClick={closeMobile} className="block font-semibold text-gray-800 py-1">Infrastructure</NavLink>

          <div>
            <button onClick={() => toggleDropdown('mobileAdmission')} className="w-full flex justify-between items-center font-semibold text-gray-800 py-1">
              Admission <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'mobileAdmission' && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-amber-400">
                <NavLink to="/admission/process" onClick={closeMobile} className="block text-sm text-gray-600">Admission Process</NavLink>
                <NavLink to="/admission/apply" onClick={closeMobile} className="block text-sm text-gray-600">Apply Online</NavLink>
                <NavLink to="/admission/fee-structure" onClick={closeMobile} className="block text-sm text-gray-600">Fee Structure</NavLink>
                <NavLink to="/admission/enquiry" onClick={closeMobile} className="block text-sm text-gray-600">Enquiry</NavLink>
                <NavLink to="/admission/faq" onClick={closeMobile} className="block text-sm text-gray-600">FAQ</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" onClick={closeMobile} className="block font-semibold text-gray-800 py-1">Contact Us</NavLink>
          <NavLink to="/hostel" onClick={closeMobile} className="block font-semibold text-gray-800 py-1">Hostel</NavLink>
          
          <Link to="/login" onClick={closeMobile} className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 mt-4">
            <User className="w-4 h-4" /> Login
          </Link>
        </div>
      )}
    </header>
  );
};