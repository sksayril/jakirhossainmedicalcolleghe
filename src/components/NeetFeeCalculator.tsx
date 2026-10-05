'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, Sparkles, Award, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

interface NeetFeeCalculatorProps {
  onOpenEnquiry: () => void;
}

export default function NeetFeeCalculator({ onOpenEnquiry }: NeetFeeCalculatorProps) {
  const [neetScore, setNeetScore] = useState<number>(510);
  const [category, setCategory] = useState<string>('General');
  const [domicile, setDomicile] = useState<string>('West Bengal');
  const [hostelType, setHostelType] = useState<string>('AC with Mess');

  // Calculations
  const isEligible = neetScore >= (category === 'General' || category === 'EWS' ? 137 : 107);
  const isHighChance = neetScore >= 450;
  const isMediumChance = neetScore >= 350 && neetScore < 450;

  let estimatedTuitionPerYear = domicile === 'West Bengal' ? 'Regulated State / PPP Structure' : 'Management Quota Norms';
  let hostelFee = hostelType === 'AC with Mess' ? 150000 : hostelType === 'Non-AC with Mess' ? 120000 : 0;

  // Matching scholarships
  let matchedScholarship = 'West Bengal Student Credit Card (WBSCC) - Up to ₹10 Lakhs at 4% simple interest.';
  if (category === 'Minority' || category === 'OBC-A') {
    matchedScholarship = 'WBMDFC Aikyashree Scholarship + WBSCC Education Loan.';
  } else if (category === 'SC' || category === 'ST' || category === 'OBC-B') {
    matchedScholarship = 'OASIS Merit Scholarship + Govt. Fee Concession.';
  } else if (neetScore >= 500 && domicile === 'West Bengal') {
    matchedScholarship = 'Swami Vivekananda Merit-cum-Means (SVMCM) - Up to ₹96,000/yr + WBSCC Loan.';
  }

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <Calculator className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Admission Aid</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            NEET-UG 2026 Score & Fee Estimator
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Calculate your admission eligibility, explore seat categories, and discover government scholarship benefits for your MBBS studies at JHMCRI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-6 space-y-5 glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800">Your Expected NEET-UG Score: (0 - 720)</label>
                <span className="text-base font-black text-teal-700 bg-teal-50 px-3 py-1 rounded-xl border border-teal-200">
                  {neetScore} Marks
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={720}
                step={5}
                value={neetScore}
                onChange={(e) => setNeetScore(Number(e.target.value))}
                className="w-full accent-teal-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                <span>100 (Min Cutoff)</span>
                <span>400 (Moderate)</span>
                <span>550+ (High Rank)</span>
                <span>720</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Candidacy Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-800"
                >
                  <option value="General">General (UR)</option>
                  <option value="OBC-A">OBC-A (Minority)</option>
                  <option value="OBC-B">OBC-B</option>
                  <option value="SC">SC (Scheduled Caste)</option>
                  <option value="ST">ST (Scheduled Tribe)</option>
                  <option value="EWS">EWS (Economically Weaker)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Candidate Domicile</label>
                <select
                  value={domicile}
                  onChange={(e) => setDomicile(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-800"
                >
                  <option value="West Bengal">West Bengal Domicile</option>
                  <option value="Other State">Other State (All India)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Hostel Accommodation Preference</label>
              <select
                value={hostelType}
                onChange={(e) => setHostelType(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/30 outline-none text-slate-800"
              >
                <option value="AC with Mess">AC Room with Multi-Cuisine Mess (₹1,50,000 / Yr)</option>
                <option value="Non-AC with Mess">Non-AC Room with Mess (₹1,20,000 / Yr)</option>
                <option value="Day Scholar">Day Scholar (No Hostel)</option>
              </select>
            </div>
          </div>

          {/* Real-time Assessment Summary Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-teal-950 text-white shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">Admission Assessment</span>
                  <h3 className="text-xl font-bold text-white">JHMCRI Eligibility Summary</h3>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  isEligible ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-red-500/20 text-red-300 border border-red-500/40'
                }`}>
                  {isEligible ? 'NEET Qualified ✓' : 'Below Cutoff'}
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Counselling Stream:</span>
                  <span className="font-bold text-amber-300">
                    {domicile === 'West Bengal' ? 'WBMCC State Quota & Management' : 'Management Quota'}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Chance of Allotment:</span>
                  <span className={`font-bold ${isHighChance ? 'text-emerald-400' : isMediumChance ? 'text-amber-300' : 'text-slate-300'}`}>
                    {isHighChance ? 'High (R1 / R2 Preferred)' : isMediumChance ? 'Good (R2 / Mop-Up)' : 'Eligible in Stray Vacancy'}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-slate-400 font-semibold block">Matched Govt. Scholarship / Loan:</span>
                  <p className="font-bold text-teal-200">{matchedScholarship}</p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Hostel & Dining Plan:</span>
                  <span className="font-bold text-white">
                    {hostelFee > 0 ? `₹${hostelFee.toLocaleString('en-IN')} / Year` : 'Day Scholar (₹0)'}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer text-center"
                >
                  Book Priority Counselling Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
