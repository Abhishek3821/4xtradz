import React from "react";
import TradeCFDHero from "../components/TradeCFDHero";
import StatsBar from "../components/StatsBar";
import WhatIsCFDSection from "../components/WhatIsCFDSection";
import WhyTradeCFDs from "../components/WhyTradeCFDs";  
import TestimonialsSection from "../components/TestimonialsSection";
import TradingTechnologySection from "../components/TradingTechnologySection";
import ExecutionReliabilitySection from "../components/ExecutionReliabilitySection";
import BecomePartnerSection from "../components/BecomePartnerSection";
import FAQsSection from "../components/FAQsSection";


const CFDtrading = () => {
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

export default CFDtrading;
