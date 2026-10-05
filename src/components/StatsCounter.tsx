'use client';

import React from 'react';
import { Bed, Users, Building, Activity, HeartPulse, Clock, Sparkles } from 'lucide-react';
import { STATS } from '@/data/siteData';

const icons = [Bed, Users, Building, Activity, HeartPulse, Clock];

export default function StatsCounter() {
  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="rounded-3xl p-6 sm:p-8 bg-white shadow-2xl border border-slate-200/90 backdrop-blur-2xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center p-2 group transition-all duration-300 ${
                  idx !== 0 ? 'pt-4 lg:pt-0' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-50 to-emerald-100 text-teal-700 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">{stat.label}</div>
                <div className="text-[11px] text-slate-500 font-medium">{stat.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
