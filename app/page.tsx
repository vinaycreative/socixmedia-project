import Hero from "@/app/components/Hero"
import Divider from "@/app//components/Divider"
import AboutUs from "@/app/components/AboutUs"
import OurServices from "@/app/components/OurServices"
import CTA from "@/app/components/CTA"
import FAQ from "./components/FAQ"
import Testimonials from "./components/Testimonials"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider data-aos="fade-up" />
      <AboutUs />
      <Divider />
      <OurServices />
      <CTA />
      <FAQ />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  )
}
