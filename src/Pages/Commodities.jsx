import TradeCFDHero from "../Components/TradeCFDHero";
import TradingStatsRow from "../Components/TradingStatsRow";
import WhatIsIndicesTrading from "../Components/WhatIsIndicesTrading";
import WhyTradeIndices from "../Components/WhyTradeIndices";
import TradingTechnologySection from "../Components/TradingTechnologySection";
import TestimonialsSection from "../Components/TestimonialsSection";

import CommodityExposure from "../Components/CommodityExposure";
import FAQsSection from "../Components/FAQsSection";
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
