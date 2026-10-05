'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ChevronRight, BookOpen, Stethoscope, Building, User, FileText, Phone } from 'lucide-react';
import { DEPARTMENTS, NOTICES, SITE_INFO } from '@/data/siteData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle search
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickPages = [
    { title: 'MBBS Admission 2026 Process', href: '/admissions', icon: BookOpen, cat: 'Admissions' },
    { title: 'Proposed Fee Structure 2026-2027', href: '/admissions/fee-structure', icon: FileText, cat: 'Fees' },
    { title: 'Official College Bank Details', href: '/admissions/bank-details', icon: Building, cat: 'Payments' },
    { title: 'Hospital Bed Distribution Matrix', href: '/hospital/bed-distribution', icon: Stethoscope, cat: 'Hospital' },
    { title: 'Clinical Material & Stats', href: '/hospital/clinical-material', icon: Stethoscope, cat: 'Hospital' },
    { title: 'Doctors & Faculty Directory', href: '/faculty', icon: User, cat: 'Faculty' },
    { title: 'Hostels & Campus Amenities', href: '/campus-life', icon: Building, cat: 'Campus' },
    { title: 'Mandatory NMC Disclosures', href: '/mandatory-disclosures', icon: FileText, cat: 'Compliance' },
    { title: 'Contact & Campus Location', href: '/contact', icon: Phone, cat: 'Contact' },
  ];

  // Filter departments
  const matchedDepts = DEPARTMENTS.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.hod.toLowerCase().includes(query.toLowerCase()) ||
      d.category.toLowerCase().includes(query.toLowerCase())
  );

  // Filter pages
  const matchedPages = quickPages.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.cat.toLowerCase().includes(query.toLowerCase())
  );

  // Filter notices
  const matchedNotices = NOTICES.filter((n) =>
    n.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white/95 rounded-3xl shadow-2xl border border-white/80 backdrop-blur-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-teal-600 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search departments, doctors, fees, admissions, notices..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base bg-transparent outline-none text-slate-800 placeholder-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 rounded-lg"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-5 text-xs">
          {/* Quick Pages */}
          {matchedPages.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                Quick Pages
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {matchedPages.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={onClose}
                      className="p-2.5 rounded-xl hover:bg-teal-50 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-teal-100 text-teal-700">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-slate-800 group-hover:text-teal-700 block">
                            {p.title}
                          </span>
                          <span className="text-[10px] text-slate-400">{p.cat}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Departments */}
          {matchedDepts.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                Medical Departments ({matchedDepts.length})
              </span>
              <div className="space-y-1">
                {matchedDepts.slice(0, 5).map((d) => (
                  <Link
                    key={d.id}
                    href={`/departments/${d.slug}`}
                    onClick={onClose}
                    className="p-2.5 rounded-xl hover:bg-teal-50 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 group-hover:text-teal-700 block">
                          {d.name}
                        </span>
                        <span className="text-[10px] text-slate-500">HOD: {d.hod} • {d.category}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                      View Wing
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Notices */}
          {matchedNotices.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                Notices & Announcements
              </span>
              <div className="space-y-1">
                {matchedNotices.slice(0, 3).map((n) => (
                  <Link
                    key={n.id}
                    href="/admissions"
                    onClick={onClose}
                    className="p-2.5 rounded-xl hover:bg-amber-50 flex items-center justify-between group transition-colors"
                  >
                    <div className="space-y-0.5 pr-2">
                      <span className="font-bold text-slate-800 group-hover:text-amber-800 block">
                        {n.title}
                      </span>
                      <span className="text-[10px] text-slate-400">{n.category} • {n.date}</span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md shrink-0">
                      Circular
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-400 flex items-center justify-between px-4">
          <span>Jakir Hossain Medical College & Research Institute</span>
          <span>Emergency: {SITE_INFO.phone}</span>
        </div>
      </div>
    </div>
  );
}
