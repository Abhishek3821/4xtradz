import React from "react";

// Replace these with your actual SVG / image assets
import cfdIcon from "../assets/xz7.webp";
import mt4Icon from "../assets/xz2.webp";

const WhatWeDo = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-1 max-w-md">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              What we do
            </h2>

            <p className="text-gray-700 leading-relaxed">
              For over 35 years, we've been dedicated to creating the
              best-in-class platform for committed CFD traders, with
              competitive spreads, advanced platform functionality,
              lightning-fast execution<sup>³</sup> and leading insight and
              analysis<sup>⁴</sup>.
            </p>
          </div>

          {/* ================= RIGHT CARDS ================= */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* ===== CARD 1: CFD Trading ===== */}
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 flex flex-col">
              <img
                src={cfdIcon}
                alt="CFD trading"
                className="w-24 mb-6"
              />

              <hr className="border-gray-900 mb-6" />

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                CFD trading
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Trade with leverage on the price movement of underlying
                financial markets. Leverage amplifies gains and losses in
                equal measure.
              </p>

              <p className="text-gray-700 mb-8">
                Spreads from 1 on US NDAQ 100
              </p>

              <div className="mt-auto flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                  Create account
                </button>

                <button className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                  More on CFD trading
                </button>
              </div>
            </div>

            {/* ===== CARD 2: MetaTrader 4 ===== */}
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 flex flex-col">
              <img
                src={mt4Icon}
                alt="MetaTrader 4"
                className="w-24 mb-6"
              />

              <hr className="border-gray-900 mb-6" />

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                MetaTrader 4
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Trade CFDs on the world's favourite trading platform, backed
                by our exceptional service and tight spreads.
              </p>

              <p className="text-gray-700 mb-8">
                Spreads from 0.0 pips on 6 major FX pairs
              </p>

              <div className="mt-auto flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                  Create account
                </button>

                <button className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                  More on MT4 trading
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
