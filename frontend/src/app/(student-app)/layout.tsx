import React from 'react';
import { StudentDockNav } from '@/components/layout/StudentDockNav';
import { TopAppBar } from '@/components/layout/TopAppBar';

export default function StudentAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <TopAppBar />
      <StudentDockNav />
      
      {/* Content wrapper taking into account the DockNav dimensions */}
      <main className="flex-1 lg:pl-32 pb-24 lg:pb-0 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
