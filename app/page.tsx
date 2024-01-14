import Hero from "@/app/components/Hero"
import Divider from "@/app//components/Divider"
import AboutUs from "@/app/components/AboutUs"
import OurServices from "@/app/components/OurServices"
import CTA from "@/app/components/CTA"

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <AboutUs />
      <Divider />
      <OurServices />
      <CTA />
    </main>
  )
}
