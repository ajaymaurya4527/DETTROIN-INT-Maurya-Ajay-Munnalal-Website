import React from 'react';
import { Link } from 'react-router-dom';

export const FeeStructure: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <div>
        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Admission</span>
        <h1 className="text-3xl font-extrabold text-blue-950 mt-1">Fee Structure (2026-2027)</h1>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-blue-950 text-white text-xs uppercase">
            <tr>
              <th className="p-4">Grade Category</th>
              <th className="p-4">Admission Fee (One Time)</th>
              <th className="p-4">Quarterly Tuition Fee</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr>
              <td className="p-4 font-semibold">Pre-Primary (Nursery - UKG)</td>
              <td className="p-4">₹15,000</td>
              <td className="p-4">₹8,500</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Primary (Grade 1 - 5)</td>
              <td className="p-4">₹20,000</td>
              <td className="p-4">₹10,500</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Middle & High School (Grade 6 - 10)</td>
              <td className="p-4">₹25,000</td>
              <td className="p-4">₹12,500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex gap-4">
        <Link to="/admission/apply" className="bg-orange-500 text-white font-bold px-6 py-2.5 rounded-full text-sm">Proceed to Apply</Link>
        <Link to="/admission/prospectus" className="bg-gray-100 text-gray-700 font-bold px-6 py-2.5 rounded-full text-sm">Download Full Prospectus</Link>
      </div>
    </div>
  );
};