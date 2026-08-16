"use client";

import React from 'react';
import Link from 'next/link';

interface BadgeArrowButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function BadgeArrowButton({
  label,
  type = 'button',
  onClick,
  className = '',
  href,
}: BadgeArrowButtonProps) {
  const content = (
    <>
      <span className="font-label-caps text-label-caps relative z-10 uppercase tracking-widest">{label}</span>
      <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300 z-10 shadow-sm group-hover:bg-tertiary group-hover:text-on-tertiary">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
      </div>
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </>
  );

  const baseClasses = `w-full min-h-[56px] group relative flex items-center justify-between pl-6 pr-2 bg-primary text-on-primary rounded-full hover:bg-primary/90 transition-all duration-300 shadow-[0px_10px_30px_rgba(14,165,233,0.15)] overflow-hidden ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
}
