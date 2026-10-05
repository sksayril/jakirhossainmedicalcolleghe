'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Home, ShieldCheck, Utensils, Wifi, Dumbbell, BookOpen, CheckCircle2 } from 'lucide-react';
import { HOSTEL_AMENITIES } from '@/data/siteData';

export default function CampusLifePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Hostel & Campus Residential Life"
        subtitle="A secure, vibrant, and well-appointed residential community for male and female medical students on a lush 30-acre green campus."
        badge="On-Campus Student Accommodation"
        breadcrumbs={[{ label: 'Campus Life & Hostels' }]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
              <Home className="w-3.5 h-3.5" />
              <span>Safe & Comfortable Student Housing</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              A Home Away From Home for Medical Scholars
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At Jakir Hossain Medical College & Research Institute, hostel life is structured to balance intensive clinical studies with relaxation, physical fitness, and community bonding. We provide separate multi-storied hostels for boys and girls with resident wardens, 24x7 security personnel, and full CCTV surveillance.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100">
                <span className="block text-2xl font-black text-teal-800">Separate</span>
                <span className="text-xs font-bold text-teal-700">Boys & Girls Hostels</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <span className="block text-2xl font-black text-emerald-800">24x7</span>
                <span className="text-xs font-bold text-emerald-700">CCTV & Warden Supervision</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM.jpeg"
                alt="Student Hostel Courtyard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6 Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOSTEL_AMENITIES.map((am, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-lg space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-50 to-emerald-100 text-teal-700 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">{am.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{am.desc}</p>
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
