import TradeCFDHero from "../components/TradeCFDHero";
import TradingStatsRow from "../components/TradingStatsRow";
import WhatIsIndicesTrading from "../components/WhatIsIndicesTrading";
import WhyTradeIndices from "../components/WhyTradeIndices";
import TradingTechnologySection from "../components/TradingTechnologySection";
import TestimonialsSection from "../components/TestimonialsSection";
import dashboardImg from "../assets/xz17.webp";
import CommodityExposure from "../components/CommodityExposure";
import FAQsSection from "../components/FAQsSection";
const Commodities = () => {
  return (
    <>
         <TradeCFDHero
      title="Commodity trading"
      bullets={[
        "Get exposure to 100+ commodities¹, including gold, silver, crude oils and natural gas",
        "Experience ultra-fast execution², with no partial fills",
        "Enjoy experienced customer service",
        "Take a broader view with our exclusive commodity indices",
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
        label: "Open a demo account",
        onClick: () => console.log("Open demo account"),
      }}
      secondaryCta={{
        label: "Create account",
        onClick: () => console.log("Create account"),
      }}
      image={dashboardImg} // optional
      imageAlt="Commodity trading platforms"
    />
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
