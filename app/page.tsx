import Hero from "@/app/components/Hero";
import Divider from "@/app/components/Divider";
import AboutUs from "@/app/components/AboutUs";
import Feature from "./components/Feature";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <AboutUs />
      <Divider />
      <Feature />
    </main>
  );
}
