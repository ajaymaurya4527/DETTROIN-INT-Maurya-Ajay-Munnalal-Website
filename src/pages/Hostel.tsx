import React from 'react';
import { Home as House, ShieldCheck, Utensils, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hostel: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Banner */}
        <div className="bg-blue-950 text-white p-8 sm:p-12 rounded-3xl grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Residential Life</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold">A Home Away From Home</h1>
            <p className="text-blue-200 text-sm leading-relaxed">
              Pavna International Boarding House offers state-of-the-art residential facilities, nutritious meals, structured evening study hours, and 24/7 pastoral care.
            </p>
            <div className="pt-2">
              <Link to="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-xs transition-all">
                Book a Campus Tour
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 bg-blue-900/50 p-6 rounded-2xl border border-blue-800 space-y-3 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <House className="w-4 h-4" /> Separate Boys & Girls Wings
            </div>
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <ShieldCheck className="w-4 h-4" /> 3-Tier Security System
            </div>
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Utensils className="w-4 h-4" /> Nutritious Organic Dining
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
            <Utensils className="w-8 h-8 text-amber-500" />
            <h3 className="font-bold text-blue-950 text-base">Hygienic Dining Hall</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Four balanced meals per day planned by nutritionists, prepared in a modern stainless-steel kitchen.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
            <BookOpen className="w-8 h-8 text-amber-500" />
            <h3 className="font-bold text-blue-950 text-base">Evening Tutorial Classes</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Resident teachers provide dedicated study assistance and homework support during evening prep hours.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
            <Clock className="w-8 h-8 text-amber-500" />
            <h3 className="font-bold text-blue-950 text-base">Structured Routine</h3>
            <p className="text-xs text-gray-600 leading-relaxed">A balanced daily schedule covering physical fitness, academics, recreation, and disciplined rest.</p>
          </div>
        </div>
      </div>
    </div>
  );
};