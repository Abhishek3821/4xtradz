import React from "react";

const steps = [
  {
    step: "1",
    title: "Apply for a live account",
    description:
      "Apply and verify your account in a few simple steps.",
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

const JoinTraders = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-16">
          Join over 1 million global traders and investors
        </h2>

        {/* ================= STEPS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-xl px-8 py-5 shadow-sm hover:shadow-md transition"
            >
              {/* STEP NUMBER */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-semibold mb-2">
                {item.step}
              </div>

              {/* CONTENT */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="flex justify-center mt-16">
          <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Open account
          </button>
        </div>

      </div>
    </section>
  );
};

export default JoinTraders;
