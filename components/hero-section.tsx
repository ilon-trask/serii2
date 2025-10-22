import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-8 text-5xl tracking-tight text-balance md:text-6xl lg:text-6xl">
          Master your small talk
        </h1>
        <p className="mb-12 text-xl text-zinc-500 text-balance">
          Turn your small talk into a powerful tool
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            Why Logo
          </Button>
        </div>
      </div>
    </section>
  );
}
