import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Building2, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Briefcase,
  Camera,
  X,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  currentRole?: string;
  company?: string;
  photo?: string;
}

export const Registration: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showToast, setShowToast] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    batchYear: '2024',
    qualification: 'Bachelor of Science',
    currentRole: '',
    company: '',
    country: 'India',
    bio: ''
  });

  // Image Upload State
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  // Errors State
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors((prev) => ({ ...prev, photo: 'Please upload a valid image file.' }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, photo: 'Image size should be less than 5MB.' }));
        return;
      }

      setErrors((prev) => ({ ...prev, photo: undefined }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoPreview(null);
  };

  // Step 1 Validation Rule
  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }

    const phoneRegex = /^[0-9+\s-]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number (10+ digits).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 2 Validation Rule
  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.currentRole.trim()) {
      newErrors.currentRole = 'Current Designation / Role is required.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company / Institution is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      // Trigger Toast Notification
      setShowToast(true);
      setSubmitted(true);

      // Auto-hide Toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-emerald-500 text-slate-950 px-5 py-3.5 rounded-2xl shadow-2xl font-semibold text-xs sm:text-sm animate-bounce">
          <div className="bg-slate-950/20 p-1 rounded-full text-slate-950">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <span>Submitted successfully!</span>
        </div>
      )}

      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-2xl w-full space-y-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Official Network Membership
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Alumni Registration
          </h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Reconnect with your batchmates, unlock exclusive events, and mentor upcoming talent.
          </p>
        </div>

        {submitted ? (
          /* Confirmation State Card */
          <div className="bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
            
            <div className="w-20 h-20 bg-emerald-500/15 text-emerald-400 rounded-3xl flex items-center justify-center mx-auto border border-emerald-500/30 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Application Received!</h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your profile has been queued for institutional verification. An invitation link will be dispatched to <span className="text-emerald-400 font-mono underline decoration-emerald-500/40">{formData.email}</span> within 24 hours.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                to="/alumni/overview" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                Back to Alumni Portal <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Main Interactive Form Card */
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800/80 p-6 sm:p-10 shadow-2xl space-y-8 relative">
            
            {/* Step Wizard Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
                <span className={currentStep === 1 ? 'text-emerald-400' : 'text-slate-500'}>
                  Step 01: Personal Details
                </span>
                <span className={currentStep === 2 ? 'text-emerald-400' : 'text-slate-500'}>
                  Step 02: Career Info
                </span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-500 ease-out rounded-full"
                  style={{ width: currentStep === 1 ? '50%' : '100%' }}
                />
              </div>
            </div>

            {/* Form Section */}
            <form onSubmit={currentStep === 1 ? handleNext : handleSubmit} className="space-y-6" noValidate>
              
              {/* STEP 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-5">

                  {/* Profile Photo Upload */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Profile Photo
                    </label>
                    <div className="flex items-center gap-4">
                      {photoPreview ? (
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-emerald-500/50 shadow-md">
                          <img src={photoPreview} alt="Profile preview" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={removePhoto}
                            className="absolute top-1 right-1 bg-slate-950/80 text-rose-400 rounded-full p-0.5 hover:bg-slate-950 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <label className="w-16 h-16 rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 hover:bg-slate-900 flex flex-col items-center justify-center cursor-pointer transition-colors text-slate-500 hover:text-emerald-400">
                          <Camera className="w-5 h-5" />
                          <span className="text-[10px] mt-1 font-semibold">Upload</span>
                          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                        </label>
                      )}
                      <div className="text-xs text-slate-400">
                        <p className="font-medium text-slate-300">Upload headshot</p>
                        <p className="text-[11px] text-slate-500">JPG, PNG or WEBP (Max 5MB)</p>
                      </div>
                    </div>
                    {errors.photo && (
                      <p className="text-rose-500 text-[11px] mt-1 font-medium">{errors.photo}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 text-xs rounded-xl border ${
                            errors.fullName ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-emerald-500/80'
                          } bg-slate-950/70 text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                            errors.fullName ? 'focus:ring-rose-500' : 'focus:ring-emerald-500/80'
                          } transition-all`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-rose-500 text-[11px] mt-1 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          name="email"
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 text-xs rounded-xl border ${
                            errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-emerald-500/80'
                          } bg-slate-950/70 text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                            errors.email ? 'focus:ring-rose-500' : 'focus:ring-emerald-500/80'
                          } transition-all`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-rose-500 text-[11px] mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Graduation Year */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Passout Batch <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <GraduationCap className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <select
                          name="batchYear"
                          value={formData.batchYear}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 text-xs rounded-xl border border-slate-800 bg-slate-950/70 text-white focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80 transition-all appearance-none cursor-pointer"
                        >
                          {Array.from({ length: 25 }, (_, i) => 2026 - i).map(year => (
                            <option key={year} value={year} className="bg-slate-900 text-white">
                              Class of {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Phone / WhatsApp <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 text-xs rounded-xl border ${
                            errors.phone ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-emerald-500/80'
                          } bg-slate-950/70 text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                            errors.phone ? 'focus:ring-rose-500' : 'focus:ring-emerald-500/80'
                          } transition-all`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-rose-500 text-[11px] mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.99]"
                    >
                      Next: Career Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Professional Details */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Current Role */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Current Designation / Role <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="currentRole"
                          placeholder="e.g. Full Stack Developer"
                          value={formData.currentRole}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 text-xs rounded-xl border ${
                            errors.currentRole ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-emerald-500/80'
                          } bg-slate-950/70 text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                            errors.currentRole ? 'focus:ring-rose-500' : 'focus:ring-emerald-500/80'
                          } transition-all`}
                        />
                      </div>
                      {errors.currentRole && (
                        <p className="text-rose-500 text-[11px] mt-1 font-medium">{errors.currentRole}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Company / Institution <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="company"
                          placeholder="e.g. TechCorp / Self-Employed"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 text-xs rounded-xl border ${
                            errors.company ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-emerald-500/80'
                          } bg-slate-950/70 text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                            errors.company ? 'focus:ring-rose-500' : 'focus:ring-emerald-500/80'
                          } transition-all`}
                        />
                      </div>
                      {errors.company && (
                        <p className="text-rose-500 text-[11px] mt-1 font-medium">{errors.company}</p>
                      )}
                    </div>
                  </div>

                  {/* Country */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Country of Residence
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="country"
                        placeholder="e.g. India, United States"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 text-xs rounded-xl border border-slate-800 bg-slate-950/70 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80 transition-all"
                      />
                    </div>
                  </div>

                  {/* Bio / Summary */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Short Bio / Highlights
                    </label>
                    <textarea
                      name="bio"
                      rows={3}
                      placeholder="Share brief achievements, expertise, or key highlights since graduation..."
                      value={formData.bio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-800 bg-slate-950/70 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/80 transition-all resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="w-1/3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 active:scale-[0.99]"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 active:scale-[0.99]"
                    >
                      Submit Registration <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Footer Institutional Privacy Note */}
            <div className="pt-4 border-t border-slate-800/80 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Data is encrypted and managed according to institutional privacy standards.</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};