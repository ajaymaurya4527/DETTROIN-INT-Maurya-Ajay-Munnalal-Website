import React, { useState } from 'react';
import { Lock, Mail, GraduationCap, CheckCircle, AlertCircle, UserCheck, ShieldCheck, School } from 'lucide-react';
import { Link } from 'react-router-dom';

type Role = 'student' | 'parent' | 'staff';

interface FormErrors {
  identifier?: string;
  password?: string;
}

export const Login: React.FC = () => {
  const [role, setRole] = useState<Role>('student');
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showToast, setShowToast] = useState<boolean>(false);

  // Handle Role Switching
  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    setIdentifier('');
    setPassword('');
    setErrors({});
  };

  // Form Validation Logic
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate Identifier
    if (!identifier.trim()) {
      newErrors.identifier =
        role === 'student'
          ? 'Admission / Enrollment Number is required.'
          : 'Registered Email ID is required.';
    } else if (role !== 'student') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(identifier)) {
        newErrors.identifier = 'Please enter a valid email address.';
      }
    }

    // Validate Password
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // Trigger Success Toast
      setShowToast(true);

      // Auto-hide Toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }
  };

  const getRoleIcon = () => {
    switch (role) {
      case 'student':
        return <GraduationCap className="w-8 h-8" />;
      case 'parent':
        return <UserCheck className="w-8 h-8" />;
      case 'staff':
        return <ShieldCheck className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-emerald-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-700 animate-bounce">
          <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
          <div>
            <h4 className="font-bold text-sm">Signed In Successfully!</h4>
            <p className="text-xs text-emerald-200">
              Welcome to the {role.charAt(0).toUpperCase() + role.slice(1)} portal.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200/80 shadow-2xl space-y-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex bg-slate-950 text-amber-400 p-3.5 rounded-2xl shadow-md transition-all">
            {getRoleIcon()}
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">Portal Login</h2>
          <p className="text-xs text-slate-500">Access your school dashboard, grades, and notices</p>
        </div>

        {/* Role Switcher */}
        <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1.5 rounded-2xl text-xs font-bold text-center">
          <button
            type="button"
            onClick={() => handleRoleChange('student')}
            className={`py-2.5 rounded-xl transition-all ${
              role === 'student'
                ? 'bg-slate-950 text-amber-400 shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange('parent')}
            className={`py-2.5 rounded-xl transition-all ${
              role === 'parent'
                ? 'bg-slate-950 text-amber-400 shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Parent
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange('staff')}
            className={`py-2.5 rounded-xl transition-all ${
              role === 'staff'
                ? 'bg-slate-950 text-amber-400 shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Staff
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          
          {/* Enrollment No / Email Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              {role === 'student' ? 'Admission / Enrollment No' : 'Registered Email ID'}
            </label>
            <div className="relative">
              <input
                type={role === 'student' ? 'text' : 'email'}
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  if (errors.identifier) {
                    setErrors((prev) => ({ ...prev, identifier: undefined }));
                  }
                }}
                placeholder={role === 'student' ? 'PIS2026102' : 'parent@example.com'}
                className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border ${
                  errors.identifier
                    ? 'border-red-500 bg-red-50/30 focus:border-red-600'
                    : 'border-slate-200 bg-slate-50/50 focus:border-slate-900'
                } focus:outline-none transition-colors`}
              />
              <Mail className={`w-4 h-4 absolute left-3 top-3.5 ${errors.identifier ? 'text-red-400' : 'text-slate-400'}`} />
            </div>
            {errors.identifier && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.identifier}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors((prev) => ({ ...prev, password: undefined }));
                  }
                }}
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border ${
                  errors.password
                    ? 'border-red-500 bg-red-50/30 focus:border-red-600'
                    : 'border-slate-200 bg-slate-50/50 focus:border-slate-900'
                } focus:outline-none transition-colors`}
              />
              <Lock className={`w-4 h-4 absolute left-3 top-3.5 ${errors.password ? 'text-red-400' : 'text-slate-400'}`} />
            </div>
            {errors.password && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.password}
              </p>
            )}
          </div>

          {/* Options Row */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-300 text-slate-950 focus:ring-0 cursor-pointer"
              />
              Remember me
            </label>
            <a href="#forgot" className="text-amber-600 font-bold hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-amber-600/20 text-xs uppercase tracking-wider active:scale-[0.99]"
          >
            Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-xs text-slate-500 border-t border-slate-100 pt-4">
          Need portal credentials?{' '}
          <Link to="/contact" className="text-slate-950 font-bold underline hover:text-amber-600">
            Contact School Office
          </Link>
        </div>
      </div>
    </div>
  );
};