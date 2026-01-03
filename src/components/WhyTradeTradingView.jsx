import {
  Layout,
  Percent,
  Award,
  Handshake,
  BarChart3,
  FileCode,
} from "lucide-react";

const features = [
  {
    title: "Tight spreads",
    description:
      "Get narrow spreads on 12,000 instruments across indices, forex, commodities, shares, ETFs and more.",
    icon: Layout,
  },
  {
    title: "Trade with leverage",
    description:
      "Open a trade with as little as 3.34% of the full notional value of the position. Leverage can amplify both your profits and losses.",
    icon: Percent,
  },
  {
    title: "Superior execution",
    description:
      "Trade with us through TradingView and get 100% automated execution, powered by our award-winning technology¹.",
    icon: Award,
  },
  {
    title: "Smooth integration",
    description:
      "Open, manage and close your trades with us in TradingView; view and modify trades placed through TradingView when you log into our platform.",
    icon: Handshake,
  },
  {
    title: "Advanced technical analysis",
    description:
      "Access more than 400 technical indicators and get thousands more community-built trading strategies.",
    icon: BarChart3,
  },
  {
    title: "Analyse markets using Pine Script™",
    description:
      "Create and develop your own technical indicators, trading strategies and alerts using Pine Script™, TradingView's user-friendly programming language.",
    icon: FileCode,
  },
];

export default function WhyTradeTradingView() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-start gap-4 mb-14">
          <span className="w-1 h-12 bg-blue-600 mt-1" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why trade on TradingView with us?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-md p-8 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={32} className="text-gray-900" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
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
