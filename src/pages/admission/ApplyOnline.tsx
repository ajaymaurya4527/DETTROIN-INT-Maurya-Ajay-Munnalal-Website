import React, { useState } from 'react';
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle,
  Upload,
  Calendar
} from 'lucide-react';

export const ApplyOnline: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState('Grade 1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-3.5 py-1.5 rounded-full border border-teal-500/20">
            Online Registration Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Online Admission Application</h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Fill out the official student registration form for Academic Session 2026-27.
          </p>
        </div>

        {submitted ? (
          <div className="bg-slate-900 border border-teal-500/30 p-8 sm:p-12 rounded-3xl text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black text-white">Application Received Successfully!</h2>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Your application reference ID is <span className="font-mono text-teal-400 font-bold">APP-2026-8941</span>. Our admissions team will contact you within 24 business hours to schedule the interactive session.
            </p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs transition-all"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 space-y-6 shadow-2xl">
            
            {/* Student Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                1. Student Details
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Student Full Name *</label>
                  <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Date of Birth *</label>
                  <input required type="date" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Seeking Grade *</label>
                  <select 
                    value={selectedGrade} 
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                  >
                    <option>Nursery / LKG / UKG</option>
                    <option>Grade 1</option>
                    <option>Grade 2 - 5</option>
                    <option>Grade 6 - 8</option>
                    <option>Grade 9 - 10</option>
                    <option>Grade 11 - 12 (Science / Commerce)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Gender *</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent Info */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                2. Parent / Guardian Contact
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Parent's Full Name *</label>
                  <input required type="text" placeholder="e.g. Suresh Sharma" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Phone Number (WhatsApp) *</label>
                  <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Email Address *</label>
                <input required type="email" placeholder="parent@example.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" />
              </div>
            </div>

            {/* Document Upload Mock */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase">Birth Certificate / Previous Report Card (Optional PDF/JPG)</label>
              <div className="border-2 border-dashed border-slate-800 rounded-2xl p-6 text-center hover:border-teal-500/50 transition-colors bg-slate-950/50 cursor-pointer">
                <Upload className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300 font-semibold">Click to upload or drag & drop file</p>
                <p className="text-[10px] text-slate-500">Maximum file size: 5 MB</p>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-teal-500/20 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Submit Application Form <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};