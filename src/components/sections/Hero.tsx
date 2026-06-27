import { Shield, TrendingUp, Award, Users, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroPortfolioChart from "@/components/sections/HeroPortfolioChart";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background decoration container with z-0 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Premium Elegant Colorful Background Gradient */}
        <div className="absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-amber-100/80 via-rose-100/20 to-transparent" />

        {/* Modern Tech-Finance Blueprint/Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Breathing Colorful Aurora Blobs */}
        {/* <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-300/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} /> */}
        {/* <div className="absolute top-12 right-1/4 h-[400px] w-[400px] rounded-full bg-rose-300/20 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} /> */}
        {/* <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-rose-300/20 blur-[100px]" /> */}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Announcement Badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm text-primary backdrop-blur-sm">
              <Award className="h-4 w-4" />
              <span className="font-semibold">LIC Chairman's Club Member — 31 Years</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                SAKTHI
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-emerald-600 bg-clip-text text-transparent">
                  FINANCIAL DOCTOR
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-foreground/90">
                38 Years of Trust & Financial Protection
              </p>
              <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed">
                Your family’s trusted guide for life insurance, mutual funds, retirement planning, health protection, and long-term wealth creation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/financial-doctor" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-12 px-8 text-base group">
                  Meet Your Financial Doctor
                  <HeartPulse className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/consultation" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-12 px-8 text-base hover:bg-muted/50">
                  Book a Consultation
                </Button>
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link to="/services" className="rounded-full border border-border/50 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:border-primary hover:bg-primary/5">
                Explore Services
              </Link>
              <Link to="/life-health" className="rounded-full border border-border/50 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:border-primary hover:bg-primary/5">
                Life & Health Protection
              </Link>
              <Link to="/agent-recruitment" className="rounded-full border border-border/50 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:border-primary hover:bg-primary/5">
                Join Agent Team
              </Link>
            </div>

            {/* Features list */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-border/40">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <Shield className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">MDRT USA Member (15 Yrs)</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <TrendingUp className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Certified Mutual Fund Dist.</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center space-x-2 justify-center lg:justify-start">
                <Users className="h-5 w-5 text-rose-500 flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Chief LIC Advisor</span>
              </div>
            </div>
          </div>

          {/* Graphical/Interactive Hero Asset */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Glow */}
              {/* <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-400 to-emerald-400 opacity-30 blur-lg" /> */}
              
              {/* Premium Dashboard-style Visual Card */}
              <div className="relative rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xl p-6 shadow-2xl space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-border/40">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Total Client Assets Advised</p>
                    <p className="text-3xl font-bold tracking-tight text-foreground mt-1">₹24.8 Crores</p>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-500 font-semibold px-2.5 py-1 rounded-full text-xs flex items-center">
                    <TrendingUp className="h-3.5 w-3.5 mr-1" />
                    +15.2% Growth
                  </div>
                </div>

                <HeroPortfolioChart />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
