import TradeCFDHero from "../components/TradeCFDHero";
import TradingStatsRow from "../components/TradingStatsRow";
import WhatIsIndicesTrading from "../components/WhatIsIndicesTrading";
import WhyTradeIndices from "../components/WhyTradeIndices";
import TradingTechnologySection from "../components/TradingTechnologySection";
import TestimonialsSection from "../components/TestimonialsSection";

import CommodityExposure from "../components/CommodityExposure";
import FAQsSection from "../components/FAQsSection";
const Commodities = () => {
  return (
    <>
        <TradeCFDHero />
        <TradingStatsRow />
        <WhatIsIndicesTrading />
        <WhyTradeIndices />
         <TradingTechnologySection/>
         <TestimonialsSection />
         <CommodityExposure />
         <FAQsSection />
          
    </> 
  );
};

export default Commodities;
