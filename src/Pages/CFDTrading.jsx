import React from "react";
import TradeCFDHero from "../Components/TradeCFDHero";
import StatsBar from "../Components/StatsBar";
import WhatIsCFDSection from "../Components/WhatIsCFDSection";
import WhyTradeCFDs from "../Components/WhyTradeCFDs";  
import TestimonialsSection from "../Components/TestimonialsSection";
import TradingTechnologySection from "../Components/TradingTechnologySection";
import ExecutionReliabilitySection from "../Components/ExecutionReliabilitySection";
import BecomePartnerSection from "../Components/BecomePartnerSection";
import FAQsSection from "../Components/FAQsSection";


const CFDTrading = () => {
  return (
    <>
      <TradeCFDHero />
      <StatsBar />
      <WhatIsCFDSection />
      <WhyTradeCFDs />
      <TestimonialsSection />
      <TradingTechnologySection />  
      <ExecutionReliabilitySection />
      <BecomePartnerSection />
      <FAQsSection />
    </>
  );
};

export default CFDTrading;
