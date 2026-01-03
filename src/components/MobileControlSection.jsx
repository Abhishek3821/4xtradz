import React from "react";
import { LayoutGrid, BarChart3, Smartphone, Bell } from "lucide-react";

const features = [
  {
    title: "Portable portfolio:",
    description:
      "Our intuitive mobile trading app lets you open, modify and close trades on the go.",
    icon: LayoutGrid,
  },
  {
    title: "12,000 Instruments² at your fingertips",
    description:
      "Trade contracts for difference (CFDs) on thousands of markets across indices, forex, commodities, shares and more.",
    icon: BarChart3,
  },
  {
    title: "Optimised for mobile",
    description:
      "Get advanced order ticketing, charts designed for mobile, and over 40 technical indicators and drawing tools.",
    icon: Smartphone,
  },
  {
    title: "Instant notifications",
    description:
      "Receive alerts by push notification, text message or email, so you never miss a key market development.",
    icon: Bell,
  },
];

const MobileControlSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-16">
          Total control, even when you're on the move
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#323C59] rounded-lg p-8 text-white min-h-64 flex flex-col"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/90">
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

export default MobileControlSection;