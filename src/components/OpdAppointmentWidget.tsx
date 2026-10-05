'use client';

import React, { useState } from 'react';
import { Stethoscope, Calendar, Clock, MapPin, CheckCircle2, User, Phone, Send, Search } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function OpdAppointmentWidget() {
  const [selectedDept, setSelectedDept] = useState<string>('General Medicine');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [booked, setBooked] = useState(false);

  const opdSchedule = [
    { dept: 'General Medicine', doctor: 'Prof. Dr. S. N. Bhattacharya / Dr. Arindam Ghosh', room: 'OPD Room 101 - 104', days: 'Mon - Sat (9 AM - 4 PM)', fees: '₹ 100 / Free Govt. Card' },
    { dept: 'General Surgery', doctor: 'Prof. Dr. R. K. Mukherjee / Dr. Subhadip Roy', room: 'OPD Room 108 - 110', days: 'Mon - Sat (9 AM - 4 PM)', fees: '₹ 100 / Free Govt. Card' },
    { dept: 'Obstetrics & Gynaecology', doctor: 'Prof. Dr. S. Dasgupta / Dr. Nandita Paul', room: 'OPD Room 201 - 204', days: 'Mon - Sat (9 AM - 4 PM)', fees: '₹ 100 / Free Govt. Card' },
    { dept: 'Paediatrics & Child Health', doctor: 'Prof. Dr. M. R. Chowdhury / Dr. Alok Nath', room: 'OPD Room 205 - 208', days: 'Mon - Sat (9 AM - 4 PM)', fees: '₹ 100 / Free Govt. Card' },
    { dept: 'Orthopaedics & Trauma', doctor: 'Prof. Dr. A. K. Ghosh / Dr. Dipanjan Bose', room: 'OPD Room 112 - 115', days: 'Mon - Sat (9 AM - 4 PM)', fees: '₹ 100 / Free Govt. Card' },
    { dept: 'Ophthalmology (Eye)', doctor: 'Prof. Dr. S. K. Dutta / Dr. Anita Das', room: 'Eye OPD 210', days: 'Mon - Sat (9 AM - 4 PM)', fees: '₹ 100 / Free Govt. Card' },
    { dept: 'ENT (Ear, Nose, Throat)', doctor: 'Prof. Dr. R. N. Paul / Dr. B. K. Saha', room: 'ENT OPD 212', days: 'Mon - Sat (9 AM - 4 PM)', fees: '₹ 100 / Free Govt. Card' },
    { dept: 'Dermatology & Skin', doctor: 'Dr. S. Mukherjee / Dr. Swati Sen', room: 'Skin OPD 215', days: 'Mon - Sat (9 AM - 4 PM)', fees: '₹ 100 / Free Govt. Card' },
    { dept: 'Psychiatry & Mental Health', doctor: 'Dr. A. K. Sengupta / Dr. P. Mallick', room: 'Psychiatry OPD 218', days: 'Mon - Sat (9 AM - 4 PM)', fees: '₹ 100 / Free Govt. Card' },
    { dept: 'Dentistry', doctor: 'Dr. S. K. Roy Chowdhury / Dr. Priyanka Nandi', room: 'Dental OPD 220', days: 'Mon - Sat (9 AM - 4 PM)', fees: '₹ 100 / Free Govt. Card' },
    { dept: 'Radio-Diagnosis & X-Ray', doctor: 'Prof. Dr. K. L. Sen / Dr. Rajesh Pramanik', room: 'Radiology Block (Ground Floor)', days: '24 Hours Emergency / OPD 9-4', fees: 'Hospital Tariff' }
  ];

  const currentOpd = opdSchedule.find((o) => o.dept === selectedDept) || opdSchedule[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-teal-950/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
            <span>Doctor Consultation & OPD Timings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Daily Hospital OPD Schedule & Appointment Token
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Consult experienced senior physicians, surgeons, pediatricians, and specialists at the Jakir Hossain Teaching Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Department List */}
          <div className="lg:col-span-5 space-y-2 max-h-[460px] overflow-y-auto pr-2">
            {opdSchedule.map((item) => {
              const isSelected = selectedDept === item.dept;
              return (
                <button
                  key={item.dept}
                  onClick={() => {
                    setSelectedDept(item.dept);
                    setBooked(false);
                  }}
                  className={`w-full p-3.5 rounded-2xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-md border-teal-600 scale-[1.01]'
                      : 'glass-card bg-white hover:bg-teal-50/50 text-slate-700 border-slate-200/80'
                  }`}
                >
                  <div>
                    <span className={`text-xs font-bold block ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {item.dept}
                    </span>
                    <span className={`text-[11px] ${isSelected ? 'text-teal-200' : 'text-slate-500'}`}>
                      {item.room}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    9 AM - 4 PM
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Department Details & Token Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 bg-white/85 shadow-2xl border border-white/90 backdrop-blur-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">Selected OPD Wing</span>
                <h3 className="text-xl font-bold text-slate-900">{currentOpd.dept}</h3>
              </div>
              <div className="p-2 rounded-xl bg-teal-50 border border-teal-100 text-xs font-bold text-teal-800">
                {currentOpd.room}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-semibold text-slate-500 block">Senior Consultants:</span>
                <span className="font-bold text-slate-800">{currentOpd.doctor}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-semibold text-slate-500 block">Consultation Days:</span>
                <span className="font-bold text-slate-800">{currentOpd.days}</span>
              </div>
            </div>

            {booked ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base text-emerald-950">OPD Consultation Token Reserved!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Token generated for <strong>{patientName || 'Patient'}</strong> for <strong>{currentOpd.dept}</strong> on <strong>{preferredDate || 'Upcoming OPD Day'}</strong>. Please show this confirmation at the OPD Registration Counter (Ground Floor).
                </p>
                <div className="text-[11px] text-emerald-900 font-semibold pt-1">
                  Helpline for Assistance: {SITE_INFO.phone}
                </div>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Book Fast-Track OPD Slot</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Patient Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Roy"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile number"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Preferred Consultation Date</label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Health Scheme / Card</label>
                    <select className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500/30 text-slate-700">
                      <option>General OPD Registration</option>
                      <option>Swasthya Sathi Card Holder</option>
                      <option>Ayushman Bharat PMJAY</option>
                      <option>BPL / Antyodaya Card</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Emergency cases can report directly to 24x7 Casualty.</span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Reserve OPD Token</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
