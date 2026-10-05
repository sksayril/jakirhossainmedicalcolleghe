'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Briefcase, Send, CheckCircle2, User, Mail, Phone, FileText, Upload } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function CareerPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const jobOpenings = [
    {
      title: "Professor & HOD",
      departments: "General Medicine, General Surgery, Radio-Diagnosis, Anaesthesiology",
      experience: "As per National Medical Commission (NMC) TEQ Norms",
      type: "Full-Time"
    },
    {
      title: "Associate Professor",
      departments: "Paediatrics, Obstetrics & Gynaecology, Pathology, Microbiology",
      experience: "Minimum 4-5 years teaching experience as Assistant Professor with indexed publications",
      type: "Full-Time"
    },
    {
      title: "Assistant Professor / Senior Resident (SR)",
      departments: "All Pre, Para & Clinical Specialties",
      experience: "MD / MS / DNB in concerned medical discipline with valid registration",
      type: "Full-Time"
    },
    {
      title: "Tutor / Junior Resident (JR)",
      departments: "Anatomy, Physiology, Biochemistry, Pharmacology, FMT, Community Medicine",
      experience: "MBBS from NMC recognized medical college",
      type: "Full-Time"
    },
    {
      title: "Nursing Superintendent / Staff Nurses (ICU / OT)",
      departments: "Hospital Nursing Administration & Critical Care",
      experience: "B.Sc Nursing / GNM with minimum 2-3 years clinical experience",
      type: "Full-Time"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Careers & Faculty Recruitment"
        subtitle="Join our mission to transform medical education and healthcare in West Bengal. Competitive remuneration, academic growth, and research grants."
        badge="JHMCRI HR Department"
        breadcrumbs={[{ label: 'Careers' }]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* Openings Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Current Academic & Clinical Vacancies</h2>
            <p className="text-xs text-slate-500">Applications are invited from eligible candidates conforming to NMC qualification norms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                      {job.type}
                    </span>
                    <Briefcase className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                  <p className="text-xs font-semibold text-teal-800">Specialties: {job.departments}</p>
                  <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                    <strong>Eligibility:</strong> {job.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-2xl font-bold text-slate-900">Online Job Application Form</h3>
            <p className="text-xs text-slate-500 mt-1">Submit your profile directly to the HR & Dean&apos;s office</p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Application Submitted!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for applying to Jakir Hossain Medical College & Research Institute. Our HR recruitment committee will review your credentials and contact you for an interview.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full bg-teal-600 text-white font-bold text-xs uppercase"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name (Dr./Mr./Ms.) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp No. *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile number"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Position Applied For *</label>
                  <select className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-700">
                    <option>Professor</option>
                    <option>Associate Professor</option>
                    <option>Assistant Professor</option>
                    <option>Senior Resident (SR)</option>
                    <option>Tutor / Junior Resident (JR)</option>
                    <option>Nursing / Paramedical Staff</option>
                    <option>Hospital Administration</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Medical Specialty / Department *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. General Medicine, Orthopaedics, Anatomy..."
                  className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Qualifications & Experience Brief</label>
                <textarea
                  rows={3}
                  placeholder="Mention MBBS/MD/MS/DNB completion year, Medical Council Reg. No., and total teaching/clinical experience..."
                  className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Or email CV directly to: <a href="mailto:info@jhmcri.com" className="font-bold underline">info@jhmcri.com</a></span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit Application</span>
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
