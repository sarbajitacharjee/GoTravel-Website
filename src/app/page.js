
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import ExperienceSection from "@/components/ExperienceSection";
import TrendingDestinations from "@/components/TrendingDestinations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularDestinations />
      <ExperienceSection />
      <TrendingDestinations />
      <Footer />
    </main>
  );
}
