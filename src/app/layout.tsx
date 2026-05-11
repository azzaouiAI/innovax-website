import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'INNOVAX',
  description: 'Digital transformation and AI consulting for Morocco, MENA, and Francophone Africa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
