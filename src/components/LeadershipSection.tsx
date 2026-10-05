'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, ChevronRight, UserCheck, Award, ArrowUpRight } from 'lucide-react';
import { LEADERSHIP } from '@/data/siteData';

export default function LeadershipSection() {
  const [activeLeaderKey, setActiveLeaderKey] = useState<string>('chairman');
  const activeLeader = LEADERSHIP[activeLeaderKey];

  const leaders = [
    { key: 'chairman', title: "Chairman's Message", subtitle: 'Mr. Jakir Hossain', role: 'Founder & Chairman' },
    { key: 'president', title: "President's Message", subtitle: 'Dr. Dipak Kumar Das', role: 'President' },
    { key: 'principal', title: "Principal's Message", subtitle: 'Prof. (Dr.) Nirjhar Bhattacharya', role: 'Dean & Principal' },
    { key: 'superintendent', title: "Superintendent's Message", subtitle: 'Prof. (Dr.) Naresh S. Gurbani', role: 'Medical Superintendent' }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100/80 text-teal-800 border border-teal-200">
          <Award className="w-3.5 h-3.5 text-teal-600" />
          <span>Institutional Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Visionary Guidance & Messages
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Learn from the founders and academic stewards driving medical education, healthcare accessibility, and community service in West Bengal.
        </p>
      </div>

      {/* Leadership Card Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Navigation Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {leaders.map((leader) => {
            const isSelected = activeLeaderKey === leader.key;
            return (
              <button
                key={leader.key}
                onClick={() => setActiveLeaderKey(leader.key)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-teal-700 to-teal-800 text-white shadow-xl shadow-teal-800/20 border-teal-600 scale-[1.02]'
                    : 'glass-card hover:bg-white text-slate-700 border-slate-200/80'
                }`}
              >
                <div>
                  <div className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-teal-200' : 'text-teal-600'}`}>
                    {leader.title}
                  </div>
                  <div className={`text-base font-bold mt-0.5 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {leader.subtitle}
                  </div>
                  <div className={`text-xs ${isSelected ? 'text-teal-100' : 'text-slate-500'}`}>
                    {leader.role}
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    isSelected ? 'text-teal-200 translate-x-1' : 'text-slate-400'
                  }`}
                />
              </button>
            );
          })}

          <div className="mt-4 p-5 rounded-2xl bg-amber-50/90 border border-amber-200/80 text-xs text-amber-900 space-y-2">
            <span className="font-bold block text-sm text-amber-950">Shibham Education Trust</span>
            <p className="leading-relaxed">
              Established with an altruistic mandate to provide affordable higher healthcare education in Murshidabad under Public-Private Partnership (PPP).
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 font-bold text-amber-950 hover:underline pt-1"
            >
              Read Full Trust Vision <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Side: Active Leader Showcase Card */}
        <div className="lg:col-span-8">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            {/* Background quote mark */}
            <Quote className="absolute top-6 right-6 w-24 h-24 text-teal-600/10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Leader Photo */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={activeLeader.image || 'https://jhmcri.com/wp-content/uploads/2026/01/Indian-Doctors-Team-Ai-Generated-683x1024.png'}
                    alt={activeLeader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-4">{activeLeader.name}</h3>
                <p className="text-xs font-semibold text-teal-700">{activeLeader.role}</p>
                {activeLeader.qualifications && (
                  <p className="text-[11px] text-slate-500 font-medium">{activeLeader.qualifications}</p>
                )}
              </div>

              {/* Leader Message Body */}
              <div className="md:col-span-7 space-y-4">
                <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-100 text-teal-900 text-xs sm:text-sm font-semibold italic leading-relaxed">
                  &ldquo;{activeLeader.quote}&rdquo;
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-h-64 overflow-y-auto pr-2">
                  {activeLeader.fullMessage.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs text-slate-400">Jakir Hossain Medical College & Research Institute</span>
                  <Link
                    href={`/about/${activeLeaderKey}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800"
                  >
                    <span>Full Profile & Bio</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
