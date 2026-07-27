import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Download, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Bus, 
  Home, 
  Calendar, 
  FileText, 
  DollarSign, 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  Clock, 
  Receipt, 
  Calculator 
} from 'lucide-react';

import { FeatureHighlightSection } from '../../components/FeatureHighlightSection';

export const FeeStructure: React.FC = () => {
  // Interactive Calculator State
  const [selectedGrade, setSelectedGrade] = useState<'pg_2' | '3_5' | '6_10' | '11_12'>('pg_2');
  const [includeHostel, setIncludeHostel] = useState<boolean>(false);
  const [selectedTransport, setSelectedTransport] = useState<number>(0);
  const [isNewStudent, setIsNewStudent] = useState<boolean>(true);

  // Fee Mapping Matrix
  const tuitionFees = {
    pg_2: { name: 'Classes Playgroup - II', monthly: 7900, quarterly: 23700 },
    '3_5': { name: 'Classes III - V', monthly: 8900, quarterly: 26700 },
    '6_10': { name: 'Classes VI - X', monthly: 10400, quarterly: 31200 },
    '11_12': { name: 'Classes XI and XII', monthly: 11000, quarterly: 33000 },
  };

  const monthlyExamFee = 300;
  const oneTimeAdmission = 18000;
  const oneTimeProcess = 1000;

  // Calculate totals
  const currentGradeData = tuitionFees[selectedGrade];
  const quarterlyBaseTuition = (currentGradeData.monthly + monthlyExamFee) * 3;
  const quarterlyTransport = selectedTransport * 3;
  const oneTimeTotal = isNewStudent ? (oneTimeAdmission + oneTimeProcess) : 0;
  const estimatedFirstQuarterTotal = quarterlyBaseTuition + quarterlyTransport + oneTimeTotal;

  return (
    <div className="bg-[#090d16] text-slate-100 min-h-screen font-sans selection:bg-violet-500 selection:text-white relative overflow-hidden">
      
      {/* Background Decorative Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-violet-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-[40%] -left-40 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* HERO & HEADER SECTION */}
      <section className="relative pt-16 pb-16 border-b border-indigo-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-violet-800/50 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-xl shadow-violet-950/50 backdrop-blur-md">
              <Receipt className="w-4 h-4 text-amber-400" />
              <span>Pavna School • Admission & Financials</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Transparent <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
                  Fee Structure (2026–27)
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                At Pavna School, we are committed to clear, predictable, and fair financial policies. Review our comprehensive fee breakdown for academics, boardings, transport, and non-cash payment directives below.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link 
                  to="/admission/apply" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 hover:opacity-95 text-white font-black px-7 py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-violet-900/40 transition-all hover:scale-[1.02]"
                >
                  Proceed to Apply Online <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="#calculator" 
                  className="inline-flex items-center gap-2 bg-slate-900/90 border border-violet-900/50 text-slate-200 font-bold px-7 py-4 rounded-2xl text-xs uppercase tracking-widest hover:border-violet-500/60 transition-all backdrop-blur-xl"
                >
                  Estimate Tuition Fees <Calculator className="w-4 h-4 text-amber-400" />
                </a>
              </div>
            </div>

            {/* Quick Summary Highlights Banner */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/80 border border-violet-900/50 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Quick Key Information</span>
                  <span className="text-[10px] bg-violet-950 text-violet-300 px-3 py-1 rounded-full border border-violet-800/50 font-mono">CBSE Compliant</span>
                </div>

                <ul className="space-y-4 text-xs text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% Digital & Non-Cash:</strong> All payments accepted via Net Banking, Cards, or Post Dated Cheques (PDC).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Quarterly Billing Cycle:</strong> Monthly fees are payable quarterly in advance across 4 structured cycles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>No Hidden Charges:</strong> Composite fee includes lab access, digital resources, and library subscriptions.</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <a 
                    href="#payment-instructions" 
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 border border-slate-800 hover:border-violet-500/50 text-violet-300 font-bold py-3 rounded-xl text-xs transition-all"
                  >
                    View Payment Instructions & Deadlines
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONE-TIME ADMISSION CHARGES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        <div className="space-y-3 mb-8">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">New Student Onboarding</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">1. One-Time Admission Charges</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Applicable exclusively for new students at the time of initial entry.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 rounded-3xl p-6 backdrop-blur-xl flex items-center justify-between transition-all">
            <div className="space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Evaluation & Form Fee</span>
              <h3 className="text-lg font-bold text-white">Admission Process Fee</h3>
              <p className="text-xs text-slate-400">Non-refundable registration and assessment fee.</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-amber-400">₹ 1,000</span>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">One Time Only</div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 rounded-3xl p-6 backdrop-blur-xl flex items-center justify-between transition-all">
            <div className="space-y-1">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Seat Confirmation Fee</span>
              <h3 className="text-lg font-bold text-white">Admission Fee</h3>
              <p className="text-xs text-slate-400">One-time registration fee payable upon seat acceptance.</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-amber-400">₹ 18,000</span>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">One Time Only</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPOSITE & EXAMINATION ACADEMIC TUITION TABLE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        <div className="space-y-3 mb-8">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Academic Tuitions</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">2. Composite & Examination Fee Schedule</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Monthly fees billed quarterly in advance. Includes digital labs, classroom infrastructure, and sports facilities.</p>
        </div>

        {/* Examination Fee Highlight Callout */}
        <div className="mb-6 p-4 rounded-2xl bg-violet-950/40 border border-violet-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Monthly Examination Fee (Classes Playgroup – XII)</h4>
              <p className="text-[11px] text-slate-400">Billed monthly (paid quarterly alongside composite fee) for all internal assessments & term exams.</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-amber-400 font-black text-sm">
            ₹ 300.00 / Month
          </div>
        </div>

        {/* Composite Fee Table */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/90 text-amber-400 text-xs uppercase tracking-wider border-b border-slate-800">
                  <th className="p-5 font-extrabold">Class / Grade Category</th>
                  <th className="p-5 font-extrabold">Monthly Composite Fee</th>
                  <th className="p-5 font-extrabold">Monthly Exam Fee</th>
                  <th className="p-5 font-extrabold text-right">Total Payable Per Quarter (3 Months)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm text-slate-300">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-5 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    Classes Playgroup – II
                  </td>
                  <td className="p-5 font-semibold text-slate-200">₹ 7,900.00</td>
                  <td className="p-5 text-slate-400">₹ 300.00</td>
                  <td className="p-5 font-black text-amber-400 text-right text-base">₹ 24,600.00</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-5 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    Classes III – V
                  </td>
                  <td className="p-5 font-semibold text-slate-200">₹ 8,900.00</td>
                  <td className="p-5 text-slate-400">₹ 300.00</td>
                  <td className="p-5 font-black text-amber-400 text-right text-base">₹ 27,600.00</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-5 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    Classes VI – X
                  </td>
                  <td className="p-5 font-semibold text-slate-200">₹ 10,400.00</td>
                  <td className="p-5 text-slate-400">₹ 300.00</td>
                  <td className="p-5 font-black text-amber-400 text-right text-base">₹ 32,100.00</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-5 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    Classes XI and XII
                  </td>
                  <td className="p-5 font-semibold text-slate-200">₹ 11,000.00</td>
                  <td className="p-5 text-slate-400">₹ 300.00</td>
                  <td className="p-5 font-black text-amber-400 text-right text-base">₹ 33,900.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOSTEL & TRANSPORTATION SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Hostel Fee Block */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Home className="w-4 h-4" /> Boarding & Living
              </div>
              <h2 className="text-2xl font-black text-white">3. Hostel Fee Structure</h2>
              <p className="text-xs text-slate-400">Available exclusively for Class V onwards. Includes modern air-conditioned accommodation, nutritious dining, laundry, and round-the-clock tutoring support.</p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl space-y-3">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-white text-sm">Option A — Annual Boarders</h3>
                  <span className="text-xs font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">₹ 2,75,000 / Year</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">1st Installment (At Admission):</span>
                    <span className="font-bold text-white">₹ 1,75,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">2nd Installment (By 15th October):</span>
                    <span className="font-bold text-white">₹ 1,00,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-white text-sm">Option B — Monthly / Short Stay</h3>
                    <p className="text-[11px] text-slate-400">Flexible monthly boarding for exam prep periods.</p>
                  </div>
                  <span className="text-xs font-black text-amber-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-700">₹ 26,000 / Month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Fee Block */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-violet-400 uppercase tracking-widest">
                <Bus className="w-4 h-4" /> Transit & Fleet
              </div>
              <h2 className="text-2xl font-black text-white">4. GPS Transport Route Fees</h2>
              <p className="text-xs text-slate-400">Air-conditioned, GPS-tracked buses with female attendants. Fees billed monthly (paid quarterly in advance).</p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-950 text-amber-400 uppercase tracking-wider border-b border-slate-800">
                    <th className="p-4 font-bold">Bus Route / Sector</th>
                    <th className="p-4 font-bold text-right">Monthly Fee</th>
                    <th className="p-4 font-bold text-right">Quarterly Payable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-4 font-semibold text-white">Aligarh City ↔ Pavna School</td>
                    <td className="p-4 text-right text-slate-200">₹ 1,850.00</td>
                    <td className="p-4 text-right font-bold text-amber-400">₹ 5,550.00</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-4 font-semibold text-white">Hathras ↔ Pavna School</td>
                    <td className="p-4 text-right text-slate-200">₹ 1,850.00</td>
                    <td className="p-4 text-right font-bold text-amber-400">₹ 5,550.00</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-4 font-semibold text-white">Sasni ↔ Pavna School</td>
                    <td className="p-4 text-right text-slate-200">₹ 1,850.00</td>
                    <td className="p-4 text-right font-bold text-amber-400">₹ 5,550.00</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-4 font-semibold text-white">Iglas ↔ Pavna School</td>
                    <td className="p-4 text-right text-slate-200">₹ 2,250.00</td>
                    <td className="p-4 text-right font-bold text-amber-400">₹ 6,750.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-3 bg-amber-500/10 border-t border-amber-500/20 text-[11px] text-amber-300 flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span><strong>Condition:</strong> Transport charges may be revised in case of unpredicted diesel price surges.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR CALCULATOR TOOL */}
      <section id="calculator" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-violet-800/40 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Calculator className="w-4 h-4" /> Quick Interactive Tool
              </span>
              <h2 className="text-2xl font-black text-white mt-1">Estimate First Quarter Fee</h2>
            </div>
            <span className="text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
              Session 2026–2027
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Admission Type Toggle */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Student Admission Type</label>
                <div className="grid grid-cols-2 gap-3 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                  <button 
                    onClick={() => setIsNewStudent(true)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isNewStudent ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    New Admission (Includes Setup Fee)
                  </button>
                  <button 
                    onClick={() => setIsNewStudent(false)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                      !isNewStudent ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Existing / Promoted Student
                  </button>
                </div>
              </div>

              {/* Grade Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Select Grade / Class Level</label>
                <select 
                  value={selectedGrade} 
                  onChange={(e) => setSelectedGrade(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 text-white text-xs font-bold rounded-2xl p-4 focus:outline-none focus:border-violet-500 transition-all"
                >
                  <option value="pg_2">Playgroup to Class II (Composite: ₹7,900/mo)</option>
                  <option value="3_5">Class III to Class V (Composite: ₹8,900/mo)</option>
                  <option value="6_10">Class VI to Class X (Composite: ₹10,400/mo)</option>
                  <option value="11_12">Class XI and Class XII (Composite: ₹11,000/mo)</option>
                </select>
              </div>

              {/* Transport Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Optional Bus Transport Route</label>
                <select 
                  value={selectedTransport} 
                  onChange={(e) => setSelectedTransport(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 text-white text-xs font-bold rounded-2xl p-4 focus:outline-none focus:border-violet-500 transition-all"
                >
                  <option value={0}>No Transport Required</option>
                  <option value={1850}>Aligarh City Route (₹1,850/mo)</option>
                  <option value={1850}>Hathras Route (₹1,850/mo)</option>
                  <option value={1850}>Sasni Route (₹1,850/mo)</option>
                  <option value={2250}>Iglas Route (₹2,250/mo)</option>
                </select>
              </div>

            </div>

            {/* Calculated Breakdown Card */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-3">
                Estimated 1st Quarter Payable Summary
              </h3>

              <div className="space-y-2 text-xs">
                {isNewStudent && (
                  <div className="flex justify-between text-slate-300">
                    <span>One-Time Admission & Process Fee:</span>
                    <span className="font-bold text-white">₹ 19,000</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-300">
                  <span>3 Months Composite Fee:</span>
                  <span className="font-bold text-white">₹ {(currentGradeData.monthly * 3).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>3 Months Exam Fee:</span>
                  <span className="font-bold text-white">₹ 900</span>
                </div>
                {selectedTransport > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>3 Months Transport Fee:</span>
                    <span className="font-bold text-white">₹ {(selectedTransport * 3).toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estimated 1st Quarter Total</div>
                  <div className="text-2xl font-black text-amber-400">₹ {estimatedFirstQuarterTotal.toLocaleString('en-IN')}</div>
                </div>
                <Link 
                  to="/admission/apply" 
                  className="bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-4 py-3 rounded-xl transition-all shadow-lg"
                >
                  Apply Now
                </Link>
              </div>

              <p className="text-[10px] text-slate-500 italic">
                *Note: This is an estimated breakdown for guidance only. Official bills are issued at the school accounts counter.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PAYMENT INSTRUCTIONS & DEADLINES */}
      <section id="payment-instructions" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60">
        <div className="space-y-3 mb-8">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Official Directives</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">5. Payment Rules & Quarter Due Dates</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Please adhere strictly to CBSE non-cash payment directives and quarterly deadlines.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* PDC Quarter Due Schedule */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" /> PDC Cheque Quarter Schedule
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              As per CBSE directives, fees must be paid through non-cash modes. Parents can submit 4 Post Dated Cheques (PDC) drawn in favor of <strong>"Pavna School Aligarh"</strong> at the time of admission:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] text-amber-400 font-bold uppercase">1st Quarter Due</span>
                <div className="text-sm font-bold text-white">4th April 2026</div>
                <span className="text-[10px] text-slate-500">(or date of admission)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] text-amber-400 font-bold uppercase">2nd Quarter Due</span>
                <div className="text-sm font-bold text-white">4th July 2026</div>
                <span className="text-[10px] text-slate-500">(or date of admission)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] text-amber-400 font-bold uppercase">3rd Quarter Due</span>
                <div className="text-sm font-bold text-white">4th October 2026</div>
                <span className="text-[10px] text-slate-500">(advance billing)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] text-amber-400 font-bold uppercase">4th Quarter Due</span>
                <div className="text-sm font-bold text-white">4th January 2027</div>
                <span className="text-[10px] text-slate-500">(advance billing)</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-violet-950/40 border border-violet-800/40 text-[11px] text-violet-300">
              * On the back of each cheque leaf, please mention: <strong>Student Name, Class & Section, and Parent Mobile Number</strong>.
            </div>
          </div>

          {/* Late Fees & Penalties Directives */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-400" /> Late Payment & Bounce Rules
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-rose-400 font-bold">
                  <Clock className="w-4 h-4" /> Late Fee Penalty
                </div>
                <p className="text-[11px] text-slate-400">
                  Late fee @ <strong>Rs. 30/- per day</strong> will be charged effective from the 16th day of every quarter month till the 15th day of the next month (30 days).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-rose-400 font-bold">
                  <AlertTriangle className="w-4 h-4" /> Cheque Bounce Charge
                </div>
                <p className="text-[11px] text-slate-400">
                  If a PDC cheque is bounced for any reason, a cheque-return administrative charge of <strong>Rs. 750/-</strong> will be levied.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-900/40 text-[11px] text-rose-300">
                Non-payment beyond 30 days after due date will lead to striking the student's name off school rolls.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ARCHIVE HISTORICAL FEE STRUCTURE DOCUMENTS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Document Center</span>
            <h2 className="text-2xl font-black text-white">Historical Fee Records & Prospectus</h2>
          </div>
          <Link 
            to="/admission/prospectus" 
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold px-5 py-3 rounded-xl transition-all"
          >
            <Download className="w-4 h-4 text-amber-400" /> Download 2026-27 Prospectus PDF
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { year: 'DPS - Fee Structure 2025-26', file: '#2025-26' },
            { year: 'DPS - Fee Structure 2024-25', file: '#2024-25' },
            { year: 'DPS - Fee Structure 2023-24', file: '#2023-24' }
          ].map((item, idx) => (
            <a 
              key={idx}
              href={item.file}
              className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/50 flex items-center justify-between transition-all group backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-slate-200">{item.year}</span>
              </div>
              <Download className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
            </a>
          ))}
        </div>
      </section>
      <FeatureHighlightSection />

    </div>
  );
};