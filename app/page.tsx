import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
