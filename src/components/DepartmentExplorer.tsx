'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Stethoscope,
  Microscope,
  Activity,
  Heart,
  Eye,
  Bone,
  Baby,
  Brain,
  Shield,
  Search,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { DEPARTMENTS, DepartmentItem } from '@/data/siteData';

export default function DepartmentExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Pre-Clinical', 'Para-Clinical', 'Clinical'];

  const filteredDepts = DEPARTMENTS.filter((dept) => {
    const matchesCat = selectedCategory === 'All' || dept.category === selectedCategory;
    const matchesSearch =
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.hod.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-teal-950/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100/80 text-emerald-800 border border-emerald-200">
              <Microscope className="w-3.5 h-3.5 text-emerald-600" />
              <span>Academic & Clinical Wings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Medical Departments & Laboratories
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Explore 21+ specialized Pre-Clinical, Para-Clinical, and Clinical departments equipped with advanced diagnostic infrastructure and guided by distinguished medical educators.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search department, HOD..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500/30 shadow-sm"
            />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-105'
                  : 'glass-panel text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {cat} {cat !== 'All' && `(${DEPARTMENTS.filter((d) => d.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepts.map((dept) => (
            <div
              key={dept.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 bg-white/90 shadow-lg flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                <Image
                  src={dept.image}
                  alt={dept.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-md text-teal-800 shadow-sm">
                    {dept.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-teal-700 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    HOD: {dept.hod}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {dept.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {dept.faculty.length} Faculty Members
                  </span>
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 group/link"
                  >
                    <span>View Department</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Faculty Directory */}
        <div className="mt-12 text-center">
          <Link
            href="/faculty"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-xl transition-all"
          >
            <span>Browse Complete Faculty & Doctor Directory</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
