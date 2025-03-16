import About from "@/components/body/About";
import Hero from "@/components/header/Hero";
import MostPlayedSection from "@/components/slider/MostPlayedSection";
import TrendingTopics from "@/components/body/TrendingTopics";
import ConversationList from "@/components/body/ConversationList";
import EcoFriendlyCards from "@/components/body/EcoFriendlyCards";
import InstituteSection from "@/components/body/InstituteSection";
import Footer from "@/components/footer/Footer";
import DonateUsFooter from "@/components/body/DonateUsFooter";

export default function HomePage() {
  return (
    <div>
      <Hero />
      {/* <MostPlayedSection/>
      <About/>
      <TrendingTopics/>
      <ConversationList/>
      <EcoFriendlyCards/>
      <InstituteSection/>
      <DonateUsFooter/> */}
    </div>
  );
}
