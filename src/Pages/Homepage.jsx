import ExecutionReliabilitySection from "../Components/ExecutionReliabilitySection";
import StatsBar from "../Components/StatsBar";
import TradeCFDHero from "../Components/TradeCFDHero";
import TradingTechnologySection from "../Components/TradingTechnologySection";
import WhyTradeCFDs from "../Components/WhyTradeCFDs";
import TestimonialsSection from "../Components/TestimonialsSection";
import JoinTraders from "../Components/JoinTrader";
import BecomePartnerSection from "../Components/BecomePartnerSection";
import FAQsSection from "../Components/FAQsSection";


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
