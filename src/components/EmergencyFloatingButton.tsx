'use client';

import React, { useState } from 'react';
import { PhoneCall, MessageSquare, AlertCircle, FileText, X } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

interface EmergencyFloatingProps {
  onOpenEnquiry: () => void;
}

export default function EmergencyFloatingButton({ onOpenEnquiry }: EmergencyFloatingProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Options */}
      {expanded && (
        <div className="flex flex-col gap-2.5 mb-2 animate-fadeIn">
          {/* 24x7 Emergency Helpline */}
          <a
            href={`tel:${SITE_INFO.phone}`}
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-red-600 text-white shadow-xl shadow-red-600/30 hover:bg-red-700 transition-all font-medium text-xs backdrop-blur-md"
          >
            <div className="p-1.5 bg-white/20 rounded-lg">
              <AlertCircle className="w-4 h-4 text-white animate-pulse" />
            </div>
            <div className="text-left">
              <span className="block font-bold">24x7 Hospital Emergency</span>
              <span className="text-[10px] text-red-100">{SITE_INFO.phone}</span>
            </div>
          </a>

          {/* Admission Enquiry Modal Trigger */}
          <button
            onClick={() => {
              setExpanded(false);
              onOpenEnquiry();
            }}
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-teal-600 text-white shadow-xl shadow-teal-600/30 hover:bg-teal-700 transition-all font-medium text-xs cursor-pointer"
          >
            <div className="p-1.5 bg-white/20 rounded-lg">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <span className="block font-bold">MBBS Admissions 2026</span>
              <span className="text-[10px] text-teal-100">Enquire & Fee Structure</span>
            </div>
          </button>

          {/* WhatsApp Direct Chat */}
          <a
            href={`https://wa.me/919652418407?text=Hello%20Jakir%20Hossain%20Medical%20College,%20I%20would%20like%20to%20know%20about%20MBBS%20Admission%20and%20Facilities.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 hover:bg-emerald-700 transition-all font-medium text-xs"
          >
            <div className="p-1.5 bg-white/20 rounded-lg">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <span className="block font-bold">WhatsApp Support</span>
              <span className="text-[10px] text-emerald-100">Instant Chat Available</span>
            </div>
          </a>
        </div>
      )}

      {/* Main Trigger Floating Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center gap-2.5 px-5 py-3 rounded-full shadow-2xl transition-all duration-300 cursor-pointer ${
          expanded
            ? 'bg-slate-800 text-white shadow-slate-800/40 rotate-0'
            : 'bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white shadow-teal-600/40 hover:scale-105'
        }`}
        aria-label="Quick Emergency & Contact Help"
      >
        {expanded ? (
          <>
            <X className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Close</span>
          </>
        ) : (
          <>
            <div className="relative">
              <PhoneCall className="w-5 h-5 animate-bounce" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-400 rounded-full animate-ping" />
            </div>
            <span className="text-xs font-bold tracking-wide">Quick Help & Admissions</span>
          </>
        )}
      </button>
    </div>
  );
}
