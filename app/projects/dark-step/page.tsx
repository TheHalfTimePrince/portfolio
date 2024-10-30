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
          src="/dark-step.png"
          alt="Dark Step Hero"
          fill
          className="object-cover invert dark:invert-0   "
        />
        
      </div>

      <section className="px-4 flex flex-col relative space-y-6">
        <div className="flex space-x-4 items-center">
          <h1 className="text-4xl font-semibold">Dark Step</h1>
          <Switch
            className="mt-2"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
        <p className="text-sm mb-8 font-medium ">
          Dark Step is a powerful and intuitive web-based step sequencer built
          with Next.js and Tone.js. It offers a unique and engaging way to
          create music directly in your browser, featuring multiple instruments
          and a visually appealing interface.
        </p>
        <p className="text-xs mb-8 font-medium font-mono ">
          <a
            href="https://dark-step-a013f.web.app/"
            className="underline"
            target="_blank"
          >
            Live Demo
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/TheHalfTimePrince/dark-step"
            target="_blank"
            className="underline"
          >
            Repo
          </a>{" "}
          ·{" "}
          <a
            className="underline"
            href="/FINAL Ziggy Baker Interactive Music Applications 2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Essay
          </a>
        </p>
        <Link
          href="/"
          className=" max-w-fit  bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Go Back
        </Link>
        <p>
          I recently built a web-based step-sequencer using Tone.js, React.js,
          and Next.js . Here's a quick breakdown of its core features:
        </p>
        <ul className="list-disc text-base list-inside space-y-2">
          <li>
            A grid of 256 buttons, split into 16 steps and 16 notes, with 8
            sections for each instrument.
          </li>
          <li>
            Four instruments: bass guitar, chord synth, bell synth (with
            oscillator and ADSR controls), and a drum kit (808 and live drums).
          </li>
          <li>
            A playable synth pad where mouse or touch movements control notes
            and cutoff frequency.
          </li>
          <li>
            A granular sampler allowing audio uploads with granular controls
            (speed, grain size, detune, etc.).
          </li>
          <li>
            A mixer with volume controls for each instrument and tempo
            adjustments.
          </li>
        </ul>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Optimizing Timing and Scheduling
        </h2>
        <p>
          Initially, I used <code>setInterval()</code> to manage the sequencer
          clock, but the results were inconsistent, especially under CPU load.
          This led me to learn about the Web Audio API and
          <a href="https://tonejs.github.io/docs/14.7.77/index.html">Tone.js</a>
          , a library that takes out some of the grunt work with timing in the
          Web Audio API. Tone.js provided a much more reliable solution with its
          transport object, which allowed me to trigger notes in sync with the
          sequencer clock.
        </p>
        <p>
          Even then, I faced issues with scheduling multiple notes at once,
          leading me to pre-schedule events using <code>Tone.Part</code>. This
          provided a more optimized way to handle complex arrangements without
          overloading the system, but introduced its own set of challenges.
        </p>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Scheduling & State Management for Musical Instructions
        </h2>
        <p>
          One of the biggest challenges I faced was managing the state for each
          section and instrument, ensuring every note, time, and section toggle
          was stored and handled separately. Dynamically enabling or disabling
          sections impacted the timing and scheduling of musical events. For
          example, when toggling a section off, the same note objects had to be
          used to disable them due to tone.js’s "part" component requiring the
          memory address of JavaScript objects when scheduling notes. With many
          notes active in each section, this required intricate state
          management.
        </p>
        <p>
          Additionally, maintaining accurate timing while switching sections on
          and off involved developing a system where notes were stored without
          specific measure information. When sections were activated or
          deactivated, I recalibrated the sequencer’s length, recalculated note
          timings, and regenerated time notations dynamically to ensure
          everything stayed in sync.
        </p>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Final Thoughts
        </h2>
        <p>
          Managing state and ensuring the sequencer stayed responsive during
          dynamic changes in instrument sections was challenging. Future updates
          will focus on extending mixer features, optimizing mobile performance,
          and adding more effects. Despite the hurdles, Tone.js made many
          aspects of Web Audio development smoother.
        </p>
      </section>
    </div>
  );
}
