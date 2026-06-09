export default function Stats() {
  const stats = [
    { value: "$15B+", label: "Assets Under Management", desc: "Trusted by over 12,000 high-net-worth clients globally" },
    { value: "99.2%", label: "Client Retention Rate", desc: "Long-term relationships built on transparency and performance" },
    { value: "20+", label: "Average Years Experience", desc: "Our partners come from leading institutional firms" },
    { value: "24/7", label: "Dedicated Client Support", desc: "Direct access to your advisor team whenever you need it" },
  ];

  return (
    <section id="stats" className="py-16 sm:py-24 bg-accent/20 border-y border-border/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-80 w-[600px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Proven Performance & Trust
          </h2>
          <p className="text-lg text-muted-foreground">
            We operate under a pure fiduciary standard, aligning our success completely with yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="relative rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 group"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary rounded-t-xl rounded-b-none transition-all duration-300 group-hover:h-full" />
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
                {stat.value}
              </p>
              <p className="text-base font-semibold text-foreground mt-2">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
