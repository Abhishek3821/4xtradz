import { Check } from "lucide-react";

// Replace with your SVG / image assets if needed
import cfdIcon from "../assets/xz7.webp";
import fxActiveIcon from "../assets/xz2.webp";

const cfdFeatures = [
  "Trade contracts for difference (CFDs)",
  "Spreads from 0.5 points on US SPX 500, 1pt on UK 100",
  "Go long or short on 12,000 instruments",
  "Trade with leverage, which can amplify both your profits and losses",
];

const fxActiveFeatures = [
  "Trade CFDs on forex and get spreads from 0.0 pips on six major currency pairs",
  "Instead, a fixed low commission applies on these pairs",
  "Get a 25% spread discount versus our regular CFD account on over 300 other FX pairs",
  "Fixed low commission",
  "Go long or short on 12,000 instruments",
  "Trade with leverage, which can amplify both your profits and losses",
];

export default function TradeYourWay() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* LEFT INTRO */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Trade your way
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-md">
              Choose the account that’s right for you. Get tight spreads on
              12,000 instruments, volume-based discounts, and no hidden fees.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* CFD TRADING */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <img
                src={cfdIcon}
                alt="CFD trading"
                className="w-28 mb-8"
              />

              <hr className="mb-6" />

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                CFD trading
              </h3>

              <ul className="space-y-4">
                {cfdFeatures.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-900">
                      <Check size={14} />
                    </span>
                    <span className="text-gray-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FX ACTIVE */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <img
                src={fxActiveIcon}
                alt="FX Active"
                className="w-28 mb-8"
              />

              <hr className="mb-6" />

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                FX Active
              </h3>

              <ul className="space-y-4">
                {fxActiveFeatures.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-900">
                      <Check size={14} />
                    </span>
                    <span className="text-gray-800 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
