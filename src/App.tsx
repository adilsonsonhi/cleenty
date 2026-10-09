import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LaundryPickup } from "@/components/LaundryPickup";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { BackToTop } from "@/components/ui/back-to-top";
import {
  previewGoogleReviewSummary,
  previewTestimonials,
} from "@/data/testimonials.preview";

// Em desenvolvimento mostra dados de exemplo; em produção usa apenas os dados reais.
const testimonialsPreview = import.meta.env.DEV
  ? { testimonials: previewTestimonials, summary: previewGoogleReviewSummary }
  : {};

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Testimonials {...testimonialsPreview} />
      <LaundryPickup />
      <Services />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
