'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { User, Search, Stethoscope, Award } from 'lucide-react';
import { DEPARTMENTS } from '@/data/siteData';

export default function FacultyPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Collect all faculties
  const allFaculty = DEPARTMENTS.flatMap((d) =>
    d.faculty.map((f) => ({
      ...f,
      department: d.name,
      category: d.category,
      deptSlug: d.slug
    }))
  );

  const filtered = allFaculty.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.department.toLowerCase().includes(search.toLowerCase()) ||
      f.designation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Our Faculty & Doctors Directory"
        subtitle="Distinguished professors, associate professors, surgeons, and physicians committed to high-standard medical education and compassionate clinical care."
        badge="Academic Roster"
        breadcrumbs={[{ label: 'Faculty Directory' }]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-10">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-semibold">
            Showing {filtered.length} faculty members across 21+ departments
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search faculty name, department, designation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-full focus:ring-2 focus:ring-teal-500/30 outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((f, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-5 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-50 to-emerald-100 text-teal-800 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                    {f.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-teal-700 transition-colors">
                    {f.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700">{f.designation}</p>
                  <p className="text-[11px] text-slate-500 font-medium">{f.qualification}</p>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 text-[11px] text-slate-600 flex items-center justify-between">
                <span className="truncate pr-2 font-medium">{f.department}</span>
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
