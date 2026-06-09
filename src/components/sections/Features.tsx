import { Briefcase, LineChart, Percent, Coins, Lock, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Bespoke Portfolio Design",
      desc: "Custom asset allocation tailored to your specific risk profile, liquidity needs, and long-term values."
    },
    {
      icon: <Percent className="h-6 w-6 text-indigo-600" />,
      title: "Tax-Efficient Investing",
      desc: "Automated tax-loss harvesting and custom location optimization to maximize your net take-home returns."
    },
    {
      icon: <Coins className="h-6 w-6 text-emerald-600" />,
      title: "Estate & Trust Planning",
      desc: "Work alongside our experts to build generational wealth frameworks, private trusts, and philanthropic paths."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-amber-600" />,
      title: "Alternative Asset Access",
      desc: "Direct access to exclusive real estate funds, private equity placements, and high-growth venture capital."
    },
    {
      icon: <Users className="h-6 w-6 text-pink-600" />,
      title: "Dedicated Advisory Council",
      desc: "Unlimited sessions with certified advisors who understand tax law, estate execution, and macroeconomics."
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: "Institutional-Grade Security",
      desc: "Multi-layered encryption, dual-factor authentication, and assets held securely with leading global custodians."
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-28 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary">Core Offerings</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Bespoke Services for High-Net-Worth Individuals
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every family and wealth portfolio is unique. We provide tailored solutions to protect, grow, and transfer your assets across generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl border border-border/40 bg-card/50 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/10 group"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-accent/40 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
