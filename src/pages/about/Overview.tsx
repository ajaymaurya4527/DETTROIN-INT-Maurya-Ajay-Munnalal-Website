import React from 'react';

export const Overview: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
      <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">About Us</span>
      <h1 className="text-3xl font-extrabold text-blue-950">School Overview</h1>
      <p className="text-gray-600 leading-relaxed">
        Pavna International School in Aligarh offers a vibrant learning environment designed to stimulate intellect and cultivate empathy. Our broad curriculum is supported by state-of-the-art facilities and dedicated faculty.
      </p>
    </div>
  );
};