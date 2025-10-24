import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { UsageBillingSection } from "@/components/usage-billing-section";
import { IntegrationSection } from "@/components/integration-section";
import { FeaturesSection } from "@/components/features-section";
import { SeedAnnouncementSection } from "@/components/seed-announcement-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { LinkSection } from "@/components/link-section";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 dark:text-white text-black">
      <div className="max-w-6xl mx-auto">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <UsageBillingSection />
          <IntegrationSection />
          <TestimonialsSection />
          <SeedAnnouncementSection />
          <LinkSection />
        </main>
      </div>
    </div>
  );
}
