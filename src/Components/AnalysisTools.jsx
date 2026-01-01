import React, { useState } from "react";

const tools = [
  {
    title: "TradingView charts",
    content:
      "Advanced interactive charts powered by TradingView with technical indicators and drawing tools.",
  },
  {
    title: "Pattern recognition scanner",
    content:
      "Automatically detects popular chart patterns to help identify potential trade setups.",
  },
  {
    title: "Advanced order execution",
    content:
      "Execute trades quickly with advanced order types and professional trading controls.",
  },
  {
    title: "Reuters news and analysis",
    content:
      "Stay updated with real-time global market news and expert analysis from Reuters.",
  },
  {
    title: "TipRanks analysis",
    content:
      "Gain insights from analyst ratings, price targets, and market sentiment data.",
  },
];

const AnalysisTools = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-900 mb-16">
          Tools built to enhance your analysis
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Accordion */}
          <div className="space-y-4">
            {tools.map((tool, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {tool.title}
                    </span>

                    <span
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {tool.content}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://www.cmcmarkets.com/neptune/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvl2kvsmutclx%2F5jkEOF1JT56DQnNKzYWy41%2Fba5bde1aa80596369124f2cc85595b36%2FCMC_Desktop_TradingView_chart.png&w=3840&q=75"
                alt="Trading analysis chart"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisTools;