import React, { useState } from 'react';
import { Lock, Mail, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  const [role, setRole] = useState<'student' | 'parent' | 'staff'>('student');

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex bg-blue-950 text-amber-400 p-3 rounded-2xl mb-1">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-blue-950">Portal Login</h2>
          <p className="text-xs text-gray-500">Access your school dashboard, grades, and notices</p>
        </div>

        {/* Role Switcher */}
        <div className="grid grid-cols-3 gap-1 bg-gray-100 p-1 rounded-xl text-xs font-bold text-center">
          <button
            onClick={() => setRole('student')}
            className={`py-2 rounded-lg transition-all ${role === 'student' ? 'bg-white text-blue-950 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Student
          </button>
          <button
            onClick={() => setRole('parent')}
            className={`py-2 rounded-lg transition-all ${role === 'parent' ? 'bg-white text-blue-950 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Parent
          </button>
          <button
            onClick={() => setRole('staff')}
            className={`py-2 rounded-lg transition-all ${role === 'staff' ? 'bg-white text-blue-950 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Staff
          </button>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              {role === 'student' ? 'Admission / Enrollment No' : 'Registered Email ID'}
            </label>
            <div className="relative">
              <input
                type={role === 'student' ? 'text' : 'email'}
                required
                placeholder={role === 'student' ? 'PIS2026102' : 'parent@example.com'}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-950 bg-gray-50/50"
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-950 bg-gray-50/50"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-300 text-blue-950 focus:ring-0" />
              Remember me
            </label>
            <a href="#forgot" className="text-amber-600 font-bold hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all shadow-md text-sm"
          >
            Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        <div className="text-center text-xs text-gray-500">
          Need portal credentials? <Link to="/contact" className="text-blue-950 font-bold underline">Contact School Office</Link>
        </div>
      </div>
    </div>
  );
};