"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function StudentProfilePage() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 py-8">
      {/* Page Header (Mobile Only) */}
      <div className="mb-8 lg:hidden animate-fade-in-up">
        <h1 className="font-display-lg text-headline-lg font-bold text-on-surface mb-2">Student Profile</h1>
        <p className="font-body-md text-on-surface-variant">Manage your identity and learning goals.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Personal Info (Bento Style) */}
        <div className="lg:col-span-4 flex flex-col gap-6 animate-fade-in-up delay-75">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-outline-variant/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300">
                  <img
                    alt="Sokha Avatar"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVgtOx_4rCaf3ZtuX2SiW_YshQP-HcmSOBZI9g2AfCdGpIx4Em-XiQvZPnojMPg6nXbTjCVj7OfpaMEyWhkAFR0HXUFjGNgoYjg_ebwL0oY_tp_6wyIch04layUPloxO30jZ-4Yl6ylWevjiO005PKmnhwCs0cxf2TSlbx9j3d5ZkSoIzFWtKBz9IlTkiek18Cketm4W6DO7f7219F1vJoYLMStJNfi6qu5eVnlc9g4HQcJ5tprUd9Zw"
                  />
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-brand-sky hover:bg-brand-sky hover:text-white transition-colors z-20 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                </button>
              </div>
              <h2 className="font-headline-lg text-[28px] font-bold text-on-surface mb-1">Sokha</h2>
              <p className="font-body-md text-on-surface-variant font-medium mb-4">Grade 11 Student</p>
              
              <div className="w-full bg-surface-variant/30 rounded-2xl p-4 flex items-center gap-3 justify-center mb-6 border border-outline-variant/10">
                <span className="material-symbols-outlined text-brand-sky">school</span>
                <span className="font-body-sm font-semibold">Phnom Penh Thmey High School</span>
              </div>
              
              <Link href="/student-settings" className="w-full bg-surface-variant/50 hover:bg-surface-variant text-on-surface font-label-caps text-[12px] uppercase font-bold py-3.5 rounded-full transition-colors flex items-center justify-center border border-outline-variant/20 shadow-sm">
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Academic Interests */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-outline-variant/20">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-brand-sky" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              <h3 className="font-stat-display text-[20px] font-bold">Academic Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-brand-sky/10 text-brand-sky px-4 py-2 rounded-full font-label-caps text-[11px] uppercase font-bold border border-brand-sky/20 hover:bg-brand-sky/20 transition-colors cursor-default">UX/UI Design</span>
              <span className="bg-brand-sky/10 text-brand-sky px-4 py-2 rounded-full font-label-caps text-[11px] uppercase font-bold border border-brand-sky/20 hover:bg-brand-sky/20 transition-colors cursor-default">Data Science</span>
              <span className="bg-brand-sky/10 text-brand-sky px-4 py-2 rounded-full font-label-caps text-[11px] uppercase font-bold border border-brand-sky/20 hover:bg-brand-sky/20 transition-colors cursor-default">English</span>
              <span className="bg-surface-variant/30 text-on-surface-variant px-4 py-2 rounded-full font-label-caps text-[11px] uppercase font-bold border border-outline-variant/50 hover:border-outline transition-colors cursor-pointer border-dashed flex items-center gap-1 group">
                <span className="material-symbols-outlined text-[14px] group-hover:text-primary transition-colors">add</span> Add
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Goals */}
        <div className="lg:col-span-8 flex flex-col gap-6 animate-fade-in-up delay-150">
          
          {/* Bio Section */}
          <div className="relative rounded-3xl p-8 shadow-sm border border-outline-variant/20 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-sky/10 to-transparent rounded-bl-full -z-10 blur-2xl"></div>
            
            <div className="flex justify-between items-start mb-6 border-b border-surface-variant/50 pb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                <h3 className="font-stat-display text-[20px] font-bold">My Journey</h3>
              </div>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">edit_square</span>
              </button>
            </div>
            
            <div className="prose prose-sm max-w-none text-body-md text-on-surface-variant leading-relaxed space-y-4">
              <p>
                Hi! I'm Sokha, a passionate high school student with a deep curiosity for how technology can solve real-world problems. I've always been fascinated by design and logic, which led me to discover the fields of UX/UI Design and Data Science.
              </p>
              <p>
                Currently, I am focusing on improving my English proficiency to access a broader range of global learning resources. I believe that a combination of strong communication skills and technical knowledge will allow me to create impactful digital products in the future. I am actively looking for mentors who can guide me through building a portfolio and understanding the tech industry landscape.
              </p>
            </div>
          </div>

          {/* Learning Goals */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-outline-variant/20">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-surface-variant/50">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-amber" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
                <h3 className="font-stat-display text-[20px] font-bold">Learning Goals</h3>
              </div>
              <button className="text-primary hover:text-primary-container font-label-caps text-[12px] uppercase font-bold flex items-center gap-1 transition-colors bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-[16px]">add_circle</span> New Goal
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              {/* Goal 1 */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-outline-variant/30 hover:border-brand-sky/50 hover:bg-brand-sky/5 transition-all cursor-pointer shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-sky/10 flex items-center justify-center text-brand-sky shrink-0 group-hover:scale-110 group-hover:bg-brand-sky group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined">web</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-body-md font-bold text-on-surface">Build First UX Portfolio</h4>
                    <span className="bg-surface-variant text-on-surface-variant font-label-caps text-[9px] uppercase font-bold px-2 py-1 rounded-md tracking-wider">In Progress</span>
                  </div>
                  <p className="font-body-sm text-on-surface-variant">Complete 3 case studies focusing on mobile app redesigns by end of semester.</p>
                  
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-sky to-brand-blue w-[65%] rounded-full shadow-sm"></div>
                    </div>
                    <span className="font-label-caps text-[11px] font-bold text-on-surface-variant">65%</span>
                  </div>
                </div>
              </div>

              {/* Goal 2 */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-outline-variant/30 hover:border-brand-lime/50 hover:bg-brand-lime/5 transition-all cursor-pointer shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-lime/20 flex items-center justify-center text-green-700 shrink-0 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-body-md font-bold text-on-surface">Intro to Python for Data</h4>
                    <span className="bg-surface-variant text-on-surface-variant font-label-caps text-[9px] uppercase font-bold px-2 py-1 rounded-md tracking-wider">Not Started</span>
                  </div>
                  <p className="font-body-sm text-on-surface-variant">Finish online introductory course and build a simple data visualization script.</p>
                  
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-lime to-green-500 w-[5%] rounded-full shadow-sm"></div>
                    </div>
                    <span className="font-label-caps text-[11px] font-bold text-on-surface-variant">0%</span>
                  </div>
                </div>
              </div>

              {/* Goal 3 (Completed) */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl border border-outline-variant/20 hover:bg-surface-variant/10 transition-all cursor-pointer shadow-sm opacity-70 hover:opacity-100">
                <div className="w-12 h-12 rounded-xl bg-surface-variant flex items-center justify-center text-on-surface-variant shrink-0 group-hover:scale-110 transition-all">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-body-md font-bold text-on-surface line-through decoration-on-surface-variant/50">Achieve IELTS Band 6.5</h4>
                    <span className="bg-green-500/20 text-green-700 font-label-caps text-[9px] uppercase font-bold px-2 py-1 rounded-md tracking-wider">Completed</span>
                  </div>
                  <p className="font-body-sm text-on-surface-variant">Intensive study program to reach target score for university applications.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
