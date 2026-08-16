"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RoleSelectionPage() {
  const router = useRouter();

  return (
    <main className="w-full min-h-screen bg-background flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary-fixed/40 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col pt-10">
        
        {/* Back navigation */}
        <Link 
          href="/onboarding" 
          className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-highest/50 backdrop-blur-md hover:bg-surface-variant transition-colors border border-outline-variant/20 group"
          aria-label="Go back"
        >
          <span className="material-symbols-outlined text-on-surface group-hover:-translate-x-1 transition-transform">arrow_back</span>
        </Link>
        
        {/* Header Text */}
        <div className="text-center mb-12 mt-12 md:mt-4">
          <h1 className="font-headline-lg-mobile md:text-display-lg font-bold text-on-surface mb-3 tracking-tight">
            How do you want to use SAHAK?
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Choose your path. You can always change it later in your profile settings.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl mx-auto">
          
          {/* Student Card */}
          <button 
            onClick={() => router.push('/register/student')}
            className="group flex flex-col items-start p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all duration-300 text-left hover:shadow-[0px_20px_40px_rgba(14,165,233,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            
            <h2 className="font-headline-lg-mobile text-on-surface mb-2 relative z-10">I'm a Student</h2>
            <p className="font-body-md text-on-surface-variant mb-8 relative z-10">I want to learn and get guidance from experienced peers and mentors.</p>
            
            <div className="mt-auto w-12 h-12 rounded-full bg-surface-variant group-hover:bg-primary text-on-surface group-hover:text-on-primary flex items-center justify-center transition-colors duration-300 shadow-sm relative z-10">
              <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
            </div>
          </button>

          {/* Mentor Card */}
          <button 
            onClick={() => router.push('/register/mentor')}
            className="group flex flex-col items-start p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all duration-300 text-left hover:shadow-[0px_20px_40px_rgba(14,165,233,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/20 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            
            <h2 className="font-headline-lg-mobile text-on-surface mb-2 relative z-10">I'm a Mentor</h2>
            <p className="font-body-md text-on-surface-variant mb-8 relative z-10">I want to share my knowledge and help guide the next generation.</p>
            
            <div className="mt-auto w-12 h-12 rounded-full bg-surface-variant group-hover:bg-tertiary text-on-surface group-hover:text-on-tertiary flex items-center justify-center transition-colors duration-300 shadow-sm relative z-10">
              <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
            </div>
          </button>

        </div>
      </div>
    </main>
  );
}
