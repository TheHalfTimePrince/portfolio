"use client";

import { Switch } from "@/components/ui/switch";
import Spline from "@splinetool/react-spline";
import { ThemeProvider, useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TechnologiesGrid from "@/components/technologies-grid";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex flex-col space-y-16 max-w-screen-md relative pb-32">
      <div className="aspect-video max-h-[40rem] w-full relative shadow-[inset_0_0_100px_100px_rgba(0,0,0,0.5)] dark:shadow-[inset_0_0_100px_100px_rgba(255,255,255,0.5)]">
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent dark:from-transparent dark:to-background/70 z-10"></div>
        <Image
          src="/mt-hero.png"
          alt="Hero Image"
          fill
          className="object-cover invert dark:invert-0"
        />
      </div>

      <section className="px-4 relative">
        <div className="flex space-x-4 items-center">
          <h1 className="text-4xl font-semibold mb-4">Ziggy Baker</h1>
          <Switch
            className="mb-1"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
        <p className="text-sm mb-8 font-medium">Web Developer</p>

        <p className="mb-8">
          I specialize in developing full stack multi-tenant Next.js
          applications, predominantly in typescript with react, redux, postgres,
          node, and tailwind.
        </p>

        <p className="text-xs mb-8 font-medium font-mono ">
          typescript · next.js · tailwind · gcp · react · redux · postgres ·
          drizzle · nosql · clickhouse · docker · firestore · node · express ·
          python · selenium · pil · git
        </p>

        <a
          href="mailto:ziggybaker123@gmail.com"
          className="relative bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Contact Me
        </a>
      </section>
      {/* <TechnologiesGrid /> */}
      <section className="px-4 ">
        <h2 className="text-3xl font-regular mb-6 font-semibold">Projects</h2>

        <div className="space-y-6">
          <div>
            <ul className="list-disc text-base list-inside space-y-2">
              <li>
                <Link className="underline" href="/projects/dark-step">
                  Dark Step
                </Link>
              </li>

              <li>
                Websites for Florists
                <ul className=" pl-6 my-2  text-neutral-600 dark:text-neutral-400 list-disc text-base list-inside space-y-2">
                  <li>
                    <Link
                      className="underline"
                      href="/projects/websites-for-florists"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline"
                      href="/projects/websites-for-florists/ecommerce-frontend"
                    >
                      Ecommmerce Frontend
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline"
                      href="/projects/websites-for-florists/cms-admin-panel"
                    >
                      CMS / Admin Panel
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline"
                      href="/projects/websites-for-florists/misc-backend"
                    >
                      Misc Backend
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="underline" href="/projects/apis4tokens">
                  Apis4Tokens
                </Link>
              </li>

              {/* <li>
                <Link className="underline" href="/projects/cms-cn">
                  Concat Ui
                </Link>
              </li> */}
              <li>
                <Link className="underline" href="/projects/react-paint">
                  React Paint
                </Link>
              </li>
              <li>
                <Link className="underline" href="/projects/philanthro-threads">
                  PhilanthroThreads
                </Link>
              </li>
              <li>
                <Link
                  className="underline"
                  href="/projects/knowledge-to-forage"
                >
                  Knowledge To Forage
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
