import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Award, BarChart3, Calculator, CalendarCheck, GraduationCap,  HelpingHand, LifeBuoy, LineChart, ShieldCheck, Sparkles, Umbrella, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "LIC Policies",
      description: "Complete life, term, pension, and child plans tailored to provide solid safety nets for your family's future."
    },
    {
      icon: <LineChart className="h-6 w-6 text-indigo-600" />,
      title: "Mutual Fund Investments",
      description: "Capital growth via SIP and Lumpsum options, tailored to map your long-term goals and risk profile (ARN Holder)."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-rose-600" />,
      title: "Vehicle Insurance Solutions",
      description: "Complete protection for cars, two-wheelers, commercial vehicles, and EVs with quick claim support and personalized guidance."
    },
    {
      icon: <Umbrella className="h-6 w-6 text-emerald-600" />,
      title: "Health & General Insurance",
      description: "Top-tier health insurance covers and general asset shielding to insulate your savings against medical emergencies."
    },
    {
      icon: <Calculator className="h-6 w-6 text-amber-600" />,
      title: "Tax & Retirement Planning",
      description: "Optimize your tax outlays and build high-yield corpus growth strategies to enjoy a stress-free retired life."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-pink-600" />,
      title: "LIC Agent Training & Recruitment",
      description: "Recruiting new LIC agents and providing professional training in Tiruvannamalai to build high-growth financial careers."
    },
    {
      icon: <HelpingHand className="h-6 w-6 text-blue-600" />,
      title: "Free Financial Consultation",
      description: "Expert audit of your current insurance policies, mutual fund health, and advice on wealth creation steps."
    }
];

const serviceDetails = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "LIC Policies",
    intro: "We guide families toward life insurance plans that provide long-term protection, savings discipline, and financial security for dependents.",
    points: ["Life insurance plans for family protection", "Term plans for high cover at affordable premiums", "Pension and child-focused plans for future milestones"],
  },
  {
    icon: <LineChart className="h-6 w-6 text-indigo-600" />,
    title: "Mutual Fund Investments",
    intro: "Our investment planning focuses on aligning your goals, risk appetite, and time horizon with disciplined SIP and lump-sum strategies.",
    points: ["Goal-based SIP and lump-sum planning", "Portfolio guidance tailored to your risk profile", "Long-term wealth building with regular review"],
  },
  {
    icon: <Umbrella className="h-6 w-6 text-emerald-600" />,
    title: "Health & General Insurance",
    intro: "We help you secure your health and assets with insurance that reduces financial stress during medical or unforeseen emergencies.",
    points: ["Health coverage for medical emergencies and hospital expenses", "Protection for property, vehicles, and valuable assets", "Support for choosing the right plan and policy structure"],
  },
  {
    icon: <Calculator className="h-6 w-6 text-amber-600" />,
    title: "Tax & Retirement Planning",
    intro: "Smart tax planning and retirement strategies help you preserve savings, optimize returns, and create a comfortable post-retirement life.",
    points: ["Tax-efficient investment and savings planning", "Retirement corpus planning for future stability", "Strategies to reduce financial pressure in later years"],
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-pink-600" />,
    title: "LIC Agent Training & Recruitment",
    intro: "We support aspiring financial professionals with training, recruitment guidance, and mentorship to build a strong career in insurance services.",
    points: ["Structured recruitment guidance for new agents", "Professional training for confidence and compliance", "Mentorship for long-term growth in the insurance field"],
  },
  {
    icon: <HelpingHand className="h-6 w-6 text-blue-600" />,
    title: "Free Financial Consultation",
    intro: "A complimentary review of your current plans helps uncover gaps, improve protection, and create a practical next-step financial roadmap.",
    points: ["Review of existing insurance and investment plans", "Clear recommendations based on your life stage", "Guidance on protection, wealth, and retirement planning"],
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
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-rose-200/70 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-8 shadow-sm sm:p-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-600">Vehicle Insurance Solutions</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Drive Safe. Drive Protected.</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">Complete protection for every journey with reliable plans for cars, two-wheelers, commercial vehicles, and electric vehicles.</p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {[
                { title: "Car Insurance", description: "Comprehensive coverage against accidents, theft, fire, natural disasters, and third-party liabilities." },
                { title: "Two Wheeler Insurance", description: "Affordable protection for motorcycles and scooters with comprehensive and third-party insurance options." },
                { title: "Commercial Vehicle Insurance", description: "Insurance solutions for trucks, buses, taxis, vans, and all commercial vehicles." },
                { title: "Electric Vehicle Insurance", description: "Specialized protection for electric cars, bikes, and commercial EVs." },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-border/40 bg-white/90 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-border/40 bg-white/90 p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground">Our Vehicle Insurance Services</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
                {[
                  "New Vehicle Insurance",
                  "Insurance Renewal",
                  "Comprehensive Insurance",
                  "Third Party Insurance",
                  "Zero Depreciation Cover",
                  "Engine Protection Cover",
                  "Roadside Assistance",
                  "Personal Accident Cover",
                  "No Claim Bonus (NCB) Protection",
                  "Fast & Hassle-Free Claim Assistance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-rose-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.5rem] border border-border/40 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-600">Why choose us</p>
                <h3 className="mt-4 text-2xl font-bold text-foreground">Trusted guidance with real support</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                  {[
                    "38+ Years of Professional Experience",
                    "Trusted by 3500+ Happy Families",
                    "Best Insurance Solutions",
                    "Quick Policy Issuance",
                    "Claim Support from Start to Finish",
                    "Personalized Customer Service",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-emerald-600">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-border/40 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-600">Consult your Financial Doctor</p>
                <h3 className="mt-4 text-2xl font-bold text-foreground">Sakthi Financial Doctor</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">Chief Life Insurance Advisor<br />Financial Doctor<br />Vehicle Insurance Consultant</p>
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p>📱 +91 94432 43223</p>
                  <p>📱 +91 93619 95323</p>
                  <p>☎️ +91 4175 223223</p>
                  <p>📧 sakthiaol@gmail.com</p>
                  <p>📍 64/19, Gandhi Nagar Bye Pass Road, Opp. Sakthi Vinayagar Koil, Tiruvannamalai – 606601</p>
                </div>
              </div>
            </div>

            <p className="mt-10 text-center text-xl font-semibold italic text-foreground/80">“Every Journey Deserves Complete Protection.”</p>
            <p className="mt-3 text-center text-lg font-semibold text-rose-600">Insure Today. Drive with Confidence.</p>
          </div>

          <div className="mt-14 rounded-[2rem] border border-border/50 bg-slate-50 p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-600">Service Details</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground">Every service is explained with clarity and care</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">From protection plans to investment guidance, each offering is designed to meet your stage of life with practical support and transparent advice.</p>
            </div>
            <div className="mt-8 grid gap-6">
              {serviceDetails.map((service) => (
                <div key={service.title} className="rounded-[1.5rem] border border-border/40 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-foreground shadow-sm">
                      {service.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.intro}</p>
                      <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-1 text-rose-600">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
