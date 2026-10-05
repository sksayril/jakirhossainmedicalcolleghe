'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { ShieldCheck, Send, CheckCircle2, User, Phone, Mail, AlertCircle } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function GrievanceCellPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Patient & Student Grievance Redressal Cell"
        subtitle="Ensuring transparent, prompt, and confidential resolution of concerns relating to hospital care, academics, and administration."
        badge="Institutional Redressal Mechanism"
        breadcrumbs={[
          { label: 'Hospital', href: '/hospital' },
          { label: 'Grievance Cell' }
        ]}
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Submit a Confidential Grievance</h2>
              <p className="text-xs text-slate-500">Headed by the Medical Superintendent & Senior Faculty Committee</p>
            </div>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Grievance Registered Successfully</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your submission has been logged into the Grievance Redressal Cell. The committee will examine the matter with strict confidentiality and respond to you within 48-72 working hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full bg-teal-600 text-white font-bold text-xs uppercase"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile number"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category of Grievance</label>
                  <select className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-700">
                    <option>Hospital Patient Care & OPD/IPD</option>
                    <option>Academic & Classrooms</option>
                    <option>Hostel & Dining Mess</option>
                    <option>Administrative & Accounts</option>
                    <option>Other Matter</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Description of Issue / Grievance *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide detailed description with date, location, and relevant context..."
                  className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">🔒 All submissions are handled with strict privacy.</span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit to Committee</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
