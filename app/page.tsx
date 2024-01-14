import Hero from "@/app/components/Hero";
import Divider from "@/app/components/Divider";
import AboutUs from "@/app/components/AboutUs";
import Feature from "./components/Feature";
import FreeQuote from "./components/FreeQuote";
import FAQ from "./components/Faq";
import Testimonials from "@/app/components/Testimonials";
import ContactUs from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <AboutUs />
      <Divider />
      <Feature />
      <FreeQuote />
      <FAQ />
      <Testimonials />
      <Divider />
      <ContactUs />
    </main>
  );
}
