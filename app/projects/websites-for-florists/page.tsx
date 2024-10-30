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
          src="/wff-light.png"
          alt="Websites For Florists Overview Light Hero"
          fill
          className="object-cover object-top dark:hidden"
        />
        <Image
          src="/wff-dark.png"
          alt="Websites For Florists Overview Dark Hero"
          fill
          className="object-cover object-top dark:block hidden"
        />
      </div>

      <section className="px-4 flex flex-col relative space-y-6">
        <div className="flex space-x-4 items-center">
          <h1 className="text-4xl font-semibold">Websites For Florists</h1>
          <Switch
            className="mt-2"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
        <p className="text-sm mb-8 font-medium ">
          Websites for Florists is a large multi-tenant Next.js application, the
          idea to be the shopify that replaces "Florist Window" and
          "floristPro". It features a custom-built CMS tailored specifically for
          florists, allowing users to sign up, customize their websites, and
          manage their businesses. The project is comparable to Shopify in
          functionality, but with partial human intervention on the first design
          of the site.
        </p>
        <p className="text-xs mb-8 font-medium font-mono ">
          <a
            href="https://websitesforflorists.com/"
            className="underline"
            target="_blank"
          >
            Live Site
          </a>{" "}
          ·{" "}
          <a
            href="https://demo.websitesforflorists.com/"
            className="underline"
            target="_blank"
          >
            Dashboard Demo{" "}
          </a>{" "}
          ·{" "}
          <a
            href="https://haresgarden.com/"
            className="underline"
            target="_blank"
          >
            Ecommerce Demo
          </a>
        </p>
        <Link
          href="/"
          className=" max-w-fit  bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Go Back
        </Link>
        <p>
          This was a very large project, so I have broken it up into smaller
          pages.
        </p>
        <ul className=" pl-6 my-2  text-neutral-600 dark:text-neutral-300 list-disc text-base list-inside space-y-2">
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
        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Key Features:
        </h2>
        <ul className="pl-6 my-2 text-neutral-600 dark:text-neutral-300 list-disc text-base list-inside space-y-2">
          <li>Multi Tenancy</li>
          <li>Redux State Management</li>
          <li>Real Time Analytics</li>
          <li>CMS</li>
          <li>Ecommerce</li>
          <li>Domain Management</li>
          <li>CMS Triggered ISR</li>
          <li>Checkout with multiple shipping methods.</li>
          <li>Receipts and Order Management</li>
          <li>Email Notifications for customers and admins</li>
          <li>Blog</li>
          <li>Ticket System for selling workshops</li>
          <li>Subscription System</li>
        </ul>
      </section>
    </div>
  );
}
