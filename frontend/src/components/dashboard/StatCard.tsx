import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, icon, trend, className = '' }: StatCardProps) {
  return (
    <div className={`flex flex-col justify-between h-full bg-surface-container-lowest p-6 rounded-[24px] border border-outline-variant/30 shadow-brand-card hover:-translate-y-1 transition-transform duration-300 ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            {icon}
          </span>
        </div>
        
        {trend && (
          <div className={`flex items-center gap-1 font-body-sm text-body-sm font-medium px-2 py-1 rounded-full ${
            trend.isPositive ? 'text-[#166534] bg-[#dcfce7]' : 'text-on-error bg-error/90'
          }`}>
            <span className="material-symbols-outlined text-sm font-bold">
              {trend.isPositive ? 'trending_up' : 'trending_down'}
            </span>
            {trend.value}
          </div>
        )}
      </div>

      <div>
        <p className="font-body-md text-body-md text-on-surface-variant mb-1">{title}</p>
        <h3 className="font-stat-display text-display-lg text-on-surface tracking-tight" style={{ fontSize: '32px' }}>
          {value}
        </h3>
      </div>
    </div>
  );
}
