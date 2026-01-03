import TradeCFDHero from "../components/TradeCFDHero";
import TradingStatsRow from "../components/TradingStatsRow";
import WhatIsIndicesTrading from "../components/WhatIsIndicesTrading";
import WhyTradeIndices from "../components/WhyTradeIndices";
import TradingTechnologySection from "../components/TradingTechnologySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ExecutionReliabilitySection from "../components/ExecutionReliabilitySection";
import FAQsSection from "../components/FAQsSection";
import dashboardImg from "../assets/xz16.webp";
const Forex = () => {
  return (
    <>
         <TradeCFDHero
      title="Forex trading"
      bullets={[
        "Trade on up to 300 forex pairs with leverage¹",
        "Spreads from 0.0² pips on major FX pairs",
        "Ultra-fast execution³ with no partial fills",
        "Experienced customer service",
      ]}
      stats={[
        { icon: "✔", text: "Established 1989" },
        { icon: "🌍", text: "1M+ global clients²" },
        { icon: "🏛️", text: "FTSE 250 group" },
        {
          icon: "⭐",
          text: (
            <>
              Excellent 4.3 out of 5{" "}
              <span className="text-green-600 font-medium">Trustpilot</span>
            </>
          ),
        },
      ]}
      primaryCta={{
        label: "Open account",
        onClick: () => console.log("Open account"),
      }}
      secondaryCta={{
        label: "Log in",
        onClick: () => console.log("Log in"),
      }}
      image={dashboardImg}   // optional
      imageAlt="Forex trading platform"
    />
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
