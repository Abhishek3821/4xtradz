import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const indices = [
  {
    country: "US",
    flag: "🇺🇸",
    name: "US 30 - Cash",
    price: "48,082.91",
    change: "-0.65%",
    direction: "down",
  },
  {
    country: "AU",
    flag: "🇦🇺",
    name: "Australia 200 - Cash",
    price: "8,705.97",
    change: "-0.06%",
    direction: "down",
  },
  {
    country: "UK",
    flag: "🇬🇧",
    name: "UK 100 - Cash",
    price: "9,951.64",
    change: "0.07%",
    direction: "up",
  },
  {
    country: "DE",
    flag: "🇩🇪",
    name: "Germany 40 - Cash",
    price: "24,568.77",
    change: "0%",
    direction: "up",
  },
];

export default function WhatIsIndicesTrading() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              What is indices trading?
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Index trading is the buying and selling of a group of stocks that
              make up an index, such as our US NDAQ 100 index (based on the
              Nasdaq 100), which tracks the largest 100 companies on the Nasdaq
              Stock Exchange.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Trading on indices is popular with short-term traders who want to
              speculate on highly-liquid assets, with tight spreads and minimal
              slippage. Speculating on indices offers traders exposure to a wide
              range of stocks.
            </p>

            <button className="inline-flex items-center gap-2 border border-blue-500 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition">
              How to trade indices
              <span>→</span>
            </button>
          </div>

          {/* ================= RIGHT CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {indices.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
              >
                {/* TOP */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.flag}</span>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.name}
                    </h3>
                  </div>

                  <span className="text-lg text-gray-500">
                    {item.price}
                  </span>
                </div>

                {/* CHANGE */}
                <div
                  className={`flex items-center gap-3 text-4xl font-semibold ${
                    item.direction === "up"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.direction === "up" ? (
                    <ArrowUp size={32} />
                  ) : (
                    <ArrowDown size={32} />
                  )}
                  {item.change}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
