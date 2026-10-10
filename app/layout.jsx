import "./globals.css";
import { profile } from "@/lib/profile";

const siteUrl = "https://edward1503.github.io/portfolio/";
const title = "Nguyễn Đôn Đức (Edward) | AI Researcher & Engineer";
const description = "Portfolio of Nguyễn Đôn Đức (Edward), AI Researcher & Engineer specializing in RAG, LLM applications, adaptive learning, and quantitative research.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Edward Portfolio",
    locale: "en_US",
    images: [{ url: `${siteUrl}portrait.jpg`, alt: `Portrait of ${profile.name}` }],
  },
  twitter: { card: "summary", title, description, images: [`${siteUrl}portrait.jpg`] },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f8f3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              alternateName: profile.alias,
              url: siteUrl,
              image: `${siteUrl}portrait.jpg`,
              jobTitle: "AI Researcher & Engineer",
              sameAs: [profile.github, profile.linkedin, profile.huggingFace],
            }).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
