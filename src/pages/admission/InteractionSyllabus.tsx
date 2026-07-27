import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Download } from 'lucide-react';

export const InteractionSyllabus: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'primary' | 'middle' | 'senior'>('primary');

  const syllabusData = {
    primary: {
      wing: "Primary Wing (Grades 1 to 5)",
      focus: "Reading fluency, foundational arithmetic, logical patterns, and observational skills.",
      subjects: [
        { name: "English Language", topics: ["Phonics & Reading Comprehension", "Basic Nouns & Verbs", "Sentence Construction"] },
        { name: "Mathematics", topics: ["Basic Addition/Subtraction", "Number Sequences", "Shapes & Pattern Recognition"] },
        { name: "General Knowledge & EVS", topics: ["Our Environment & Plants", "Personal Hygiene & Safety", "Basic World Geography"] }
      ]
    },
    middle: {
      wing: "Middle Wing (Grades 6 to 8)",
      focus: "Conceptual understanding, analytical thinking, problem-solving, and vocabulary.",
      subjects: [
        { name: "English & Verbal Ability", topics: ["Reading Passages", "Grammar & Tenses", "Paragraph Writing"] },
        { name: "Mathematics & Reasoning", topics: ["Fractions & Decimals", "Basic Algebra & Geometry", "Quantitative Aptitude"] },
        { name: "General Science", topics: ["States of Matter", "Human Body Systems", "Energy & Force Concepts"] }
      ]
    },
    senior: {
      wing: "Senior Wing (Grades 9 to 11)",
      focus: "Board exam foundation, critical analysis, mathematical proofs, and scientific concepts.",
      subjects: [
        { name: "Mathematics & Logic", topics: ["Linear Equations & Quadratics", "Coordinate Geometry", "Trigonometric Basics"] },
        { name: "Science (Physics / Chem / Bio)", topics: ["Laws of Motion & Optics", "Chemical Reactions & Acids", "Cell Biology"] },
        { name: "English & Analytical Writing", topics: ["Formal Essay Writing", "Reading Comprehension", "Grammatical Precision"] }
      ]
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-3.5 py-1.5 rounded-full border border-teal-500/20">
            Assessment Guidelines
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Interaction & Assessment Syllabus
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Review the age-appropriate syllabus guidelines designed to assess learning readiness rather than test memorization.
          </p>
        </div>

        {/* Wing Tabs */}
        <div className="flex justify-center gap-2 bg-slate-900 p-2 rounded-2xl border border-slate-800 max-w-xl mx-auto">
          {[
            { id: 'primary', label: 'Primary (Grades 1-5)' },
            { id: 'middle', label: 'Middle (Grades 6-8)' },
            { id: 'senior', label: 'Senior (Grades 9-11)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Selected Syllabus Cards */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 space-y-6 shadow-2xl">
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-black text-white">{syllabusData[activeTab].wing}</h2>
            <p className="text-xs text-teal-400 font-semibold">{syllabusData[activeTab].focus}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {syllabusData[activeTab].subjects.map((sub, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                  <BookOpen className="w-4 h-4" /> {sub.name}
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {sub.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-5 py-2.5 rounded-xl text-xs transition-all flex items-center gap-2">
              Download Printable Syllabus PDF <Download className="w-4 h-4 text-teal-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};