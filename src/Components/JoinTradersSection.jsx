import React from "react";

const steps = [
  {
    step: "1",
    title: "Apply for a live account",
    description: "Apply and verify your account in a few simple steps.",
  },
  {
    step: "2",
    title: "Fund your account",
    description:
      "Deposit seamlessly via card, bank transfer or online banking.",
  },
  {
    step: "3",
    title: "Place a trade",
    description:
      "One-touch trading on 12,000+ global instruments on the MetaTrader 5 and Next Generation trading platforms.",
  },
];

const JoinTradersSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-16">
          Join over 1 million global traders and investors
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {steps.map((item, index) => (
            <div key={index} className="bg-gray-200 rounded-xl p-8 shadow-sm">
              {/* Step number */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold mb-4">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-md leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 transition text-white font-medium px-10 py-4 rounded-full">
            Open account
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinTradersSection;