import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="bg-card border-t border-border/40 py-16 text-muted-foreground relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo-custom.png" alt="Sakthi Financial Doctor" className="h-10 w-auto sm:h-12" />
              <span className="font-sans text-xl font-bold tracking-tight text-foreground">
                SAKTHI FINANCIAL DOCTOR
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Protecting families, building wealth, and inspiring lives through personalized financial guidance and service.
            </p>
            <a
              href="https://wa.me/919443243223?text=Hello%20Sakthi%20Financial%20Doctor%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_10px_24px_-14px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Service Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/life-health" className="hover:text-foreground transition-colors">LIC Policies & Life Protection</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Mutual Fund Investments</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Vehicle Insurance Solutions</Link></li>
              <li><Link to="/life-health" className="hover:text-foreground transition-colors">Health & General Insurance</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Tax & Retirement Planning</Link></li>
              <li><Link to="/consultation" className="hover:text-foreground transition-colors">Free Financial Consultation</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/financial-doctor" className="hover:text-foreground transition-colors">Financial Doctor</Link></li>
              <li><Link to="/agent-recruitment" className="hover:text-foreground transition-colors">Agent Recruitment</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services Overview</Link></li>
              <li><Link to="/consultation" className="hover:text-foreground transition-colors">Book a Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider">Office Address</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=64%2F19%2C+Gandhi+Nagar+Bye+Pass+Road%2C+Opp.+Sakthi+Vinayagar+Koil%2C+Tiruvannamalai+606601"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm leading-relaxed hover:text-foreground transition-colors"
                >
                  64/19, Gandhi Nagar Bye Pass Road,<br />Opp. Sakthi Vinayagar Koil,<br />Tiruvannamalai – 606601
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+919443243223" className="hover:text-foreground transition-colors">
                  +91 94432 43223
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:sakthiaol@gmail.com" className="hover:text-foreground transition-colors">
                  sakthiaol@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclosures & Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 text-xs space-y-4 text-muted-foreground/85 leading-relaxed">
          <p>
            <strong>Regulatory Disclosures:</strong> Sakthi Financial Doctor (M.A., CIS., DME., FChFP., D.Acu., CIP) is an IRDAI Certified Chief Life Insurance Advisor (LIC of India) and a registered Mutual Fund Distributor (ARN Holder). Mutual Fund investments are subject to market risks; please read all scheme-related documents carefully before investing. Insurance is the subject matter of solicitation.
          </p>
          <p>
            Past performance of mutual funds does not guarantee future results. Insurance policies carry specific terms, exclusions, and conditions. All advisements are conducted under ethical fiduciary standards matching Chairman's Club and MDRT USA guidelines.
          </p>
          <p className="pt-2 text-center text-[11px] text-muted-foreground/60">
            &copy; {currentYear} Sakthi Financial Doctor. All rights reserved.
            
            <span className="mx-1">|</span>
            
            <a
              href="https://www.dreamxorigin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Developed by Dream X Origin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
