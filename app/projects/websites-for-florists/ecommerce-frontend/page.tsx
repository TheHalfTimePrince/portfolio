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
          src="/hares-garden.png"
          alt="Hares Garden Hero"
          fill
          className="object-cover   "
        />
      </div>

      <section className="px-4 flex flex-col relative space-y-6">
        <div className="flex space-x-4 items-center">
          <h1 className="text-4xl font-semibold">Ecommerce Frontend (WFF)</h1>
          <Switch
            className="mt-2"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
        <p className="text-sm mb-8 font-medium ">
          The ecommerce frontend is a Next.js application that allows users to
          browse and purchase flowers, book tickets for workshops, book
          consultations, start flower subscriptions, and view their orders/user
          data.
        </p>
        <p className="text-xs mb-8 font-medium font-mono ">
          <a
            href="https://haresgarden.com/"
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

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Key Features:
        </h2>
        <ul className="pl-6 my-2 text-neutral-600 dark:text-neutral-300 list-disc text-base list-inside space-y-2">
          <li>CMS controlled ISR Pages</li>
          <li>Beautiful, fast checkout with edge cases like multiple dates and shipping methods.</li>
          <li>
            Analytics based components (top products on the homepage, top blogs
            on the home page etc)
          </li>
          <li>Ticketing system for selling workshops.</li>
          <li>Optomised Images</li>
          <li>Blog</li>
          <li>User Management</li>
          <li>
            Beautfiul Custom UI components, navbar, Cart Widget, Checkout,
            Product Pages etc.
          </li>
        </ul>
      </section>
    </div>
  );
}
