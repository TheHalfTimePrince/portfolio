"use client";

import { Switch } from "@/components/ui/switch";
import Spline from "@splinetool/react-spline";
import { ThemeProvider, useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex flex-col space-y-16 max-w-screen-md relative pb-32">
      <div className="aspect-video max-h-[40rem] w-full relative">
        <Image
          src="/knowledge-to-forage.png"
          alt="Knowledge To Forage Hero"
          fill
          className="object-cover object-top dark:invert   "
        />
        
      </div>

      <section className="px-4 flex flex-col relative space-y-6">
        <div className="flex space-x-4 items-center">
          <h1 className="text-4xl font-semibold">Knowledge To Forage</h1>
          <Switch
            className="mt-2"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
        <p className="text-sm mb-8 font-medium ">
          Knowledge to forage is a simple landing page website I made for a
          client, intended to transfer the knowledge from their books onto a
          site. It features a simple cms made from react-hook-form for the
          client to update the library of foraging items and books.
        </p>
        <p className="text-xs mb-8 font-medium font-mono ">
          <a
            href="https://knowledgetoforage.com/"
            className="underline"
            target="_blank"
          >
            Live Site
          </a>
        </p>
        <Link
          href="/"
          className=" max-w-fit  bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Go Back
        </Link>
        <h2 className="text-2xl font-regular mb-6 font-semibold">Note:</h2>
        <p>
          There are many things I would do differently if I were to do this
          project again. The foraging guide items should be server rendered to
          serve them quicker, with incremental static regeneration triggered by
          the CMS. I would also fix some of the styling and use a more robust
          search feature that allows for mistakes.
        </p>
      </section>
    </div>
  );
}
