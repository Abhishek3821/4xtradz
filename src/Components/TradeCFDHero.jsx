import React from "react";
import dashboardImg from "../assets/xz1.webp";

const TradeCFDHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8">

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              <span className="relative pl-4 block">
                <span className="absolute left-0 top-1 h-full w-1 bg-blue-600 rounded" />
                Trade CFDs with an award-winning broker
              </span>
            </h1>

            {/* Bullet Points */}
            <ul className="space-y-1 text-gray-700 text-base md:text-md list-disc list-inside">
              <li>Open an account with one of the industry's leading forex brokers</li>
              <li>Trade up to 12,000 instruments</li>
              <li>
                Trade with leverage on forex, indices, commodities, crypto,
                shares and more
              </li>
              <li>Spreads from 0.0 pips with our FX Active account</li>
              <li>Precise charting and advanced tools</li>
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-2 pt-2 text-gray-800">
              <div className="flex items-center gap-3">
                <span className="text-xl">✔</span>
                <span>Established 1989</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">🌍</span>
                <span>1M+ global clients</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">🏦</span>
                <span>FTSE 250 group</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">⭐</span>
                <span>
                  Excellent 4.3 / 5{" "}
                  <span className="text-green-600 font-medium">Trustpilot</span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition w-full sm:w-auto">
                Open account
              </button>

              <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition w-full sm:w-auto">
                Log in
              </button>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">

            <img
              src={dashboardImg}
              alt="Trading Platform"
              className="relative z-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl rounded-2xl "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TradeCFDHero;
