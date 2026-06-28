import { Award, Globe, HeartHandshake, ShieldCheck } from "lucide-react";
import { PixelImage } from "@/components/ui/pixel-image"

const highlights = [
  {
    icon: <Award className="h-5 w-5 text-amber-600" />,
    title: "31+ Years Chairman's Club",
    detail: "Consistent LIC excellence recognized for more than three decades.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    title: "MDRT USA Member",
    detail: "15 years of global advisory standing with the Million Dollar Round Table.",
  },
  {
    icon: <Globe className="h-5 w-5 text-rose-600" />,
    title: "International Training",
    detail: "Experience from Thailand, Dubai, Singapore, Malaysia, and Europe.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5 text-fuchsia-600" />,
    title: "Trusted Client Service",
    detail: "Serving 3,500+ clients with ₹1 crore+ annual premium business.",
  },
];

export default function Founder() {
  return (
    <section id="founder" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-sm font-semibold tracking-[0.32em] uppercase text-amber-600">Founder & Advisor</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            SAKTHI FINANCIAL DOCTOR — A Lifetime of Insurance Leadership
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A distinguished LIC advisor, certified mutual fund distributor, and financial consultant with over 37+ years of service across life, health, and general insurance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-border/40 bg-white p-8 shadow-xl shadow-amber-100/50">
            <div className="flex flex-col items-center gap-5 rounded-[2rem] border border-border/40 p-6 shadow-sm sm:flex-col sm:items-center">
               <PixelImage
      src="/Founder.png"
      customGrid={{ rows: 4, cols: 6 }}
      grayscaleAnimation
    />
              <div className="space-y-3 text-center sm:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">SAKTHI FINANCIAL DOCTOR</p>
                <p className="text-2xl font-extrabold tracking-tight text-foreground">
                  M.A., CIS., DME., FChFP., D.Acu., CIP
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4 rounded-3xl border border-amber-200/70 bg-amber-50/80 p-6">
              <p className="text-sm font-semibold text-foreground">Professional Titles</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Chief Life Insurance Advisor – LIC of India</li>
                <li>Certified Mutual Fund Distributor (ARN Holder)</li>
                <li>Financial Consultant | Health & General Insurance Specialist</li>
                <li>LIC Agent Recruitment & Training Centre – Tiruvannamalai</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-border/40 bg-gradient-to-br from-amber-50 via-rose-50 to-emerald-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Founder Story</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  Sakthi Financial Doctor is a highly experienced insurance professional with over 37+ years in life, general, and health insurance. He has maintained exceptional performance through LIC Chairman’s Club and global recognition via MDRT USA.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                Since joining LIC in December 1988, Sakthi N has built a globally respected advisory practice that combines consistency, empathy, and deep technical knowledge.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                He leads two LIC service offices supported by five assistants, allowing high-touch support for clients and efficient policy management.
              </p>
                <p>
                  He is managing more than 3,500 clients and ₹1 crore+ annual premium business, he combines disciplined portfolio guidance with practical protection planning for families across Tamil Nadu.
                </p>
                <p>
                  Beyond advisory work, Sakthi serves as an Art of Living faculty for 13 years and continues to pursue social service, training, and mentorship in the financial services community.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border/40 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-foreground">
                    {item.icon}
                    <p className="text-sm font-semibold">{item.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
