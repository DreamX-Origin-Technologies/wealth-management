import { Link } from "react-router-dom";
import { Landmark, Mail, Phone, MapPin } from "lucide-react";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="bg-card border-t border-border/40 py-16 text-muted-foreground relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-primary">
              <Landmark className="h-6 w-6 text-primary" />
              <span className="font-sans text-xl font-bold tracking-tight text-foreground">
                Cash Clarity
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Securing generational legacies through custom financial strategies, tax optimization, and direct access to alternative markets.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-foreground transition-colors"><TwitterIcon className="h-5 w-5" /></a>
              <a href="#" className="hover:text-foreground transition-colors"><LinkedinIcon className="h-5 w-5" /></a>
              <a href="#" className="hover:text-foreground transition-colors"><FacebookIcon className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#features" className="hover:text-foreground transition-colors">Portfolio Management</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Tax Strategy</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Estate & Trust Execution</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Alternative Allocations</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#stats" className="hover:text-foreground transition-colors">Firm Performance</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Client Logins</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Forms & Disclosures</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Insights & Articles</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider">Advisor Head Office</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>600 Montgomery St, 41st Floor,<br />San Francisco, CA 94111</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+1 (415) 555-0199</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>advisors@cashclarity.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclosures & Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 text-xs space-y-4 text-muted-foreground/85 leading-relaxed">
          <p>
            <strong>Regulatory Disclosures:</strong> Cash Clarity Management is an SEC Registered Investment Advisor. Registration does not imply a certain level of skill or training. Advisory services are only offered to clients or prospective clients where Cash Clarity and its representatives are properly licensed or exempt from licensure.
          </p>
          <p>
            Past performance is no guarantee of future results. All investments involve risk, including the possible loss of principal. Asset allocation and diversification do not assure a profit or protect against loss in declining markets.
          </p>
          <p className="pt-2 text-center text-[11px] text-muted-foreground/60">
            &copy; {currentYear} Cash Clarity Management LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
