import React from 'react';
import { DockNav } from '@/components/layout/DockNav';
import { TopAppBar } from '@/components/layout/TopAppBar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <TopAppBar />
      <DockNav />
      
      {/* Content wrapper taking into account the DockNav dimensions */}
      <main className="flex-1 lg:pl-32 pb-24 lg:pb-0 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
