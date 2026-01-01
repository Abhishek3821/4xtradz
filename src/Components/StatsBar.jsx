import React from "react";
import {
  ArrowUpDown,
  Gauge,
  Coins,
  Layers,
  MessageSquare,
} from "lucide-react";

const stats = [
  {
    icon: ArrowUpDown,
    value: "0.0",
    label: "Pips FX minimum spread",
    note: "³",
  },
  {
    icon: Gauge,
    value: "1:200",
    label: "Maximum retail leverage",
  },
  {
    icon: Coins,
    value: "0.01",
    label: "Micro lot trading",
    note: "*",
  },
  {
    icon: Layers,
    value: "12,000",
    label: "Financial instruments",
    note: "⁴",
  },
  {
    icon: MessageSquare,
    value: "24/5",
    label: "Dedicated customer support",
  },
];

const StatsBar = () => {
  return (
    <section className="w-full bg-gray-200 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* ================= STATS GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">

          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3"
              >
                <Icon className="w-7 h-7 text-gray-900" />

                <h3 className="text-3xl font-bold text-gray-900">
                  {item.value}
                </h3>

                <p className="text-md max-w-[180px]">
                  {item.label}
                  {item.note && (
                    <sup className="text-md ml-0.5">{item.note}</sup>
                  )}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= FOOTNOTE ================= */}
        <p className="text-center text-md mt-10">
          *Trade one-hundredth the size of a standard lot
        </p>

      </div>
    </section>
  );
};

export default StatsBar;
