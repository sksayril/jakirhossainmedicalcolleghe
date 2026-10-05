'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, badge, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-r from-slate-950 via-teal-950 to-slate-900 text-white py-14 sm:py-18 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-4">
        {/* Breadcrumb links */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link href="/" className="hover:text-teal-300 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((b, i) => (
            <React.Fragment key={b.label}>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              {b.href ? (
                <Link href={b.href} className="hover:text-teal-300 transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-teal-300 font-semibold">{b.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {badge && (
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
            {badge}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-4xl leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
