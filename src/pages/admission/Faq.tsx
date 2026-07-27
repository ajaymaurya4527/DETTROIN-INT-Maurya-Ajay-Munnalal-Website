import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

import { FeatureHighlightSection } from '../../components/FeatureHighlightSection';


export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FaqItem[] = [
    {
      question: "What is the entry age criterion for Nursery and Grade 1 admissions?",
      answer: "As per the NEP guidelines, the minimum age for Nursery is 3 years, and for Grade 1 it is 6 years completed as of March 31st of the academic year.",
      category: "Admissions"
    },
    {
      question: "Does the school provide GPS-tracked transport facilities?",
      answer: "Yes, our fleet of air-conditioned buses covers all major routes across Aligarh. Each bus is equipped with real-time GPS tracking and dedicated female attendants.",
      category: "Transport"
    },
    {
      question: "Is there a hostel / boarding facility available for outstation students?",
      answer: "Yes, Pavna International offers world-class separate residential wings for boys and girls with 24/7 pastoral care, organic dining, and evening tutorial hours.",
      category: "Residential"
    },
    {
      question: "What curriculum does the school follow?",
      answer: "We are affiliated with the Central Board of Secondary Education (CBSE), New Delhi, integrated with modern experiential STEM and robotics modules.",
      category: "Academics"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-3.5 py-1.5 rounded-full border border-teal-500/20">
            Got Questions?
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Frequently Asked Questions</h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Find quick answers to common queries regarding admissions, fees, hostel, and campus life.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search FAQ keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-11 pr-4 py-3 text-xs text-white focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-sm text-white">{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-teal-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-0 text-xs text-slate-400 leading-relaxed border-t border-slate-800/50">
                  <p className="pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
          

        </div>
        
      </div>
      <FeatureHighlightSection />
    </div>
  );
};