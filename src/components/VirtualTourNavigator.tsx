'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Compass, Sparkles, MapPin, CheckCircle2, ChevronRight, Eye, Layers } from 'lucide-react';
import { GALLERY_IMAGES } from '@/data/siteData';

export default function VirtualTourNavigator() {
  const [activeZone, setActiveZone] = useState<number>(0);

  const zones = [
    {
      title: "Main Hospital & Administrative Block",
      category: "Administrative & Reception",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1024x676.jpeg",
      desc: "Architecturally modern 5-storied academic and hospital building housing Dean's Secretariat, MS office, Central Registration, and specialty OPD suites.",
      highlights: ["Central Registration & Helpdesk", "Dean & Superintendent Offices", "Air-conditioned reception foyer", "Green landscaped entry plaza"]
    },
    {
      title: "Modular Operation Theatres & Surgical Block",
      category: "Surgical Suites",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/diverse-team-professional-surgeon-assistants-nurses-performing-invasive-surgery-patient-hospital-operating-room-surgeons-talk-use-instruments-real-modern-hospital-1024x683.jpg",
      desc: "Major surgical suites with laminar airflow, HEPA filtration, laparoscopic surgical towers, and adjoining post-anesthesia recovery units.",
      highlights: ["Laminar airflow with HEPA filters", "Laparoscopic endoscopy towers", "Attached surgical recovery room", "Dedicated orthopedic C-Arm OT"]
    },
    {
      title: "Central Diagnostic & Automated Laboratories",
      category: "Diagnostic Testing",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/LABORATORY-SERVICES-1024x683.jpg",
      desc: "24x7 automated laboratory carrying out clinical biochemistry, 5-part hematology, histopathology grossing, microbiology cultures, and blood banking.",
      highlights: ["Automated Biochemistry Analyzers", "BSL-2 Microbiology culture suites", "24x7 Licensed Blood Center", "Computerized barcoding reports"]
    },
    {
      title: "Anatomy Dissection & Histology Halls",
      category: "Pre-Clinical Labs",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.22-PM-2-1024x682.jpeg",
      desc: "Spacious cadaver dissection hall for 100 students, modern embalming tanks, cold storage rooms, and a comprehensive anatomical museum.",
      highlights: ["100-student seating capacity", "150+ Anatomical wet specimens", "Cadaver preservation cold rooms", "High-power individual histology microscopes"]
    },
    {
      title: "Smart AV Lecture Theatres",
      category: "Academic Infrastructure",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.21-PM-1-1024x682.jpeg",
      desc: "Tiered gallery lecture halls with surround acoustics, interactive smartboards, 4K digital projection, and high-speed LAN for virtual classes.",
      highlights: ["Tiered ergonomic seating for 150+", "Dual interactive smart boards", "Digital classroom broadcast setup", "Acoustically insulated lecture halls"]
    },
    {
      title: "Central Medical & Digital E-Library",
      category: "Knowledge Center",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.19-PM-e1764093650153-1024x739.jpeg",
      desc: "Peaceful central library with over 7,000 reference textbooks, national and international medical journals, and digital computer terminals.",
      highlights: ["7,000+ Medical reference volumes", "40+ E-Library computer terminals", "24x7 Silent reading zone", "Access to PubMed & medical journals"]
    }
  ];

  const current = zones[activeZone];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <Compass className="w-3.5 h-3.5 text-teal-600 animate-spin" />
            <span>Virtual Campus & Hospital Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore 30-Acre Modern Infrastructure
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Click across key campus zones to inspect our hospital blocks, modular operation theatres, smart lecture halls, and diagnostic laboratories.
          </p>
        </div>

        {/* Zone Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {zones.map((z, idx) => (
            <button
              key={z.title}
              onClick={() => setActiveZone(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeZone === idx
                  ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-105'
                  : 'glass-panel bg-white text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeZone === idx ? 'bg-amber-300' : 'bg-slate-300'}`} />
              <span>{z.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Interactive Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Hotspot Image */}
          <div className="lg:col-span-7">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Hotspot Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-teal-800 shadow-md flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  {current.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold">{current.title}</h3>
                <p className="text-xs text-slate-200 mt-0.5 line-clamp-1">Jakir Hossain Medical College Campus, Murshidabad</p>
              </div>
            </div>
          </div>

          {/* Details & Highlights */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                Facility Breakdown
              </span>
              <h3 className="text-2xl font-bold text-slate-900">{current.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{current.desc}</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-800 block">Key Infrastructure Highlights:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-teal-50/60 border border-teal-100 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] font-semibold text-teal-950 leading-tight">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="/gallery"
                className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
              >
                <span>View Full Photo Gallery</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
