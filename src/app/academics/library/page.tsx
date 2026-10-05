'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { BookOpen, Library, Laptop, Clock, CheckCircle2, Award } from 'lucide-react';

export default function LibraryPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Central Medical & Digital Library"
        subtitle="A state-of-the-art knowledge repository featuring 7,000+ medical volumes, national & international journals, digital databases, and air-conditioned reading halls."
        badge="Knowledge Center"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Central Library' }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
              <Library className="w-3.5 h-3.5" />
              <span>Comprehensive Medical Learning Resource</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              Central & E-Library Infrastructure
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The Central Library of Jakir Hossain Medical College & Research Institute is an air-conditioned, well-illuminated learning haven spread over a spacious floor with separate seating for 250+ students, interns, and faculty members.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100">
                <span className="block text-2xl font-black text-teal-800">7,000+</span>
                <span className="text-xs font-bold text-teal-700">Medical Textbooks & Volumes</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <span className="block text-2xl font-black text-emerald-800">40+ Nodes</span>
                <span className="text-xs font-bold text-emerald-700">Digital E-Library Computers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.19-PM-e1764093650153-1024x739.jpeg"
                alt="Central Library Reading Hall"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Print Collection & Journals</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standard Indian and international author textbooks in Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Medicine, Surgery, and all super-specialities.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">E-Library & Online Portals</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated high-speed internet terminal room with access to PubMed, National Digital Library (NDL), ScienceDirect, and medical e-journals.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">24/7 Quiet Reading Room</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Extended night reading room with silent study zones, ergonomic study carrels, and power sockets for students preparing for terminal assessments.
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
