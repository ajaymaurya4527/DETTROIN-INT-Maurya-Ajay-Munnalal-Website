import React, { useState } from 'react';
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  CheckCircle2, 
  AlertCircle,
  Upload,
  Calendar,
  X,
  FileText,
  Sparkles,
  ShieldCheck,
  Image as ImageIcon
} from 'lucide-react';

interface FormFields {
  studentName: string;
  dob: string;
  grade: string;
  gender: string;
  parentName: string;
  phone: string;
  email: string;
}

interface FormErrors {
  studentName?: string;
  dob?: string;
  grade?: string;
  gender?: string;
  parentName?: string;
  phone?: string;
  email?: string;
  file?: string;
}

export const ApplyOnline: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormFields>({
    studentName: '',
    dob: '',
    grade: 'Grade 1',
    gender: 'Male',
    parentName: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error on user edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Single Field Validation Rule
  const validateField = (name: keyof FormFields, value: string): string | undefined => {
    switch (name) {
      case 'studentName':
        if (!value.trim()) return 'Student full name is required.';
        if (value.trim().length < 3) return 'Name must be at least 3 characters long.';
        break;
      case 'dob':
        if (!value) return 'Please select date of birth.';
        break;
      case 'parentName':
        if (!value.trim()) return "Parent's full name is required.";
        break;
      case 'phone':
        if (!value.trim()) return 'Phone number is required.';
        if (!/^[+0-9\s-]{10,15}$/.test(value.trim())) return 'Enter a valid phone number (min 10 digits).';
        break;
      case 'email':
        if (!value.trim()) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address.';
        break;
      default:
        return undefined;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name as keyof FormFields, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // Image & Document Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, file: 'File size must be less than 5 MB.' }));
      return;
    }

    setErrors((prev) => ({ ...prev, file: undefined }));
    setUploadedFile(file);

    // If image, create preview
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => setFilePreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setFilePreview(null);
  };

  // Form Submission Validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormFields>).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success State & Toast
    setSubmitted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      dob: '',
      grade: 'Grade 1',
      gender: 'Male',
      parentName: '',
      phone: '',
      email: '',
    });
    removeFile();
    setErrors({});
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Ambient Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-slate-900 border border-teal-500/50 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-slide-in backdrop-blur-lg">
          <div className="p-2 bg-teal-500/20 text-teal-400 rounded-xl">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold">Application Submitted!</p>
            <p className="text-[11px] text-slate-400">Confirmation sent to {formData.email}</p>
          </div>
          <button 
            onClick={() => setShowToast(false)} 
            className="ml-4 text-slate-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="max-w-3xl w-full space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Academic Session 2026-27
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Online Admission Application
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Please complete the official enrollment form below. Fields marked with an asterisk (*) are mandatory.
          </p>
        </div>

        {submitted ? (
          /* Confirmation View */
          <div className="bg-slate-900/90 backdrop-blur-xl border border-teal-500/30 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl animate-fade-in">
            <div className="w-20 h-20 bg-teal-500/20 text-teal-400 rounded-3xl flex items-center justify-center mx-auto border border-teal-500/30 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-white">Application Received Successfully!</h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for applying for <strong className="text-white">{formData.studentName}</strong>. Your reference ID is <span className="font-mono text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">APP-2026-8941</span>.
              </p>
            </div>

            {uploadedFile && (
              <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 inline-flex items-center gap-3 text-xs text-slate-300 max-w-xs mx-auto">
                <FileText className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="truncate">{uploadedFile.name}</span>
              </div>
            )}

            <div>
              <button 
                onClick={handleResetForm} 
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-teal-500/20 active:scale-95"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} noValidate className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800/80 p-6 sm:p-10 space-y-8 shadow-2xl">
            
            {/* Section 1: Student Information */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold text-teal-400 uppercase tracking-wider border-b border-slate-800/80 pb-3 flex items-center gap-2">
                <User className="w-4 h-4" /> 1. Student Personal Details
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Student Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Rahul Sharma" 
                    className={`w-full bg-slate-950/80 border ${errors.studentName ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-all`}
                  />
                  {errors.studentName && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.studentName}
                    </p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Date of Birth <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-950/80 border ${errors.dob ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-teal-500 transition-all cursor-pointer`}
                    />
                  </div>
                  {errors.dob && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.dob}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Grade Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Seeking Grade <span className="text-rose-400">*</span>
                  </label>
                  <select 
                    name="grade"
                    value={formData.grade} 
                    onChange={handleChange}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-teal-500 transition-all cursor-pointer"
                  >
                    <option value="Nursery / LKG / UKG">Nursery / LKG / UKG</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2 - 5">Grade 2 - 5</option>
                    <option value="Grade 6 - 8">Grade 6 - 8</option>
                    <option value="Grade 9 - 10">Grade 9 - 10</option>
                    <option value="Grade 11 - 12 (Science / Commerce)">Grade 11 - 12 (Science / Commerce)</option>
                  </select>
                </div>

                {/* Gender Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Gender <span className="text-rose-400">*</span>
                  </label>
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-teal-500 transition-all cursor-pointer"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Parent Information */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-extrabold text-teal-400 uppercase tracking-wider border-b border-slate-800/80 pb-3 flex items-center gap-2">
                <Phone className="w-4 h-4" /> 2. Parent / Guardian Contact
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Parent's Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Suresh Sharma" 
                    className={`w-full bg-slate-950/80 border ${errors.parentName ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-all`}
                  />
                  {errors.parentName && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.parentName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Phone (WhatsApp) <span className="text-rose-400">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 98765 43210" 
                    className={`w-full bg-slate-950/80 border ${errors.phone ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-all`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="parent@example.com" 
                  className={`w-full bg-slate-950/80 border ${errors.email ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-all`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Section 3: File Upload */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase">
                Student Photo / Birth Certificate / Report Card (Optional)
              </label>

              {!uploadedFile ? (
                <label className={`border-2 border-dashed ${errors.file ? 'border-rose-500' : 'border-slate-800 hover:border-teal-500/50'} rounded-2xl p-6 text-center transition-colors bg-slate-950/40 cursor-pointer block group`}>
                  <input 
                    type="file" 
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                    className="hidden" 
                  />
                  <Upload className="w-6 h-6 text-teal-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-slate-300 font-semibold">Click to upload photo or drag & drop</p>
                  <p className="text-[10px] text-slate-500 mt-1">Supports PNG, JPG, PDF (Max 5MB)</p>
                </label>
              ) : (
                /* Selected File / Image Preview Box */
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 overflow-hidden">
                    {filePreview ? (
                      <img src={filePreview} alt="Preview" className="w-12 h-12 object-cover rounded-xl border border-slate-800 shrink-0" />
                    ) : (
                      <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                    )}
                    <div className="truncate">
                      <p className="text-xs font-semibold text-white truncate">{uploadedFile.name}</p>
                      <p className="text-[10px] text-slate-500">{(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={removeFile}
                    className="p-2 text-slate-400 hover:text-rose-400 bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {errors.file && (
                <p className="text-[11px] text-rose-400 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3 h-3 shrink-0" /> {errors.file}
                </p>
              )}
            </div>

            {/* Submit Action Button */}
            <button 
              type="submit" 
              className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-teal-500/20 text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              Submit Application Form <Send className="w-4 h-4" />
            </button>

            {/* Footer Institutional Privacy Note */}
            <div className="pt-2 border-t border-slate-800/80 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>All submitted records are encrypted according to institutional policies.</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};