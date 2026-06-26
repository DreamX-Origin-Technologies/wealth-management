import { BarChart3, CalendarCheck, HelpCircle, LifeBuoy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <BarChart3 className="h-5 w-5 text-amber-600" />,
    title: "Mutual Fund Investments",
    description: "Goal-based SIP prescriptions for education, retirement, and wealth creation.",
  },
  {
    icon: <LifeBuoy className="h-5 w-5 text-emerald-600" />,
    title: "Protection Planning",
    description: "Life, health, and general insurance to make your finances secure.",
  },
  {
    icon: <CalendarCheck className="h-5 w-5 text-rose-600" />,
    title: "Retirement Planning",
    description: "A future freedom clinic for long-term income and tax efficiency.",
  },
  {
    icon: <Users className="h-5 w-5 text-sky-600" />,
    title: "Agent Training",
    description: "Build your career as a LIC professional with mentorship and real field support.",
  },
  {
    icon: <HelpCircle className="h-5 w-5 text-violet-600" />,
    title: "Financial Health Checkup",
    description: "A comprehensive diagnostic review to identify gaps and strengths.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(135deg,#fbfbff_0%,#f7f8fd_45%,#eef6ff_100%)] text-foreground">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/60 bg-white/90 p-8 shadow-xl sm:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-600">Services</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">A complete financial experience with Sakthi Financial Doctor</h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">Take control of your finances with services designed for protection, wealth, and legacy building.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.75rem] border border-border/40 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-foreground shadow-sm">
                  {service.icon}
                </div>
                <h2 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                <Button variant="outline" className="mt-6">Learn more</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
