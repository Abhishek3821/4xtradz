import React from "react";

// Replace with your actual background image or video thumbnail
import bgImage from "../assets/xz6.png";

const SwitchToCMC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-10 flex items-center bg-gradient-to-r from-[#6f6a73] via-[#6f6a73]/90 to-transparent">
          <div className="max-w-xl px-6 lg:px-16 py-24 text-white">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 relative pl-6">
              <span className="absolute left-0 top-2 h-10 w-1 bg-gray-900" />
              Spread your wings – switch to CMC
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-100 leading-relaxed mb-8">
              We're trusted by global financial service providers, including
              tier-one banks, brokers and hedge funds. Switch your account to
              CMC Markets and benefit from our institutional-quality technology.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 text-gray-100 mb-10 list-disc list-inside">
              <li>12,000 financial markets</li>
              <li>1.5 million+ global traders and investors</li>
              <li>35 years' experience</li>
            </ul>

            {/* CTA */}
            <button className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Open account
            </button>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="relative">
          <img
            src={bgImage}
            alt="Skydiving over clouds"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default SwitchToCMC;
