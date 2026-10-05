'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { CreditCard, Download, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { BANK_DETAILS, SITE_INFO } from '@/data/siteData';

export default function FeeStructurePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeSession, setActiveSession] = useState<'2026-27' | '2025-26'>('2026-27');

  const feeTable2026 = [
    { component: "Admission Fee (One-Time at Admission)", amount: "₹ 50,000", frequency: "One-Time" },
    { component: "Tuition Fee (Per Semester - Total 9 Semesters)", amount: "As per Govt. PPP Norms / Committee", frequency: "Half-Yearly" },
    { component: "Caution Money Deposit (Refundable on Course Completion)", amount: "₹ 25,000", frequency: "Refundable One-Time" },
    { component: "Library, Internet & Laboratory Charges", amount: "₹ 15,000", frequency: "Per Annum" },
    { component: "Hostel Accommodation (Optional - AC / Non-AC with Mess)", amount: "₹ 1,20,000 - ₹ 1,50,000", frequency: "Annual (Including Food)" },
    { component: "Student Welfare & Cultural Activity Fund", amount: "₹ 5,000", frequency: "Per Annum" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="MBBS Proposed Fee Structure (2026-2027)"
        subtitle="Official fee schedule for State Quota and Management Quota MBBS seats under PPP mode with the State Government of West Bengal."
        badge="Academic Year 2026-2027"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Fee Structure' }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">MBBS Fee Breakdown & Installments</h2>
                <p className="text-xs text-slate-500">Regulated under West Bengal Fee Regulatory Committee & Shibham Education Trust</p>
              </div>
            </div>

            <button
              onClick={() => alert('Downloading official MBBS Fee Structure PDF')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer self-start sm:self-auto"
            >
              <Download className="w-4 h-4" />
              <span>Download Fee PDF</span>
            </button>
          </div>

          {/* Session Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSession('2026-27')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeSession === '2026-27'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Session 2026-2027 (Proposed)
            </button>
            <button
              onClick={() => setActiveSession('2025-26')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeSession === '2025-26'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Session 2025-2026 (Archived)
            </button>
          </div>

          {/* Fee Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-6">Fee Particulars / Component</th>
                  <th className="py-3 px-6 text-center">Amount (INR)</th>
                  <th className="py-3 px-6 text-right">Payment Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {feeTable2026.map((row, idx) => (
                  <tr key={idx} className="hover:bg-teal-50/40">
                    <td className="py-3.5 px-6 font-semibold text-slate-900">{row.component}</td>
                    <td className="py-3.5 px-6 text-center font-bold text-teal-800">{row.amount}</td>
                    <td className="py-3.5 px-6 text-right font-medium text-slate-600">{row.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block">Important Notice Regarding Fee Remittance:</span>
              <p>
                Fees must be remitted strictly into the college authorized bank account via RTGS, NEFT, or Demand Draft payable at Raghunathganj. The college does not accept cash for tuition fees and does not authorize third-party agents.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/admissions/bank-details"
              className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider"
            >
              View Official Bank Details
            </Link>

            <button
              onClick={() => setEnquiryOpen(true)}
              className="px-6 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
            >
              Request Installment Plan Info
            </button>
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
