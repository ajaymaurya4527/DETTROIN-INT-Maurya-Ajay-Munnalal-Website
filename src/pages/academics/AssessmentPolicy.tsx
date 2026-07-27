import React, { useState } from 'react';
import { 
  FileCheck2, 
  BarChart3, 
  Target, 
  TrendingUp,
  Brain,
} from 'lucide-react';

import { FeatureHighlightSection } from '../../components/FeatureHighlightSection';

export const AssessmentPolicy: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<'primary' | 'middle' | 'senior'>('primary');

  const gradeStructures = {
    primary: {
      title: "Primary Wing (Grades 1 - 5)",
      subtitle: "Continuous & Comprehensive Evaluation (CCE)",
      description: "Focuses on stress-free formative feedback, activity-based assessments, reading fluency, and core numeracy skills without rigid numeric rankings.",
      breakdown: [
        { title: "Formative Activities & Projects", weight: "40%", desc: "Classroom observations, quizzes, art integration" },
        { title: "Skill Rubrics & Portfolios", weight: "30%", desc: "Reading logs, handwriting, STEM experiment journals" },
        { title: "Term Assessment Checks", weight: "30%", desc: "Bi-annual foundational comprehension assessments" }
      ]
    },
    middle: {
      title: "Middle Wing (Grades 6 - 8)",
      subtitle: "Holistic Competency Assessment",
      description: "Transitions towards conceptual application, analytical reasoning, lab practicals, and structured periodic tests.",
      breakdown: [
        { title: "Periodic Tests & Quizzes", weight: "20%", desc: "Monthly skill check-ins to monitor retention" },
        { title: "Subject Enrichment & Practical", weight: "20%", desc: "Lab work, map work, language speaking tests" },
        { title: "Half-Yearly & Annual Exams", weight: "60%", desc: "Written examinations assessing deep concepts" }
      ]
    },
    senior: {
      title: "Senior Wing (Grades 9 - 12)",
      subtitle: "CBSE Board & Competitive Standard",
      description: "Prepares students for AISSE/AISSCE board patterns, entrance examination logic, case-study questions, and rigorous practical portfolios.",
      breakdown: [
        { title: "Periodic & Pre-Board Written Tests", weight: "70%", desc: "Strictly aligned with CBSE board paper patterns" },
        { title: "Internal Practical & Viva", weight: "20%", desc: "CBSE verified lab experiments and projects" },
        { title: "Attendance & Conduct", weight: "10%", desc: "Regularity, lab discipline, and assignment timeliness" }
      ]
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 p-8 sm:p-12 border border-emerald-500/20 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest">
              <FileCheck2 className="w-4 h-4 text-emerald-400" /> Academic Standards & Grading Framework
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Assessment & Evaluation Policy
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our evaluation philosophy moves beyond traditional memorization. We measure student growth through continuous feedback, conceptual understanding, critical thinking, and holistic development aligned with NEP 2020.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Competency-Based</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Evaluates real-world application of concepts rather than rote learning capability.
            </p>
          </div>

          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Continuous Feedback</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Timely teacher feedback allows students to identify gaps and improve continuously.
            </p>
          </div>

          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">360-Degree Growth</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Includes academics, co-curricular skills, sports, emotional maturity, and social ethics.
            </p>
          </div>
        </div>

        {/* Interactive Grade Selector */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Assessment Structure by Grade</h2>
              <p className="text-xs text-slate-400">Select a wing to view its evaluation breakdown</p>
            </div>

            <div className="flex gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
              {[
                { id: 'primary', label: 'Primary (1-5)' },
                { id: 'middle', label: 'Middle (6-8)' },
                { id: 'senior', label: 'Senior (9-12)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedGrade(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedGrade === tab.id
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Wing Content */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Selected Level</span>
              <h3 className="text-2xl font-black text-white">{gradeStructures[selectedGrade].title}</h3>
              <p className="text-xs font-bold text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg inline-block">
                {gradeStructures[selectedGrade].subtitle}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {gradeStructures[selectedGrade].description}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {gradeStructures[selectedGrade].breakdown.map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                  <span className="text-lg font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20 shrink-0">
                    {item.weight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grading Scale Table */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">CBSE Standard Grading Scale</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase font-bold border-b border-slate-800">
                <tr>
                  <th className="p-3">Marks Range</th>
                  <th className="p-3">Grade</th>
                  <th className="p-3">Performance Level</th>
                  <th className="p-3">Qualifying Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr>
                  <td className="p-3 font-mono">91 - 100</td>
                  <td className="p-3 font-bold text-emerald-400">A1</td>
                  <td className="p-3">Outstanding Conceptual Mastery</td>
                  <td className="p-3 text-emerald-400 font-semibold">Passed with Distinction</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono">81 - 90</td>
                  <td className="p-3 font-bold text-emerald-400">A2</td>
                  <td className="p-3">Excellent Understanding</td>
                  <td className="p-3 text-emerald-400 font-semibold">Passed</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono">71 - 80</td>
                  <td className="p-3 font-bold text-emerald-400">B1</td>
                  <td className="p-3">Very Good Application</td>
                  <td className="p-3 text-emerald-400 font-semibold">Passed</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono">61 - 70</td>
                  <td className="p-3 font-bold text-amber-400">B2</td>
                  <td className="p-3">Good Understanding</td>
                  <td className="p-3 text-emerald-400 font-semibold">Passed</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono">33 - 60</td>
                  <td className="p-3 font-bold text-amber-400">C1 - D</td>
                  <td className="p-3">Average / Needs Guidance</td>
                  <td className="p-3 text-emerald-400 font-semibold">Passed</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono">Below 33</td>
                  <td className="p-3 font-bold text-rose-400">E</td>
                  <td className="p-3">Essential Repeat Required</td>
                  <td className="p-3 text-rose-400 font-semibold">Remedial Mentorship</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <FeatureHighlightSection />

      </div>
    </div>
  );
};