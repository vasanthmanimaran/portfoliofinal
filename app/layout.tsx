import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Orbitron } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import ThreeJSBackground from '@/components/ThreeJSBackground';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Vasanth M | Portfolio',
  description: 'Portfolio of Vasanth M - MERN Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} font-sans`}>
        {/* <ThreeJSBackground/> */}
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}