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
          src="/react-paint-light.png"
          alt="React Paint Light Hero"
          fill
          className="object-cover object-top dark:hidden"
        />
        <Image
          src="/react-paint-dark.png"
          alt="React Paint Dark Hero"
          fill
          className="object-cover object-top dark:block hidden"
        />
      </div>

      <section className="px-4 flex flex-col relative space-y-6">
        <div className="flex space-x-4 items-center">
          <h1 className="text-4xl font-semibold">React Paint</h1>
          <Switch
            className="mt-2"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
        <p className="text-sm mb-8 font-medium ">
          React Paint is a powerful React extension built on top of Fabric.js,
          designed to enhance canvas manipulation and drawing capabilities. It
          provides custom hooks like useFabricCanvas and useCanvasHistory,
          exposing features such as redo/undo functionality. The project
          includes a comprehensive component that offers various tools like
          brushes, icons, and more, making it ideal for AI-driven projects
          involving in-painting and image-to-image transformations.
        </p>
        <p className="text-xs mb-8 font-medium font-mono ">
          <a
            href="https://github.com/TheHalfTimePrince/REACT.PAINT"
            className="underline"
            target="_blank"
          >
            GitHub Repository
          </a>{" "}
          ·{" "}
          <a
            href="https://js-paint-vert.vercel.app/"
            className="underline"
            target="_blank"
          >
            Live Demo
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
          <li>Built with Next.js 14.</li>
          <li>useCanvasHistory hook for undo/redo</li>
          <li>useFabricCanvas hook for setting up the canvas easily & quickly</li>
          <li>Global size/color settings rather than default per-tool settings</li>
          <li>Eraser that works properly on svgs and images, staying erased when objects are moved, scaled and adjusted.</li>
          <li>Variety of drawing tools and icons</li>
          <li>Designed for integration with AI-powered image processing</li>
        </ul>

      </section>
    </div>
  );
}
