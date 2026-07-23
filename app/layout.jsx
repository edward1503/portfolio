import './globals.css';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://edward1503.github.io/portfolio/'),
  title: 'Nguyễn Đôn Đức (Edward) | AI Researcher & Engineer',
  description:
    'Portfolio of Nguyễn Đôn Đức (Edward), AI Researcher & Engineer specializing in RAG, LLM applications, adaptive learning, and quantitative research.',
  openGraph: {
    title: 'Nguyễn Đôn Đức (Edward) | AI Researcher & Engineer',
    description: 'RAG, LLM applications, adaptive learning, and quantitative research.',
    type: 'website'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0d17'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

