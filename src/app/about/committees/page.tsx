'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { ShieldCheck, Users, Award, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { COMMITTEES } from '@/data/siteData';

export default function CommitteesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Governance & Statutory Committees"
        subtitle="Institutional monitoring bodies ensuring academic integrity, student safety, anti-ragging compliance, and research ethics at JHMCRI."
        badge="NMC Regulatory Compliance"
        breadcrumbs={[
          { label: 'About JHMCRI', href: '/about' },
          { label: 'Governance & Committees' }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        {/* Anti Ragging Banner */}
        <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-600 text-white rounded-2xl shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-950">Zero Tolerance Anti-Ragging Policy</h3>
              <p className="text-xs text-amber-800 mt-1 max-w-2xl leading-relaxed">
                As per the directives of the Hon&apos;ble Supreme Court of India and National Medical Commission (NMC), ragging is strictly prohibited. 24x7 Anti-Ragging Squad conducts vigilance rounds across all hostels and campus zones.
              </p>
            </div>
          </div>
          <a
            href="tel:+919652418407"
            className="px-5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shrink-0"
          >
            Anti-Ragging Helpline
          </a>
        </div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMITTEES.map((comm) => (
            <div
              key={comm.name}
              className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white/90 shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-700">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded-md">
                    Statutory Cell
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{comm.name}</h3>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-500 block">Chairperson:</span>
                  <span className="font-bold text-slate-800">{comm.chairperson}</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <span className="font-semibold text-slate-700 block">Members:</span>
                  <p className="leading-relaxed">{comm.members}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                <span className="font-semibold text-teal-700 block mb-1">Charter & Mandate:</span>
                <p>{comm.purpose}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
