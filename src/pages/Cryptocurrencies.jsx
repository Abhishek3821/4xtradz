import TradeCFDHero from "../components/TradeCFDHero";
import TradingStatsRow from "../components/TradingStatsRow";
import WhatIsIndicesTrading from "../components/WhatIsIndicesTrading";
import WhyTradeIndices from "../components/WhyTradeIndices";
import TradingTechnologySection from "../components/TradingTechnologySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ExecutionReliabilitySection from "../components/ExecutionReliabilitySection";
import FAQsSection from "../components/FAQsSection";

const Cryptocurrencies = () => {
  return (
    <>
        <TradeCFDHero
      title="Cryptocurrency trading"
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
      image="https://www.cmcmarkets.com/neptune/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvl2kvsmutclx%2F4jvT9cL3bLL7DdhV84Zvls%2F5f24fa21a336b4bc3e78cc3fd0e53b9e%2Fimage.webp&w=1920&q=75"
      imageAlt="CFD Trading Platform Dashboard"
    />
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
