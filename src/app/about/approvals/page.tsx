'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Award, FileCheck, CheckCircle2, Download, ShieldCheck } from 'lucide-react';
import { GOV_APPROVALS, SITE_INFO } from '@/data/siteData';

export default function ApprovalsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Government Approvals & Affiliations"
        subtitle="Statutory recognition documents, NMC Letter of Permission (LOP), and WBUHS University Affiliation certificates."
        badge="Legal & Statutory Framework"
        breadcrumbs={[
          { label: 'About JHMCRI', href: '/about' },
          { label: 'Govt. Approvals' }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Institutional Accreditations & Approvals</h2>
              <p className="text-xs text-slate-500">Official permission details granted by medical regulatory councils and universities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {GOV_APPROVALS.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-200/80 bg-white shadow-md space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                    {item.authority}
                  </span>
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.course}</h3>
                <p className="text-xs font-semibold text-slate-500">{item.body}</p>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {item.details}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => alert(`Downloading statutory document for: ${item.authority}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download LOP Certificate</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
