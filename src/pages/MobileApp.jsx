import MobileControlSection from "../components/MobileControlSection";
import TradeCFDHero from "../components/TradeCFDHero";
import StatsBar from "../components/StatsBar";
import TraderSupportSection from "../components/TraderSupportSection";
import InsightsAnalysisSection from "../components/InsightsAnalysisSection";
import TestimonialsSlider from "../components/TestimonialsSection";            
import TradingTechnologySection from "../components/TradingTechnologySection";
import FAQsSection from "../components/FAQsSection";


const MobileApp = () => {
  return (
    <>
       
        <TradeCFDHero
      title="The mobile trading app for committed traders"
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
      image="https://www.cmcmarkets.com/neptune/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvl2kvsmutclx%2F7q0IrqAah3dldQOkgeSZCL%2Fda5d48c4431334fca870b43062ed2343%2FCMC_Mobile_app_cards.png&w=1920&q=75"
      imageAlt="CFD Trading Platform Dashboard"
    />
        <StatsBar/>
        <MobileControlSection/>
        <TraderSupportSection/>
        <InsightsAnalysisSection/>
        <TestimonialsSlider/>
        <TradingTechnologySection/>
        <FAQsSection/>  
    
    </>
  );
};

export default MobileApp;
