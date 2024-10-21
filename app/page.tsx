"use client";

import { Switch } from "@/components/ui/switch";
import { ThemeProvider, useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
      <div className="w-full flex flex-col space-y-16 max-w-screen-xl">
        <div className="aspect-video max-h-[40rem] w-full relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent dark:from-transparent dark:to-background/70 z-10"></div>
          <Image
            src="/hero.png"
            alt="logo"
            fill
            className="object-cover dark:invert "
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 80%)",
            }}
          />
        </div>

        <section className="px-4">
          <div className="flex space-x-4 items-center">
            <h1 className="text-4xl font-regular mb-4">Ziggy Baker</h1>
            <Switch
              className="mb-1"
              checked={theme === "dark"}
              onCheckedChange={(checked) =>
                setTheme(checked ? "dark" : "light")
              }
            />
          </div>
          <p className="text-sm mb-8">Web Developer</p>
          <p className="mb-8">
            I specialize in developing multi-tenant full stack Next.js
            applications for SaaS, with a focus on single directory structures
            and unified hosting solutions. 
          </p>
          <p className="text-xs mb-8 font-medium font-mono ">
            typescript · javascript · next.js · react · tailwind · sass ·
            postgres · drizzle · nosql · clickhouse · docker · firebase ·
            multi-tenancy · express · django · python · selenium · pil{" "}
          </p>

          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </a>
        </section>

        <section className="px-4 pb-32">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Private Repos</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Api & Usage based SaaS starter</li>
                <li>Api & Membership w/ rate limiting SaaS starter</li>
                <li>Team & Membership based SaaS starter</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Public Repos</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Api & Token based SaaS starter</li>
                <li>Easy Api's - Api's as a service</li>
                <li>Dark Step - Audio Based Step Sequencer</li>
                <li>Responsive Web Design templates</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
  );
}
