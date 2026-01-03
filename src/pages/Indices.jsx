import TradeCFDHero from "../components/TradeCFDHero";
import TradingStatsRow from "../components/TradingStatsRow";
import WhatIsIndicesTrading from "../components/WhatIsIndicesTrading";
import WhyTradeIndices from "../components/WhyTradeIndices";
import TradingTechnologySection from "../components/TradingTechnologySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ExecutionReliabilitySection from "../components/ExecutionReliabilitySection";
import FAQsSection from "../components/FAQsSection";
import dashboardImg from "../assets/xz17.webp";
const Indices = () => {
  return (
    <>
         <TradeCFDHero
      title="Indices trading"
      bullets={[
        "Spreads from 1pt on the US NDAQ 100 and 1.2pts on the Germany 40",
        "Ultra-fast execution¹ with no partial fills",
        "80+ cash and forward index CFDs available",
      ]}
      stats={[
        { icon: "✔", text: "Established 1989" },
        { icon: "🌍", text: "1M+ global clients³" },
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
      image={dashboardImg}
      imageAlt="Indices trading platforms"
    />
        <TradingStatsRow />
        <WhatIsIndicesTrading />
        <WhyTradeIndices />
         <TradingTechnologySection/>
         <TestimonialsSection />
          <ExecutionReliabilitySection />
          <FAQsSection />
    </> 
  );
};

export default Indices;
