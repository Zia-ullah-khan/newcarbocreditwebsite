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

export const viewport: Viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "CarboCredit - Track & Offset Your Carbon Footprint",
  description: "Join CarboCredit to track, reduce, and offset your carbon footprint while earning rewards for sustainable choices. Make a positive impact on the environment today.",
  keywords: "carbon footprint, sustainability, carbon offset, environmental impact, climate change, green rewards",
  authors: [{ name: "CarboCredit" }],
  creator: "CarboCredit",
  publisher: "CarboCredit",
  applicationName: "CarboCredit",
  generator: "Next.js",
  category: "Sustainability",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carbocredit.com",
    siteName: "CarboCredit",
    title: "CarboCredit - Track & Offset Your Carbon Footprint",
    description: "Join CarboCredit to track, reduce, and offset your carbon footprint while earning rewards for sustainable choices.",
    images: [
      {
        url: "/logo.ico",
        alt: "CarboCredit",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "CarboCredit - Track & Offset Your Carbon Footprint",
    description: "Track, reduce, and offset your carbon footprint with CarboCredit.",
    images: ["/logo.ico"],
  },
  icons: {
    icon: "/logo.ico"
  }
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