import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border/60 bg-gradient-to-b from-card to-accent/20 p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden" id="training">
          {/* Inner blobs */}
          <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[80px]" />
          <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[80px]" />

          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Meet Your Financial Doctor
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Book a private consultation for insurance protection, mutual fund planning, retirement readiness, or family wealth guidance.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/consultation" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-12 rounded-2xl font-semibold flex items-center justify-center gap-2">
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/consultation" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-12 rounded-2xl font-semibold">
                  Visit Consultation Page
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Your details are safe with us. We operate under strict privacy practices.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
}
