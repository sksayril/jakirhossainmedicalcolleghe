'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, Stethoscope, AlertTriangle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function SymptomChecker() {
  const [selectedCondition, setSelectedCondition] = useState<string>('fever');

  const conditions: Record<string, { label: string; dept: string; room: string; urgency: 'Normal OPD' | 'Emergency 24x7' | 'Specialty OPD'; guidance: string; tests: string }> = {
    fever: {
      label: "Persistent Fever / Viral Symptoms / Cough",
      dept: "General Medicine / Paediatrics (for children)",
      room: "OPD Rooms 101-104 (Adults) or Room 205 (Children)",
      urgency: "Normal OPD",
      guidance: "Report to General Medicine OPD for clinical evaluation, temperature charting, and complete blood count.",
      tests: "CBC, Dengue NS1 / IgM, Malaria Smear, Widal Test (Central Lab Ground Floor)"
    },
    chest_pain: {
      label: "Acute Chest Pain / Breathlessness / Heart Issues",
      dept: "Emergency & Critical Care / Cardiology Unit",
      room: "24x7 Emergency Casualty Block (Ground Floor)",
      urgency: "Emergency 24x7",
      guidance: "Immediately proceed to the 24x7 Emergency Room for urgent ECG, cardiac biomarker triage, and ICU admission if required.",
      tests: "12-Lead ECG, Trop-I / Trop-T, Echocardiography, Chest X-Ray"
    },
    bone_joint: {
      label: "Fractures / Joint Pain / Backache / Sports Injury",
      dept: "Department of Orthopaedics",
      room: "OPD Rooms 112 - 115 (1st Floor)",
      urgency: "Normal OPD",
      guidance: "Consult our senior orthopedic surgeons for physical examination, digital X-Ray analysis, and plaster / surgical evaluation.",
      tests: "Digital Radiography (DR X-Ray), Bone Density, Serum Calcium / Vitamin D3"
    },
    pregnancy: {
      label: "Pregnancy Care / Delivery / Gynaecological Issues",
      dept: "Obstetrics & Gynaecology (OBG)",
      room: "OPD Rooms 201 - 204 (Adjoining Maternity Ward)",
      urgency: "Specialty OPD",
      guidance: "Comprehensive antenatal checkups, high-risk pregnancy screening, and 24x7 delivery & emergency C-Section OTs.",
      tests: "Obstetric USG Doppler, Hemoglobin, Blood Sugar (GTT), Thyroid Profile"
    },
    skin_rash: {
      label: "Skin Rash / Allergies / Hair Loss / Infections",
      dept: "Department of Dermatology",
      room: "OPD Room 215 (2nd Floor)",
      urgency: "Specialty OPD",
      guidance: "Consultation for eczema, psoriasis, fungal infections, skin biopsy, and allergy patch testing.",
      tests: "Skin Scraping for Fungus, Dermoscopy, Allergy Screening"
    },
    eye_vision: {
      label: "Blurry Vision / Cataract / Eye Redness & Pain",
      dept: "Department of Ophthalmology",
      room: "Eye OPD Room 210 with Refraction Suite",
      urgency: "Normal OPD",
      guidance: "Complete visual acuity testing, slit lamp biomicroscopy, intraocular pressure measurement, and Phaco cataract evaluation.",
      tests: "Auto-Refractometry, Tonometry, Fundoscopy"
    },
    ent_ear: {
      label: "Ear Discharge / Hearing Loss / Sinusitis / Throat Pain",
      dept: "Department of ENT (Otorhinolaryngology)",
      room: "ENT OPD Room 212",
      urgency: "Normal OPD",
      guidance: "Pure tone audiometry, diagnostic nasal endoscopy, rigid laryngoscopy, and tonsil / sinus treatment.",
      tests: "Audiometry, Diagnostic Nasal Endoscopy, X-Ray PNS"
    }
  };

  const current = conditions[selectedCondition];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200">
            <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
            <span>Smart Patient Care Navigator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Find the Right Medical Department
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Select your symptoms or health concern below to immediately identify the appropriate hospital wing, consultation room, and recommended diagnostic tests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Symptoms List */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2 px-1">
              Select Health Issue / Symptom:
            </span>
            {Object.entries(conditions).map(([key, item]) => {
              const isSelected = selectedCondition === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCondition(key)}
                  className={`w-full p-3.5 rounded-2xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-md border-teal-600 scale-[1.01]'
                      : 'glass-card bg-white hover:bg-teal-50/50 text-slate-700 border-slate-200/80'
                  }`}
                >
                  <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {item.label}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                    item.urgency === 'Emergency 24x7'
                      ? 'bg-red-500 text-white animate-pulse'
                      : isSelected
                      ? 'bg-teal-600 text-teal-100'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.urgency}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Department Recommendation Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 bg-white shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">Recommended Department</span>
                <h3 className="text-2xl font-bold text-slate-900">{current.dept}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase self-start sm:self-auto ${
                current.urgency === 'Emergency 24x7'
                  ? 'bg-red-100 text-red-800 border border-red-200'
                  : 'bg-teal-100 text-teal-800 border border-teal-200'
              }`}>
                {current.urgency}
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-100">
                <span className="font-bold text-teal-900 block text-xs mb-0.5">Location & Room No:</span>
                <span className="font-semibold text-teal-950">{current.room}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-800 block text-xs">Clinical Guidance:</span>
                <p className="text-slate-600 leading-relaxed">{current.guidance}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-800 block text-xs">Diagnostic Lab Investigations:</span>
                <p className="text-slate-600 leading-relaxed">{current.tests}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/hospital"
                className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
              >
                View Hospital Facilities <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`tel:${SITE_INFO.phone}`}
                className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md"
              >
                Call Hospital Helpline
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
