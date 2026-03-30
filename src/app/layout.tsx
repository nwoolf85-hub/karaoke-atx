import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karaoke ATX — Austin's Premier Karaoke Experience",
  description:
    "Professional karaoke entertainment in Austin, TX. Mobile karaoke for bars & restaurants, private room rental, corporate events, and private parties. 50,000+ songs. Book your event today!",
  keywords: [
    "karaoke Austin",
    "karaoke ATX",
    "mobile karaoke Austin",
    "karaoke party Austin",
    "private karaoke room Austin",
    "corporate karaoke Austin",
    "karaoke DJ Austin",
  ],
  openGraph: {
    title: "Karaoke ATX — Austin's Premier Karaoke Experience",
    description:
      "Professional karaoke entertainment. Mobile service, private room, corporate events. 50,000+ songs. Book today!",
    type: "website",
    locale: "en_US",
    siteName: "Karaoke ATX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
