import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border/60 bg-gradient-to-b from-card to-accent/20 p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
          {/* Inner blobs */}
          <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[80px]" />
          <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[80px]" />

          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Ready to Secure Your Financial Legacy?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Schedule a complimentary consultation with a Senior Wealth Partner today. No commitments, just clear insights.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center space-y-2 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 animate-in fade-in zoom-in-95">
                <CheckCircle className="h-10 w-10" />
                <p className="font-bold text-lg">Consultation Requested Successfully!</p>
                <p className="text-sm text-emerald-600">A Senior Wealth Partner will contact you within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your work or personal email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-border/80 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm sm:text-base"
                />
                <Button type="submit" className="h-12 px-6 rounded-xl font-semibold group flex items-center justify-center">
                  Request Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            )}

            <p className="text-xs text-muted-foreground">
              By requesting a call, you agree to receive financial insights. We value your privacy and never share information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
