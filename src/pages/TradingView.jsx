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
        <TradeCFDHero />
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
