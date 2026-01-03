import TradeCFDHero from "../components/TradeCFDHero";
import TradingStatsRow from "../components/TradingStatsRow";
import WhatIsIndicesTrading from "../components/WhatIsIndicesTrading";
import WhyTradeIndices from "../components/WhyTradeIndices";
import TradingTechnologySection from "../components/TradingTechnologySection";
import ExtendedHoursStocks from "../components/ExtendedHoursStocks";
import ExecutionReliabilitySection from "../components/ExecutionReliabilitySection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQsSection from "../components/FAQsSection";
import BecomePartner from "../components/BecomePartner";


const ETFs = () => {
  return (
    <>
        <TradeCFDHero
      title="ETF trading"
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
      image="https://www.cmcmarkets.com/neptune/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvl2kvsmutclx%2F7i8ezoxVGm9h0pDaT8kg3Z%2F696a2460614b46da82bcd94762bd4ab9%2Fcmc.png&w=1920&q=75"
      imageAlt="CFD Trading Platform Dashboard"
    />
        <TradingStatsRow />
        <WhatIsIndicesTrading />
        <WhyTradeIndices />
         <TradingTechnologySection/>
    <TestimonialsSection />
    
 <ExecutionReliabilitySection />
 <BecomePartner />      
         
         <FAQsSection />

         
          
    </> 
  );
};

export default ETFs;
