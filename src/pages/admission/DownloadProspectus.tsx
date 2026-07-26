import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, BookOpen, ShieldCheck } from 'lucide-react';

export const DownloadProspectus: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-3.5 py-1.5 rounded-full border border-teal-500/20">
            Information e-Brochure
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Download School Prospectus</h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Get comprehensive information regarding our campus infrastructure, faculty, curriculum, co-curricular achievements, and fee breakdown.
          </p>
        </div>

        {/* Download Card */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 text-center">
            <div className="w-48 h-64 bg-gradient-to-br from-teal-900 to-slate-900 rounded-2xl border-2 border-teal-500/30 mx-auto shadow-2xl flex flex-col justify-between p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/20 rounded-bl-full pointer-events-none" />
              <div className="text-left space-y-1">
                <span className="text-[10px] font-bold text-teal-400 uppercase">Official Guide</span>
                <h3 className="text-lg font-black text-white">Pavna Prospectus</h3>
                <p className="text-[10px] text-slate-400">Session 2026-27</p>
              </div>
              <BookOpen className="w-12 h-12 text-teal-400/40 mx-auto" />
              <p className="text-[9px] text-slate-500 text-center font-mono">PDF Format • 8.4 MB</p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            {downloaded ? (
              <div className="bg-slate-950 p-6 rounded-2xl border border-teal-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Prospectus Downloaded!</h3>
                <p className="text-xs text-slate-400">If your download didn't start automatically, please click below.</p>
                <a href="#download" className="inline-block bg-teal-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs">
                  Re-download PDF
                </a>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-4">
                <h3 className="text-base font-bold text-white">Enter Details to Instant Download</h3>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Your Name *</label>
                  <input required type="text" placeholder="e.g. Rahul Sharma" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Email Address *</label>
                  <input required type="email" placeholder="name@example.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500" />
                </div>

                <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 rounded-xl text-xs transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2">
                  Download e-Prospectus (PDF) <Download className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};