import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Free Financial Consultation"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="consultation" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border/60 bg-gradient-to-b from-card to-accent/20 p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden" id="training">
          {/* Inner blobs */}
          <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[80px]" />
          <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[80px]" />

          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Book a Free Financial Consultation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Plan your retirement, secure family life coverage, grow wealth via mutual funds, or join our professional LIC agency training program.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center space-y-2 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 animate-in fade-in zoom-in-95">
                <CheckCircle className="h-10 w-10" />
                <p className="font-bold text-lg">Request Registered Successfully!</p>
                <p className="text-sm text-emerald-600">N. Sakthi's office will reach out to you at {formData.phone} shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-md mx-auto text-left">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Mobile Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">I am interested in</label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border/80 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm"
                  >
                    <option value="Free Financial Consultation">Free Financial Consultation</option>
                    <option value="LIC Policy Plans (Life/Pension/Child)">LIC Policy Plans (Life/Pension/Child)</option>
                    <option value="Mutual Fund & SIP Investments">Mutual Fund & SIP Investments</option>
                    <option value="Health & General Insurance Cover">Health & General Insurance Cover</option>
                    <option value="LIC Agent Training & Recruitment">LIC Agent Recruitment & Training</option>
                  </select>
                </div>

                <Button type="submit" className="w-full h-12 rounded-xl font-semibold group flex items-center justify-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            )}

            <p className="text-xs text-muted-foreground text-center">
              Your details are safe with us. We operate under strict privacy practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
