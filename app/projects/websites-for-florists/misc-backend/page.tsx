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
          src="/misc-backend.png"
          alt="Misc Backend Hero"
          fill
          className="object-cover   "
        />
      </div>

      <section className="px-4 flex flex-col relative space-y-6">
        <div className="flex space-x-4 items-center">
          <h1 className="text-4xl font-semibold">Misc Backend (WFF)</h1>
          <Switch
            className="mt-2"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
        <p className="text-sm mb-8 font-medium ">
          Here is some other miscellaneous backend features that I wrote for the
          project. I wrote the backend in Node.js using Express and deployed on
          google cloud with serverless. I thought this way, the code is ready to
          go on a permanent servers when the app scales, but saves money when
          the app is smaller and the functions are not used all the time.
        </p>
        <p className="text-xs mb-8 font-medium font-mono ">
          javascript · node.js · express · firebase · stripe · google cloud ·
          ses · stripe
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
          <li>
            Stripe Webhooks To Update Order Status on tenants customers, and
            subscription status and feature provisions on tenants.
          </li>
          <li>
            Email Templates for sending emails to customers and admins. A tool
            called "push notification" that uses my branding, or the tenants
            branding, structures emails according to templates and pushes it to
            recipients using SES.
          </li>
          <li>
            Image Storage: Images are stored on google cloud storage, and
            optimised using a custom function that returns the image URL, and stores multiple sizes.
          </li>
          <li>
            Tiny bird analytics on the backend to track events like order
            completions, ticket purchases etc.
          </li>
          <li>
            + many more small integrations to other services.
          </li>
        </ul>
      </section>
    </div>
  );
}
