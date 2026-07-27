import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle, 
  Upload, 
  X, 
  AlertCircle, 
  Image as ImageIcon 
} from 'lucide-react';

interface FormFields {
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  message: string;
}

interface FormErrors {
  parentName?: string;
  phone?: string;
  email?: string;
  grade?: string;
  message?: string;
  file?: string;
}

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormFields>({
    parentName: '',
    phone: '',
    email: '',
    grade: 'Pre-Primary (Nursery - UKG)',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate Single Field
  const validateField = (name: keyof FormFields, value: string): string | undefined => {
    switch (name) {
      case 'parentName':
        if (!value.trim()) return "Parent's name is required.";
        if (value.trim().length < 3) return "Name must be at least 3 characters long.";
        break;
      case 'phone':
        if (!value.trim()) return "Phone number is required.";
        if (!/^[+0-9\s-]{10,15}$/.test(value.trim())) return "Enter a valid phone number (min 10 digits).";
        break;
      case 'email':
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        break;
      default:
        return undefined;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name as keyof FormFields, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // Image Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, file: 'Image size must be less than 5 MB.' }));
      return;
    }

    setErrors((prev) => ({ ...prev, file: undefined }));
    setUploadedFile(file);

    // Generate Preview Image
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

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields before submit
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormFields>).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setShowToast(true);

    // Auto-dismiss toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      grade: 'Pre-Primary (Nursery - UKG)',
      message: '',
    });
    removeFile();
    setErrors({});
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 relative overflow-hidden">
      
      {/* Floating Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-bounce">
          <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-xl">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold">Submitted successfully!</p>
            <p className="text-[11px] text-gray-400">Our admissions team will contact you shortly.</p>
          </div>
          <button 
            onClick={() => setShowToast(false)} 
            className="ml-3 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mt-1">Contact & Campus Location</h1>
          <p className="text-gray-600 text-sm mt-3">
            Have questions about admissions, fees, or school policies? Our team is available to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-blue-950 text-white p-8 rounded-3xl shadow-xl space-y-6">
            <h3 className="text-2xl font-bold border-b border-blue-900 pb-4">Reach Out Directly</h3>
            
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 text-amber-400 p-3 rounded-xl mt-1 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Campus Address</h4>
                  <p className="text-blue-200 text-xs mt-1 leading-relaxed">
                    Pavna Educational Complex, Near Bonami Garment, GT Road, Aligarh, Uttar Pradesh - 202001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 text-amber-400 p-3 rounded-xl mt-1 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone & WhatsApp</h4>
                  <p className="text-blue-200 text-xs mt-1">+91 91055 00010 / +91 91055 00011</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 text-amber-400 p-3 rounded-xl mt-1 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Inquiries</h4>
                  <p className="text-blue-200 text-xs mt-1">info@pavnaschool.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 text-amber-400 p-3 rounded-xl mt-1 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Office Hours</h4>
                  <p className="text-blue-200 text-xs mt-1">Monday – Saturday: 8:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-950 mb-2">Send an Inquiry</h3>
            <p className="text-xs text-gray-500 mb-6">Fill out the form below and we will get back to you shortly.</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                <h4 className="text-lg font-bold text-green-900">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-green-700 max-w-md mx-auto">
                  Thank you for reaching out, <strong className="text-green-950">{formData.parentName}</strong>. Our admissions counselor will contact you within 24 hours.
                </p>
                {uploadedFile && (
                  <div className="inline-flex items-center gap-2 bg-green-100/80 px-3 py-1.5 rounded-lg text-xs text-green-900 font-medium">
                    <ImageIcon className="w-4 h-4 text-green-700" />
                    <span>Attached: {uploadedFile.name}</span>
                  </div>
                )}
                <div>
                  <button 
                    onClick={handleReset} 
                    className="text-xs bg-green-700 hover:bg-green-800 text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm mt-2"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Parent Name & Phone Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Parent's Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Parent's Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Rahul Sharma" 
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border ${errors.parentName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-blue-950'} focus:outline-none bg-gray-50/50 transition-colors`} 
                    />
                    {errors.parentName && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.parentName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 9876543210" 
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-blue-950'} focus:outline-none bg-gray-50/50 transition-colors`} 
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Seeking Grade Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="parent@example.com" 
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border ${errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-blue-950'} focus:outline-none bg-gray-50/50 transition-colors`} 
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Seeking Admission For */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Seeking Admission For</label>
                    <select 
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-950 bg-gray-50/50 cursor-pointer"
                    >
                      <option value="Pre-Primary (Nursery - UKG)">Pre-Primary (Nursery - UKG)</option>
                      <option value="Primary School (Grades 1-5)">Primary School (Grades 1-5)</option>
                      <option value="Middle School (Grades 6-8)">Middle School (Grades 6-8)</option>
                      <option value="Senior School (Grades 9-12)">Senior School (Grades 9-12)</option>
                    </select>
                  </div>
                </div>

                {/* Photo / Document Upload Section */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Attach Student Photo / Document (Optional)
                  </label>
                  
                  {!uploadedFile ? (
                    <label className="border-2 border-dashed border-gray-200 hover:border-blue-900 rounded-2xl p-4 text-center transition-colors bg-gray-50/50 cursor-pointer block group">
                      <input 
                        type="file" 
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        className="hidden" 
                      />
                      <Upload className="w-5 h-5 text-gray-400 mx-auto mb-1.5 group-hover:scale-110 group-hover:text-blue-950 transition-all" />
                      <p className="text-xs text-gray-600 font-medium">Click to upload photo or drag & drop</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">Supports JPG, PNG, PDF (Max 5MB)</p>
                    </label>
                  ) : (
                    /* Image / File Preview Box */
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 overflow-hidden">
                        {filePreview ? (
                          <img src={filePreview} alt="Preview" className="w-10 h-10 object-cover rounded-lg border border-gray-200 shrink-0" />
                        ) : (
                          <div className="w-10 h-10 bg-blue-100 text-blue-950 rounded-lg flex items-center justify-center shrink-0">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                        )}
                        <div className="truncate">
                          <p className="text-xs font-semibold text-gray-800 truncate">{uploadedFile.name}</p>
                          <p className="text-[10px] text-gray-400">{(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button 
                        type="button" 
                        onClick={removeFile}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {errors.file && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.file}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message / Question</label>
                  <textarea 
                    rows={3} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-950 bg-gray-50/50 resize-none transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};