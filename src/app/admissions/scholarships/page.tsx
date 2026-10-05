'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Award, ShieldCheck, CheckCircle2, GraduationCap, ExternalLink, ArrowRight } from 'lucide-react';
import { SCHOLARSHIPS_INFO, SITE_INFO } from '@/data/siteData';

export default function ScholarshipsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Scholarships & Education Loan Assistance"
        subtitle="Government scholarship programs and low-interest education loan schemes supporting medical students at Jakir Hossain Medical College."
        badge="Financial Support Desk"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Scholarships & Education Loans' }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOLARSHIPS_INFO.map((s, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                    {s.provider}
                  </span>
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{s.title}</h3>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-slate-700 block">Eligibility:</span>
                  <p className="text-slate-600">{s.eligibility}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs space-y-2">
                <span className="font-bold text-emerald-800 block">Financial Benefit:</span>
                <p className="text-slate-600 leading-relaxed">{s.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Support Note */}
        <div className="glass-panel rounded-3xl p-8 bg-teal-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold">Need Help with Bank Loan Paperwork?</h3>
            <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
              The JHMCRI Student Welfare & Accounts Desk provides all bona fide bonafide certificates, estimated fee structures, and NMC recognition documents required by nationalized banks for loan sanctioning.
            </p>
          </div>

          <button
            onClick={() => setEnquiryOpen(true)}
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shrink-0 cursor-pointer"
          >
            Contact Scholarship Desk
          </button>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
