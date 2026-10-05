'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { Award, ShieldCheck, Target, Eye, Building2, CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';
import { SITE_INFO, LEADERSHIP } from '@/data/siteData';

export default function AboutPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="About Jakir Hossain Medical College & Research Institute"
        subtitle="Dedicated to producing competent medical doctors and extending compassionate healthcare to the community in West Bengal."
        badge="Established Under Shibham Trust • PPP Mode"
        breadcrumbs={[{ label: 'About JHMCRI' }]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* Intro & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
              <Building2 className="w-3.5 h-3.5" />
              <span>Pioneering Healthcare Education</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              A Premier Medical Institution in Murshidabad, West Bengal
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Jakir Hossain Medical College and Research Institute (JHMCRI) is established by the <strong>Shibham Education & Social Welfare Trust</strong> in Public-Private Partnership (PPP) mode with the <strong>State Government of West Bengal</strong>.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Approved by the <strong>National Medical Commission (NMC)</strong> and affiliated with <strong>The West Bengal University of Health Sciences (WBUHS), Kolkata</strong>, the institute provides modern clinical infrastructure, 350+ bed teaching hospital, high-tech laboratories, and immersive bedside teaching.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100">
                <span className="block text-2xl font-black text-teal-800">100 / 150</span>
                <span className="text-xs font-bold text-teal-700">MBBS Annual Seats</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <span className="block text-2xl font-black text-emerald-800">350+ Beds</span>
                <span className="text-xs font-bold text-emerald-700">Multi-Speciality Hospital</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1024x676.jpeg"
                alt="Jakir Hossain Medical College Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-8 border border-slate-200/80 bg-white shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To emerge as a center of global distinction in medical education, patient-centric healthcare, and innovative research, addressing healthcare disparities and empowering aspiring doctors to serve with excellence and empathy.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 border border-slate-200/80 bg-white shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Deliver evidence-based, competency-oriented medical pedagogy (CBME).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Provide 24x7 affordable tertiary clinical services to all segments of society.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Foster a culture of biomedical research, ethical integrity, and community service.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership Directory Links */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">Leadership & Administration</h3>
            <p className="text-xs text-slate-500">Meet the distinguished leaders and administrators shaping the institution</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(LEADERSHIP).map(([key, lead]) => (
              <Link
                key={key}
                href={`/about/${key}`}
                className="glass-card rounded-3xl p-5 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all flex flex-col items-center text-center group"
              >
                <div className="relative w-28 h-32 rounded-2xl overflow-hidden mb-4 shadow-md">
                  <Image
                    src={lead.image || 'https://jhmcri.com/wp-content/uploads/2026/01/Indian-Doctors-Team-Ai-Generated-683x1024.png'}
                    alt={lead.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="font-bold text-sm text-slate-900 group-hover:text-teal-700">{lead.name}</h4>
                <p className="text-xs text-teal-700 font-semibold">{lead.role}</p>
                <span className="mt-3 text-[11px] font-bold text-slate-500 group-hover:text-teal-800 flex items-center gap-1">
                  Read Message <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
