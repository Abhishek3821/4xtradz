
import TradeCFDHero from "../components/TradeCFDHero";
import StatsBar from "../components/StatsBar";
import WhyTradeCFDs from "../components/WhyTradeCFDs";
import TradingTechnologySection from "../components/TradingTechnologySection";
import ExecutionReliabilitySection from "../components/ExecutionReliabilitySection";
import TestimonialsSlider from "../components/TestimonialsSection";
import JoinTradersSection from "../components/JoinTradersSection";
import FAQsSection from "../components/FAQsSection";
const MT5 = () => {
  return (
    <>
        <TradeCFDHero
      title="An award-winning trading experience for CFD traders¹"
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
      image="https://www.cmcmarkets.com/neptune/_next/image?url=https%3A%2F%2Fdownloads.ctfassets.net%2Fvl2kvsmutclx%2F3Sutl38Px3Dz819S7ffhfg%2Fab9cdbcd633f89272551e2a951da935f%2FCMC_Desktop_Mobile_NextGen_MT4.png&w=1920&q=75"
      imageAlt="CFD Trading Platform Dashboard"
    />
        <StatsBar />
        <WhyTradeCFDs />
        <TradingTechnologySection/>
        <ExecutionReliabilitySection />
        <TestimonialsSlider />
        <JoinTradersSection />
        <FAQsSection />
        
    </>
  );
};

export default MT5;
