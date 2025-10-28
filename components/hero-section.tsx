import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-10 flex items-center">
      <div className="mx-auto">
        <h1 className="mb-4 text-4xl tracking-tight text-balance md:text-5xl ">
          Master your small talk
        </h1>
        <p className="mb-8 text-xl text-muted-foreground text-balance">
          Turn your small talk into a powerful tool
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg" className="hover:bg-action/90 bg-action text-white">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Why Logo
          </Button>
        </div>
      </div>
      <div className="relative mx-auto border-zinc-800 dark:border-zinc-800 bg-zinc-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-zinc-800">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
            className="dark:hidden w-[272px] h-[572px]"
            alt=""
          />
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
            className="hidden dark:block w-[272px] h-[572px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
