import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  metadataBase: new URL('https://baparkir.com'),
  title: "Baparkir - Revolusi Parkir untuk Kota Cerdas",
  description: "Revolusi Parkir untuk Kota Cerdas",
  keywords: ["parkir", "manajemen parkir", "teknologi parkir", "smart city"],
  authors: [{ name: "Baparkir Team" }],
  creator: "Baparkir",
  publisher: "Baparkir",  
  twitter: {
    card: "summary_large_image",
    title: "Baparkir",
    description: "Revolusi Parkir untuk Kota Cerdas",
    images: ["/logo.png"],
  },
  openGraph: {
    type: "website",
    url: "https://baparkir.com",
    title: "Baparkir - Revolusi Parkir untuk Kota Cerdas",
    description: "Revolusi Parkir untuk Kota Cerdas",
    siteName: "Baparkir",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Baparkir Logo"
      }
    ],
  },
  applicationName: "Baparkir",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
