import React from "react";

const InsightsAnalysisSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0A1224] via-[#0E1A33] to-[#0B1430] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm tracking-widest text-white/70 mb-4 uppercase font-semibold">
              Insights and analysis
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Access market news and insights
            </h2>

            <p className="text-white text-lg leading-relaxed max-w-xl">
              Get insights and analysis from our award-winning in-house analysts
              <sup>5</sup>, as well as news and market commentary from Reuters,
              a comprehensive economic calendar, and news and equity valuation
              data from Morningstar.<sup>6</sup>
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Left Phone */}
              <img
                src="https://www.cmcmarkets.com/neptune/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvl2kvsmutclx%2F1m8bb6mV6fRiwYQiqbCVa0%2F6984c02d1ed4890c1323b86b608a0e3c%2FCMC_Mobile_news_analysis.png&w=3840&q=75"
                alt="Market analysis screen"
                className="relative z-10 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsAnalysisSection;