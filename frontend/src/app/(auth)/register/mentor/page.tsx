"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AuthFormShell } from '@/components/shared/AuthFormShell';
import { TextField } from '@/components/shared/TextField';
import { BadgeArrowButton } from '@/components/shared/BadgeArrowButton';

export default function MentorRegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <AuthFormShell 
      title={step === 3 ? "Application Pending" : "Become a Mentor"} 
      subtitle={step === 3 ? "We are reviewing your details." : "Join SAHAK and guide the next generation."}
      illustrationSrc={step === 3 ? "https://illustrations.popsy.co/blue/surreal-hourglass.svg" : "https://illustrations.popsy.co/blue/keynote-presentation.svg"}
      illustrationAlt={step === 3 ? "Timer or waiting illustration" : "Mentor giving a presentation"}
      showBackButton={step !== 3}
      backButtonHref="/role-selection"
    >
      <form className="space-y-8" onSubmit={(e) => {
        e.preventDefault();
        if (step === 2) setStep(3);
      }}>
        
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            {/* Section 1: Personal Details */}
            <h2 className="font-headline-lg text-stat-display text-on-surface border-b border-surface-variant pb-2 flex items-center">
              <span className="material-symbols-outlined mr-3 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              Personal Details
            </h2>
            
            <TextField 
              id="fullName" 
              label="Full Name" 
              type="text" 
              placeholder="Jane Doe" 
              icon="person" 
            />

            <TextField 
              id="contact" 
              label="Email or Phone Number" 
              type="text" 
              placeholder="jane.doe@university.edu" 
              icon="mail" 
            />

            {/* ID Card Upload */}
            <div className="flex flex-col gap-2 w-full">
              <label className="block font-label-caps text-label-caps text-on-surface-variant ml-4 uppercase tracking-wider">
                Upload Student/National ID
              </label>
              <div className="w-full relative flex flex-col items-center justify-center border-2 border-dashed border-outline-variant rounded-[1.5rem] bg-surface-container-lowest p-6 hover:bg-surface-variant/30 hover:border-primary transition-all cursor-pointer group h-32">
                <input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <div className="text-center flex flex-col items-center pointer-events-none relative z-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-primary">badge</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">Click to upload ID image</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField 
                id="password" 
                label="Password" 
                type="password" 
                placeholder="••••••••" 
                icon="lock" 
              />
              <TextField 
                id="confirmPassword" 
                label="Confirm Password" 
                type="password" 
                placeholder="••••••••" 
                icon="lock" 
              />
            </div>

            <div className="pt-4">
              <BadgeArrowButton 
                label="Proceed to Academic Profile" 
                type="button" 
                onClick={() => setStep(2)}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            {/* Section 2: Academic Profile */}
            <div className="grid grid-cols-1 gap-6">
              <TextField 
                id="university" 
                label="University Name" 
                type="text" 
                placeholder="e.g. Royal University of Phnom Penh" 
                icon="account_balance" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField 
                id="major" 
                label="Major / Field of Study" 
                type="text" 
                placeholder="e.g. Software Engineering" 
                icon="menu_book" 
              />
              
              <div className="flex flex-col gap-2 w-full">
                <label className="block font-label-caps text-label-caps text-on-surface-variant ml-4 uppercase tracking-wider" htmlFor="year">
                  Year of Study
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">history_edu</span>
                  <select 
                    id="year"
                    defaultValue=""
                    className="w-full h-14 pl-12 pr-10 bg-surface-container-lowest border border-outline-variant rounded-full font-body-md text-body-md text-on-surface placeholder:text-outline-variant input-glow transition-all duration-300 appearance-none outline-none"
                  >
                    <option value="" disabled className="text-outline-variant">Select Year</option>
                    <option value="year1">Year 1</option>
                    <option value="year2">Year 2</option>
                    <option value="year3">Year 3</option>
                    <option value="year4">Year 4</option>
                    <option value="alumni">Alumni / Professional</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>

            {/* Section 3: Mentorship Details */}
            <div className="flex flex-col gap-2 w-full">
              <label className="block font-label-caps text-label-caps text-on-surface-variant ml-4 uppercase tracking-wider" htmlFor="bio">
                Short Bio
              </label>
              <div className="relative">
                <textarea 
                  id="bio"
                  rows={2}
                  className="w-full p-4 pl-5 rounded-[1.5rem] bg-surface-container-lowest border border-outline-variant font-body-md text-body-md text-on-surface placeholder:text-outline-variant input-glow transition-all duration-300 resize-none outline-none"
                  placeholder="I specialize in front-end..."
                ></textarea>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start mt-2 ml-2">
              <div className="flex items-center h-5">
                <input id="termsMentor" type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest cursor-pointer" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="termsMentor" className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer">
                  I agree to the <Link href="#" className="text-primary font-medium hover:underline">Terms</Link> and <Link href="#" className="text-primary font-medium hover:underline">Privacy Policy</Link>.
                </label>
              </div>
            </div>
            
            <div className="pt-2 flex flex-col gap-4">
              <BadgeArrowButton 
                label="Create Mentor Account" 
                type="submit" 
              />
              <button 
                type="button" 
                onClick={() => setStep(1)}
                className="text-center font-body-sm text-body-sm text-on-surface-variant font-medium hover:text-primary transition-all pb-2"
              >
                Back to Personal Details
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in text-center flex flex-col items-center py-8">
            <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 0" }}>hourglass_top</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Application Submitted
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Thank you for applying! Your mentor profile is currently pending admin approval. You will receive an email once your account has been verified.
            </p>
            <div className="pt-6 w-full flex justify-center">
              <Link href="/login" className="w-full">
                <BadgeArrowButton 
                  label="Return to Login" 
                  type="button" 
                />
              </Link>
            </div>
          </div>
        )}

        {/* Step indicator */}
        {step !== 3 && (
          <>
            <div className="flex justify-center gap-2 mt-4">
              <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-6 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40 cursor-pointer'}`} onClick={() => setStep(1)}></div>
              <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'w-6 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40 cursor-pointer'}`} onClick={() => setStep(2)}></div>
            </div>

            {/* Sign in link */}
            <p className="text-center font-body-sm text-body-sm text-on-surface-variant pt-2 border-t border-surface-variant pb-4">
              Already have an account? <Link href="/login" className="text-primary font-bold hover:underline transition-all">Log in</Link>
            </p>
          </>
        )}
      </form>
    </AuthFormShell>
  );
}
