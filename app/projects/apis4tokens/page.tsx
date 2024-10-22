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

       

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Features
        </h2>
        <ul className="list-disc list-inside text-sm mb-8 space-y-2">
          <li>Marketing landing page (<code>/</code>)</li>
          <li>Pricing page (<code>/pricing</code>) connected to Stripe Checkout</li>
          <li>User dashboard for managing API tokens and creating custom endpoints</li>
          <li>Token-based system for API usage</li>
          <li>Email/password authentication with JWTs stored in cookies</li>
          <li>Global middleware to protect routes for logged-in users</li>
          <li>Local middleware for protecting Server Actions or validating Zod schemas</li>
          <li>Activity logging system for tracking API usage and token consumption</li>
        </ul>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Tech Stack
        </h2>
        <p className="text-sm mb-8">
          <strong>Framework:</strong> Next.js<br />
          <strong>Database:</strong> PostgreSQL<br />
          <strong>ORM:</strong> Drizzle<br />
          <strong>Payments:</strong> Stripe<br />
          <strong>UI Library:</strong> shadcn/ui
        </p>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Getting Started
        </h2>
        <ol className="list-decimal list-inside text-sm mb-8 space-y-2">
          <li>
            Clone the repository:
            <pre className="bg-black dark:bg-white p-4 rounded-lg">
              <code className="text-white dark:text-black font-mono">
                git clone https://github.com/TheHalfTimePrince/Apis4Tokens
              </code>
            </pre>
          </li>
          <li>
            Navigate to the project directory:
            <pre className="bg-black dark:bg-white p-4 rounded-lg">
              <code className="text-white dark:text-black font-mono">
                cd Apis4Tokens
              </code>
            </pre>
          </li>
          <li>
            Install dependencies:
            <pre className="bg-black dark:bg-white p-4 rounded-lg">
              <code className="text-white dark:text-black font-mono">
                pnpm install
              </code>
            </pre>
          </li>
          <li>
            Use the included setup script to create your <code>.env</code> file:
            <pre className="bg-black dark:bg-white p-4 rounded-lg">
              <code className="text-white dark:text-black font-mono">
                pnpm db:setup
              </code>
            </pre>
          </li>
          <li>
            Run the database migrations and seed the database with initial data:
            <pre className="bg-black dark:bg-white p-4 rounded-lg">
              <code className="text-white dark:text-black font-mono">
                pnpm db:migrate<br />
                pnpm db:seed
              </code>
            </pre>
          </li>
          <li>
            Start the Next.js development server:
            <pre className="bg-black dark:bg-white p-4 rounded-lg">
              <code className="text-white dark:text-black font-mono">
                pnpm dev
              </code>
            </pre>
            Open <a href="http://localhost:3000" target="_blank" className="underline">http://localhost:3000</a> to see the app.
          </li>
        </ol>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Creating an API Endpoint
        </h2>
        <p className="text-sm mb-8">
          To create a new API endpoint, use the <code>apiTemplate</code> function. Here's an example:
        </p>

        <pre className="bg-black dark:bg-white p-4 rounded-lg">
          <code className="text-white dark:text-black font-mono">
            {`// app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { apiTemplate } from '@/lib/easy-api-template';

async function exampleLogic(req: NextRequest) {
  // Your custom logic here
  const message = "Hello from the API!";
  return NextResponse.json({ message }, { status: 200 });
}

export const POST = apiTemplate({
  tokenCost: 100, // Cost of this API call in tokens
  logic: exampleLogic,
});`}
          </code>
        </pre>

        <p className="text-sm mb-8">
          This creates a new <code>POST</code> endpoint at <code>/api/example</code> that costs 100 tokens per call.
        </p>

        <p className="text-sm mb-8">
          To test the endpoint, create an account and generate an API key from the dashboard. Each account starts with 1000 tokens by default. You can make a request to the endpoint using <code>curl</code> like this:
        </p>

        <pre className="bg-black dark:bg-white p-4 rounded-lg">
          <code className="text-white dark:text-black font-mono">
            curl -X POST https://yourdomain.com/api/example -H "Authorization: Bearer &lt;YOUR_API_KEY&gt;"
          </code>
        </pre>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Adding Documentation
        </h2>

        <p className="text-sm mb-8">
          To add documentation for your new API, create a new markdown file in the <code>@/contents/docs</code> folder and explain how to use it.
        </p>

        <p className="text-sm mb-8">
          The token usage will be deducted from the user's balance.
        </p>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Testing Payments
        </h2>

        <p className="text-sm mb-8">
          To test Stripe payments, use the following test card details:
        </p>

        <ul className="list-disc list-inside text-sm mb-8 space-y-2">
          <li>Card Number: <code>4242 4242 4242 4242</code></li>
          <li>Expiration Date: Any future date</li>
          <li>CVC: Any 3-digit number</li>
        </ul>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Going to Production
        </h2>

        <p className="text-sm mb-8">
          When you're ready to deploy your API marketplace to production, follow these steps:
        </p>

        <ol className="list-decimal list-inside text-sm mb-8 space-y-2">
          <li>
            <strong>Push your code to a Git repository:</strong> This can be a public or private repository.
          </li>
          <li>
            <strong>Set up Coolify:</strong> Install Coolify on your server or use Coolify's managed service.
          </li>
          <li>
            <strong>Connect to your Git repository:</strong> Once Coolify is installed, add your repository to Coolify by following the instructions in the platform's dashboard.
          </li>
          <li>
            <strong>Configure environment variables:</strong> Add the necessary environment variables in Coolify's project settings. Make sure to include:
            <ul className="list-disc list-inside ml-6">
              <li><code>BASE_URL</code>: Your production domain.</li>
              <li><code>STRIPE_SECRET_KEY</code>: Your Stripe production secret key.</li>
              <li><code>POSTGRES_URL</code>: Your production Postgres database URL.</li>
              <li><code>AUTH_SECRET</code>: A random string (use <code>openssl rand -base64 32</code> to generate one).</li>
            </ul>
          </li>
          <li>
            <strong>Set up the database:</strong> Use Coolify's database feature or your own managed Postgres instance. Make sure the database URL matches what’s in your <code>.env</code> file.
          </li>
          <li>
            <strong>Run database migrations:</strong> In Coolify's dashboard, open the terminal and run:
            <pre className="bg-black dark:bg-white p-4 rounded-lg">
              <code className="text-white dark:text-black font-mono">
                pnpm db:migrate<br />
                pnpm db:seed
              </code>
            </pre>
          </li>
          <li>
            <strong>Deploy the app:</strong> Once everything is set up, click deploy in Coolify, and it will handle the rest.
          </li>
          <li>
            <strong>Set up the Stripe Webhook:</strong> After deployment, set up the Stripe webhook for the production environment. Use the following command:
            <pre className="bg-black dark:bg-white p-4 rounded-lg">
              <code className="text-white dark:text-black font-mono">
                pnpm deployWebhook
              </code>
            </pre>
            This script will create a webhook and update your <code>.env</code> file with the new <code>STRIPE_WEBHOOK_SECRET</code>.
          </li>
        </ol>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Scripts
        </h2>

        <ul className="list-disc list-inside text-sm mb-8 space-y-2">
          <li><code>pnpm db:setup</code>: Create your <code>.env</code> file.</li>
          <li><code>pnpm db:migrate</code>: Run database migrations.</li>
          <li><code>pnpm db:seed</code>: Seed the database with initial data.</li>
          <li><code>pnpm deployWebhook</code>: Deploy the Stripe webhook for production.</li>
        </ul>

        <h2 className="text-2xl font-regular mb-6 font-semibold">
          Conclusion
        </h2>

        <p className="text-sm mb-8">
          Apis4Tokens is a useful project that can be used to quickly set up APIs as a service or any token-based SaaS. It provides a robust foundation for building scalable API marketplaces, with features like token-based authentication, payment integration, and user management. Feel free to explore the project, contribute, or use it as a starting point for your own API services.
        </p>
      </section>
    </div>
  );
}
