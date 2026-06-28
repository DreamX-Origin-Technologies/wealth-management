export default function OwnerSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <div className="rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50">
          <img
            src="/Founder.png"
            alt="Sakthi Financial Doctor"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Know the Owner</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Sakthi Financial Doctor — Founder & Financial Doctor
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            With 38 years of trusted service, Sakthi leads the firm with a vision that blends protection, wealth creation, and spiritual wellbeing.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-border/50 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground">LIC Chairman's Club</p>
              <p className="mt-2 text-sm text-muted-foreground">31 years of consistent performance.</p>
            </div>
            <div className="rounded-3xl border border-border/50 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground">MDRT USA Member</p>
              <p className="mt-2 text-sm text-muted-foreground">15 years of global advisory excellence.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-amber-200/70 bg-amber-50/80 p-6">
            <p className="font-semibold text-foreground">"My mission is not merely to sell insurance, but to protect families, create wealth, and inspire lives."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
