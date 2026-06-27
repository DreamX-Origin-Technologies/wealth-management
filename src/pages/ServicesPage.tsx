import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Award, BarChart3, CalendarCheck, HelpCircle, LifeBuoy, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <BarChart3 className="h-5 w-5 text-amber-600" />,
    title: "Mutual Fund Investments",
    description: "Goal-based SIP prescriptions for education, retirement, and wealth creation.",
    href: "/financial-doctor",
  },
  {
    icon: <LifeBuoy className="h-5 w-5 text-emerald-600" />,
    title: "Protection Planning",
    description: "Life, health, and general insurance to make your finances secure.",
    href: "/life-health",
  },
  {
    icon: <CalendarCheck className="h-5 w-5 text-rose-600" />,
    title: "Retirement Planning",
    description: "A future freedom clinic for long-term income and tax efficiency.",
    href: "/financial-doctor",
  },
  {
    icon: <Users className="h-5 w-5 text-sky-600" />,
    title: "Agent Training",
    description: "Build your career as a LIC professional with mentorship and real field support.",
    href: "/agent-recruitment",
  },
  {
    icon: <HelpCircle className="h-5 w-5 text-violet-600" />,
    title: "Financial Health Checkup",
    description: "A comprehensive diagnostic review to identify gaps and strengths.",
    href: "/financial-doctor",
  },
];

const serviceBenefits = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    title: "Personalized Protection",
    description: "Life, health, and general insurance plans designed for your family, income, and legacy.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-amber-600" />,
    title: "Smart Investment Guidance",
    description: "SIP and mutual fund advice with disciplined planning and clear milestones.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-rose-600" />,
    title: "Simplified Planning",
    description: "A structured process that makes complex financial decisions easy and practical.",
  },
];

const howItWorks = [
  {
    icon: <Award className="h-5 w-5 text-primary" />,
    title: "Step 1: Discovery",
    description: "We review your goals, family priorities, and existing policies in a single session.",
  },
  {
    icon: <CalendarCheck className="h-5 w-5 text-rose-600" />,
    title: "Step 2: Diagnosis",
    description: "A gap analysis identifies protection shortfalls, investment opportunities, and tax advantages.",
  },
  {
    icon: <LifeBuoy className="h-5 w-5 text-emerald-600" />,
    title: "Step 3: Recommendation",
    description: "You get a clear, prioritized action plan with policy choices and investment roadmaps.",
  },
  {
    icon: <Users className="h-5 w-5 text-sky-600" />,
    title: "Step 4: Support",
    description: "Ongoing service for policy follow-up, fund reviews, and claim assistance.",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services | Sakthi Financial Doctor";
  }, []);

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
                <Link to={service.href}>
                  <Button variant="outline" className="mt-6 w-full sm:w-auto">Learn more</Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-border/50 bg-slate-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-600">Why choose us</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground">A service-led approach with clarity, care, and follow-through</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">We combine LIC experience, mutual fund expertise, and a family-first philosophy to deliver reliable plans that work for your life stage.</p>
              <div className="mt-8 space-y-4">
                {serviceBenefits.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-border/40 bg-white p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">{item.icon}</div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/50 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-600">How it works</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground">A smooth process for every family</h2>
              <div className="mt-8 space-y-4">
                {howItWorks.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-border/40 bg-slate-50 p-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/5 text-primary">{item.icon}</div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/financial-doctor">
                  <Button className="w-full">Start a Service Review</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
