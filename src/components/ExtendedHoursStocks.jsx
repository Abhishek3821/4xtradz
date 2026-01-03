import React from "react";

// Replace these with your actual assets
import bgTexture from "../assets/xz6.png";
import phoneUi from "../assets/xz14.webp";
// import brandIcons from "../assets/xz14.webp";

const ExtendedHoursStocks = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b1220] to-[#070c16]">
      
      {/* Right background texture */}
      <img
        src={bgTexture}
        alt="Market texture"
        className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-90"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-white max-w-xl">

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Trade in extended hours on 80+ US stocks – including the
              <br className="hidden md:block" /> ‘magnificent seven’
            </h2>

            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Speculate on over 80 popular US stocks in pre-market trading.
              Go long or short on Alphabet, Amazon, Apple, Meta, Microsoft,
              Nvidia, Tesla and more from 9am (UK time), before the underlying
              US stock exchanges open at 2.30pm (UK time).
            </p>

            <ul className="space-y-3 text-gray-200 mb-10 list-disc list-inside">
              <li>
                React early to earnings reports, breaking market news and
                global events
              </li>
              <li>
                Manage your existing positions in pre-market trading
              </li>
              <li>
                Access our full range of order types for a seamless trading
                experience
              </li>
            </ul>

            <button className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              More on shares trading
            </button>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Phone UI */}
            <img
              src={phoneUi}
              alt="Trading app"
              className="w-[260px] md:w-[300px] relative z-10"
            />

            {/* Floating brand icons */}
            {/* <img
              src={brandIcons}
              alt="US stock brands"
              className="absolute top-24 right-0 w-[240px] md:w-[280px] z-20 rounded-xl shadow-xl"
            /> */}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ExtendedHoursStocks;
