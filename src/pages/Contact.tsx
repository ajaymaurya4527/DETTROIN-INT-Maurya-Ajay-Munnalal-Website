import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
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
                <div className="bg-amber-500/20 text-amber-400 p-3 rounded-xl mt-1">
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
                <div className="bg-amber-500/20 text-amber-400 p-3 rounded-xl mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone & WhatsApp</h4>
                  <p className="text-blue-200 text-xs mt-1">+91 91055 00010 / +91 91055 00011</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 text-amber-400 p-3 rounded-xl mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Inquiries</h4>
                  <p className="text-blue-200 text-xs mt-1">info@pavnaschool.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/20 text-amber-400 p-3 rounded-xl mt-1">
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
              <div className="bg-green-50 border border-green-200 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                <h4 className="text-lg font-bold text-green-900">Inquiry Submitted!</h4>
                <p className="text-xs text-green-700">Thank you for reaching out. Our admissions counselor will contact you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-xs text-green-900 font-bold underline mt-2">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Parent's Name *</label>
                    <input type="text" required placeholder="John Doe" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-950 bg-gray-50/50" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number *</label>
                    <input type="tel" required placeholder="+91 9876543210" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-950 bg-gray-50/50" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-950 bg-gray-50/50" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Seeking Admission For</label>
                    <select className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-950 bg-gray-50/50">
                      <option>Pre-Primary (Nursery - UKG)</option>
                      <option>Primary School (Grades 1-5)</option>
                      <option>Middle School (Grades 6-8)</option>
                      <option>Senior School (Grades 9-12)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message / Question</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-950 bg-gray-50/50 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
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