import TradeCFDHero from "../components/TradeCFDHero";
import TradingStatsRow from "../components/TradingStatsRow";
import WhatIsIndicesTrading from "../components/WhatIsIndicesTrading";
import WhyTradeIndices from "../components/WhyTradeIndices";
import TradingTechnologySection from "../components/TradingTechnologySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ExecutionReliabilitySection from "../components/ExecutionReliabilitySection";
import FAQsSection from "../components/FAQsSection";

const Forex = () => {
  return (
    <>
        <TradeCFDHero />
        <TradingStatsRow />
        <WhatIsIndicesTrading />
        <WhyTradeIndices />
        <TradingTechnologySection/>
        <ExecutionReliabilitySection />
        <FAQsSection />
    </> 
  );
};

export default Forex;
