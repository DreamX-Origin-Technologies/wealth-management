import { useEffect } from "react";
import { ShieldCheck, Stethoscope, Umbrella, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const coverItems = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Term Life Plans",
    description: "High-value coverage with affordable premium options for family security.",
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Health Insurance",
    description: "Family floater and critical illness plans tailored to medical needs.",
  },
  {
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Senior Citizen Support",
    description: "Specialized options that protect elders with affordable benefits.",
  },
  {
    icon: <Umbrella className="h-5 w-5" />,
    title: "Asset Protection",
    description: "Home, motor, and business shielding for financial resilience.",
  },
];

export default function LifeHealthPage() {
  useEffect(() => {
    document.title = "Life & Health Protection | Sakthi Financial Doctor";
  }, []);

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(135deg,#f7f9fc_0%,#eef4ff_40%,#f8fbfb_100%)] text-foreground">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/60 bg-white/90 p-8 shadow-xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">Life & Health Protection</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Secure life and health coverage with Sakthi Financial Doctor</h1>
              <p className="text-lg leading-8 text-muted-foreground">Customized protection for families, senior citizens, and individuals seeking strong financial safety nets.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Term Insurance", text: "Maximum protection at affordable premiums." },
                  { title: "Health Protection", text: "Medical emergencies should not become financial emergencies." },
                  { title: "Child Education Plan", text: "Secure your child's education and future dreams." },
                  { title: "Retirement Plans", text: "Build a financially independent and peaceful retirement." },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-border/40 bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {coverItems.map((item) => (
                  <div key={item.title} className="rounded-[1.75rem] border border-border/40 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">{item.icon}</div>
                    <p className="mt-5 text-xl font-semibold text-foreground">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 rounded-[2rem] border border-border/40 bg-amber-50/80 p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">Our process</p>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-7">
                  <p><strong>Personalized assessment</strong> — we begin by reviewing your family’s protection needs, health records, and financial goals.</p>
                  <p><strong>Solution design</strong> — a customized package of term plans, health insurance, and savings strategies is prepared with clarity and affordability in mind.</p>
                  <p><strong>Reliable service</strong> — from application support to claim assistance, our team stays connected at every stage.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/919443243223?text=Hello%20Sakthi%20Financial%20Doctor%2C%20I%20would%20like%20to%20get%20a%20life%20and%20health%20protection%20plan."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full">Get Your Protection Plan</Button>
                </a>
                <a href="tel:+919443243223" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full">Call +91 94432 43223</Button>
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-border/50 bg-emerald-50/70 p-8 shadow-sm">
              <div className="flex items-center gap-3 text-emerald-700">
                <ShieldCheck className="h-6 w-6" />
                <p className="text-lg font-semibold">Protection Clinic</p>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                <p>From life coverage to health protection, every plan is designed to keep your family safe, your savings secure, and your claims supported without stress.</p>
                <p>Our role is to simplify insurance selection, explain benefits clearly, and make policy servicing easy with local assistance and digital support.</p>
              </div>
              <div className="mt-8 space-y-5">
                <div className="rounded-[1.75rem] border border-white/70 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">Breadth of protection</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-7">Term plans, endowment and money-back policies, child education insurance, health floaters, critical illness cover, and senior citizen benefits.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/70 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">Claims support</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-7">Dedicated assistance for policy issuance, renewal reminders, medical approvals, and claim submission to reduce paperwork and delay.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/70 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-foreground">Family safety review</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-7">A focused review of your current insurance portfolio, protection gaps, and opportunities to strengthen cover for your spouse, children, and parents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
