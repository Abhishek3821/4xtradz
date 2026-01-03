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
import dashboardImg from "../assets/xz1.webp";


const CFDtrading = () => {
  return (
    <>
       <TradeCFDHero
      title="Trade CFDs with an award-winning broker"
      bullets={[
        "Open an account with one of the industry's leading forex brokers",
        "Trade up to 12,000 instruments",
        "Trade with leverage on forex, indices, commodities, crypto, shares and more",
        "Spreads from 0.0 pips with our FX Active account",
        "Precise charting and advanced tools",
      ]}
      stats={[
        { icon: "✔", text: "Established 1989" },
        { icon: "🌍", text: "1M+ global clients" },
        { icon: "🏦", text: "FTSE 250 group" },
        { icon: "⭐", text: "Excellent 4.3 / 5 Trustpilot" },
      ]}
      primaryCta={{
        label: "Open account",
        onClick: () => console.log("Open account clicked"),
      }}
      secondaryCta={{
        label: "Log in",
        onClick: () => console.log("Login clicked"),
      }}
      image={dashboardImg}
      imageAlt="CFD Trading Platform Dashboard"
    />
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
