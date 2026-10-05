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
  GraduationCap,
  BookOpen,
  Calendar,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Library
} from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function AcademicsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="Academics & CBME Curriculum"
        subtitle="Competency-Based Medical Education (CBME) curriculum approved by the National Medical Commission (NMC) and affiliated with WBUHS Kolkata."
        badge="NMC Curricular Framework"
        breadcrumbs={[{ label: 'Academics' }]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Transformative Medical Pedagogy</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              Grooming the Next Generation of Healers & Researchers
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At Jakir Hossain Medical College & Research Institute, medical education is delivered through a balanced blend of didactic lectures, clinical demonstrations, small-group problem-based learning (PBL), skills lab simulation, and direct bedside clinical encounters.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100">
                <span className="block text-2xl font-black text-teal-800">4.5 Years</span>
                <span className="text-xs font-bold text-teal-700">MBBS Academic Program</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <span className="block text-2xl font-black text-emerald-800">1 Year</span>
                <span className="text-xs font-bold text-emerald-700">Compulsory Rotatory Internship (CRMI)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.21-PM-1-1024x682.jpeg"
                alt="Medical College Lecture Theatre"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Cards for sub-sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/academics/syllabus"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-teal-100 text-teal-800 w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700">MBBS Syllabus</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Subject-wise curriculum for 1st, 2nd, 3rd, and Final Professional phases.
            </p>
            <span className="text-xs font-bold text-teal-700 flex items-center gap-1 mt-4">
              Explore Syllabus <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/academics/calendar"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700">Academic Calendar</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Semesters, terminal assessments, sent-up exams, and WBUHS university exam schedules.
            </p>
            <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 mt-4">
              View Calendar <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/academics/library"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-amber-100 text-amber-800 w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Library className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 group-hover:text-amber-700">Central Library</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Over 7,000+ textbooks, international journals, digital library, and 24x7 reading halls.
            </p>
            <span className="text-xs font-bold text-amber-700 flex items-center gap-1 mt-4">
              Visit Library <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/academics/holidays"
            className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md hover:border-teal-500 transition-all group"
          >
            <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 group-hover:text-slate-800">Holiday List 2026</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Official annual vacation, puja holidays, and national recess list.
            </p>
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1 mt-4">
              View Holidays <ArrowRight className="w-3.5 h-3.5" />
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
