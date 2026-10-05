'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import EnquiryModal from '@/components/EnquiryModal';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';
import { BookOpen, Download, CheckCircle2, ChevronRight } from 'lucide-react';

export default function SyllabusPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'1st' | '2nd' | '3rd'>('1st');

  const syllabusData = {
    '1st': [
      {
        subject: "Human Anatomy (Gross, Histology, Embryology, Neuroanatomy, Genetics)",
        topics: ["General Anatomy & Principles", "Upper Limb, Lower Limb, Thorax, Abdomen & Pelvis", "Head & Neck, Brain & Spinal Cord", "Systemic & General Histology", "General & Special Embryology", "Medical Genetics & Radiological Anatomy"]
      },
      {
        subject: "Human Physiology",
        topics: ["General Physiology & Biophysics", "Hematology & Blood Transfusion", "Nerve-Muscle Physiology", "Cardiovascular & Respiratory Systems", "Renal, Gastrointestinal & Endocrine Systems", "Central Nervous System & Special Senses"]
      },
      {
        subject: "Biochemistry & Molecular Biology",
        topics: ["Biomolecules & Enzymes", "Intermediary Metabolism (Carbohydrates, Lipids, Proteins)", "Clinical Chemistry & Organ Function Tests", "Molecular Biology, Recombinant DNA & PCR", "Nutrition, Vitamins & Mineral Metabolism", "Acid-Base Balance & Water-Electrolyte Homeostasis"]
      }
    ],
    '2nd': [
      {
        subject: "Pathology (General, Systemic, Hematology & Clinical Pathology)",
        topics: ["Cell Injury, Inflammation, Hemodynamics & Neoplasia", "Hematology & Blood Banking", "Systemic Pathology (Cardiovascular, Respiratory, GI, Renal, Male/Female Genital)", "Cytopathology & Diagnostic Histopathology"]
      },
      {
        subject: "Pharmacology & Therapeutics",
        topics: ["General Principles & Pharmacokinetics", "Autonomic & Central Nervous System Drugs", "Cardiovascular, Renal & Respiratory Drugs", "Antimicrobial & Chemotherapeutic Agents", "Endocrine Pharmacology & Toxicology", "Prescription Writing & Pharmacovigilance"]
      },
      {
        subject: "Microbiology (Bacteriology, Virology, Mycology, Parasitology & Immunology)",
        topics: ["General Microbiology & Biosafety", "Immunology & Serological Tests", "Systemic Bacteriology (Gram-Positive & Gram-Negative)", "Virology (Hepatitis, HIV, Arboviruses)", "Medical Mycology & Parasitology", "Hospital Infection Control & Antimicrobial Stewardship"]
      }
    ],
    '3rd': [
      {
        subject: "Forensic Medicine & Toxicology (FMT)",
        topics: ["Medical Jurisprudence, Ethics & Consumer Protection Act", "Thanatology, Identification & Autopsy Protocol", "Mechanical Injuries, Asphyxial Deaths & Thermal Trauma", "Clinical Forensic Medicine & Sexual Offences", "General & Systemic Toxicology"]
      },
      {
        subject: "Community Medicine (PSM)",
        topics: ["Epidemiology, Biostatistics & Health Indicators", "Nutrition & Public Health Nutrition Programs", "Environmental Health, Sanitation & Occupational Health", "Maternal, Child & Adolescent Healthcare", "Communicable & Non-Communicable Disease Control", "National Health Programs, Health Planning & Management"]
      },
      {
        subject: "Ophthalmology & ENT",
        topics: ["Diseases of Eye, Cataract, Glaucoma & Refraction", "Diseases of Ear, Nose, Throat, Head & Neck Surgery"]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <PageHeader
        title="MBBS Syllabus & Curriculum Breakdown"
        subtitle="Competency-Based Medical Education (CBME) curriculum as prescribed by the National Medical Commission (NMC) and The West Bengal University of Health Sciences (WBUHS)."
        badge="WBUHS Affiliated Curriculum"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'MBBS Syllabus' }
        ]}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/90 bg-white/85 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">CBME MBBS Curriculum</h2>
                <p className="text-xs text-slate-500">Standardized course modules, theory hours, and practical clinical competencies</p>
              </div>
            </div>

            <button
              onClick={() => alert(`Downloading official MBBS ${activeTab} Professional Syllabus PDF`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer self-start sm:self-auto"
            >
              <Download className="w-4 h-4" />
              <span>Download {activeTab} Year PDF</span>
            </button>
          </div>

          {/* Year Tabs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('1st')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === '1st'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              1st Professional MBBS (13 Months)
            </button>
            <button
              onClick={() => setActiveTab('2nd')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === '2nd'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              2nd Professional MBBS (12 Months)
            </button>
            <button
              onClick={() => setActiveTab('3rd')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === '3rd'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              3rd & Final Professional MBBS
            </button>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {syllabusData[activeTab].map((sub, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 border border-slate-200/80 bg-white shadow-md flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                    Module 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{sub.subject}</h3>
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-700 block">Key Learning Modules:</span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {sub.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EmergencyFloatingButton onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
