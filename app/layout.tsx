import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import { Merriweather, Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";

const merriweather = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Ziggy Baker",
  description: "A personal portfolio and blog for Ziggy Baker",
  keywords: ["Next.js", "React", "Web Development", "Portfolio", "Blog"],
  authors: [{ name: "Ziggy Baker" }],
  creator: "Ziggy Baker",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ziggybaker.com",
    siteName: "Ziggy Baker",
    title: "Ziggy Baker - Web Developer & Designer",
    description: "Personal portfolio and blog of Ziggy Baker, showcasing web development projects and insights.",
    images: [
      {
        url: "https://www.ziggybaker.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ziggy Baker - Web Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziggy Baker - Web Developer & Designer",
    description: "Personal portfolio and blog of Ziggy Baker, showcasing web development projects and insights.",
    images: ["https://www.ziggybaker.com/twitter-image.jpg"],
    creator: "@ziggybaker",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${roboto.variable} antialiased min-w-screen min-h-screen w-full flex justify-center `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
