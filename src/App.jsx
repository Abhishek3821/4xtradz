import CFDTrading from './Pages/CFDTrading'
import Footer from './Components/Footer'
import Homepage from './Pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import FXActive from './Pages/FXActive'
import TradingCosts from './Pages/TradingCosts'
import MarketsPlatform from './Pages/MarketsPlatform'
import MobileApp from './Pages/MobileApp'
import MetaTrader4 from './Pages/MetaTrader4'
import MT5 from './Pages/MT5'
import TradingView from './Pages/TradingView'
import Platforms from './Pages/Platforms'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Indices from './Pages/Indices'
import Forex from './Pages/Forex'
import Commodities from './Pages/Commodities'
import Shares from './Pages/Shares'
import ETFs from './Pages/ETFs'
import RatesAndBonds from './Pages/Rates&bonds'
import Cryptocurrencies from './Pages/Cryptocurrencies'
import ScrollToTop from './Components/ScrollToTop'
function App() {


  return (
    <>
    <Router>
    <ScrollToTop />
      <Navbar />
      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Homepage />} />

        {/* ================= WAYS TO TRADE ================= */}
        <Route path="/cfd-trading" element={<CFDTrading />} />
        <Route path="/fx-active" element={<FXActive />} />
        <Route path="/trading-costs" element={<TradingCosts />} />

        {/* ================= PLATFORMS ================= */}
        <Route path="/markets-platform" element={<MarketsPlatform />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/meta-trader-4" element={<MetaTrader4 />} />
        <Route path="/mt5" element={<MT5 />} />
        <Route path="/tradingview" element={<TradingView />} />
        <Route path="/platforms" element={<Platforms />} />

        {/* ================= ABOUT US ================= */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* ================= INDICES ================= */}
        <Route path="/indices" element={<Indices />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/commodities" element={<Commodities />} />
        <Route path="/shares" element={<Shares />} />
        <Route path="/etfs" element={<ETFs />} />
        <Route path="/rates-bonds" element={<RatesAndBonds />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

      </Routes>
      <Footer />
    </Router>
    </>
  ) 
}

export default App
