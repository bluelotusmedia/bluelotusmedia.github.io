import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blue Lotus Media | High-Performance Web Development & AI Innovation",
  description: "Blue Lotus Media creates stunning, AI-powered digital experiences. Specializing in Next.js development, autonomous systems, and innovative content strategy.",
  keywords: ["Web Development", "AI Agents", "Next.js", "Digital Marketing", "AI Innovation", "Creative Agency"],
  authors: [{ name: "Jake Louis" }],
  openGraph: {
    title: "Blue Lotus Media",
    description: "Transforming Visions into Engaging Digital Experiences.",
    url: "https://bluelotusmedia.com",
    siteName: "Blue Lotus Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Lotus Media",
    description: "Transforming Visions into Engaging Digital Experiences.",
    creator: "@bluelotusmedia",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Blue Lotus Media",
              "description": "High-performance web development and AI innovation agency.",
              "url": "https://bluelotusmedia.com",
              "logo": "https://bluelotusmedia.com/favicon.svg",
              "sameAs": [
                "https://facebook.com/bluelotusmedia",
                "https://instagram.com/bluelotusmedia",
                "https://x.com/bluelotusmedia"
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
