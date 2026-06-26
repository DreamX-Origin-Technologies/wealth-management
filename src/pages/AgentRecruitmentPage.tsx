import { Link } from "react-router-dom";
import { Award, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AgentRecruitmentPage() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_40%,#f8fafc_100%)] text-foreground">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/60 bg-white/90 p-8 shadow-xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Insurance Career Academy</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Build a professional career with Sakthi Financial Doctor</h1>
              <p className="text-lg leading-8 text-muted-foreground">Become a trusted LIC advisor and financial consultant through practical training, personal mentoring, and real-life insurance leadership.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "38 Years of Experience", icon: <Award className="h-5 w-5 text-amber-600" /> },
                  { title: "LIC Chairman's Club – 31 Years", icon: <ShieldCheck className="h-5 w-5 text-emerald-600" /> },
                  { title: "MDRT Member – 15 Years", icon: <Sparkles className="h-5 w-5 text-rose-600" /> },
                  { title: "Practical Agent Mentoring", icon: <HeartHandshake className="h-5 w-5 text-blue-600" /> },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-3xl border border-border/40 bg-slate-50 p-5">
                    <div className="mt-1 rounded-2xl bg-white p-2 text-amber-700 shadow-sm">{item.icon}</div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/financial-doctor" className="w-full sm:w-auto">
                  <Button className="w-full">Meet Your Financial Doctor</Button>
                </Link>
                <a href="tel:+919443243223" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full">Call to Join</Button>
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-border/50 bg-amber-50/70 p-8 text-foreground shadow-sm">
              <h2 className="text-2xl font-bold">Course Modules</h2>
              <div className="mt-6 space-y-4">
                {[
                  "Insurance Fundamentals",
                  "Customer Relationship Skills",
                  "Financial Planning Concepts",
                  "Sales & Communication Skills",
                  "Digital Marketing for Advisors",
                  "Business Building Strategies",
                ].map((module) => (
                  <div key={module} className="rounded-3xl border border-white/80 bg-white p-4">
                    <p className="text-sm font-semibold text-foreground">{module}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
