import { Atmosphere } from "@/components/site/atmosphere";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { Services } from "@/components/site/services";
import { Technology } from "@/components/site/technology";
import { Doctor } from "@/components/site/doctor";
import { Booking } from "@/components/site/booking";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Atmosphere />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Technology />
        <Doctor />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
