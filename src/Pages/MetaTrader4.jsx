
import TradeCFDHero from "../Components/TradeCFDHero";
import WhyTradeCFDs from "../Components/WhyTradeCFDs";
import TestimonialsSlider from "../Components/TestimonialsSection";
import FAQsSection from "../Components/FAQsSection";
import StatsBar from "../Components/StatsBar";
import WhatIsCFDSection from "../Components/WhatIsCFDSection";
import ExecutionReliabilitySection from "../Components/ExecutionReliabilitySection";
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
