import { ArrowRight, Shield, TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Announcement Badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm text-primary backdrop-blur-sm">
              <Award className="h-4 w-4" />
              <span className="font-semibold">Voted Best Wealth Platform 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Private Wealth <br className="hidden sm:inline" />
              Management, <br />
              <span className="bg-gradient-to-r from-primary via-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                Reimagined for You
              </span>
            </h1>

            {/* Subtext */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Achieve your long-term financial goals with institutional-grade investment management, estate planning, and bespoke wealth strategy.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base group">
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base hover:bg-muted/50">
                Explore Services
              </Button>
            </div>

            {/* Features list */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-border/40">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <Shield className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Fiduciary Standard</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <TrendingUp className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Custom Portfolios</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center space-x-2 justify-center lg:justify-start">
                <Users className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">1-on-1 Advisors</span>
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
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Total Portfolio Value</p>
                    <p className="text-3xl font-bold tracking-tight text-foreground mt-1">$2,485,910.42</p>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-500 font-semibold px-2.5 py-1 rounded-full text-xs flex items-center">
                    <TrendingUp className="h-3.5 w-3.5 mr-1" />
                    +14.8% YTD
                  </div>
                </div>

                {/* Graph Representation */}
                <div className="h-44 flex items-end justify-between gap-2 pt-4">
                  {[45, 52, 49, 63, 58, 70, 78, 72, 85, 92, 88, 100].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
                      <div 
                        className="w-full rounded-t bg-gradient-to-t from-primary/60 to-primary transition-all duration-1000 hover:opacity-85" 
                        style={{ height: `${val}%` }} 
                      />
                      <span className="text-[9px] font-semibold text-muted-foreground uppercase">{['J','F','M','A','M','J','J','A','S','O','N','D'][idx]}</span>
                    </div>
                  ))}
                </div>

                {/* Asset Allocation */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Asset Allocation</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-accent/40 p-2.5 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">Equities</p>
                      <p className="text-sm font-bold text-foreground mt-0.5">60%</p>
                    </div>
                    <div className="rounded-lg bg-accent/40 p-2.5 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">Fixed Income</p>
                      <p className="text-sm font-bold text-foreground mt-0.5">25%</p>
                    </div>
                    <div className="rounded-lg bg-accent/40 p-2.5 text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">Alternatives</p>
                      <p className="text-sm font-bold text-foreground mt-0.5">15%</p>
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
