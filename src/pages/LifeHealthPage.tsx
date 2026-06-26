import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LifeHealthPage() {
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
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="w-full sm:w-auto">Get Your Protection Plan</Button>
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
                <p>Individual health cover, family floater plans, critical illness policies, and senior citizen protection to protect your loved ones.</p>
                <p>Motor, home, and business asset protection are also available, making your financial ecosystem stronger.</p>
              </div>
              <div className="mt-8 grid gap-4">
                {[
                  "Health Protection",
                  "Motor Insurance",
                  "Home Protection",
                  "Business Protection",
                ].map((item) => (
                  <div key={item} className="rounded-3xl bg-white p-4 shadow-sm">
                    <p className="font-semibold text-foreground">{item}</p>
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
