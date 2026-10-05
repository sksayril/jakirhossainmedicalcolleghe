'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, HeartPulse, GraduationCap, Building2, BookOpen, Stethoscope, Award } from 'lucide-react';

export default function MobileStoryHighlights() {
  const highlights = [
    {
      label: "MBBS '26",
      href: "/admissions",
      icon: GraduationCap,
      color: "from-amber-400 to-amber-600",
      image: "https://jhmcri.com/wp-content/uploads/2026/01/Indian-Doctors-Team-Ai-Generated-683x1024.png"
    },
    {
      label: "350+ Beds",
      href: "/hospital",
      icon: HeartPulse,
      color: "from-teal-400 to-teal-700",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/diverse-team-professional-surgeon-assistants-nurses-performing-invasive-surgery-patient-hospital-operating-room-surgeons-talk-use-instruments-real-modern-hospital-1024x683.jpg"
    },
    {
      label: "Live OPD",
      href: "/hospital/clinical-material",
      icon: Stethoscope,
      color: "from-emerald-400 to-emerald-700",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/24X7-EMERGENCY-SERVICES-1024x717.jpg"
    },
    {
      label: "Dissection",
      href: "/departments/anatomy",
      icon: BookOpen,
      color: "from-blue-400 to-indigo-600",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.22-PM-2-1024x682.jpeg"
    },
    {
      label: "Hostels",
      href: "/campus-life",
      icon: Building2,
      color: "from-purple-400 to-purple-600",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM.jpeg"
    },
    {
      label: "NMC MARB",
      href: "/about/approvals",
      icon: Award,
      color: "from-rose-400 to-red-600",
      image: "https://jhmcri.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-7.30.20-PM-1024x676.jpeg"
    }
  ];

  return (
    <div className="xl:hidden bg-slate-900/95 text-white py-3.5 px-4 border-b border-white/10">
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-1">
        {highlights.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-1.5 shrink-0 group active:scale-95 transition-transform"
          >
            {/* Gradient Avatar Ring */}
            <div className={`p-[2px] rounded-full bg-gradient-to-tr ${item.color} shadow-md`}>
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate-900 bg-slate-800">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="56px"
                />
              </div>
            </div>
            <span className="text-[11px] font-bold text-slate-200 group-hover:text-teal-300 tracking-tight whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
