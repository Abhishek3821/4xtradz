import React from "react";

// Replace with your actual assets
import bgTexture from "../assets/xz6.png";
import cubeGraphic from "../assets/xz2.webp";

const CommodityExposure = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex items-center">
          <div className="max-w-xl px-6 lg:px-16 py-20">

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight relative pl-6">
              <span className="absolute left-0 top-2 h-10 w-1 bg-blue-600 rounded" />
              Increase your exposure to the commodity market
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Expecting big things in energy? Diversify your portfolio and
              spread risk with our unique commodity indices, which allow you
              to take a view on a commodity sector as a whole with a single
              position.
            </p>

            <button className="inline-flex items-center px-8 py-4 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Explore commodity indices
            </button>

          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="relative overflow-hidden">

          {/* Background texture */}
          <img
            src={bgTexture}
            alt="Commodity background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Graphic overlay */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <img
              src={cubeGraphic}
              alt="Commodity indices graphic"
              className="w-[70%] max-w-md drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommodityExposure;
