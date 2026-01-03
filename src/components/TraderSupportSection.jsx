import React from "react";
import { Globe, TrendingUp, ShieldCheck, RefreshCcw } from "lucide-react";

const cards = [
  {
    title: "Licensed in Bermuda",
    description:
      "4XTRADZ Bermuda is licenced to conduct investment business and digital asset business by the Bermuda Monetary Authority (BMA).",
    icon: Globe,
    button: "More on regulations",
  },
  {
    title: "Straightforward sign-up",
    description:
      "With ID verification built in, it’s now easier than ever to apply for an account on your mobile device.",
    icon: TrendingUp,
  },
  {
    title: "A broker you can trust",
    description:
      "We're listed on the London Stock Exchange and, as part of our compliance with GDPR, we encrypt personal data.",
    icon: ShieldCheck,
    button: "More on security",
  },
  {
    title: "Easy funding and withdrawals",
    description:
      "Fund your account and withdraw in minutes by card, bank transfer or using payment service providers Neteller and Skrill.",
    icon: RefreshCcw,
    button: "More on funding",
  },
];

const TraderSupportSection = () => {
  return (
    <section className="w-full bg-[#1F2D4D] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-white mb-20">
          How we support our traders
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="border border-white/40 rounded-2xl p-8 text-white flex flex-col min-h-[420px]"
              >
                {/* Icon */}
                <Icon size={96} strokeWidth={1.25} className="mb-6" />

                {/* Divider */}
                <div className="h-px w-full bg-white/40 mb-6" />

                {/* Title */}
                <h3 className="text-3xl font-semibold mb-4">{card.title}</h3>

                {/* Description */}
                <p className="text-sm text-white/85 leading-relaxed flex-grow">
                  {card.description}
                </p>

                {/* Button */}
                {card.button && (
                  <button className="mt-8 inline-flex items-center justify-center rounded-full border border-blue-400 text-sm font-medium text-white px-6 py-2 hover:bg-blue-500/10 transition">
                    {card.button}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TraderSupportSection;