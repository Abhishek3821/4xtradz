import React from "react";
import {
  TrendingUp,
  Server,
  Lock,
  Sliders,
  FilePlus,
  Wallet,
} from "lucide-react";

const features = [
  {
    title: "Your favourites in one place",
    description:
      "Trade on over 80 cash³ and forward indices based on FTSE 100 and dozens of other global markets.",
    icon: TrendingUp,
  },
  {
    title: "London-based server",
    description:
      "Our London based server and industry reputation helps us provide a tier-one liquidity solution, so we can consistently deliver lightning-quick execution speeds¹.",
    icon: Server,
  },
  {
    title: "Unrestricted trading",
    description:
      "There are no restrictions on minimum stop-loss or take-profit distances, or stop-loss and take-profit limits, especially useful for high-volume traders.",
    icon: Lock,
  },
  {
    title: "Hedge your positions",
    description:
      "Go long and short at the same time on a specific instrument, with no interruption for traders using Expert Advisors (EAs) on MetaTrader.",
    icon: Sliders,
  },
  {
    title: "Free premium indicators and EAs",
    description:
      "Hone your technical analysis with our suite of free additional premium indicators and EAs.",
    icon: FilePlus,
  },
  {
    title: "Straightforward funding",
    description:
      "Deposit and withdraw funds easily, and whenever you want to.",
    icon: Wallet,
  },
];

const WhyTradeIndices = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0b1220] to-[#070c16] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-16">
          Why trade indices with us?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#2f3a55] rounded-2xl p-8 text-white shadow-sm"
              >
                {/* Icon */}
                <Icon size={28} className="mb-6 text-white" />

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyTradeIndices;
