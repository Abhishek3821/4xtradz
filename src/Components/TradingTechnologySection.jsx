import React, { useState } from "react";
import { Check } from "lucide-react";
import mobileImg from "../assets/xz3.webp";
import desktopImg from "../assets/xz4.webp";

// ================= PLATFORM DATA =================
const platforms = {
  mt4: {
    label: "MetaTrader 4",
    recommended: true,
    title: "MetaTrader 4",
    description:
      "Trade on the world's most popular trading platform, with tight spreads and ultra-fast execution.",
    features: [
      "Trade on forex, indices, commodities and cryptocurrencies",
      "Spreads start from 0.0 pips with our FX Active account",
      "Fast, one-click trading",
      "Lightning-fast execution",
      "Customisable charts with pre-installed indicators",
      "Automated trading with Expert Advisors",
    ],
    cta: "Open MetaTrader account",
    mobile: {
      img: mobileImg,
      text:
        "Millions of traders have already chosen the MetaTrader 4 mobile app to trade on the financial markets, anytime and anywhere.",
    },
    desktop: {
      img: desktopImg,
      text:
        "Download MetaTrader 4 for PC or MAC and trade on the world's most popular trading platform.",
    },
  },

  mt5: {
    label: "MetaTrader 5",
    recommended: false,
    title: "MetaTrader 5",
    description:
      "An advanced multi-asset trading platform with more tools, timeframes and indicators.",
    features: [
      "More timeframes and indicators",
      "Advanced order types",
      "Built-in economic calendar",
      "Depth of Market (DOM)",
      "Improved strategy tester",
    ],
    cta: "Open MT5 account",
    mobile: {
      img: mobileImg,
      text:
        "Trade on MetaTrader 5 mobile with enhanced charting and faster execution.",
    },
    desktop: {
      img: desktopImg,
      text:
        "Download MetaTrader 5 for PC or MAC and access next-generation trading tools.",
    },
  },

  tradingview: {
    label: "TradingView",
    recommended: false,
    title: "TradingView",
    description:
      "Trade directly from TradingView charts with powerful technical and social tools.",
    features: [
      "Industry-leading charting",
      "Community indicators",
      "Cloud-based platform",
      "No installation required",
    ],
    cta: "Connect TradingView",
    mobile: {
      img: mobileImg,
      text:
        "Access TradingView charts on mobile with seamless broker integration.",
    },
    desktop: {
      img: desktopImg,
      text:
        "Trade directly from TradingView in your browser with full functionality.",
    },
  },

  web: {
    label: "CMC Web platform",
    recommended: false,
    title: "CMC Web Platform",
    description:
      "Trade directly in your browser with our fast, secure and feature-rich web platform.",
    features: [
      "No downloads required",
      "Advanced risk management tools",
      "Full market coverage",
      "Fast execution speeds",
    ],
    cta: "Open Web Platform",
    mobile: {
      img: mobileImg,
      text:
        "Access the CMC Web Platform on mobile browsers with full functionality.",
    },
    desktop: {
      img: desktopImg,
      text:
        "Trade on the CMC Web Platform directly from your desktop browser.",
    },
  },
};

// ================= COMPONENT =================
const TradingTechnologySection = () => {
  const [activePlatform, setActivePlatform] = useState("mt4");
  const current = platforms[activePlatform];

  if (!current) return null;

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-16 relative pl-4">
          <span className="absolute left-0 top-2 h-8 w-1 bg-blue-600 rounded" />
          Powerful technology you can rely on
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {current.recommended && (
              <span className="text-sm font-semibold uppercase">
                Recommended
              </span>
            )}

            <h3 className="text-4xl font-semibold mt-3">
              {current.title}
            </h3>

            <p className="text-lg">{current.description}</p>

            <ul className="space-y-1">
              {current.features.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-md">
                  <Check className="w-5 h-5 text-gray-900 border rounded-full p-1" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-6 inline-flex items-center px-7 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              {current.cta}
            </button>
          </div>

          {/* MOBILE CARD */}
          <div className="bg-white border rounded-lg shadow-sm p-6 space-y-6">
            <img
              src={current.mobile.img}
              alt={`${current.title} mobile`}
              className="w-full rounded-xl object-cover"
            />

            <hr />

            <h4 className="text-3xl text-gray-900">Mobile</h4>
            <p className="text-md">{current.mobile.text}</p>
          </div>

          {/* DESKTOP CARD */}
          <div className="bg-white border rounded-lg shadow-sm p-6 space-y-6">
            <img
              src={current.desktop.img}
              alt={`${current.title} desktop`}
              className="w-full rounded-xl object-cover"
            />

            <hr />

            <h4 className="text-3xl text-gray-900">Desktop</h4>
            <p className="text-md">{current.desktop.text}</p>

            <button className="mt-4 inline-flex items-center px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Download MT4
            </button>
          </div>
        </div>

        {/* PLATFORM TABS */}
        <div className="flex gap-3 mt-14 flex-wrap">
          {Object.entries(platforms).map(([key, platform]) => (
            <button
              key={key}
              onClick={() => setActivePlatform(key)}
              className={`px-4 py-2 rounded-full border text-sm transition cursor-pointer ${
                activePlatform === key
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {platform.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TradingTechnologySection;
