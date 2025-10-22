import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LinkSection() {
  return (
    <section className="h-[70vh] flex items-center px-4 py-20" id="download">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm text-zinc-500">Early Member Pricing</p>
        <h2 className="mb-8 text-5xl font-bold md:text-6xl">
          Download from stores
        </h2>
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            Google Play
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            App Store
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
