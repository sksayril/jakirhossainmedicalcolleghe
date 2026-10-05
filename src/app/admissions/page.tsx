'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import AdmissionsPreview from '@/components/AdmissionsPreview';
import {
  GraduationCap,
  Calendar,
  CreditCard,
  Building2,
  FileCheck2,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function AdmissionsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const neetSchedule = [
    { event: "NEET-UG 2026 Notification & Application", timeline: "February - March 2026", status: "Completed" },
    { event: "NEET-UG 2026 Entrance Examination", timeline: "May 2026", status: "Conducted" },
    { event: "NEET-UG 2026 Result & All India Rank Declaration", timeline: "June 2026", status: "Declared" },
    { event: "WBMCC State Centralized Counselling Registration", timeline: "July - August 2026", status: "Active" },
    { event: "Round 1/2 Seat Allotment & Physical Reporting at JHMCRI", timeline: "August - September 2026", status: "Ongoing" },
    { event: "Commencement of MBBS Academic Session (Foundation Course)", timeline: "October 2026", status: "Upcoming" }
  ];

  const eligibilityCriteria = [
    "Candidate must have completed 17 years of age on or before 31st December of the admission year.",
    "Must have passed 10+2 (Higher Secondary) with Physics, Chemistry, Biology/Biotechnology & English individually.",
    "Minimum 50% aggregate in PCB for General/EWS category (40% for SC/ST/OBC and 45% for PwD).",
    "Must have qualified NEET-UG 2026 with cutoff percentile as determined by NTA.",
    "For State Quota seats, valid West Bengal domicile certificate as per WBMCC rules is mandatory."
  ];

  const requiredDocuments = [
    "NEET-UG 2026 Admit Card & Score Card / Rank Card",
    "WBMCC Seat Allotment Letter (Original & Photocopies)",
    "Class 10th Admit Card / Birth Certificate (Age Proof)",
    "Class 10th & 12th Marksheets and Pass Certificates",
    "West Bengal Domicile Certificate (Proforma a1/a2/b as applicable)",
    "Caste Certificate / EWS / PwD Certificate (if applicable)",
    "Medical Fitness Certificate from a Registered Medical Practitioner",
    "Migration Certificate & School/College Leaving Certificate",
    "Proof of Fee Payment (RTGS / NEFT / UTR Transfer Slip)",
    "8 Recent Passport Size Photographs of the Candidate"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="MBBS Admission 2026-2027 Process"
        subtitle="Complete guideline for MBBS admissions at Jakir Hossain Medical College & Research Institute through NEET-UG and WBMCC counselling."
        badge="Admissions 2026 Open"
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* Quick Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admissions/fee-structure"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group flex items-start gap-4"
          >
            <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700">Fee Structure 2026-27</h3>
              <p className="text-xs text-slate-500 mt-1">Official proposed tuition, hostel, and admission fee breakdown.</p>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1 mt-3">
                Check Fee Details <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          <Link
            href="/admissions/bank-details"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group flex items-start gap-4"
          >
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700">Bank Details for Fee</h3>
              <p className="text-xs text-slate-500 mt-1">Official RTGS / NEFT / IMPS account numbers & IFSC codes.</p>
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 mt-3">
                View Account Details <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          <Link
            href="/admissions/scholarships"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group flex items-start gap-4"
          >
            <div className="p-3 bg-amber-100 text-amber-800 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-amber-700">Scholarships & Loans</h3>
              <p className="text-xs text-slate-500 mt-1">SVMCM, Aikyashree, Oasis & WB Student Credit Card.</p>
              <span className="text-xs font-bold text-amber-700 flex items-center gap-1 mt-3">
                Explore Scholarships <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>

        {/* NEET Timeline Table */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">NEET-UG 2026 & WBMCC Schedule</h2>
              <p className="text-xs text-slate-500">Official counselling timeline for admission to 100/150 MBBS seats</p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-6">Event / Milestone</th>
                  <th className="py-3 px-6 text-center">Expected Timeline</th>
                  <th className="py-3 px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {neetSchedule.map((row, idx) => (
                  <tr key={idx} className="hover:bg-teal-50/40">
                    <td className="py-3 px-6 font-semibold text-slate-900">{row.event}</td>
                    <td className="py-3 px-6 text-center font-bold text-teal-800">{row.timeline}</td>
                    <td className="py-3 px-6 text-right">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Eligibility & Document Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-8 border border-slate-200/80 bg-white shadow-xl space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">1</span>
              Eligibility Criteria
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              {eligibilityCriteria.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0 mt-2" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-3xl p-8 border border-slate-200/80 bg-white shadow-xl space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">2</span>
              Required Verification Documents
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {requiredDocuments.map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <AdmissionsPreview onOpenEnquiry={() => setEnquiryOpen(true)} />
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
