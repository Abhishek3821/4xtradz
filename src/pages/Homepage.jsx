import ExecutionReliabilitySection from "../components/ExecutionReliabilitySection";
import StatsBar from "../components/StatsBar";
import TradeCFDHero from "../components/TradeCFDHero";
import TradingTechnologySection from "../components/TradingTechnologySection";
import WhyTradeCFDs from "../components/WhyTradeCFDs";
import TestimonialsSection from "../components/TestimonialsSection";
import JoinTraders from "../components/JoinTrader";
import BecomePartnerSection from "../components/BecomePartnerSection";
import FAQsSection from "../components/FAQsSection";


const Homepage = () => {
  return (
    <>
      <TradeCFDHero />
      <StatsBar/>
      <WhyTradeCFDs />
      <TradingTechnologySection />  
      <ExecutionReliabilitySection />
      <TestimonialsSection />
      <JoinTraders/>
      <BecomePartnerSection/>
      <FAQsSection/>
    </>
  );
};

export default Homepage;
