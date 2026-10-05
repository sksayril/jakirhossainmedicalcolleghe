'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Bed, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BED_DISTRIBUTION } from '@/data/siteData';

export default function BedDistributionPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const totalGeneralBeds = BED_DISTRIBUTION.reduce((acc, curr) => acc + curr.beds, 0);
  const totalIcuBeds = BED_DISTRIBUTION.reduce((acc, curr) => acc + (curr.icuBeds || 0), 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Hospital Bed Distribution Matrix"
        subtitle="Department-wise allocation of 350+ teaching hospital beds, critical care units, and emergency recovery bays."
        badge="NMC Standard Bed Norms"
        breadcrumbs={[
          { label: 'Hospital', href: '/hospital' },
          { label: 'Bed Distribution' }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
                <Bed className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Department-wise Bed Distribution</h2>
                <p className="text-xs text-slate-500">Fully staffed teaching hospital wards compliant with NMC regulations</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold">
                Total Inpatient Beds: {totalGeneralBeds}+
              </div>
              <div className="px-4 py-2 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-xs font-bold">
                Total ICU/HDU: {totalIcuBeds}+
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-6">Speciality / Department</th>
                  <th className="py-3 px-6 text-center">General Ward Beds</th>
                  <th className="py-3 px-6 text-center">ICU / HDU Beds</th>
                  <th className="py-3 px-6 text-right">Operational Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {BED_DISTRIBUTION.map((b) => (
                  <tr key={b.department} className="hover:bg-teal-50/40 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-600" />
                      {b.department}
                    </td>
                    <td className="py-3.5 px-6 text-center font-bold text-teal-800 text-base">{b.beds}</td>
                    <td className="py-3.5 px-6 text-center font-bold text-red-700">{b.icuBeds || '-'}</td>
                    <td className="py-3.5 px-6 text-right">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                        Operational 24x7
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-50 font-bold text-slate-900 border-t border-slate-200 text-xs sm:text-sm">
                <tr>
                  <td className="py-3.5 px-6">Total Bed Capacity</td>
                  <td className="py-3.5 px-6 text-center text-teal-900 text-base">{totalGeneralBeds} Beds</td>
                  <td className="py-3.5 px-6 text-center text-red-900 text-base">{totalIcuBeds} ICU Beds</td>
                  <td className="py-3.5 px-6 text-right text-emerald-800">100% Functional</td>
                </tr>
              </tfoot>
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
