'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Calendar, Download } from 'lucide-react';

export default function HolidayListPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const holidays = [
    { date: "26 January 2026", day: "Monday", festival: "Republic Day", type: "National Holiday" },
    { date: "03 February 2026", day: "Tuesday", festival: "Saraswati Puja (Shree Panchami)", type: "State Holiday" },
    { date: "15 March 2026", day: "Sunday", festival: "Doljatra / Holi", type: "Gazetted Holiday" },
    { date: "31 March 2026", day: "Tuesday", festival: "Id-Ul-Fitr", type: "Gazetted Holiday" },
    { date: "03 April 2026", day: "Friday", festival: "Good Friday", type: "Gazetted Holiday" },
    { date: "14 April 2026", day: "Tuesday", festival: "Bengali New Year's Day (Poila Baisakh) / Dr. B.R. Ambedkar Jayanti", type: "State Holiday" },
    { date: "01 May 2026", day: "Friday", festival: "May Day", type: "State Holiday" },
    { date: "09 May 2026", day: "Saturday", festival: "Rabindra Jayanti", type: "State Holiday" },
    { date: "07 June 2026", day: "Sunday", festival: "Id-Uz-Zoha (Bakrid)", type: "Gazetted Holiday" },
    { date: "15 August 2026", day: "Saturday", festival: "Independence Day", type: "National Holiday" },
    { date: "02 October 2026", day: "Friday", festival: "Mahatma Gandhi Jayanti", type: "National Holiday" },
    { date: "19-28 October 2026", day: "Mon - Wed", festival: "Durga Puja & Laxmi Puja Vacation", type: "Autumn Recess" },
    { date: "08 November 2026", day: "Sunday", festival: "Kali Puja & Diwali", type: "Gazetted Holiday" },
    { date: "25 December 2026", day: "Friday", festival: "Christmas Day", type: "Gazetted Holiday" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Official Holiday List 2026"
        subtitle="Annual academic holiday calendar for medical students, clinical interns, and faculty at Jakir Hossain Medical College & Research Institute."
        badge="WBUHS & State Govt. Norms"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Holiday List 2026' }
        ]}
      />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Academic Recess & Gazetted Holidays</h2>
                <p className="text-xs text-slate-500">Hospital Emergency and Inpatient Clinical duties operate on roster throughout the year</p>
              </div>
            </div>

            <button
              onClick={() => alert('Downloading official Holiday List 2026 PDF')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer self-start sm:self-auto"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF (815 KB)</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-6">Date</th>
                  <th className="py-3 px-6">Day</th>
                  <th className="py-3 px-6">Occasion / Festival</th>
                  <th className="py-3 px-6 text-right">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {holidays.map((h, idx) => (
                  <tr key={idx} className="hover:bg-teal-50/40">
                    <td className="py-3.5 px-6 font-bold text-teal-800">{h.date}</td>
                    <td className="py-3.5 px-6 text-slate-600">{h.day}</td>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">{h.festival}</td>
                    <td className="py-3.5 px-6 text-right">
                      <span className="inline-flex px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800">
                        {h.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
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
