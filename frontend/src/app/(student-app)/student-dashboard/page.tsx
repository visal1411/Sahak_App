"use client";

import React from 'react';
import Link from 'next/link';
import { CourseProgressCard } from '@/components/student-dashboard/CourseProgressCard';
import { RecommendedMentorCard } from '@/components/student-dashboard/RecommendedMentorCard';

export default function StudentDashboardPage() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 py-8">
      
      {/* Greeting & Stats Hero */}
      <section className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="font-headline-lg text-[24px] md:text-headline-lg text-on-surface mb-2">
            Hello, <span className="bg-gradient-to-br from-primary to-blue-500 bg-clip-text text-transparent">Sokha!</span>
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-xl">
            Ready to continue your journey? You're making great progress this week.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-surface/50 backdrop-blur-xl border border-white/50 shadow-[0px_10px_30px_rgba(14,165,233,0.1)] rounded-2xl p-5 flex-1 min-w-[140px] transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">timer</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Mentored</span>
              </div>
              <div className="font-stat-display text-stat-display text-on-surface">
                24 <span className="text-[14px] text-on-surface-variant font-normal">hrs</span>
              </div>
            </div>
            
            <div className="bg-surface/50 backdrop-blur-xl border border-white/50 shadow-[0px_10px_30px_rgba(14,165,233,0.1)] rounded-2xl p-5 flex-1 min-w-[140px] transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[18px]">task_alt</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Sessions</span>
              </div>
              <div className="font-stat-display text-stat-display text-on-surface">
                12 <span className="text-[14px] text-on-surface-variant font-normal">completed</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Upcoming Session Card */}
        <div className="lg:w-[400px] bg-surface/50 backdrop-blur-xl border border-white/50 shadow-[0px_10px_30px_rgba(14,165,233,0.1)] rounded-[24px] p-6 transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Upcoming Session</h3>
            <div className="px-3 py-1 rounded-full bg-surface text-on-surface-variant font-label-caps text-[10px] shadow-sm">
              In 45 mins
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-variant shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByrKHnGaFE0Eb2jCTKUCd8mQWLi6RIytKg_F9Ug0qTKvyFMiJVLcfBMm-hqXgaOwNznpbxtX59oo6llZlfYRxPZVNH5_4rKZcaGKif9_yqUz54D6nuxP6CdiKivdxo8PtXXoDLZfK8ntKbov0dUHH6gz5q1OXXOLiqJX8oRLkGUcpEN0ZuGERsBZTZjZ0Se_7KI6D3SkjIWMDX69qgZDfinYpkv_Dje0c_iI4q2b1nez1Wsiku1h6hyQ" 
                alt="Rithy Chea" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-body-md text-[18px] font-semibold text-on-surface">Rithy Chea</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">code</span>
                Advanced Python
              </p>
            </div>
          </div>
          
          <div className="mt-auto relative z-10">
            <button className="w-full group flex items-center justify-between p-1 pl-6 pr-1 rounded-full bg-gradient-to-r from-primary to-blue-600 text-on-primary hover:shadow-lg transition-all active:scale-95">
              <span className="font-body-sm text-body-sm font-semibold">Join Call</span>
              <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <span className="material-symbols-outlined">video_camera_front</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Continue Learning & Recommended */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Continue Learning */}
          <section>
            <h3 className="font-headline-lg text-[24px] text-on-surface mb-6">Continue Learning</h3>
            <div className="flex flex-col gap-4">
              <CourseProgressCard 
                title="UX/UI Fundamentals"
                progress={60}
                icon="draw"
                iconBgClass="bg-[#E0F2FE]"
                iconColorClass="text-[#0284C7]"
                progressColorClass="bg-gradient-to-r from-primary to-blue-500"
              />
              <CourseProgressCard 
                title="Python Data Structures"
                progress={25}
                icon="terminal"
                iconBgClass="bg-[#FEF3C7]"
                iconColorClass="text-[#D97706]"
                progressColorClass="bg-[#F59E0B]"
              />
            </div>
          </section>

          {/* Recommended Mentors */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h3 className="font-headline-lg text-[24px] text-on-surface">Recommended for You</h3>
              <Link href="/mentorship" className="text-primary font-body-sm text-body-sm hover:underline">See all</Link>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0" style={{ scrollbarWidth: 'none' }}>
              <RecommendedMentorCard 
                name="Channary Tep"
                role="Senior Product Designer. Passionate about accessible design."
                avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4Z_qdlE7-jCt9wdIMrTAoo6O0qtptNWFKy9jG9D4vLdz9POv7zf7kvmlCQlCXkWyOX4n6mlqVwQ25xEg5RMDcDSOlwMUXD3GergL2ZobYJ2iv2yPKZ_2qTEHRELh6fcm1u8NpUdcZwbBU79Mnwidv1POIzqWLey8JO40fl0n5eau-Q9wUVdPsLaL6eHDfWDdZ-x5NgsG2xTVud684_55mpBTyKSG3CDDsWjuo-OOWro8QDW2W1s6dw"
                rating={4.9}
                matchScore={95}
                specialtyTag="UX Design"
                specialtyTagClass="bg-[#ECFCCB] text-[#4D7C0F]"
                matchTraits="Visual Learner & Extroverted"
              />
              
              <RecommendedMentorCard 
                name="Vannak Sovann"
                role="Backend Engineer specializing in scalable Python architectures."
                avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAiCYkAwyr1C1OgrXiwQFAzXt-D9FE6FFLMR0lqzLu0uMQZWBJwIUF-mBvz42fKecRWGeDtvGgpYvjPiBXYWYnHnTFMrL3VnXH5HkgN-zCaaroFBEjzr3R3dpb6Grf2M4Iv1thAMJbKQcyLNDj5FbopCQXLfA28TUcHhfqmrxNy_BmoI_6u17j508qao7UKaEZtBwBfa_DGTDnhVOIOZv6DvUrmdJIzvzV52RTR13E3iF15MDaoNG_ewQ"
                rating={4.8}
                matchScore={88}
                specialtyTag="Python"
                specialtyTagClass="bg-[#E0E7FF] text-[#4338CA]"
                matchTraits="Structured Pace & Highly Interactive"
              />
            </div>
          </section>
        </div>

        {/* Right Column: Quick Actions */}
        <div className="lg:col-span-1">
          <div className="bg-surface/50 backdrop-blur-xl border border-white/50 shadow-[0px_10px_30px_rgba(14,165,233,0.1)] rounded-[24px] p-6 lg:sticky lg:top-28">
            <h3 className="font-headline-lg text-[24px] text-on-surface mb-6">Quick Actions</h3>
            
            <div className="flex flex-col gap-3">
              <Link href="/mentorship" className="w-full flex items-center gap-4 p-4 rounded-[16px] bg-surface hover:bg-surface-variant/50 border border-outline-variant hover:border-primary transition-all group">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <div className="text-left flex-1">
                  <div className="font-body-md font-semibold text-on-surface">Find a Mentor</div>
                  <div className="font-body-sm text-[12px] text-on-surface-variant">Search by skill or availability</div>
                </div>
              </Link>
              
              <button className="w-full flex items-center gap-4 p-4 rounded-[16px] bg-surface hover:bg-surface-variant/50 border border-outline-variant hover:border-primary transition-all group">
                <div className="w-10 h-10 rounded-full bg-tertiary-container/20 text-tertiary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">library_books</span>
                </div>
                <div className="text-left flex-1">
                  <div className="font-body-md font-semibold text-on-surface">Resource Library</div>
                  <div className="font-body-sm text-[12px] text-on-surface-variant">Articles and templates</div>
                </div>
              </button>
              
              <button className="w-full flex items-center gap-4 p-4 rounded-[16px] bg-surface hover:bg-surface-variant/50 border border-outline-variant hover:border-primary transition-all group">
                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">forum</span>
                </div>
                <div className="text-left flex-1">
                  <div className="font-body-md font-semibold text-on-surface">Messages</div>
                  <div className="font-body-sm text-[12px] text-on-surface-variant">2 unread from Rithy</div>
                </div>
              </button>
            </div>
            
            {/* Illustration Decoration */}
            <div className="mt-8 rounded-[16px] bg-surface-variant/30 p-4 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-[48px] text-primary/30 mb-2">school</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">"Education is not the learning of facts, but the training of the mind to think."</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
