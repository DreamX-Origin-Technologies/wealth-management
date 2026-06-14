import { ArrowRight, Shield, TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background decoration container with z-0 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Premium Elegant Colorful Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/70 via-violet-100/40 to-transparent" />

        {/* Modern Tech-Finance Blueprint/Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Breathing Colorful Aurora Blobs */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-12 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-400/20 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-rose-300/20 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Announcement Badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm text-primary backdrop-blur-sm">
              <Award className="h-4 w-4" />
              <span className="font-semibold">LIC Chairman’s Club Member — 31 Years</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Guided by <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                37+ Years of Experience
              </span>
            </h1>

            {/* Subtext */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              With over 37 years of professional experience, having guided thousands of families toward financial security and peace of mind, I will share the essence of my experience and learnings through this platform for your benefit.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#consultation" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-12 px-8 text-base group">
                  Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-12 px-8 text-base hover:bg-muted/50">
                  Explore Services
                </Button>
              </a>
            </div>

            {/* Features list */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-border/40">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <Shield className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">MDRT USA Member (15 Yrs)</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <TrendingUp className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Certified Mutual Fund Dist.</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center space-x-2 justify-center lg:justify-start">
                <Users className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Chief LIC Advisor</span>
              </div>
            </div>
          </div>

          {/* Graphical/Interactive Hero Asset */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary to-indigo-500 opacity-30 blur-lg" />
              
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

                {/* Graph Representation */}
                <div className="h-44 flex items-end justify-between gap-2 pt-4">
                  {[45, 52, 49, 63, 58, 70, 78, 72, 85, 92, 88, 100].map((val, idx) => (
                    <div key={idx} className="flex-1 h-full flex flex-col justify-end items-center gap-1">
                      {/* Bar Wrapper to resolve height percentage inside flexbox */}
                      <div className="w-full flex-1 flex items-end">
                        <div 
                          className="w-full rounded-t bg-gradient-to-t from-primary/60 to-primary transition-all duration-300 hover:opacity-85" 
                          style={{ height: `${val}%` }} 
                        />
                      </div>
                      <span className="text-[9px] font-semibold text-muted-foreground uppercase">{['J','F','M','A','M','J','J','A','S','O','N','D'][idx]}</span>
                    </div>
                  ))}
                </div>

                {/* Asset Allocation */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Portfolio Distribution</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-accent/40 p-2.5 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">Mutual Funds</p>
                      <p className="text-sm font-bold text-foreground mt-0.5">45%</p>
                    </div>
                    <div className="rounded-lg bg-accent/40 p-2.5 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">LIC Policies</p>
                      <p className="text-sm font-bold text-foreground mt-0.5">35%</p>
                    </div>
                    <div className="rounded-lg bg-accent/40 p-2.5 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">Health & Gen</p>
                      <p className="text-sm font-bold text-foreground mt-0.5">20%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
