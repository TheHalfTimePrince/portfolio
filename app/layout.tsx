import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import { Merriweather, Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Spline from "@splinetool/react-spline";
import { Chatbot } from "@/components/chatbot";

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
    description:
      "Personal portfolio and blog of Ziggy Baker, showcasing web development projects and insights.",
    images: [
      {
        url: "https://www.ziggybaker.com/hero.png",
        width: 1200,
        height: 630,
        alt: "Ziggy Baker - Web Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziggy Baker - Web Developer & Designer",
    description:
      "Personal portfolio and blog of Ziggy Baker, showcasing web development projects and insights.",
    images: ["https://www.ziggybaker.com/hero.png"],
    creator: "@ziggybaker",
  },
  icons: {
    icon: "./favicon2.png",
    shortcut: "./favicon2.png",
    apple: "./favicon2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${roboto.variable} relative antialiased  min-w-screen min-h-screen flex-col w-full flex items-center `}
      >
        {/* <div className="hidden lg:block absolute w-full h-full inset-0 pointer-events-none z-[99] opacity-50 ">
          <Spline scene="https://prod.spline.design/JvxDxrgG4xZHSOLV/scene.splinecode" />
        </div> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
          <Chatbot
          attentionText="Lets talk!"
            avatarSrc="/avatar.png"
            title="Ziggy Baker"
            initialMessage={`
# Hi! I'm Ziggy's virtual clone 👋

I can tell you all about my:
- Work experience
- Technical skills
- Education
- Projects

Want to see my expertise? I'll show you:
- Real projects I've built
- Code samples
- Live deployments
- GitHub repositories

**Want this chatbot for your site?**
Check out the repo at [github.com/thehalftimeprince/react-ai-chatbot](https://github.com/thehalftimeprince/react-ai-chatbot)!
            `}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
