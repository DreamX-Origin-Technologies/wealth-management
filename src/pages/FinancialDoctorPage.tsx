import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Clock3,
  HeartHandshake,
  HeartPulse,
  Home,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PixelImage } from "@/components/ui/pixel-image";

type Question = {
  label: string;
  detail: string;
};

const questions: Question[] = [
  { label: "Do you have enough life insurance coverage?", detail: "Protection for your family income" },
  { label: "Is your family medically protected?", detail: "Health cover that works when it matters" },
  { label: "Do you maintain an emergency fund?", detail: "Liquidity for unexpected events" },
  { label: "Are you investing regularly through SIP?", detail: "Disciplined wealth creation" },
  { label: "Is your retirement planned clearly?", detail: "Financial freedom in later life" },
  { label: "Do you have a child education roadmap?", detail: "Future aspirations secured" },
];

const journeySteps = [
  {
    year: "1969",
    title: "Born in Na. Pudur Village",
    text: "A humble beginning shaped by values, discipline, and service.",
  },
  {
    year: "1988",
    title: "Joined LIC of India",
    text: "Began a mission to protect families and create financial confidence.",
  },
  {
    year: "1990 – 2000",
    title: "Built Trust Across Generations",
    text: "Thousands of families trusted him as a dependable financial guide.",
  },
  {
    year: "2009",
    title: "Art of Living Faculty",
    text: "Extended his service through meditation, breathing, and inner peace.",
  },
  {
    year: "Today",
    title: "SAKTHI FINANCIAL DOCTOR",
    text: "38 years of experience, 3500+ families protected, and a life of service.",
  },
];

const doctorCards = [
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Body Checkup",
    text: "Financial health assessment to understand your current position.",
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Financial Prescription",
    text: "Customized insurance, investment, and retirement solutions.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Wellness & Freedom",
    text: "Protection, savings, and growth that create lasting peace of mind.",
  },
];

const solutionCards = [
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Protection", text: "Life and health plans that shield your family." },
  { icon: <Wallet className="h-6 w-6" />, title: "Savings", text: "Guaranteed savings plans for stable future goals." },
  { icon: <BookOpen className="h-6 w-6" />, title: "Child Education", text: "Plans for school, college, and marriage milestones." },
  { icon: <Home className="h-6 w-6" />, title: "Retirement", text: "Retirement income and pension-oriented strategies." },
  { icon: <HeartHandshake className="h-6 w-6" />, title: "Health", text: "Medical protection for emergencies and long-term care." },
  { icon: <BriefcaseBusiness className="h-6 w-6" />, title: "Business Protection", text: "Keyman and business continuity protection solutions." },
];

