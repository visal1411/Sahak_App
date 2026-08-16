"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AuthFormShell } from '@/components/shared/AuthFormShell';
import { BadgeArrowButton } from '@/components/shared/BadgeArrowButton';

const ONBOARDING_STEPS = [
  {
    title: "Learn from someone who gets it",
    subtitle: "Connect with experienced peers and mentors to guide you through your academic and professional journey.",
    illustrationSrc: "https://illustrations.popsy.co/blue/remote-work.svg",
    illustrationAlt: "Student working at a computer in a flat 2D style"
  },
  {
    title: "Share your knowledge",
    subtitle: "Become a mentor, build your portfolio, and give back to the community by helping younger students.",
    illustrationSrc: "https://illustrations.popsy.co/blue/success.svg",
    illustrationAlt: "Mentor helping a student achieve success"
  },
  {
    title: "Grow together",
    subtitle: "Join a thriving digital campus built specifically for the next generation of Cambodian leaders.",
    illustrationSrc: "https://illustrations.popsy.co/blue/student-going-to-school.svg",
    illustrationAlt: "Happy student community going to campus"
  }
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const goToStep = (index: number) => {
    if (index === currentStep) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentStep(index);
      setIsFading(false);
    }, 300); // Corresponds to AuthFormShell transition duration
  };

  useEffect(() => {
    // Auto-advance the slide every 5 seconds
    const intervalId = setInterval(() => {
      goToStep((currentStep + 1) % ONBOARDING_STEPS.length);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentStep]);

  const currentContent = ONBOARDING_STEPS[currentStep];

  return (
    <AuthFormShell
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      illustrationSrc={currentContent.illustrationSrc}
      illustrationAlt={currentContent.illustrationAlt}
      showBackButton={false}
      isTransitioning={isFading}
    >
      <div className="flex flex-col w-full mt-4">
        
        {/* Step Progress Dots */}
        <div className="flex justify-start gap-2 mb-10 w-full ml-2">
          {ONBOARDING_STEPS.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToStep(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                index === currentStep ? 'w-8 bg-primary' : 'w-4 bg-primary/20 hover:bg-primary/40' // Added click capabilities!
              }`}
            ></button>
          ))}
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col gap-6">
          <BadgeArrowButton 
            label="Get Started" 
            href="/role-selection" 
          />
          
          <div className="text-center mt-2">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Already have an account?{' '}
            </span>
            <Link 
              href="/login" 
              className="font-body-sm text-body-sm text-primary font-bold hover:underline transition-all"
            >
              Log in instead
            </Link>
          </div>
        </div>

      </div>
    </AuthFormShell>
  );
}
