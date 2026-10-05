'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  HeartPulse,
  GraduationCap,
  Search,
  Zap,
  Phone,
  MessageSquare,
  FileText,
  Calculator,
  X,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

interface MobileAppNavBarProps {
  onOpenEnquiry: () => void;
  onOpenSearch: () => void;
}

export default function MobileAppNavBar({ onOpenEnquiry, onOpenSearch }: MobileAppNavBarProps) {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  const tabs = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Hospital', href: '/hospital', icon: HeartPulse },
    { label: 'Admissions', href: '/admissions', icon: GraduationCap, badge: '2026' },
  ];

  return (
    <>
      {/* Native App-Style Bottom Bar (Visible on mobile/tablet screens only) */}
      <nav className="xl:hidden fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur-2xl border-t border-slate-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] py-1.5 px-3 flex items-center justify-around safe-bottom">
        {/* Home Tab */}
        <Link
          href="/"
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-2xl transition-all ${
            pathname === '/' ? 'text-teal-700 font-bold scale-105' : 'text-slate-500 font-medium'
          }`}
        >
          <Home className={`w-5 h-5 ${pathname === '/' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] tracking-tight">Home</span>
        </Link>

        {/* Hospital Tab */}
        <Link
          href="/hospital"
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-2xl transition-all ${
            pathname.startsWith('/hospital') ? 'text-teal-700 font-bold scale-105' : 'text-slate-500 font-medium'
          }`}
        >
          <HeartPulse className={`w-5 h-5 ${pathname.startsWith('/hospital') ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] tracking-tight">Hospital</span>
        </Link>

        {/* Center Floating App Action Button */}
        <button
          onClick={() => setSheetOpen(true)}
          className="relative -top-3 w-12 h-12 rounded-full bg-gradient-to-tr from-teal-600 via-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-lg shadow-teal-700/40 hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white"
          aria-label="Quick Actions"
        >
          <Zap className="w-6 h-6 animate-pulse" />
        </button>

        {/* Admissions Tab */}
        <Link
          href="/admissions"
          className={`relative flex flex-col items-center gap-0.5 py-1 px-3 rounded-2xl transition-all ${
            pathname.startsWith('/admissions') ? 'text-teal-700 font-bold scale-105' : 'text-slate-500 font-medium'
          }`}
        >
          <GraduationCap className={`w-5 h-5 ${pathname.startsWith('/admissions') ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] tracking-tight">Admissions</span>
          <span className="absolute -top-1 right-2 px-1 py-0.2 rounded-full text-[8px] font-black bg-amber-500 text-slate-950">
            &apos;26
          </span>
        </Link>

        {/* Search Tab */}
        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center gap-0.5 py-1 px-3 rounded-2xl text-slate-500 font-medium active:scale-95 transition-all cursor-pointer"
        >
          <Search className="w-5 h-5 stroke-2" />
          <span className="text-[10px] tracking-tight">Search</span>
        </button>
      </nav>

      {/* Slide-Up Native App Action Sheet */}
      {sheetOpen && (
        <div
          onClick={() => setSheetOpen(false)}
          className="xl:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex flex-col justify-end animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-white rounded-t-3xl p-5 shadow-2xl border-t border-slate-100 max-h-[85vh] overflow-y-auto space-y-4 animate-slideUp"
          >
            {/* Grab Handle */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto" />

            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">Quick App Services</span>
                <h3 className="text-lg font-bold text-slate-900">JHMCRI Instant Hub</h3>
              </div>
              <button
                onClick={() => setSheetOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs font-bold">
              {/* Emergency Call */}
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="p-3.5 rounded-2xl bg-red-50 text-red-900 border border-red-200 flex flex-col justify-between h-24 active:scale-98 transition-transform"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-red-600 text-white rounded-xl">
                    <Phone className="w-4 h-4 animate-bounce" />
                  </div>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-red-200 text-red-950 font-black">
                    24/7
                  </span>
                </div>
                <div>
                  <span className="block font-bold">Emergency Line</span>
                  <span className="text-[10px] text-red-700 font-normal">{SITE_INFO.phone}</span>
                </div>
              </a>

              {/* Admission Enquiry */}
              <button
                onClick={() => {
                  setSheetOpen(false);
                  onOpenEnquiry();
                }}
                className="p-3.5 rounded-2xl bg-teal-50 text-teal-900 border border-teal-200 flex flex-col justify-between h-24 text-left active:scale-98 transition-transform cursor-pointer"
              >
                <div className="p-2 bg-teal-600 text-white rounded-xl self-start">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold">Admission 2026</span>
                  <span className="text-[10px] text-teal-700 font-normal">Enquire & Fee Chart</span>
                </div>
              </button>

              {/* WhatsApp Support */}
              <a
                href={`https://wa.me/919652418407?text=Hello%20Jakir%20Hossain%20Medical%20College,%20I%20need%20assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200 flex flex-col justify-between h-24 active:scale-98 transition-transform"
              >
                <div className="p-2 bg-emerald-600 text-white rounded-xl self-start">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold">WhatsApp Chat</span>
                  <span className="text-[10px] text-emerald-700 font-normal">Instant Reply</span>
                </div>
              </a>

              {/* Fee Structure */}
              <Link
                href="/admissions/fee-structure"
                onClick={() => setSheetOpen(false)}
                className="p-3.5 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex flex-col justify-between h-24 active:scale-98 transition-transform"
              >
                <div className="p-2 bg-amber-600 text-white rounded-xl self-start">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold">Fee Structure</span>
                  <span className="text-[10px] text-amber-700 font-normal">2026-27 Breakdown</span>
                </div>
              </Link>
            </div>

            {/* Quick Navigation Links in Sheet */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs font-semibold">
              <Link
                href="/hospital/bed-distribution"
                onClick={() => setSheetOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
              >
                <span>350+ Bed Matrix & ICU Status</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href="/faculty"
                onClick={() => setSheetOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
              >
                <span>Doctors & Faculty Directory</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setSheetOpen(false)}
                className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
              >
                <span>Campus Location & Google Map</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            <div className="pt-2 text-center text-[10px] text-slate-400">
              Jakir Hossain Medical College & Research Institute • Murshidabad
            </div>
          </div>
        </div>
      )}
    </>
  );
}
