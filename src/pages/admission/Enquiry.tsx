import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Enquiry: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-3.5 py-1.5 rounded-full border border-teal-500/20">
            Admissions Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Admission Inquiry</h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Have questions regarding campus tours, fee structure, hostel facilities, or bus routes? Our counselors are here to guide you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Info Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-teal-950/40 border border-slate-800 p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Admissions Office</h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-teal-500/10 text-teal-400 rounded-xl shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Campus Location</h4>
                  <p className="text-slate-400 mt-0.5">GT Road Educational Corridor, Aligarh, UP - 202001</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-teal-500/10 text-teal-400 rounded-xl shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Call / WhatsApp Counselor</h4>
                  <p className="text-slate-400 mt-0.5">+91 91055 00010 / +91 91055 00011</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-teal-500/10 text-teal-400 rounded-xl shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Direct Email</h4>
                  <p className="text-slate-400 mt-0.5">admissions@pavnaschool.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                <p className="text-xs text-slate-400">Our counselor will get in touch with you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-xs text-teal-400 font-bold underline">Submit another question</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Parent's Name *</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Phone Number *</label>
                    <input required type="tel" placeholder="+91 9876543210" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Your Question / Inquiry</label>
                  <textarea rows={4} placeholder="Ask about fee breakdown, campus tours, transport, etc." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2">
                  Send Inquiry <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};