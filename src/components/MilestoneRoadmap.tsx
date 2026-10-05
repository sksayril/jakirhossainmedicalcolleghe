'use client';

import React from 'react';
import { Award, ShieldCheck, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function MilestoneRoadmap() {
  const milestones = [
    {
      year: "2023",
      title: "Establishment of Shibham Education Trust Mandate",
      desc: "Conception and foundation of Jakir Hossain Medical College & Research Institute in Miapur, Murshidabad under Public-Private Partnership (PPP) with the Department of Health & Family Welfare, Govt. of West Bengal.",
      badge: "Inception & Foundation"
    },
    {
      year: "2024",
      title: "NMC Assessment & Consent of Affiliation",
      desc: "Inspection by the Medical Assessment and Rating Board (MARB) of the National Medical Commission (NMC). Affiliation granted by The West Bengal University of Health Sciences (WBUHS), Kolkata.",
      badge: "NMC & WBUHS Recognition"
    },
    {
      year: "2025",
      title: "350+ Bed Multi-Speciality Hospital Commissioning",
      desc: "Full operationalization of 24x7 Emergency, Trauma Care, modular operation theatres, central diagnostic laboratories, and intensive care units (MICU, SICU, NICU, PICU).",
      badge: "Clinical Infrastructure"
    },
    {
      year: "2026 - 2027",
      title: "MBBS Admissions & New Academic Expansion",
      desc: "Centralized NEET-UG counseling admissions via WBMCC for 100/150 seats, launch of RHTC/UHTC rural health outreach, and digital medical library portal.",
      badge: "Current Session 2026"
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
          <Award className="w-3.5 h-3.5 text-amber-700" />
          <span>Institutional Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Journey of Excellence & Growth
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          From visionary foundation to becoming a premier medical college and multi-speciality healthcare hub in Bengal.
        </p>
      </div>

      <div className="relative border-l-2 border-teal-500/30 ml-4 sm:ml-32 space-y-10">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">
            {/* Dot marker */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-md group-hover:scale-125 group-hover:bg-amber-500 transition-all duration-300" />

            {/* Year Label for larger screens */}
            <div className="sm:absolute sm:-left-32 sm:top-0 text-left sm:text-right sm:w-24">
              <span className="text-lg font-black text-teal-800 tracking-tight block">{m.year}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden sm:block">
                Milestone
              </span>
            </div>

            {/* Content card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white/90 shadow-md hover:border-teal-400 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                  {m.badge}
                </span>
                <span className="text-xs font-bold text-slate-400 sm:hidden">{m.year}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {m.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
