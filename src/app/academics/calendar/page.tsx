'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Calendar, Download, Sparkles } from 'lucide-react';

export default function AcademicCalendarPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const academicEvents = [
    { period: "October 2026", event: "Foundation Course & Orientation for New MBBS Batch (2026-2027)", phase: "1st Prof" },
    { period: "November 2026", event: "Regular Didactic Lectures & Dissection Hall Clinical Postings Commence", phase: "1st Prof" },
    { period: "December 2026", event: "1st Internal Continuous Assessment (Theory & Practical)", phase: "All Batches" },
    { period: "March 2027", event: "Mid-Term Assessment & Clinical Skills Lab Evaluation", phase: "1st & 2nd Prof" },
    { period: "May 2027", event: "Summer Academic Recess & Community Medicine Field Postings", phase: "All Batches" },
    { period: "July 2027", event: "Sent-Up / Model Pre-University Examinations", phase: "1st Prof" },
    { period: "September - October 2027", event: "WBUHS 1st Professional MBBS University Final Examination", phase: "University Exam" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Academic Calendar (Session 2026-2027)"
        subtitle="Annual academic roadmap covering foundation courses, internal assessments, hospital clinical rotations, and WBUHS university examination dates."
        badge="WBUHS Examination Schedule"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Academic Calendar' }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Academic Schedule & Milestones</h2>
                <p className="text-xs text-slate-500">Subject to guidelines issued by The West Bengal University of Health Sciences</p>
              </div>
            </div>

            <button
              onClick={() => alert('Downloading official Academic Calendar PDF')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer self-start sm:self-auto"
            >
              <Download className="w-4 h-4" />
              <span>Download Academic Calendar (PDF)</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-6">Month / Duration</th>
                  <th className="py-3 px-6">Academic Event / Clinical Posting</th>
                  <th className="py-3 px-6 text-right">Phase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {academicEvents.map((row, idx) => (
                  <tr key={idx} className="hover:bg-teal-50/40">
                    <td className="py-3.5 px-6 font-bold text-teal-800 whitespace-nowrap">{row.period}</td>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">{row.event}</td>
                    <td className="py-3.5 px-6 text-right">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
                        {row.phase}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
