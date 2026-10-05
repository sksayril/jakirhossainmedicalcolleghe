'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { CreditCard, Building2, Copy, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { BANK_DETAILS, SITE_INFO } from '@/data/siteData';

export default function BankDetailsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Official College Bank Account Details"
        subtitle="Authorized banking details for MBBS tuition, admission, caution money, and hostel fee payments via RTGS / NEFT / IMPS."
        badge="Official Remittance Channel"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Bank Details' }
        ]}
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Bank Account Information</h2>
              <p className="text-xs text-slate-500">Please verify account details prior to electronic fund transfers</p>
            </div>
          </div>

          {/* Account Detail Cards with Copy Feature */}
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs text-slate-500 font-semibold block">Account Beneficiary Name</span>
                <span className="font-bold text-slate-900 text-sm sm:text-base">{BANK_DETAILS.accountName}</span>
              </div>
              <button
                onClick={() => copyToClipboard(BANK_DETAILS.accountName, 'name')}
                className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer"
              >
                {copiedField === 'name' ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copiedField === 'name' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs text-slate-500 font-semibold block">Bank & Branch</span>
                <span className="font-bold text-slate-900 text-sm">{BANK_DETAILS.bankName} - {BANK_DETAILS.branch}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs text-teal-800 font-semibold block">Account Number</span>
                <span className="font-mono font-black text-teal-950 text-lg tracking-wider">{BANK_DETAILS.accountNumber}</span>
              </div>
              <button
                onClick={() => copyToClipboard(BANK_DETAILS.accountNumber, 'acc')}
                className="px-3 py-1.5 rounded-xl bg-white border border-teal-300 text-xs font-bold text-teal-900 hover:bg-teal-100 flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer"
              >
                {copiedField === 'acc' ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-teal-600" />}
                <span>{copiedField === 'acc' ? 'Copied' : 'Copy Account No.'}</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs text-teal-800 font-semibold block">IFSC Code</span>
                <span className="font-mono font-black text-teal-950 text-base">{BANK_DETAILS.ifscCode}</span>
              </div>
              <button
                onClick={() => copyToClipboard(BANK_DETAILS.ifscCode, 'ifsc')}
                className="px-3 py-1.5 rounded-xl bg-white border border-teal-300 text-xs font-bold text-teal-900 hover:bg-teal-100 flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer"
              >
                {copiedField === 'ifsc' ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-teal-600" />}
                <span>{copiedField === 'ifsc' ? 'Copied' : 'Copy IFSC'}</span>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Mandatory UTR Receipt Submission:</span>
            </div>
            <p className="leading-relaxed">
              After initiating your RTGS/NEFT/IMPS transfer, please ensure that you send a copy of the bank transaction acknowledgement containing the <strong>UTR Number</strong>, <strong>Candidate Name</strong>, and <strong>NEET Roll Number</strong> to <a href={`mailto:${SITE_INFO.email}`} className="font-bold underline">{SITE_INFO.email}</a> and submit one physical copy at the college accounts counter.
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
