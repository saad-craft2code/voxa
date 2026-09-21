import { BookDemoWrapper } from "@/components/shared/book-demo-wrapper";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { VoiceAgents } from "@/components/sections/voice-agents";
import { AutomationBots } from "@/components/sections/automation-bots";
import { Projects } from "@/components/sections/projects";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Integrations } from "@/components/sections/integrations";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <BookDemoWrapper>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <TrustBar />
          <VoiceAgents />
          <AutomationBots />
          <Projects />
          <HowItWorks />
          <Features />
          <Integrations />
          <Pricing />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </BookDemoWrapper>
  );
}
