import { ShieldCheck, LineChart, Umbrella, Calculator, GraduationCap, HelpingHand } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "LIC Policies",
      desc: "Complete life, term, pension, and child plans tailored to provide solid safety nets for your family's future."
    },
    {
      icon: <LineChart className="h-6 w-6 text-indigo-600" />,
      title: "Mutual Fund Investments",
      desc: "Capital growth via SIP and Lumpsum options, tailored to map your long-term goals and risk profile (ARN Holder)."
    },
    {
      icon: <Umbrella className="h-6 w-6 text-emerald-600" />,
      title: "Health & General Insurance",
      desc: "Top-tier health insurance covers and general asset shielding to insulate your savings against medical emergencies."
    },
    {
      icon: <Calculator className="h-6 w-6 text-amber-600" />,
      title: "Tax & Retirement Planning",
      desc: "Optimize your tax outlays and build high-yield corpus growth strategies to enjoy a stress-free retired life."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-pink-600" />,
      title: "LIC Agent Training & Recruitment",
      desc: "Recruiting new LIC agents and providing professional training in Tiruvannamalai to build high-growth financial careers."
    },
    {
      icon: <HelpingHand className="h-6 w-6 text-blue-600" />,
      title: "Free Financial Consultation",
      desc: "Expert audit of your current insurance policies, mutual fund health, and advice on wealth creation steps."
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-sm font-semibold tracking-wider uppercase text-primary">Services Offered</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Financial Doctor services for every stage of life
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From protection to retirement, each solution is designed to bring clarity, comfort, and confidence to your family’s future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="relative rounded-[1.7rem] border border-border/40 bg-card/70 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 group overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity">
                <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-tr from-primary/40 to-transparent blur-3xl mix-blend-screen" />
                <div className="absolute -right-24 -bottom-24 h-48 w-48 rounded-full bg-gradient-to-bl from-amber-200/30 to-transparent blur-3xl mix-blend-screen" />
              </div>

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
