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
       
        <TradeCFDHero />
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
