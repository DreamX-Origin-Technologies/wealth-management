import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Founder from "@/components/sections/Founder";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans relative overflow-hidden">
      {/* Background Elements Container (z-0 sits on top of parent's background color) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Premium Global Background Grid Lines */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]" /> */}
        
        {/* Cohesive Global Color-Shifting Blur Orbs */}
        {/* <div className="absolute top-[5%] left-[-15%] h-[600px] w-[600px] rounded-full bg-amber-200/25 blur-[140px]" /> */}
        {/* <div className="absolute top-[25%] right-[-15%] h-[700px] w-[700px] rounded-full bg-rose-200/25 blur-[150px]" /> */}
        {/* <div className="absolute top-[50%] left-[10%] h-[600px] w-[600px] rounded-full bg-emerald-100/20 blur-[130px]" /> */}
        {/* <div className="absolute top-[75%] right-[5%] h-[600px] w-[600px] rounded-full bg-rose-100/20 blur-[140px]" /> */}
        {/* <div className="absolute top-[90%] left-[-5%] h-[500px] w-[500px] rounded-full bg-blue-100/20 blur-[120px]" /> */}
      </div>

      {/* Content wrapper with z-10 to stay on top of the background elements */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          {/* <Stats /> */}
          <Features />
          <Founder />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
