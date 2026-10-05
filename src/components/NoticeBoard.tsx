'use client';

import React from 'react';
import Link from 'next/link';
import { Bell, FileText, Download, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { NOTICES } from '@/data/siteData';

export default function NoticeBoard() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Notice Board */}
        <div className="lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-8 bg-white/85 shadow-2xl border border-white/90 backdrop-blur-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-teal-100 text-teal-800">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Official Notice Board & Circulars</h3>
                <p className="text-xs text-slate-500">Live notifications for students, parents, and faculties</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Session 2026-27
            </span>
          </div>

          <div className="space-y-3">
            {NOTICES.map((notice) => (
              <div
                key={notice.id}
                className="p-4 rounded-2xl border border-slate-200/80 bg-white hover:bg-teal-50/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-600 group-hover:bg-teal-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                        {notice.category}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {notice.date}
                      </span>
                      {notice.isNew && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase bg-red-500 text-white animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-teal-800 transition-colors">
                      {notice.title}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => alert(`Downloading notice document: ${notice.title}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 group-hover:bg-teal-600 text-slate-700 group-hover:text-white text-xs font-semibold transition-all shrink-0 self-start sm:self-center cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF ({notice.fileSize})</span>
                </button>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <span className="text-xs text-slate-400">Showing latest official announcements</span>
            <Link
              href="/admissions"
              className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
            >
              Archived Circulars <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Side: Quick Links & Contact Callout */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-3xl p-6 bg-gradient-to-br from-teal-800 to-slate-900 text-white shadow-2xl border border-teal-700 space-y-4">
            <h4 className="text-lg font-bold">Academic Calendar 2026</h4>
            <p className="text-xs text-teal-100 leading-relaxed">
              Check key dates for MBBS 1st & 2nd Professional examinations, terminal assessments, clinical postings, and vacation periods.
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white/10 flex items-center justify-between">
                <span>Foundation Course Batch 2026:</span>
                <span className="font-bold text-amber-300">Oct 2026</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 flex items-center justify-between">
                <span>1st Internal Assessment:</span>
                <span className="font-bold text-amber-300">Dec 2026</span>
              </div>
            </div>
            <Link
              href="/academics/calendar"
              className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-teal-900 font-bold text-xs uppercase tracking-wider block text-center shadow-md transition-all"
            >
              View Full Academic Calendar
            </Link>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-lg space-y-3">
            <h4 className="text-sm font-bold text-slate-900">Anti-Ragging Zero Tolerance</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              As per NMC guidelines, ragging in any form inside college premises or hostels is strictly banned and constitutes a cognizable offense.
            </p>
            <Link
              href="/about/committees"
              className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
            >
              Anti-Ragging Squad & Helpline <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
