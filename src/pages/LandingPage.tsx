import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Founder from "@/components/sections/Founder";
import Testimonials from "@/components/sections/Testimonials";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Sakthi Financial Doctor | Cash Clarity & Family Protection";
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0" />
      <div className="relative z-10">
        <Hero />
        <Stats />
        <Founder />
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Agent Recruitment",
                  description: "Start a premium LIC career with mentorship, field training and leadership guidance.",
                  href: "/agent-recruitment",
                },
                {
                  title: "Life & Health",
                  description: "Secure your family with health, term and critical illness protection solutions.",
                  href: "/life-health",
                },
                {
                  title: "Service Definition",
                  description: "Explore our full service portfolio including mutual funds, retirement and wealth planning.",
                  href: "/services",
                },
              ].map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group rounded-[2rem] border border-border/40 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{card.title}</p>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{card.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <Features />
        <Testimonials />
        <CTA />
      </div>
    </div>
  );
}
