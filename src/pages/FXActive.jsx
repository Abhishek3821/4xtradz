import StatsBar from "../components/StatsBar";
import TradeCFDHero from "../components/TradeCFDHero";
import FXActiveBenefits from "../components/FXActiveBenefits";
import TradingTechnologySection from "../components/TradingTechnologySection";
import FAQsSection from "../components/FAQsSection";
import HowToSignUp from "../components/HowToSignUp";
import dashboardImg from "../assets/xz16.webp";

const FXActive = () => {
  return (
    <>
     <TradeCFDHero
      title="Trade on forex from 0.0 pips with FX Active"
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
    <StatsBar/>
    <FXActiveBenefits/>
    <TradingTechnologySection/>
    <HowToSignUp/>
    <FAQsSection/>
    </>
  );
};

export default FXActive;
