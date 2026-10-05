'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, Mail, User, BookOpen, MapPin } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultSubject = 'MBBS Admission 2026-2027' }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    neetScore: '',
    state: 'West Bengal',
    course: 'MBBS Program',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      neetScore: '',
      state: 'West Bengal',
      course: 'MBBS Program',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl overflow-hidden glass-card rounded-3xl p-6 md:p-8 border border-white/80 shadow-2xl bg-white/90">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100/80 rounded-full transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Enquiry Received!</h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <strong className="text-slate-800">{formData.name || 'Aspirant'}</strong>. Our admission counseling team at Jakir Hossain Medical College & Research Institute will contact you shortly on <strong>{formData.phone}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-100 text-xs text-teal-800 space-y-1">
              <p>For urgent admission assistance, call our direct helpline:</p>
              <p className="font-semibold text-teal-900 text-sm">{SITE_INFO.phone}</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm transition-all shadow-md shadow-teal-600/20"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100/80 text-teal-800 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Admissions 2026-2027 Helpline</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">MBBS Admission & General Enquiry</h3>
              <p className="text-slate-500 text-xs mt-1">
                Fill the form below to receive detailed fee structure, counseling eligibility, and hostel details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Candidate / Guardian Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">NEET Score / AIR (if available)</label>
                  <input
                    type="text"
                    placeholder="e.g. 520 Marks / AIR 45,000"
                    value={formData.neetScore}
                    onChange={(e) => setFormData({ ...formData, neetScore: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Domicile State</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 transition-all text-slate-700"
                    >
                      <option value="West Bengal">West Bengal</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Assam & North East">Assam & North East</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Other State (All India)">Other State (All India)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Interested Stream</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 transition-all text-slate-700"
                  >
                    <option value="MBBS Program (150 Seats)">MBBS Program (150 Seats)</option>
                    <option value="State Quota Counseling">State Quota Counseling (WBMCC)</option>
                    <option value="Management Quota Information">Management Quota Details</option>
                    <option value="Hostel & Campus Visit">Hostel & Campus Visit</option>
                    <option value="General Hospital Query">General Hospital Query</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Specific Questions</label>
                <textarea
                  rows={2}
                  placeholder="Ask any question regarding cut-offs, fee payment installments, hostel accommodation..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 transition-all"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">🔒 100% confidential. No spam.</span>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold text-sm shadow-md shadow-teal-600/20 transition-all cursor-pointer"
                >
                  {loading ? 'Submitting...' : 'Submit Enquiry'}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
