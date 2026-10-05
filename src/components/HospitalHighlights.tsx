'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  HeartPulse,
  Activity,
  Bed,
  Sparkles,
  ShieldAlert,
  Clock,
  ArrowRight,
  Stethoscope,
  TestTubes,
  Syringe
} from 'lucide-react';
import { BED_DISTRIBUTION, CLINICAL_STATS, SITE_INFO } from '@/data/siteData';

interface HospitalHighlightsProps {
  onOpenEnquiry: () => void;
}

export default function HospitalHighlights({ onOpenEnquiry }: HospitalHighlightsProps) {
  const totalBeds = BED_DISTRIBUTION.reduce((acc, curr) => acc + curr.beds, 0);
  const totalIcuBeds = BED_DISTRIBUTION.reduce((acc, curr) => acc + (curr.icuBeds || 0), 0);

  const hospitalFeatures = [
    {
      title: "24x7 Emergency & Trauma Care",
      desc: "Immediate trauma resuscitation, triaged emergency bays, and critical surgical response team available 24/7.",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/24X7-EMERGENCY-SERVICES-1024x717.jpg",
      tag: "Round the Clock"
    },
    {
      title: "Advanced Modular Operation Theatres",
      desc: "Laminar airflow, HEPA filtration, and advanced laparoscopic & electrocautery surgical workstations.",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/diverse-team-professional-surgeon-assistants-nurses-performing-invasive-surgery-patient-hospital-operating-room-surgeons-talk-use-instruments-real-modern-hospital-1024x683.jpg",
      tag: "Major & Minor OTs"
    },
    {
      title: "Automated Central Diagnostic Labs",
      desc: "Fully computerized biochemistry, pathology, bacteriology, and round-the-clock licensed blood bank.",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/LABORATORY-SERVICES-1024x683.jpg",
      tag: "1,200+ Daily Tests"
    },
    {
      title: "Multi-Slice CT & Digital Radio-Diagnosis",
      desc: "High-resolution CT scanning, color Doppler ultrasonography, mammography, and mobile digital X-Ray units.",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/physician-reviewing-mri-scan-x-ray-results-with-patient-medical-office-1024x576.jpg",
      tag: "Instant Digital PACS"
    },
    {
      title: "Rural & Urban Health Training (RHTC & UHTC)",
      desc: "Direct community healthcare delivery, maternal care, and immunizations across Murshidabad rural belts.",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/RULAR-HEALTH-TRAINING-CENTRES-RHTC-1024x683.jpg",
      tag: "Community Outreach"
    },
    {
      title: "24x7 Advanced Ambulance Fleet",
      desc: "Dedicated GPS-tracked Advanced Cardiac Life Support (ACLS) ambulances with ventilators and oxygen support.",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/AMBULANCE-SERVICES-1024x683.jpg",
      tag: "Emergency Transport"
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100/80 text-teal-800 border border-teal-200">
          <HeartPulse className="w-3.5 h-3.5 text-teal-600" />
          <span>Teaching Hospital & Healthcare</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          350+ Bed Multi-Speciality Clinical Care
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The Jakir Hossain Medical College Teaching Hospital serves thousands of patients every month with compassionate clinical care and offers medical students extensive bedside clinical training.
        </p>
      </div>

      {/* 6 Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {hospitalFeatures.map((feat) => (
          <div
            key={feat.title}
            className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 bg-white/90 shadow-lg flex flex-col group"
          >
            <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
              <Image
                src={feat.image}
                alt={feat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-teal-600/90 text-white backdrop-blur-md shadow-sm">
                  {feat.tag}
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {feat.desc}
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-teal-700 font-bold">
                <Link href="/hospital" className="hover:underline flex items-center gap-1">
                  Learn Hospital Service <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bed Distribution & Clinical Statistics Interactive Panel */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bed Distribution Summary Table */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Official NMC Bed Matrix</span>
                <h3 className="text-2xl font-bold text-slate-900">Hospital Bed Distribution</h3>
              </div>
              <div className="p-2 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center gap-2 text-xs font-bold">
                <Bed className="w-4 h-4" />
                <span>{totalBeds}+ Total Beds</span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white/80 shadow-inner">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4">Department / Clinical Unit</th>
                    <th className="py-2.5 px-4 text-center">General Beds</th>
                    <th className="py-2.5 px-4 text-center">ICU / HDU</th>
                    <th className="py-2.5 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {BED_DISTRIBUTION.slice(0, 6).map((b) => (
                    <tr key={b.department} className="hover:bg-teal-50/50">
                      <td className="py-2 px-4 font-semibold text-slate-800">{b.department}</td>
                      <td className="py-2 px-4 text-center font-bold text-teal-700">{b.beds}</td>
                      <td className="py-2 px-4 text-center font-medium text-slate-700">{b.icuBeds || '-'}</td>
                      <td className="py-2 px-4 text-right">
                        <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          Active 24x7
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-slate-500">Includes {totalIcuBeds}+ Intensive Care Units (MICU, SICU, NICU, PICU, ICCU)</span>
              <Link href="/hospital/bed-distribution" className="text-teal-700 font-bold hover:underline">
                View Full 10-Department Matrix →
              </Link>
            </div>
          </div>

          {/* Right Column: Key Diagnostic Clinical Material Stats */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-teal-950 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-400 animate-pulse" />
                <h4 className="font-bold text-sm tracking-wide uppercase text-teal-300">Clinical Material & Workload</h4>
              </div>

              <div className="space-y-3 text-xs">
                {CLINICAL_STATS.slice(0, 5).map((stat) => (
                  <div key={stat.metric} className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 border border-white/10">
                    <span className="text-slate-300">{stat.metric}</span>
                    <span className="font-bold text-amber-300">{stat.count}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/hospital/clinical-material"
                  className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider block text-center shadow-lg transition-all"
                >
                  View Complete Clinical Data Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
