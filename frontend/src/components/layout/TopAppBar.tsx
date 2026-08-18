"use client";

import React from 'react';
import Link from 'next/link';

export function TopAppBar() {
  return (
    <header className="sticky top-0 z-40 w-full h-20 bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant/30 px-6 lg:px-12 flex items-center justify-between">
      {/* Brand logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary shadow-brand-card">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            auto_stories
          </span>
        </div>
        <span className="font-display-lg text-stat-display text-primary tracking-tight font-bold hidden sm:block">SAHAK</span>
      </div>

      {/* Trailing Actions */}
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-error rounded-full animate-soft-pulse"></span>
        </button>
        
        <Link href="/profile" className="flex items-center gap-3 p-1.5 pr-4 rounded-full bg-surface-container-high border border-outline-variant/20 hover:bg-surface-variant transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
            <span className="material-symbols-outlined text-primary text-xl">person</span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface font-medium hidden md:block">Mentors Area</span>
        </Link>
      </div>
    </header>
  );
}
