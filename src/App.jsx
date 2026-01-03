


import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MobileApp from './pages/MobileApp'

import TradingView from './pages/TradingView'
import Platforms from './pages/Platforms'
import AboutUs from './pages/AboutUs'
import Indices from './pages/Indices'
import Forex from './pages/Forex'
import Commodities from './pages/Commodities'
import Shares from './pages/Shares'
import ETFs from './pages/ETFs'
import RatesAndBonds from './pages/Rates&bonds'
import Cryptocurrencies from './pages/Cryptocurrencies'
import ScrollToTop from './Components/ScrollToTop'
import ContactUs from './pages/ContactUs'
import CFDtrading from './pages/CFDtrading'
import Homepage from './pages/Homepage'
import FXActive from './pages/FXActive'
import TradingCosts from './pages/TradingCosts'
import MT5 from './pages/MT5'
import MarketsPlatform from './pages/MarketsPlatform'
import MetaTrader4 from './pages/MetaTrader4'

function App() {


  return (
    <>
    <Router>
    <ScrollToTop />
      <Navbar />
      <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/cfd-trading" element={<CFDtrading />} />
        <Route path="/fx-active" element={<FXActive />} />
        <Route path="/trading-costs" element={<TradingCosts />} />
        <Route path="/markets-platform" element={<MarketsPlatform />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/meta-trader-4" element={<MetaTrader4 />} />
        <Route path="/mt5" element={<MT5 />} />
        <Route path="/tradingview" element={<TradingView />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
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