export default function FinancialDoctorPage() {
  const [answers, setAnswers] = useState<Record<number, "yes" | "no">>({});
  const [monthlySip, setMonthlySip] = useState(5000);
  const [years, setYears] = useState(20);
  const [counts, setCounts] = useState({ years: 0, families: 0, assured: 0, mdrt: 0, chairman: 0 });

  const score = useMemo(() => {
    return Object.values(answers).filter((answer) => answer === "yes").length;
  }, [answers]);

  const futureValue = useMemo(() => {
    const monthlyRate = 0.12 / 12;
    const months = years * 12;
    return monthlySip * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
  }, [monthlySip, years]);

  useEffect(() => {
    document.title = "Financial Doctor | N. Sakthi Wealth Advisory";
    const targets = { years: 38, families: 3500, assured: 100, mdrt: 15, chairman: 31 };
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts({
        years: Math.round(targets.years * eased),
        families: Math.round(targets.families * eased),
        assured: Math.round(targets.assured * eased),
        mdrt: Math.round(targets.mdrt * eased),
        chairman: Math.round(targets.chairman * eased),
      });
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  const toggleAnswer = (index: number, value: "yes" | "no") => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#fffef8_0%,#fdf7ec_45%,#f5fbf7_100%)] text-foreground">
      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                <Award className="h-4 w-4" />
                38 Years of Trust & Financial Protection
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  SAKTHI FINANCIAL DOCTOR
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                  Your family's trusted guide for insurance, mutual funds, retirement planning, health protection, and long-term wealth creation.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#checkup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Take Financial Health Checkup
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://wa.me/919443243223?text=Hello%20Sakthi%20Financial%20Doctor%2C%20I%20would%20like%20to%20consult%20you." target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Talk on WhatsApp
                  </Button>
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/50 bg-white/70 p-4 shadow-sm">
                  <p className="text-2xl font-bold text-foreground">{counts.years}+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-white/70 p-4 shadow-sm">
                  <p className="text-2xl font-bold text-foreground">{counts.families}+</p>
                  <p className="text-sm text-muted-foreground">Families Protected</p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-white/70 p-4 shadow-sm">
                  <p className="text-2xl font-bold text-foreground">₹{counts.assured}+</p>
                  <p className="text-sm text-muted-foreground">Crore Sum Assured</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-amber-200/70 bg-white/80 p-6 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.15)]">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Professional Identity</p>
                  <p className="text-lg font-bold text-foreground">Founder & Financial Doctor</p>
                </div>
                <BadgeCheck className="h-7 w-7 text-amber-600" />
              </div>
              <PixelImage src="/Founder.png" customGrid={{ rows: 4, cols: 6 }} grayscaleAnimation />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/40 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-foreground">MDRT – 15 Years</p>
                  <p className="text-sm text-muted-foreground">Global recognition in the insurance advisory field.</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-foreground">Chairman’s Club – 31 Years</p>
                  <p className="text-sm text-muted-foreground">A legacy of sustained excellence and leadership.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">My Journey of Trust</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">From a village dream to a lifetime mission</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-amber-200/70 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Founder Story</p>
                <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground">
                  <p>Born in 1969 in Na. Pudur Village near Tiruvannamalai, N. Sakthi grew up with simple values, strong ethics, and a deep desire to help people.</p>
                  <p>He joined LIC of India in December 1988 with the mission to protect families and create financial security. Today, that mission has become a life’s purpose.</p>
                  <p>Alongside his professional journey, he serves as an Art of Living faculty and continues to inspire families through service, spirituality, and financial education.</p>
                </div>
              </div>
              <div className="space-y-4">
                {journeySteps.map((step, index) => (
                  <div key={step.year} className="flex gap-4 rounded-[1.5rem] border border-border/50 bg-white/80 p-5 shadow-sm">
                    <div className="flex min-w-[88px] flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                        {index + 1}
                      </div>
                      <div className="mt-2 h-full w-px bg-amber-200" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{step.year}</p>
                      <h3 className="mt-1 text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="checkup" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-8 shadow-sm sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">Financial Health Checkup</p>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Are you financially healthy?</h2>
                <p className="text-lg text-muted-foreground">Answer these key questions and get a quick view of your current financial wellness.</p>
                <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Your wellness score</p>
                    <p className="text-3xl font-black text-emerald-600">{score}/6</p>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-emerald-100">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-amber-500" style={{ width: `${(score / 6) * 100}%` }} />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">A strong score means you are already building a healthier financial future. Even a few “No” answers can be improved with focused planning.</p>
                  {Object.keys(answers).length > 0 && (
                    <div className="mt-6 border-t border-emerald-100 pt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <a
                        href={`https://wa.me/919443243223?text=${encodeURIComponent(
                          `Hello Sakthi Financial Doctor, I took the Financial Health Checkup. My score is ${score}/6.\n\nHere are my answers:\n${questions
                            .map((q, idx) => {
                              const ans = answers[idx];
                              return `- ${q.label}: ${ans ? (ans === "yes" ? "Yes" : "No") : "Not Answered"}`;
                            })
                            .join("\n")}\n\nI would like to get a financial health assessment and custom advice.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full block"
                      >
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-2">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.768.966-.942 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.672-1.612-.92-2.207-.242-.579-.487-.5-.672-.51l-.572-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.71.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12.001 2a9.965 9.965 0 00-7.071 2.929A9.965 9.965 0 002 12.001c0 1.852.487 3.611 1.413 5.163L2 22l4.966-1.38A9.934 9.934 0 0012 22c5.523 0 10-4.477 10-9.999S17.523 2 12.001 2zm0 18.189a8.183 8.183 0 01-4.249-1.17l-.304-.181-2.944.817.787-2.877-.198-.304A8.23 8.23 0 013.812 12.01a8.189 8.189 0 011.69-4.911A8.18 8.18 0 0112 3.81a8.192 8.192 0 017.24 4.673 8.187 8.187 0 01-1.63 8.027 8.192 8.192 0 01-5.608 2.679z" />
                          </svg>
                          Get Advice on WhatsApp
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div key={question.label} className="rounded-2xl border border-border/50 bg-white/80 p-4 shadow-sm">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{question.label}</p>
                        <p className="text-sm text-muted-foreground">{question.detail}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => toggleAnswer(index, "yes")}
                          className={`rounded-full px-3 py-2 text-sm font-semibold transition ${answers[index] === "yes" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700"}`}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleAnswer(index, "no")}
                          className={`rounded-full px-3 py-2 text-sm font-semibold transition ${answers[index] === "no" ? "bg-rose-600 text-white" : "bg-rose-50 text-rose-700"}`}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/50 bg-white p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Academic & Professional Credentials</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Knowledge. Experience. Excellence.</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">A blend of academic grounding, technical knowledge, and financial expertise that supports every client conversation.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                { title: "Academic Excellence", items: ["M.A. – Master of Arts", "DME – Diploma in Mechanical Engineering"] },
                { title: "Financial Planning Excellence", items: ["CIS – Certificate in Insurance Salesmanship", "CIP – Certificate in Insurance Planning", "FChFP – Fellow Chartered Financial Practitioner"] },
                { title: "Holistic Wellness Knowledge", items: ["D.Acu. – Diploma in Acupuncture"] },
              ].map((group) => (
                <div key={group.title} className="rounded-[1.5rem] border border-border/50 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">The Financial Doctor Concept</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Diagnosis, protection, and growth in one place</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {doctorCards.map((card) => (
                <div key={card.title} className="rounded-[1.8rem] border border-border/50 bg-white p-7 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-border/60 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">LIC Solutions</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground">Protection for every stage of life</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">Every family needs a plan that fits their goals. These solutions combine safety, savings, and lifetime value in a simple, premium experience.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {solutionCards.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border/50 bg-slate-50 p-4">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">SIP Calculator</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground">Build wealth step by step</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">A disciplined monthly SIP can create a powerful long-term corpus through compounding and consistency.</p>
              <div className="mt-8 space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-semibold text-foreground">Monthly SIP</label>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-emerald-700">₹{monthlySip}</span>
                  </div>
                  <input type="range" min="1000" max="20000" step="1000" value={monthlySip} onChange={(e) => setMonthlySip(Number(e.target.value))} className="w-full accent-emerald-600" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-semibold text-foreground">Investment Years</label>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-amber-700">{years} years</span>
                  </div>
                  <input type="range" min="5" max="30" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-amber-600" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {[1000, 5000, 10000].map((value) => (
                    <button key={value} type="button" onClick={() => setMonthlySip(value)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${monthlySip === value ? "bg-foreground text-white" : "bg-white text-foreground"}`}>
                      ₹{value} SIP
                    </button>
                  ))}
                </div>
                <div className="rounded-3xl border border-emerald-200 bg-white/90 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Projected Future Value</p>
                  <p className="mt-3 text-4xl font-black text-foreground">₹{futureValue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
                  <p className="mt-2 text-sm text-muted-foreground">Illustrative example based on a 12% annual return assumption.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/50 bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Success Counter</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">A life built on trust, protection, and service</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">Every milestone reflects a deeper commitment to families, clients, and the communities that continue to trust his guidance.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Years Experience", value: counts.years, suffix: "+" },
                  { label: "Families Protected", value: counts.families, suffix: "+" },
                  { label: "Crore Sum Assured", value: counts.assured, suffix: "+" },
                  { label: "MDRT Years", value: counts.mdrt, suffix: "+" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/50 bg-slate-50 p-5">
                    <p className="text-3xl font-black text-foreground">{item.value}{item.suffix}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-8 shadow-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Relationships Beyond Insurance</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">3500+ Families. One Relationship.</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">Trust cannot be bought. It must be earned. For decades, success has been measured not only by policies served, but by the families who return with confidence, gratitude, and continued guidance.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Protecting Families",
                    "Building Relationships",
                    "Creating Wealth",
                    "Serving Generations",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/80 bg-white/80 p-4 text-sm font-semibold text-foreground shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-white/80 bg-white/85 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">What clients say</p>
                <div className="mt-5 space-y-4">
                  {[
                    "He is not our insurance advisor. He is our family financial doctor.",
                    "Whenever we need financial guidance, he is just one phone call away.",
                    "Claims, investments, retirement planning – everything under one roof.",
                  ].map((quote) => (
                    <div key={quote} className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4 text-sm leading-7 text-muted-foreground">
                      “{quote}”
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Guruji & Art of Living</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground">“You will blossom in love and service.”</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">His journey is not only about financial growth; it is also about inner peace, emotional balance, and serving society with compassion.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Meditation', 'Pranayama', 'Stress Management', 'Inner Peace'].map((item) => (
                  <span key={item} className="rounded-full border border-amber-200 bg-white px-3 py-2 text-sm font-semibold text-amber-700">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-border/50 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 text-amber-700">
                <Clock3 className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.3em]">Spiritual + Financial Brand</p>
              </div>
              <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground">
                <p>True wealth is not only money. It is health, harmony, protection, and purpose. That belief shapes every consultation and every recommendation.</p>
                <p>From family protection to wealth creation, N. Sakthi brings both professional clarity and personal compassion into every conversation.</p>
              </div>
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-sm font-semibold text-foreground">“My mission is not merely to sell insurance, but to protect families, create wealth, and inspire lives.”</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-200/70 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-8 text-white shadow-[0_30px_80px_-20px_rgba(2,6,23,0.6)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Meet Your Financial Doctor</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Your financial health matters.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">Protect your family, secure your future, create lasting wealth, and begin your journey towards financial freedom today.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Insurance Review",
                  "Investment Analysis",
                  "Retirement Planning",
                  "Tax Planning",
                  "Wealth Creation",
                  "Family Protection",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/20 px-3 py-2 text-sm font-semibold text-slate-100">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Book Your Complimentary Financial Health Checkup</p>
              <p className="mt-4 text-xl font-semibold text-white">“Just as you consult a doctor for your health, consult a Financial Doctor for your wealth.”</p>
              <div className="mt-6 space-y-3 text-sm text-slate-200">
                <p>📞 +91 94432 43223</p>
                <p>📞 +91 93619 95323</p>
                <p>📧 sakthiaol@gmail.com</p>
              </div>
              <Link to="/consultation" className="inline-block">
                <Button className="mt-6">Book Your Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 bg-slate-950 px-4 py-16 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Premium Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-white">SAKTHI FINANCIAL DOCTOR</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">64/19 Gandhi Nagar Bye Pass Road, Opp. Sakthi Vinayagar Koil, Tiruvannamalai – 606601</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <a href="tel:+919443243223" className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-amber-400 hover:text-white">+91 94432 43223</a>
              <a href="tel:+919361995323" className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-amber-400 hover:text-white">+91 93619 95323</a>
              <a href="mailto:sakthiaol@gmail.com" className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-amber-400 hover:text-white">sakthiaol@gmail.com</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Closing Note</p>
            <p className="mt-4 text-xl font-semibold text-white">“Your Family’s Financial Doctor Since 1988”</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">Whether you need protection, long-term wealth, retirement planning, or guidance for your family, the right consultation can make all the difference.</p>
            <a href="https://wa.me/919443243223?text=Hello%20Sakthi%20Financial%20Doctor%2C%20I%20would%20like%20a%20consultation." target="_blank" rel="noreferrer">
              <Button className="mt-6">Book Consultation</Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
