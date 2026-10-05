'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Activity, FileText, Download, CheckCircle2 } from 'lucide-react';
import { CLINICAL_STATS } from '@/data/siteData';

export default function ClinicalMaterialPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Clinical Material & Hospital Workload Statistics"
        subtitle="Mandatory disclosure of clinical workload, daily outpatient attendance, bed occupancy, diagnostic tests, and surgical performance."
        badge="NMC Clinical Compliance"
        breadcrumbs={[
          { label: 'Hospital', href: '/hospital' },
          { label: 'Clinical Material' }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Clinical Data & Workload Metrics</h2>
                <p className="text-xs text-slate-500">Average verified metrics submitted to the National Medical Commission</p>
              </div>
            </div>

            <button
              onClick={() => alert('Downloading official monthly Clinical Material PDF')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md self-start sm:self-auto cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Report (PDF)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLINICAL_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-slate-200/80 bg-white shadow-sm flex items-center justify-between"
              >
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-500">Metric Indicator</span>
                  <h4 className="text-sm font-bold text-slate-800">{stat.metric}</h4>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-teal-700">{stat.count}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-xs text-teal-900 leading-relaxed space-y-1">
            <span className="font-bold block">Hospital Superintendent Note:</span>
            <p>
              Clinical material is continuously monitored through the Hospital Information Management System (HIMS) and updated in accordance with NMC MARB norms.
            </p>
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
