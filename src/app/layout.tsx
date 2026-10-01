import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Commadesk — Enterprise Multi-Module SaaS Platform',
  description:
    'Commadesk unites project management, Kanban & Gantt, multi-tenant org charts, timesheets, document registry, and Casbin RBAC security in one centralized workplace.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="bg-[#EAEDF1] min-h-screen text-slate-800 p-2 sm:p-4 md:p-6 lg:p-8 selection:bg-[#FF4D38] selection:text-white">
        {children}
      </body>
    </html>
  );
}
