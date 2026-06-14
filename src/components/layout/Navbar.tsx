import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, HeartPulse, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services Offered", href: "#services" },
    { name: "Achievements", href: "#achievements" },
    { name: "Agent Training", href: "#training" },
    { name: "About N. Sakthi", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-primary">
          <HeartPulse className="h-6 w-6 text-primary" />
          <span className="font-sans text-lg sm:text-xl font-bold tracking-tight text-foreground">
            Sakthi Financial Doctor
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+919443243223" className="text-sm font-semibold text-muted-foreground hover:text-foreground flex items-center space-x-1">
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 94432 43223</span>
          </a>
          <a href="#consultation">
            <Button size="sm" className="group">
              Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-b border-border/40 bg-background" id="mobile-menu">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col space-y-2 px-3">
              <a href="tel:+919443243223" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Call +91 94432 43223</span>
                </Button>
              </a>
              <a href="#consultation" onClick={() => setIsOpen(false)} className="w-full">
                <Button className="w-full">
                  Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
