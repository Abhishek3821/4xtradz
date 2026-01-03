import {
  PoundSterling,
  Plus,
  Landmark,
  ArrowUpDown,
  Zap,
  CheckCircle,
  Wallet,
} from "lucide-react";

const benefits = [
  {
    title: "Transparent pricing",
    description:
      "See bid and ask prices, premiums, and more up front, helping you to understand your costs before you place a trade.",
    icon: PoundSterling,
    dark: true,
  },
  {
    title: "Precision pricing",
    description:
      "We combine multiple feeds from tier-one banks, to get you the most accurate bid/ask price.",
    icon: Plus,
  },
  {
    title: "Fixed, low commission",
    description:
      "Factor in your cost per trade, with fixed low commission at just $2.50 per $100,000 notional value.",
    icon: Landmark,
  },
  {
    title: "More forex pairs than anywhere else¹",
    description:
      "We offer 300 FX pairs through our proprietary trading platform, and over 175 FX pairs through MetaTrader 4.",
    icon: ArrowUpDown,
  },
  {
    title: "Ultra-fast execution",
    description:
      "Experience fully automated, lightning-fast trading, with MT4 execution speeds of 0.066 seconds⁵.",
    icon: Zap,
  },
  {
    title: "Precision FX pricing",
    description:
      "With a combination of feeds from tier-one banks, you'll always receive our most accurate price.",
    icon: CheckCircle,
  },
];

export default function FXActiveBenefits() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0b1220] to-[#070c16] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-20">
          What you will get as an FX Active trader?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`rounded-md p-8 transition ${
                  item.dark
                    ? "bg-[#2b344d] text-white"
                    : "bg-[#d6e0ff] text-[#0b1220]"
                }`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon
                    size={32}
                    className={item.dark ? "text-white" : "text-[#0b1220]"}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    item.dark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
