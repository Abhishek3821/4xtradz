import React from "react";

const stats = [
  {
    value: "35+",
    label: "years of experience",
  },
  {
    value: "1 million+",
    label: "traders and investors globally¹",
  },
  {
    value: "£100m+",
    label: "invested in our technology",
  },
  {
    value: "12",
    label: "global offices",
  },
];

export default function CompanyStats() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0b1220] via-[#0e1628] to-[#0b1220] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 text-white">
          {stats.map((item, index) => (
            <div key={index} className="relative">

              {/* Blue accent shape */}
              <span className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rotate-45 rounded-sm opacity-90" />

              {/* Value */}
              <div className="text-4xl md:text-5xl font-semibold mb-2 relative z-10">
                {item.value}
              </div>

              {/* Label */}
              <p className="text-sm text-gray-300 max-w-xs relative z-10">
                {item.label}
              </p>

            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="mt-16 border-t border-white/20" />

      </div>
    </section>
  );
}
