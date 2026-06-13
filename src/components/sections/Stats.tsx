export default function Stats() {
  const stats = [
    { 
      value: "₹1 Cr+", 
      label: "Annual Premium Business", 
      desc: "Generates an annual premium business exceeding ₹1 crore",
      gradient: "from-violet-500/10 to-indigo-500/10"
    },
    { 
      value: "3,500+", 
      label: "Happy Customers", 
      desc: "Trusted relationships built on transparency and performance",
      gradient: "from-emerald-500/10 to-teal-500/10"
    },
    { 
      value: "35+", 
      label: "Years of Experience", 
      desc: "Expert partners coming from leading financial institutions",
      gradient: "from-amber-500/10 to-orange-500/10"
    },
    { 
      value: "24/7", 
      label: "Dedicated Client Support", 
      desc: "Direct access to your advisor team whenever you need it",
      gradient: "from-blue-500/10 to-sky-500/10"
    },
  ];

  return (
    <section id="stats" className="py-20 sm:py-28 bg-white border-y border-border/40 relative overflow-hidden">
      {/* Background Decorative Blob for texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-80 w-[600px] rounded-full bg-indigo-50/30 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
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
              className="relative rounded-tl-3xl rounded-br-3xl border border-black/[0.04] bg-gradient-to-br from-white to-gray-50/30 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:border-primary/20 group overflow-hidden"
            >
              {/* Corner Glow Shape */}
              <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br ${stat.gradient} blur-xl group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none`} />

              {/* Top accent pill indicating index */}
              <div className="w-8 h-1 bg-gradient-to-r from-primary to-indigo-500 rounded-full mb-6 group-hover:w-16 transition-all duration-500" />

              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-1">
                <span className="bg-gradient-to-r from-foreground to-foreground group-hover:from-primary group-hover:to-indigo-500 bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {stat.value}
                </span>
              </p>
              
              <p className="text-base font-bold text-foreground mt-4">
                {stat.label}
              </p>
              
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
