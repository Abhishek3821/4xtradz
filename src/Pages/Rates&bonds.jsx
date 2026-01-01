import TradeCFDHero from "../Components/TradeCFDHero";
import TradingStatsRow from "../Components/TradingStatsRow";
import WhatIsIndicesTrading from "../Components/WhatIsIndicesTrading";
import WhyTradeIndices from "../Components/WhyTradeIndices";
import TradingTechnologySection from "../Components/TradingTechnologySection";
import TestimonialsSection from "../Components/TestimonialsSection";
import SwitchToCMC from "../Components/SwitchToCMC";
import FAQsSection from "../Components/FAQsSection";

const RatesAndBonds = () => {
  return (
    <>
        <TradeCFDHero />
        <TradingStatsRow />
        <WhatIsIndicesTrading />
        <WhyTradeIndices />
        <TradingTechnologySection/>
        <TestimonialsSection />
        <SwitchToCMC />
        <FAQsSection />           
    </> 
  );
};

export default RatesAndBonds;
