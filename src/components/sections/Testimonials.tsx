import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import MotionCarousel from "@/components/ui/MotionCarousel";

const testimonials = [
  {
    quote:
      "Sakthi Sir transformed our family’s protection plan with a practical, caring approach. His advice gave us much-needed confidence in our LIC and mutual fund decisions.",
    name: "R. Priya",
    title: "Client since 2014",
  },
  {
    quote:
      "The guidance from Sakthi helped me secure the right health cover and build a steady long-term investment path. I appreciate his attention to detail and follow-through.",
    name: "S. Karthik",
    title: "Business Owner, Tiruvannamalai",
  },
  {
    quote:
      "He explains every policy clearly and never rushes decisions. Exceptional advisor with the right mix of empathy and expertise.",
    name: "M. Sudha",
    title: "Home-maker",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-br from-amber-50 via-rose-50 to-emerald-50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-amber-600">Client Satisfaction</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Trusted Advice, Proven Outcomes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real clients share how tailored insurance planning and disciplined wealth guidance brought clarity and peace of mind.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <MotionCarousel>
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[2rem] border border-border/50 bg-white/90 p-8 shadow-lg shadow-amber-100/50">
                <div className="flex items-center gap-2 mb-5 text-amber-500">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-base leading-8 text-muted-foreground">“{testimonial.quote}”</p>
                <div className="mt-6 border-t border-border/50 pt-5">
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </MotionCarousel>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-2xl text-sm text-muted-foreground">
            Join the community of families building stable futures with objective advice, clear risk planning, and responsive service.
          </p>
          {/* <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700">
            Book Your Free Review
          </Button> */}
        </div>
      </div>
    </section>
  );
}
