import TradeCFDHero from "../Components/TradeCFDHero";
import TradingStatsRow from "../Components/TradingStatsRow";
import WhatIsIndicesTrading from "../Components/WhatIsIndicesTrading";
import WhyTradeIndices from "../Components/WhyTradeIndices";
import TradingTechnologySection from "../Components/TradingTechnologySection";
import TestimonialsSection from "../Components/TestimonialsSection";
import ExecutionReliabilitySection from "../Components/ExecutionReliabilitySection";
import FAQsSection from "../Components/FAQsSection";

const Cryptocurrencies = () => {
  return (
    <>
        <TradeCFDHero />
        <TradingStatsRow />
        <WhatIsIndicesTrading />
        <WhyTradeIndices />
        <TestimonialsSection />
        <TradingTechnologySection/>
        <ExecutionReliabilitySection />     
        <FAQsSection />           
    </> 
  );
};

export default Cryptocurrencies;
