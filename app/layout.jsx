import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://edward1503.github.io/portfolio/'),
  title: 'Nguyễn Đôn Đức | AI Researcher & Engineer',
  description:
    'Portfolio of Nguyễn Đôn Đức (Edward), an AI researcher and engineer working in retrieval, LLM applications, adaptive learning, and quantitative research.',
  openGraph: {
    title: 'Nguyễn Đôn Đức | AI Researcher & Engineer',
    description: 'Retrieval, LLM applications, adaptive learning, and quantitative research.'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#101714'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
