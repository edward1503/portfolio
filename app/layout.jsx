import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://edward1503.github.io/portfolio/'),
  title: 'Nguyen Don Duc | AI Engineer',
  description:
    'Portfolio of Nguyen Don Duc, also known as Edward, focused on machine learning, applied AI, data science, and MLOps.',
  openGraph: {
    title: 'Nguyen Don Duc | AI Engineer',
    description: 'Machine learning, data science, and applied AI projects by Edward.',
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
