
import TradeCFDHero from "../components/TradeCFDHero";
import WhyTradeCFDs from "../components/WhyTradeCFDs";
import TestimonialsSlider from "../components/TestimonialsSection";
import FAQsSection from "../components/FAQsSection";
import StatsBar from "../components/StatsBar";
import WhatIsCFDSection from "../components/WhatIsCFDSection";
import ExecutionReliabilitySection from "../components/ExecutionReliabilitySection";
const MetaTrader4 = () => {
  return (
    <>
        <TradeCFDHero />
        <StatsBar />
          <WhatIsCFDSection />
          <WhyTradeCFDs />
           <ExecutionReliabilitySection />
          <TestimonialsSlider />
           <WhatIsCFDSection />
          <FAQsSection />
          
    </>
  );
};

export default MetaTrader4;
