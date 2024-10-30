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
          src="/wff-cms.png"
          alt="Websites For Florists CMS"
          fill
          className="object-cover    "
        />
      </div>

      <section className="px-4 flex flex-col relative space-y-6">
        <div className="flex space-x-4 items-center">
          <h1 className="text-4xl font-semibold">CMS / Admin Panel (WFF)</h1>
          <Switch
            className="mt-2"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
        <p className="text-sm mb-8 font-medium "></p>
        <p className="text-xs mb-8 font-medium font-mono ">
          <a
            href="https://demo.websitesforflorists.com/"
            className="underline"
            target="_blank"
          >
            Live Demo{" "}
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
          <li>
            Multi Tenant Real Time Analytics on page views, user activity,
            product sales, conversion rate, form submissions etc. (started out
            as pub/sub then moved to tiny bird)
          </li>
          <li>Order management and receipts etc accordian data table.</li>
          <li>Notifications for contact form submissions.</li>
          <li>Blog using MDX.</li>
          <li>Manage page content using CMS.</li>
          <li>
            Component Library for the CMS for different data types. Including
            nested forms and complex data types with {`<NestedEditableList />`}
          </li>
          <li>Custom hooks like useAllRoutes for fetching data.</li>
          <li>Ticket management with dates/times and bundles.</li>
          <li>
            Product management with categories and variations, with edge case
            handling for obscure types.
          </li>
          <li>
            Comprehensive Shipping Options form that covers many edge cases,
            such as postcode delivery, free shipping over a certain amount etc.
          </li>
          <li>Custom UI components for the CMS panel.</li>#
          <li>
            ISR and Static Caching for changes on the CMS to propogate to the
            live site.
          </li>
          <li>
            Multi Tenant System: Each tenant has their own space, and can manage
            their own content.
          </li>
        </ul>
      </section>
    </div>
  );
}
