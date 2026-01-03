import TradeCFDHero from "../components/TradeCFDHero";
import StatsBar from "../components/StatsBar";
import AnalysisTools from "../components/AnalysisTools";
import WhyTradeTradingView from "../components/WhyTradeTradingView";
import HowToStartTrading from "../components/HowToStartTrading";
import GetTradingViewApp from "../components/GetTradingViewApp";
import TradeYourWay from "../components/TradeYourWay";
import TestimonialsSlider from "../components/TestimonialsSection";
import FAQsSection from "../components/FAQsSection";


const TradingView = () => {
  return (
    <>
        <TradeCFDHero
      title="Research with TradingView, trade with CMC"
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
      image="https://www.cmcmarkets.com/neptune/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvl2kvsmutclx%2F32YbVDK1Eo3wWTygHJ21dh%2F98298b3c113ec2e086dd9ed476f7039b%2Fcommon_generic-platform-hero-img.png&w=1920&q=75"
      imageAlt="CFD Trading Platform Dashboard"
    />
        <StatsBar />
         <AnalysisTools/>
         <WhyTradeTradingView/>
         <HowToStartTrading/>
         <GetTradingViewApp/>
         <TradeYourWay/>
          <TestimonialsSlider />
          <FAQsSection />
        
        
    </>
  );
};

export default TradingView;
