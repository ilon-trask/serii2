"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import First from "../public/first.webp";

export function UsageBillingSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-8 text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          Ingestion Based Billing
        </p>
        <h2 className="mb-8 text-4xl tracking-tight text-balance lg:text-5xl">
          Usage Based Billing on Autopilot
          <br />
          with Ingestion Strategies
        </h2>
      </div>

      <Card className="p-8  grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h3 className="mb-4 text-3xl font-bold">LLM Strategy</h3>
          <p className="text-lg text-muted-foreground">
            {"Capture your Customer's LLM Usage & bill them for it"}
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 via-pink-500 to-blue-600 p-1">
          <div className="rounded-xl bg-background p-6">
            <Image src={First} alt="First" width={600} height={400} />
          </div>
        </div>
      </Card>

      <div className="mt-12 flex items-center justify-center gap-8">
        {["Node.js", "Python", "PHP", "Go", "curl"].map((lang) => (
          <div
            key={lang}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            <span className="text-sm">{lang}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
