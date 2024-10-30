"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex flex-col space-y-16 max-w-screen-md relative pb-32">
      <div className="aspect-video max-h-[40rem] w-full relative">
        <Image
          src="/apis-light.png"
          alt="Apis4tokens Light Hero"
          fill
          className="object-cover object-top dark:hidden"
        />
        <Image
          src="/apis-dark.png"
          alt="Apis4tokens Dark Hero"
          fill
          className="object-cover object-top dark:block hidden"
        />
      </div>

      <section className="px-4 flex flex-col relative space-y-6 ">
        <div className="flex space-x-4 items-center">
          <h1 className="text-4xl font-semibold">Apis4Tokens</h1>
          <Switch
            className="mt-2"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
        <p className="text-sm mb-8 font-medium ">
          Apis4Tokens is a starter template for building an API marketplace using Next.js.
          It includes features for authentication, Stripe integration for payments, a documentation page,
          and a dashboard for users to manage their API keys and token balance.
          There is also a helper function to create new API endpoints,
          simply add the logic and the token cost.
        </p>
        <p className="text-xs mb-8 font-medium font-mono ">
          <a
            href="https://easy-apis-halftimeprinces-projects.vercel.app/"
            className="underline"
            target="_blank"
          >
            Live Demo
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/TheHalfTimePrince/Apis4Tokens"
            target="_blank"
            className="underline"
          >
            Repo
          </a>
        </p>
        <Link
          href="/"
          className=" max-w-fit  bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Go Back
        </Link>

        <p className="text-sm mb-8">
          I was looking to create a custom QR code for some marketing material. I checked to see if there was a free API that did this and I found a paid service which I thought was hilarious because it's super easy to just grab a node or python package, I was just being lazy.
        </p>
        <p className="text-sm mb-8">
          Who would have thought! People are provisioning simple tools as APIs and getting paid for it! Cool, I would like to do that but using a paid service is a big no-no, sharing the profits! Ew.
        </p>
        <p className="text-sm mb-8">
          So I thought I would create my own, I thought a simple boilerplate SaaS, sell tokens through Stripe and create a little template that takes tokens to deduct, and a function to simplify the whole project. - yeah maybe I'll do that later but for now, I got a better idea.
        </p>
        <p className="text-sm mb-8">
          A great opportunity to do something for open source! I grabbed some nice SVGs for the homepage and scraped bits and bobs together from some old projects quickly to get the landing page, dashboard, etc. setup. Some grains on the hero will look great.
        </p>
        <p className="text-sm mb-8">
          I’m using Drizzle to get this all done super fast and have everything basically be written for me, I'll store token transactions etc. in a Postgres along with user data. I think this would be fun to ship to open source so I'm not going to use Clerk or anything, just a simple auth setup.
        </p>
        <p className="text-sm mb-8">
          Okay cool, auth done, Stripe grabbed from another project. All I did was change the products or whatever to be single-time payments. One change that needs to happen is the dashboard. I'll write a quick component of code that allows the user to delete or create API keys, and store them in a table related to the user.
        </p>
        <p className="text-sm mb-8">
          Finally, I created a cool template that handles all the main tasks with the Postgres for people so they can be super duper lazy. And literally just add their env variables, setup Postgres, and create API routes. I'll leave an example in there:
        </p>

        <pre className="bg-black dark:bg-white p-4 rounded-lg">
          <code className="text-white dark:text-black font-mono">
            {`import { NextRequest, NextResponse } from 'next/server';
import { apiTemplate } from '@/lib/easy-api-template';

async function exampleLogic(req: NextRequest) {
  // Your custom logic here
  const message = "Hello from the API!";
  return NextResponse.json({ message }, { status: 200 });
}

export const POST = apiTemplate({
  tokenCost: 100, // Cost of this API call in tokens
  logic: exampleLogic
});`}
          </code>
        </pre>

        <p className="text-sm mb-8">
          How easy is that!
        </p>
        <p className="text-sm mb-8">
          I'll also add some scripts, some were there before but a “pnpm deployWebhook“ to automatically create the webhook for them too. What a time to be alive!
        </p>
        <p className="text-sm mb-8">
          One last thing, I'll juice it up a bit with a documentation page, I'll just grab what I need from the open-source Aria docs and slap it in my project because it looks clean. I also am going to whip through and change most hardcoded colors to variables and add a dark mode!
        </p>
        <p className="text-sm mb-8">
          A fun project that can be used to quickly set up APIs as a service, or any token-based SaaS. An AI image generator that calls its own API to deduct tokens for example.
        </p>
      </section>
    </div>
  );
}
