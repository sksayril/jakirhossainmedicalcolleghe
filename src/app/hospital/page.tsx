'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import {
  HeartPulse,
  Activity,
  Bed,
  PhoneCall,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { BED_DISTRIBUTION, CLINICAL_STATS, SITE_INFO } from '@/data/siteData';

export default function HospitalPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Teaching Hospital & Multi-Speciality Services"
        subtitle="350+ Bed modern teaching hospital delivering round-the-clock emergency, trauma, intensive care, and specialized diagnostics in Murshidabad."
        badge="24x7 Emergency & Critical Care"
        breadcrumbs={[{ label: 'Hospital & Services' }]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* Hospital Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800">
              <Clock className="w-3.5 h-3.5 animate-spin" />
              <span>24x7 Emergency & Inpatient Care</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              Compassionate, Modern & Affordable Clinical Healthcare
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The teaching hospital of Jakir Hossain Medical College & Research Institute serves as a vital tertiary medical hub for Murshidabad and neighboring districts of West Bengal. Equipped with modern modular operation theatres, intensive care units (MICU, SICU, ICCU, NICU, PICU), automated diagnostic labs, and a 24x7 blood bank.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100">
                <span className="block text-2xl font-black text-teal-800">350+ Beds</span>
                <span className="text-xs font-bold text-teal-700">General & Speciality Wards</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                <span className="block text-2xl font-black text-amber-800">850+ Daily</span>
                <span className="text-xs font-bold text-amber-700">OPD Outpatients</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://jhmcri.com/wp-content/uploads/2025/11/diverse-team-professional-surgeon-assistants-nurses-performing-invasive-surgery-patient-hospital-operating-room-surgeons-talk-use-instruments-real-modern-hospital-1024x683.jpg"
                alt="Modular Operation Theatre"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Quick Nav Cards for Clinical Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/hospital/clinical-material"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-teal-100 text-teal-800 w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700">Clinical Material Stats</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              OPD, IPD, lab investigations, radiology volume, and surgical census.
            </p>
            <span className="text-xs font-bold text-teal-700 flex items-center gap-1 mt-4">
              View Statistics <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/hospital/bed-distribution"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Bed className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700">Bed Distribution</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Detailed breakdown across Medicine, Surgery, OBG, Pedia, Ortho & ICUs.
            </p>
            <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 mt-4">
              View Bed Matrix <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/hospital/health-care-facility"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-amber-100 text-amber-800 w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 group-hover:text-amber-700">RHTC & UHTC Centers</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Rural & Urban community health training, maternal care & immunization.
            </p>
            <span className="text-xs font-bold text-amber-700 flex items-center gap-1 mt-4">
              View Health Centers <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/hospital/grievance-cell"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 group-hover:text-slate-800">Grievance Redressal</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Transparent mechanism for patient feedback, queries, and complaints.
            </p>
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1 mt-4">
              Grievance Cell <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
