import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdmissionProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Online Registration & Application',
      desc: 'Submit the online inquiry form or fill out the application directly with initial student details and upload essential documents.',
      tag: 'Step 1'
    },
    {
      num: '02',
      title: 'Interactive Session & Assessment',
      desc: 'An informal interaction for Pre-Primary applicants or an age-appropriate assessment test for Grades 1–12.',
      tag: 'Step 2'
    },
    {
      num: '03',
      title: 'Document Verification & Offer',
      desc: 'Verification of academic transcripts, birth certificate, and transfer certificate followed by the official admission offer.',
      tag: 'Step 3'
    },
    {
      num: '04',
      title: 'Fee Payment & Seat Confirmation',
      desc: 'Pay the admission fee to secure the seat. Receive student login credentials, uniform guides, and transport details.',
      tag: 'Step 4'
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 p-8 sm:p-12 border border-teal-500/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Academic Session 2026-27
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Simple & Transparent Admission Journey
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We welcome students who are curious, creative, and eager to learn. Our 4-step streamlined admission process ensures a stress-free transition for both students and parents.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link to="/admission/apply-online" className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-lg shadow-teal-500/20 inline-flex items-center gap-2">
                Apply Online Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/admission/prospectus" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-6 py-3 rounded-xl text-xs transition-all">
                Download Prospectus
              </Link>
            </div>
          </div>
        </div>

        {/* Admission Steps Timeline */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-white">4 Easy Steps to Join</h2>
            <p className="text-xs text-slate-400 mt-1">Clear milestones from inquiry to your child's first day on campus.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-teal-500/50 transition-all duration-300 relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                      {step.tag}
                    </span>
                    <span className="text-3xl font-black text-slate-800 group-hover:text-teal-500/30 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-teal-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Fast-Track Verification Available
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents Card */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Document Checklist</span>
            <h3 className="text-2xl font-black text-white">Keep These Documents Ready</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Having scanned soft copies of these documents will help speed up your online application submission.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 text-xs">
            {[
              "Student's Birth Certificate (Govt Authorized)",
              "4 Passport-sized Photographs of Student",
              "2 Passport-sized Photographs of Parents/Guardians",
              "Previous School's Transfer Certificate (TC)",
              "Report Card / Marksheet of Previous Grade",
              "Aadhaar Card / ID Proof of Student & Parents"
            ].map((doc, i) => (
              <div key={i} className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center gap-3 text-slate-300">
                <FileText className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};