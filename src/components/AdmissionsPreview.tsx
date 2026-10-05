'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  CheckCircle2,
  Building,
  CreditCard,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck,
  Download,
  AlertCircle
} from 'lucide-react';
import { ADMISSION_PROCESS_STEPS, BANK_DETAILS, SCHOLARSHIPS_INFO, SITE_INFO } from '@/data/siteData';

interface AdmissionsPreviewProps {
  onOpenEnquiry: () => void;
}

export default function AdmissionsPreview({ onOpenEnquiry }: AdmissionsPreviewProps) {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100/80 text-amber-900 border border-amber-200">
          <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
          <span>MBBS Admissions 2026-2027</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Embark on Your Medical Career at JHMCRI
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Centralized merit-based admissions through NEET-UG and WBMCC counselling. Transparent fee structures and full scholarship assistance for meritorious aspirants.
        </p>
      </div>

      {/* 6 Steps Workflow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {ADMISSION_PROCESS_STEPS.map((s) => (
          <div
            key={s.step}
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white/90 shadow-md relative overflow-hidden group hover:border-teal-400/50"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-600 text-white font-black text-base flex items-center justify-center shadow-md shadow-teal-600/20 group-hover:scale-110 transition-transform">
                0{s.step}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                Step {s.step}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
              {s.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bank & Scholarship Dual Glass Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Official College Bank Account for Fee Remittance */}
        <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 bg-white/85 shadow-2xl border border-white/90 backdrop-blur-2xl space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-teal-50 text-teal-700 rounded-xl">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Official Bank Account Details</h3>
            </div>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
              RTGS / NEFT / IMPS
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            All tuition, admission, and hostel fees must be paid directly into the official bank account of the college as shown below:
          </p>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-slate-500 font-semibold">Account Name:</span>
              <span className="font-bold text-slate-900 text-right">{BANK_DETAILS.accountName}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-slate-500 font-semibold">Bank & Branch:</span>
              <span className="font-bold text-slate-900">{BANK_DETAILS.bankName} - {BANK_DETAILS.branch}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <span className="text-slate-500 font-semibold">Account Type:</span>
              <span className="font-bold text-slate-900">{BANK_DETAILS.accountType}</span>
            </div>
            <div className="p-3 rounded-xl bg-teal-50/80 border border-teal-200 flex items-center justify-between">
              <span className="text-teal-800 font-semibold">Account Number:</span>
              <span className="font-mono font-black text-teal-950 text-sm tracking-wide">{BANK_DETAILS.accountNumber}</span>
            </div>
            <div className="p-3 rounded-xl bg-teal-50/80 border border-teal-200 flex items-center justify-between">
              <span className="text-teal-800 font-semibold">IFSC Code:</span>
              <span className="font-mono font-black text-teal-950 text-sm">{BANK_DETAILS.ifscCode}</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{BANK_DETAILS.notes}</span>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <Link
              href="/admissions/bank-details"
              className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
            >
              Detailed Payment Instructions <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right: Government Scholarships & WBSCC Loan Aid */}
        <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 bg-white/85 shadow-2xl border border-white/90 backdrop-blur-2xl space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Scholarships & Education Loans</h3>
              </div>
              <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                Govt. Financial Aid
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Students at Jakir Hossain Medical College can avail of financial support and low-interest education loans under multiple West Bengal State & Central Government schemes:
            </p>

            <div className="space-y-3">
              {SCHOLARSHIPS_INFO.slice(0, 3).map((sch) => (
                <div key={sch.title} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900">{sch.title}</span>
                    <span className="text-[10px] font-semibold text-teal-700">{sch.provider}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{sch.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link
              href="/admissions/scholarships"
              className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
            >
              View All Scholarship Guidelines <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-teal-600/20 cursor-pointer"
            >
              Get Admission Guidance
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
