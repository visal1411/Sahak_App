"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AuthFormShell } from '@/components/shared/AuthFormShell';
import { TextField } from '@/components/shared/TextField';
import { BadgeArrowButton } from '@/components/shared/BadgeArrowButton';

export default function StudentRegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <AuthFormShell 
      title="Create Student Account"
      subtitle="Step into your personalized learning journey."
      illustrationSrc="https://illustrations.popsy.co/blue/student-going-to-school.svg"
      illustrationAlt="Student starting their journey"
      showBackButton={true}
      backButtonHref="/role-selection"
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <TextField 
              id="fullName" 
              label="Full Name" 
              type="text" 
              placeholder="e.g., Sokha Chan" 
              icon="person" 
            />

            <TextField 
              id="contact" 
              label="Email or Phone Number" 
              type="text" 
              placeholder="hello@example.com" 
              icon="mail" 
            />

            <div className="flex flex-col gap-2 w-full">
              <label className="block font-label-caps text-label-caps text-on-surface-variant ml-4 uppercase tracking-wider" htmlFor="grade">
                Grade / Year
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">school</span>
                <select 
                  id="grade"
                  defaultValue=""
                  className="w-full h-14 pl-12 pr-10 bg-surface-container-lowest border border-outline-variant rounded-full font-body-md text-body-md text-on-surface placeholder:text-outline-variant input-glow transition-all duration-300 appearance-none outline-none"
                >
                  <option value="" disabled className="text-outline-variant">Select Year</option>
                  <option value="highschool">High School (10/11/12)</option>
                  <option value="year1">University - Year 1</option>
                  <option value="year2">University - Year 2</option>
                  <option value="year3">University - Year 3</option>
                  <option value="year4">University - Year 4</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
              </div>
            </div>

            <div className="pt-4">
              <BadgeArrowButton 
                label="Next Step" 
                type="button" 
                onClick={() => setStep(2)} 
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <TextField 
              id="institution" 
              label="Institution Name" 
              type="text" 
              placeholder="School or University Name" 
              icon="account_balance" 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField 
                id="password" 
                label="Password" 
                type="password" 
                placeholder="••••" 
                icon="lock" 
              />
              <TextField 
                id="confirmPassword" 
                label="Confirm Password" 
                type="password" 
                placeholder="••••" 
                icon="lock" 
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start mt-4 ml-2">
              <div className="flex items-center h-5">
                <input id="terms" type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest cursor-pointer" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer">
                  I agree to the <Link href="#" className="text-primary font-medium hover:underline">Terms</Link> and <Link href="#" className="text-primary font-medium hover:underline">Privacy Policy</Link>.
                </label>
              </div>
            </div>
            
            <div className="pt-4 flex flex-col gap-4">
              <BadgeArrowButton 
                label="Create Account" 
                type="submit" 
              />
              <button 
                type="button" 
                onClick={() => setStep(1)}
                className="text-center font-body-sm text-body-sm text-on-surface-variant font-medium hover:text-primary transition-all pb-2"
              >
                Back to previous step
              </button>
            </div>
          </div>
        )}

        {/* Step indicator */}
        <div className="flex justify-center gap-2 mt-6">
          <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-6 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40 cursor-pointer'}`} onClick={() => setStep(1)}></div>
          <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'w-6 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40 cursor-pointer'}`} onClick={() => setStep(2)}></div>
        </div>

        {/* Sign in link */}
        <p className="text-center font-body-sm text-body-sm text-on-surface-variant pt-2 border-t border-surface-variant pb-2">
          Already have an account? <Link href="/login" className="text-primary font-bold hover:underline transition-all">Log in</Link>
        </p>
      </form>
    </AuthFormShell>
  );
}
