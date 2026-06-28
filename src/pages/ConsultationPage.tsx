import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Free Financial Consultation",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Book Consultation | Sakthi Financial Doctor";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      const message = `Hello, my name is ${formData.name}. I'm interested in ${formData.interest}. Email: ${formData.email}. Mobile: ${formData.phone}.`;
      const url = `https://wa.me/919443243223?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noreferrer");
      setSubmitted(true);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(135deg,#fbfbff_0%,#f7f8fd_45%,#eef6ff_100%)] text-foreground">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-border/40 bg-white/90 p-10 shadow-xl sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                <HeartPulse className="h-5 w-5" />
                Consultation Booking
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Know Your Financial Doctor</h1>
                <p className="text-lg leading-8 text-muted-foreground">Book a private consultation for insurance protection, mutual funds, retirement readiness, or family wealth guidance.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border/40 bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">What to expect</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                    <li>• A thorough review of your policies and investments.</li>
                    <li>• Personalized protection, retirement, and savings advice.</li>
                    <li>• Clear next steps and simplified planning guidance.</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border/40 bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">Consultation benefits</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                    <li>• Confidential financial diagnosis.</li>
                    <li>• Family protection and legacy design.</li>
                    <li>• Easy WhatsApp booking and fast response.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/40 bg-slate-50 p-8 shadow-sm">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">Quick booking form</p>
                <p className="mt-2 text-sm text-muted-foreground">Complete the details and the team will connect with you right away.</p>
              </div>
              {submitted ? (
                <div className="mt-8 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <CheckCircle className="mx-auto h-10 w-10 text-emerald-600" />
                  <p className="mt-4 text-xl font-semibold text-foreground">Request submitted</p>
                  <p className="mt-2 text-sm text-muted-foreground">Thank you! We will contact you on the number provided shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-border/60 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-2xl border border-border/60 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                      placeholder="+91 9xxxx xxxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border border-border/60 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-foreground mb-2">I am interested in</label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full rounded-2xl border border-border/60 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                    >
                      <option>Free Financial Consultation</option>
                      <option>Personal Insurance Planning</option>
                      <option>Mutual Fund & SIP Advice</option>
                      <option>Retirement & Pension Planning</option>
                      <option>LIC Agent Recruitment</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full h-12 rounded-2xl font-semibold flex items-center justify-center gap-2">
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
