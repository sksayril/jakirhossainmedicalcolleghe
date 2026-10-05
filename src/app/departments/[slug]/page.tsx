'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Microscope, CheckCircle2, User, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { DEPARTMENTS } from '@/data/siteData';

export default function DepartmentDetailPage() {
  const params = useParams();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const slug = (params?.slug as string) || 'anatomy';

  const dept = DEPARTMENTS.find((d) => d.slug === slug) || DEPARTMENTS[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title={dept.name}
        subtitle={dept.description}
        badge={dept.category}
        breadcrumbs={[
          { label: 'Departments', href: '/departments' },
          { label: dept.name }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <Image
                src={dept.image}
                alt={dept.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="glass-panel rounded-3xl p-6 sm:p-8 bg-white/85 shadow-xl border border-white/90 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Department Overview & Infrastructure</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{dept.description}</p>

              <h3 className="text-lg font-bold text-slate-900 pt-3">Key Facilities & Laboratories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {dept.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-teal-50 border border-teal-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-teal-950 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Faculty List */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 bg-white/85 shadow-xl border border-white/90 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Department Faculty & Doctors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dept.faculty.map((f, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{f.name}</h4>
                      <p className="text-xs text-teal-700 font-semibold">{f.designation}</p>
                      <p className="text-[11px] text-slate-500 font-medium">{f.qualification}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-lg space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Head of Department</span>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-600 text-white flex items-center justify-center font-black text-lg">
                  Dr
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{dept.hod}</h4>
                  <p className="text-xs text-teal-700 font-semibold">{dept.category} Wing</p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6 bg-slate-900 text-white shadow-xl space-y-4">
              <h4 className="font-bold text-base">Explore Other Departments</h4>
              <div className="space-y-1 max-h-72 overflow-y-auto pr-1 text-xs">
                {DEPARTMENTS.map((d) => (
                  <Link
                    key={d.id}
                    href={`/departments/${d.slug}`}
                    className={`block py-2 px-3 rounded-xl transition-all ${
                      d.slug === slug
                        ? 'bg-teal-600 text-white font-bold'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={() => setEnquiryOpen(true)}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
            >
              Enquire About MBBS Academics
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
