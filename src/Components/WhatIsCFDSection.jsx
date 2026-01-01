import React from "react";
import cfdImg from "../assets/xz2.webp"; // replace with your image

const WhatIsCFDSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8 max-w-xl">

            {/* Title with accent bar */}
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
              <span className="relative pl-4 block">
                <span className="absolute left-0 top-1 h-full w-1 bg-blue-600 rounded" />
                What is CFD trading?
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              CFD (contracts for difference) trading enables traders to
              speculate on the performance of a huge range of global markets,
              such as forex, indices, stocks and commodities, without owning the
              underlying asset.
            </p>

            {/* CTA */}
            <button className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-blue-600 text-black font-semibold hover:bg-blue-50 transition">
              More on CFD trading
            </button>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Background texture panel */}
            <div className="absolute inset-0 -right-[40%] bg-gradient-to-br from-white via-white to-white hidden lg:block rounded-l-[3rem]" />

            <img
              src={cfdImg}
              alt="CFD Trading Illustration"
              className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsCFDSection;
