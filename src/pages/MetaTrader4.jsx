
import TradeCFDHero from "../components/TradeCFDHero";
import WhyTradeCFDs from "../components/WhyTradeCFDs";
import TestimonialsSlider from "../components/TestimonialsSection";
import FAQsSection from "../components/FAQsSection";
import StatsBar from "../components/StatsBar";
import WhatIsCFDSection from "../components/WhatIsCFDSection";
import ExecutionReliabilitySection from "../components/ExecutionReliabilitySection";
const MetaTrader4 = () => {
  return (
    <>
        <TradeCFDHero
      title="MetaTrader 4 Platform"
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
      image="https://www.cmcmarkets.com/neptune/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvl2kvsmutclx%2FQ0Xr7YLgueOTrVqUjI7Ei%2F57f92df6ff28f9fa59224a3e367524f4%2Fmt4_platform-hero-img.png&w=1920&q=75"
      imageAlt="CFD Trading Platform Dashboard"
    />
        <StatsBar />
          <WhatIsCFDSection />
          <WhyTradeCFDs />
           <ExecutionReliabilitySection />
          <TestimonialsSlider />
           <WhatIsCFDSection />
          <FAQsSection />
          
    </>
  );
};

export default MetaTrader4;
