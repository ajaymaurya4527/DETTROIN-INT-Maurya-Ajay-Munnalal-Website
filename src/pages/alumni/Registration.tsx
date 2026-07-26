import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Building2, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Registration: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    batchYear: '2024',
    qualification: 'Secondary School',
    currentRole: '',
    company: '',
    country: 'India',
    bio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-8 sm:py-12 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Official Network Membership
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Alumni Registration Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Stay connected with fellow batchmates, access exclusive campus events, and mentor the next generation.
          </p>
        </div>

        {submitted ? (
          /* Confirmation Card */
          <div className="bg-slate-900 border border-emerald-500/30 p-8 sm:p-12 rounded-3xl text-center space-y-5 shadow-2xl animate-fade-in">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white">Registration Submitted Successfully!</h2>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your profile has been queued for verification. An invite link to the official portal will be sent to <span className="text-emerald-400 font-mono">{formData.email}</span> within 24 hours.
              </p>
            </div>
            <div className="pt-2">
              <Link 
                to="/alumni/overview" 
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-all inline-flex items-center gap-2"
              >
                Back to Alumni Overview <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Interactive Form Container */
          <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 space-y-8 shadow-2xl">
            
            {/* Step Wizard Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-5 text-xs font-bold">
              <button 
                onClick={() => setCurrentStep(1)}
                className={`flex items-center gap-2 ${currentStep === 1 ? 'text-emerald-400' : 'text-slate-500'}`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${currentStep === 1 ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>1</span>
                Personal Info
              </button>
              <div className="w-12 h-0.5 bg-slate-800 hidden sm:block" />
              <button 
                onClick={() => setCurrentStep(2)}
                className={`flex items-center gap-2 ${currentStep === 2 ? 'text-emerald-400' : 'text-slate-500'}`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${currentStep === 2 ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>2</span>
                Professional Details
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                        <input
                          required
                          type="text"
                          name="fullName"
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-800 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-800 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Passout Batch *</label>
                      <div className="relative">
                        <GraduationCap className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                        <select
                          name="batchYear"
                          value={formData.batchYear}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-800 bg-slate-950 text-white focus:outline-none focus:border-emerald-500"
                        >
                          {Array.from({ length: 20 }, (_, i) => 2026 - i).map(year => (
                            <option key={year} value={year}>Class of {year}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Phone / WhatsApp</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-800 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2"
                    >
                      Next Step: Career Info <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Current Designation / Role</label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          name="currentRole"
                          placeholder="e.g. Product Manager"
                          value={formData.currentRole}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-800 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Current Company / Institution</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="e.g. Microsoft / Self-Employed"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-800 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Country of Residence</label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        name="country"
                        placeholder="e.g. India, USA, UK"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-800 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Short Bio / Achievement Note</label>
                    <textarea
                      name="bio"
                      rows={3}
                      placeholder="Share a brief highlight of your journey since passing out..."
                      value={formData.bio}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-800 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="w-1/3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-3 rounded-xl text-xs transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                    >
                      Complete Registration <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>

            <div className="pt-4 border-t border-slate-800 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> Your information is securely maintained as per institutional privacy policies.
            </div>
          </div>
        )}

      </div>
    </div>
  );
};