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
  title: 'CoreShift — All-in-one HR Platform & Solutions',
  description:
    'CoreShift is a modern, all-in-one HR platform designed to perfectly fit your business needs. Streamline HR processes, enhance team transparency, and empower your workforce.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="black"/><text y="65" font-size="50" font-family="sans-serif" font-weight="bold" fill="white" text-anchor="middle" x="50">C</text></svg>',
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
