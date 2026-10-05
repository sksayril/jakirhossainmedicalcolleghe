'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { FileText, Download, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function MandatoryDisclosuresPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const disclosures = [
    {
      title: "Annexure-I: Mandatory Institutional Information",
      desc: "Comprehensive college establishment details, governing trust records, campus land demarcation, building blueprints, and faculty biometric verification reports.",
      size: "2.4 MB PDF"
    },
    {
      title: "Pro-Forma 18: Clinical & Hospital Workload Disclosure",
      desc: "Verified outpatient daily registers, indoor patient admissions, bed occupancy rates, surgical theatre statistics, central laboratory test tallies, and blood center audit records.",
      size: "1.8 MB PDF"
    },
    {
      title: "Information Under Clause B.1.11 of NMC Act",
      desc: "NMC Medical Assessment and Rating Board (MARB) annual compliance documents, letter of permission (LOP), and WBUHS university consent of affiliation certificates.",
      size: "3.1 MB PDF"
    },
    {
      title: "Anti-Ragging Squad & Flying Committee Notification",
      desc: "Statutory reconstitution orders, committee member contacts, zero-tolerance compliance affidavit, and National Anti-Ragging Cell monitoring report.",
      size: "820 KB PDF"
    },
    {
      title: "Internal Complaints Committee (ICC) Annual Report",
      desc: "Gender harassment prevention cell constitution, legal advisor particulars, student counseling cell details, and statutory meeting minutes.",
      size: "650 KB PDF"
    },
    {
      title: "Institutional Ethics Committee (IEC) ICMR Registration",
      desc: "Ethics committee standard operating procedures (SOP), biomedical human research clearance protocols, and clinical trial compliance records.",
      size: "1.1 MB PDF"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Mandatory Public Disclosures"
        subtitle="Statutory institutional records, National Medical Commission (NMC) disclosures, Annexure-I, Pro-Forma 18, and Clause B.1.11 compliance reports."
        badge="NMC & MARB Transparency Mandate"
        breadcrumbs={[{ label: 'Mandatory Disclosures' }]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Statutory Regulatory Filings</h2>
              <p className="text-xs text-slate-500">Publicly accessible documents in compliance with National Medical Commission guidelines</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disclosures.map((d, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                      Document 0{idx + 1}
                    </span>
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{d.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{d.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">Format: {d.size}</span>
                  <button
                    onClick={() => alert(`Downloading statutory document: ${d.title}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
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
