import TradeCFDHero from "../Components/TradeCFDHero";
import StatsBar from "../Components/StatsBar";
import AnalysisTools from "../Components/AnalysisTools";
import WhyTradeTradingView from "../Components/WhyTradeTradingView";
import HowToStartTrading from "../Components/HowToStartTrading";
import GetTradingViewApp from "../Components/GetTradingViewApp";
import TradeYourWay from "../Components/TradeYourWay";
import TestimonialsSlider from "../Components/TestimonialsSection";
import FAQsSection from "../Components/FAQsSection";


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
