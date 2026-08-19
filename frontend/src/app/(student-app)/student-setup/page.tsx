"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentSetupPage() {
  const router = useRouter();
  
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    learningStyle: '',
    communication: '',
    pace: '',
  });

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      router.push('/student-dashboard');
    }
  };

  const handleSelect = (category: keyof typeof selections, value: string) => {
    setSelections({ ...selections, [category]: value });
  };

  const isStepValid = () => {
    if (step === 1) return selections.learningStyle !== '';
    if (step === 2) return selections.communication !== '';
    if (step === 3) return selections.pace !== '';
    return true;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 min-h-[80vh] flex flex-col justify-center">
      <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[24px] border border-outline-variant/30 shadow-brand-card">
        
        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                i <= step ? 'bg-primary' : 'bg-surface-variant'
              }`}
            />
          ))}
        </div>

        <div className="min-h-[300px] flex flex-col">
          {step === 1 && (
            <div className="flex-1 animate-fade-in-up">
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                What's your preferred learning style?
              </h1>
              <p className="font-body-md text-on-surface-variant mb-8">
                This helps us match you with a mentor who teaches the way you learn best.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'visual', title: 'Visual & Hands-on', desc: 'I learn by seeing examples and building things.' },
                  { id: 'theoretical', title: 'Theoretical & Concepts', desc: 'I prefer understanding the "why" before doing.' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect('learningStyle', option.id)}
                    className={`text-left p-6 rounded-2xl border-2 transition-all ${
                      selections.learningStyle === option.id 
                        ? 'border-primary bg-primary/5 shadow-md' 
                        : 'border-outline-variant/30 hover:border-primary/50'
                    }`}
                  >
                    <h3 className="font-body-md font-semibold text-on-surface mb-1">{option.title}</h3>
                    <p className="font-body-sm text-on-surface-variant">{option.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex-1 animate-fade-in-up">
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                How do you prefer to communicate?
              </h1>
              <p className="font-body-md text-on-surface-variant mb-8">
                We'll find a mentor who matches your energy and interaction style.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'extrovert', title: 'Highly Interactive', desc: 'Lots of discussion, questions, and active chatting.' },
                  { id: 'introvert', title: 'Quiet & Focused', desc: 'Minimal small talk, direct to the point.' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect('communication', option.id)}
                    className={`text-left p-6 rounded-2xl border-2 transition-all ${
                      selections.communication === option.id 
                        ? 'border-primary bg-primary/5 shadow-md' 
                        : 'border-outline-variant/30 hover:border-primary/50'
                    }`}
                  >
                    <h3 className="font-body-md font-semibold text-on-surface mb-1">{option.title}</h3>
                    <p className="font-body-sm text-on-surface-variant">{option.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex-1 animate-fade-in-up">
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                What pace works best for you?
              </h1>
              <p className="font-body-md text-on-surface-variant mb-8">
                Whether you want to sprint or take your time, we've got you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'structured', title: 'Structured & Strict', desc: 'I need deadlines and a rigid syllabus.' },
                  { id: 'flexible', title: 'Flexible & Relaxed', desc: 'I want to explore topics at my own speed.' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect('pace', option.id)}
                    className={`text-left p-6 rounded-2xl border-2 transition-all ${
                      selections.pace === option.id 
                        ? 'border-primary bg-primary/5 shadow-md' 
                        : 'border-outline-variant/30 hover:border-primary/50'
                    }`}
                  >
                    <h3 className="font-body-md font-semibold text-on-surface mb-1">{option.title}</h3>
                    <p className="font-body-sm text-on-surface-variant">{option.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[40px]">psychology</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                Profile Complete!
              </h1>
              <p className="font-body-md text-on-surface-variant max-w-md mx-auto mb-8">
                Based on your answers, you are a <span className="font-semibold text-primary">Visual Learner</span> who prefers <span className="font-semibold text-primary">Structured Guidance</span>.
                <br /><br />
                We'll use this to recommend the perfect mentors for you!
              </p>
            </div>
          )}

          <div className="mt-8 flex justify-between pt-6 border-t border-outline-variant/30">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-variant/50 transition-colors font-body-sm text-body-sm"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}
            
            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className="px-8 py-3 rounded-full bg-primary text-on-primary font-label-caps text-label-caps hover:bg-primary/90 transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
            >
              {step === 4 ? 'TAKE ME TO DASHBOARD' : 'NEXT STEP'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
