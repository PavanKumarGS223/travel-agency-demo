import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Wayfarer Tours & Travels — Small-Group Expeditions & Bespoke Journeys',
  description: 'Independent travel specialists curating small-group adventures and tailor-made private expeditions led by verified local mountain leaders.',
  openGraph: {
    title: 'Wayfarer Tours & Travels',
    description: 'Independent travel specialists curating small-group adventures and tailor-made private expeditions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wayfarer Tours & Travels',
    description: 'Independent travel specialists curating small-group adventures and tailor-made private expeditions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAF9F5] text-slate-900 antialiased selection:bg-[#16382C] selection:text-white" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-[calc(100vh-80px-400px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
