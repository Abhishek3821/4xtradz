import React from "react";

const steps = [
  {
    step: 1,
    title: "Apply for a CMC Markets account",
    description: "Open a live trading account with us.",
  },
  {
    step: 2,
    title: "Add funds",
    description:
      "Once your live account with us is open, add funds by card, bank transfer or using payment service providers Neteller and Skrill.",
  },
  {
    step: 3,
    title: "Go to TradingView",
    description:
      "Sign in (or sign up if you’re new to TradingView), find our broker profile and select ‘Trade’.",
  },
  {
    step: 4,
    title: "Connect",
    description:
      "Select ‘Connect’, enter your CMC Markets username and password, and complete the connection. You can now trade with us through TradingView.",
  },
  {
    step: 5,
    title: "Do your research",
    description:
      "Ensure you understand the risks involved with CFD trading.",
  },
];

const HowToStartTrading = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
            How to start trading
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Follow these steps to trade with us through TradingView.
            If you already have an account with us, go straight to step 3.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-gray-200 rounded-md p-8 shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              {/* STEP NUMBER */}
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-lg font-semibold text-gray-900 mb-6">
                {item.step}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-4 rounded-full text-sm font-semibold shadow-md">
            Open an account
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowToStartTrading;
