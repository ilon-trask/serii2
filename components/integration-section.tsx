import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import Second from "../public/second.webp";
import Image from "next/image";

export function IntegrationSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-8 text-center">
        <p className="mb-4 text-sm text-zinc-500">Framework Adapters</p>
        <h2 className="mb-8 text-4xl tracking-tight text-balance lg:text-5xl">
          Integrate in under a minute
        </h2>
      </div>

      <Card className="border-zinc-500/10 bg-zinc-900/50 p-8  grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 p-1">
          <div className="rounded-xl bg-black p-6">
            <Image src={Second} alt="First" width={600} height={400} />
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-3xl font-bold">Next.js Adapter</h3>
          <p className="mb-6 text-lg text-zinc-500">
            Payments and Checkouts made dead simple with Next.js
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-zinc-500">Secure & Simple Checkouts</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-zinc-500">Integrated Customer Portal</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-zinc-500">
                Granular & Reliable Webhook Handler
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-zinc-500">Global Merchant of Record</span>
            </li>
          </ul>
          <Button
            variant="outline"
            className="mt-6 border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </section>
  );
}
