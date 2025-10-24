import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SeedAnnouncementSection() {
  return (
    <section className=" mx-auto px-4 py-20">
      <div className="overflow-hidden rounded-3xl p-12 backdrop-blur-sm border bg-card">
        <div className="mb-8 text-center">
          <p className="mb-4 text-sm text-muted-foreground">Seed Investment</p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Announcing our $10M Seed Round</h2>
          <Button variant="outline">
            Read the announcement
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600">
          <div className="flex h-full items-center justify-center">
            <div className="flex items-center gap-3 text-white">
              <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-5xl font-bold">Polar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
