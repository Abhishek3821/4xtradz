import {
  ArrowDownUp,
  Gauge,
  Clock,
  Layers,
  MessageSquare,
} from "lucide-react";

const stats = [
  {
    value: "0.0",
    label: "Pips FX minimum spread¹",
    icon: ArrowDownUp,
  },
  {
    value: "1:200",
    label: "Maximum retail leverage",
    icon: Gauge,
  },
  {
    value: "0.01",
    label: "Micro lot trading*",
    icon: Clock,
  },
  {
    value: "12,000",
    label: "Financial instruments²",
    icon: Layers,
  },
  {
    value: "24/5",
    label: "Dedicated customer support",
    icon: MessageSquare,
  },
];

export default function KeyTradingStats() {
  return (
    <section className="w-full bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-4">
                <Icon size={28} className="text-gray-900" />

                <span className="text-3xl font-semibold text-gray-900">
                  {item.value}
                </span>

                <span className="text-sm text-gray-700">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* FOOTNOTE */}
        <p className="text-center text-sm text-gray-600 mt-10">
          *Trade one-hundredth the size of a standard lot
        </p>

      </div>
    </section>
  );
}
