import React from 'react';
import { FeatureHighlightSection } from '../components/FeatureHighlightSection';
import { HeroSection } from '../components/Hero';

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-emerald-500 selection:text-slate-950">
      {/* Expanded Multi-Section Hero */}
      <HeroSection />

      {/* Feature Highlight Section matching dark slate/emerald theme */}
      <FeatureHighlightSection />
      
    </div>
  );
};