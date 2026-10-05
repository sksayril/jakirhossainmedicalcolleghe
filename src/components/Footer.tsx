'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  ExternalLink,
  HeartPulse,
  Building,
  GraduationCap
} from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export default function Footer({ onOpenEnquiry }: FooterProps) {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      {/* Background ambient glowing gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Badges Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <div className="p-3 bg-teal-500/20 text-teal-400 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">NMC Approved (MARB)</h4>
              <p className="text-xs text-slate-400">Letter of Permission for 100/150 Annual MBBS Seats</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">WBUHS Affiliated</h4>
              <p className="text-xs text-slate-400">The West Bengal University of Health Sciences, Kolkata</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">West Bengal Govt. PPP Mode</h4>
              <p className="text-xs text-slate-400">Shibham Education & Social Welfare Trust Partnership</p>
            </div>
          </div>
        </div>

        {/* 4 Major Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Col 1: About & Info */}
          <div className="space-y-4">
            <div className="bg-white/10 p-3 rounded-2xl inline-block border border-white/10">
              <div className="relative h-10 w-48 aspect-[312/67]">
                <Image
                  src={SITE_INFO.logo}
                  alt={SITE_INFO.name}
                  fill
                  className="object-contain filter brightness-110"
                />
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Jakir Hossain Medical College & Research Institute (JHMCRI) is committed to excellence in medical pedagogy, modern clinical healthcare, and high-impact biomedical research for rural and urban West Bengal.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Vill + P.O.- Miapur, P.S. Raghunathganj, Dist. Murshidabad, Pin: 742235, West Bengal</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{SITE_INFO.phone} / {SITE_INFO.altPhone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{SITE_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>OPD: 9 AM - 4 PM | Emergency: 24x7</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links & Academics */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-teal-500/30 pb-2">
              Academics & Admissions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/admissions" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>MBBS Admission 2026 Process</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions/fee-structure" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Proposed Fee Structure (2026-27)</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions/bank-details" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Official College Bank Details</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions/scholarships" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Scholarships & WBSCC Loan</span>
                </Link>
              </li>
              <li>
                <Link href="/academics/syllabus" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>1st & 2nd Year MBBS Syllabus</span>
                </Link>
              </li>
              <li>
                <Link href="/academics/calendar" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Academic Calendar & Examinations</span>
                </Link>
              </li>
              <li>
                <Link href="/academics/library" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Central Library & Digital Portal</span>
                </Link>
              </li>
              <li>
                <Link href="/academics/holidays" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Holiday List 2026</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hospital & Departments */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-teal-500/30 pb-2">
              Hospital & Departments
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/hospital" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>350+ Bed Multi-Speciality Hospital</span>
                </Link>
              </li>
              <li>
                <Link href="/hospital/clinical-material" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Clinical Material & OPD/IPD Stats</span>
                </Link>
              </li>
              <li>
                <Link href="/hospital/bed-distribution" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Department Bed Distribution</span>
                </Link>
              </li>
              <li>
                <Link href="/departments" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>21+ Pre, Para & Clinical Depts</span>
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Doctors & Faculty Directory</span>
                </Link>
              </li>
              <li>
                <Link href="/hospital/health-care-facility" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>RHTC & UHTC Health Centers</span>
                </Link>
              </li>
              <li>
                <Link href="/hospital/grievance-cell" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Patient & Student Grievance Cell</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance & Disclosures */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-teal-500/30 pb-2">
              Statutory & Campus
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about/committees" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Anti-Ragging Squad & Committee</span>
                </Link>
              </li>
              <li>
                <Link href="/about/approvals" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Govt. Approvals & NMC LOP</span>
                </Link>
              </li>
              <li>
                <Link href="/mandatory-disclosures" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Annexure-I & Pro-Forma 18</span>
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Hostels & Student Amenities</span>
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Careers & Faculty Recruitment</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Photo & Campus Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Health Articles & Updates</span>
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-700/30 transition-all cursor-pointer"
              >
                Online Admission Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SITE_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/mandatory-disclosures" className="hover:text-teal-400">NMC Mandated Disclosures</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-teal-400">Campus Route Map</Link>
            <span>•</span>
            <Link href="/hospital/grievance-cell" className="hover:text-teal-400">Grievance Cell</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
