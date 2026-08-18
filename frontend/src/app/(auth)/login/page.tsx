"use client";

import React from 'react';
import Link from 'next/link';
import { AuthFormShell } from '@/components/shared/AuthFormShell';
import { TextField } from '@/components/shared/TextField';
import { BadgeArrowButton } from '@/components/shared/BadgeArrowButton';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  return (
    <AuthFormShell 
      title="Welcome back" 
      subtitle="Log in to access your digital campus."
      illustrationSrc="https://illustrations.popsy.co/blue/freelancer.svg"
      illustrationAlt="Student accessing digital campus"
    >
      <form className="space-y-6" onSubmit={(e) => {
        e.preventDefault();
        router.push('/dashboard');
      }}>
        <TextField 
          id="identifier" 
          label="Phone number or email" 
          type="text" 
          placeholder="Enter your details" 
          icon="person" 
        />
        
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center ml-4 pr-2">
            <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider" htmlFor="password">
              Password
            </label>
            <Link href="/forgot-password" className="font-body-sm text-body-sm text-primary hover:text-primary-container transition-colors">
              Forgot password?
            </Link>
          </div>
          <TextField 
            id="password" 
            type="password" 
            placeholder="Enter your password" 
            icon="lock" 
            rightElement={
              <button type="button" className="text-outline hover:text-primary transition-colors h-full flex items-center pr-2">
                <span className="material-symbols-outlined">visibility_off</span>
              </button>
            }
          />
        </div>
        
        <div className="pt-4">
          <BadgeArrowButton 
            label="Log In" 
            type="submit" 
          />
        </div>

        {/* Divider */}
        <div className="relative flex items-center py-4 mt-2">
          <div className="flex-grow border-t border-outline-variant/50"></div>
          <span className="flex-shrink-0 mx-4 font-body-sm text-body-sm text-outline">or continue with</span>
          <div className="flex-grow border-t border-outline-variant/50"></div>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-4">
          <button type="button" className="flex items-center justify-center gap-2 h-12 bg-surface border border-outline-variant rounded-full hover:bg-surface-variant/50 transition-colors font-body-sm text-body-sm text-on-surface">
            <span className="material-symbols-outlined text-outline">school</span>
            <span>Institution ID</span>
          </button>
          <button type="button" className="flex items-center justify-center gap-2 h-12 bg-surface border border-outline-variant rounded-full hover:bg-surface-variant/50 transition-colors font-body-sm text-body-sm text-on-surface">
            <span className="material-symbols-outlined text-outline">public</span>
            <span>Google</span>
          </button>
        </div>

        {/* Sign up link */}
        <p className="text-center font-body-sm text-body-sm text-on-surface-variant pt-6">
          Don't have an account? <Link href="/onboarding" className="text-primary font-bold hover:underline transition-all">Sign up</Link>
        </p>
      </form>
    </AuthFormShell>
  );
}
