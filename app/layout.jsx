import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://edward1503.github.io/portfolio/'),
  title: 'Nguyen Don Duc | Fresher AI Engineer',
  description:
    'Hiring-focused portfolio of Nguyen Don Duc, also known as Edward, a Fresher AI Engineer focused on Python, machine learning, data science, FastAPI, and MLOps basics.',
  openGraph: {
    title: 'Nguyen Don Duc | Fresher AI Engineer',
    description: 'Python, machine learning, data analysis, applied AI, and MLOps project portfolio by Edward.',
    type: 'website',
    images: ['https://avatars.githubusercontent.com/u/142201083?v=4']
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
