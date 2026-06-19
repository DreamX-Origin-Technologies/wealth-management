import { Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
import MotionCarousel from "@/components/ui/MotionCarousel";

const testimonials = [
  {
    quote:
      `Thank you so much for being a wonderful wealth advisor. Because of your guidance, I have not only learned how to manage my money wisely but also taken better care of my health.
With your support, I am saving more and feeling stronger both financially and physically. I truly appreciate your advice, which has helped me find balance and confidence in life.
Thank you once again for showing me the right path, Sir.`,
    name: "Sri.E.Ramajayam",
    title: "Client since 2014",
  },
  {
    quote:
      "Thank you so much for your valuable financial advice. Because of your guidance, I have started saving more money and making better decisions in my life.",
    name: "S. Karthik",
    title: "Business Owner, Tiruvannamalai",
  },
  {
    quote:
      `Thank you so much for your valuable guidance and sincere advice in financial planning. Your knowledge, patience, and support have made a meaningful difference in my understanding of managing finances wisely.I truly appreciate your time, care, and the way you simplified complex topics for me. Your guidance is not just professional—it's inspiring.Wishing you continued success, good health, and happiness always. May you keep guiding many more lives towards financial wisdom and stability.With heartfelt thanks.`,
    name: "M. Sudha",
    title: "Home-maker",
  },
  {
    quote:
      `Thank you so much for your valuable financial advice. Because of your guidance, I have started saving more money and making better decisions in my life.I truly appreciate your support and the right path you showed me. Your advice has made a real difference, and I'm grateful for your time and effort.`,
    name: "Jan",
    title: "Business Owner",
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
