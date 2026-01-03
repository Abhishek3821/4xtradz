import React from "react";
import {
  UserCog,
  Server,
  CheckCircle,
  Sliders,
  LineChart,
  Wallet,
} from "lucide-react";

const reasons = [
  {
    icon: UserCog,
    title: "35+ years' experience",
    desc: `Founded in 1989, 4XTRADZ provides its clients with local expertise,
    backed by the security and financial strength of a global company.`,
  },
  {
    icon: Server,
    title: "London-based server",
    desc: `Our London based server and industry reputation helps us provide a tier-one
    liquidity solution, so we can consistently deliver lightning-quick execution speeds.`,
  },
  {
    icon: CheckCircle,
    title: "Unrestricted trading",
    desc: `Our MetaTrader platforms have no restrictions on minimum stop-loss or take-profit
    distances and limits, especially useful for high-volume traders.`,
  },
  {
    icon: Sliders,
    title: "Hedge your positions",
    desc: `Go long and short at the same time on a specific instrument, with no interruption
    for traders using Expert Advisors (EAs) on MetaTrader.`,
  },
  {
    icon: LineChart,
    title: "Free premium indicators and EAs",
    desc: `Hone your technical analysis with our suite of free additional premium indicators
    and EAs.`,
  },
  {
    icon: Wallet,
    title: "Straightforward funding",
    desc: `Deposit and withdraw funds easily, and whenever you want to.`,
  },
];

const WhyTradeCFDs = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0c1220] to-[#0a0f1a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-white mb-16">
          Why trade CFDs with 4XTRADZ?
        </h2>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#2e3a56] rounded-lg p-8 shadow-lg hover:shadow-xl transition"
              >
                <Icon className="w-8 h-8 text-white mb-6" />

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyTradeCFDs;
