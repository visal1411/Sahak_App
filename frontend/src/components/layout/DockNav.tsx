"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  icon: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: 'grid_view', label: 'Dashboard', href: '/dashboard' },
  { icon: 'calendar_month', label: 'Schedule', href: '/schedule' },
  { icon: 'forum', label: 'Messages', href: '/messages' },
  { icon: 'person', label: 'Profile', href: '/profile' }
];

export function DockNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Vertical Pill (Left) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6 py-8 px-3 bg-surface-container-lowest/80 backdrop-blur-lg border border-outline-variant/30 rounded-[2rem] shadow-brand-card z-50 transition-all hover:shadow-lg">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group ${
                isActive ? 'bg-primary text-on-primary' : 'bg-transparent text-outline hover:bg-primary-container hover:text-on-primary-container'
              }`}
              title={item.label}
            >
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {item.icon}
              </span>
              
              {/* Tooltip */}
              <div className="absolute left-16 px-3 py-1.5 bg-inverse-surface text-inverse-on-surface font-body-sm text-body-sm rounded-lg opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile Horizontal Pill (Bottom) */}
      <div className="fixed lg:hidden bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-surface-container-lowest/90 backdrop-blur-lg border border-outline-variant/30 rounded-full shadow-brand-card z-50">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                isActive ? 'bg-primary text-on-primary' : 'bg-transparent text-outline hover:bg-primary-container hover:text-on-primary-container'
              }`}
            >
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {item.icon}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
