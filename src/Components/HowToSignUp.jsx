import React from "react";

// Replace with your actual image asset
import platformImage from "../assets/xz5.webp";

const steps = [
  {
    step: "STEP 1",
    title: "Choose your platform: CMC, Next Gen, MT4 or MT5",
  },
  {
    step: "STEP 2",
    title: "Select the FX Active account option",
  },
  {
    step: "STEP 3",
    title: "Complete our online application form",
  },
];

const HowToSignUp = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
              How to sign up
            </h2>

            {/* STEPS */}
            <div className="space-y-6 mb-10">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <p className="text-xs font-semibold text-gray-500 mb-1">
                    {item.step}
                  </p>
                  <p className="text-base font-medium text-gray-900">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition">
              Sign up now
              <span className="text-xl">→</span>
            </button>

            {/* LINKS */}
            <div className="mt-10 space-y-2 text-sm">
              <a
                href="#"
                className="block underline text-gray-700 hover:text-gray-900"
              >
                CMC platform terms &amp; conditions
              </a>
              <a
                href="#"
                className="block underline text-gray-700 hover:text-gray-900"
              >
                MetaTrader terms &amp; conditions
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={platformImage}
              alt="Trading platform preview"
              className="w-full rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowToSignUp;
