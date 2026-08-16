"use client";

import React, { ReactNode } from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  rightElement?: ReactNode;
  containerClassName?: string;
}

export function TextField({
  label,
  id,
  type = 'text',
  placeholder,
  icon,
  rightElement,
  containerClassName = '',
  className = '',
  ...props
}: TextFieldProps) {
  return (
    <div className={`flex flex-col gap-2 w-full ${containerClassName}`}>
      {label && (
        <label
          className="block font-label-caps text-label-caps text-on-surface-variant ml-4 uppercase tracking-wider"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`w-full h-14 ${
            icon ? 'pl-12' : 'pl-6'
          } ${rightElement ? 'pr-12' : 'pr-4'} bg-surface-container-lowest border border-outline-variant rounded-full font-body-md text-body-md text-on-surface placeholder:text-outline-variant input-glow transition-all duration-300 ${className}`}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}
