import MobileControlSection from "../Components/MobileControlSection";
import TradeCFDHero from "../Components/TradeCFDHero";
import StatsBar from "../Components/StatsBar";
import TraderSupportSection from "../Components/TraderSupportSection";
import InsightsAnalysisSection from "../Components/InsightsAnalysisSection";
import TestimonialsSlider from "../Components/TestimonialsSection";            
import TradingTechnologySection from "../Components/TradingTechnologySection";
import FAQsSection from "../Components/FAQsSection";


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
