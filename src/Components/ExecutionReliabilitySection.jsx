import React from "react";

const stats = [
  {
    value: "100%",
    title: "Automated execution",
    desc: "Your trades will be filled without any dealer intervention.",
  },
  {
    value: "99.29%",
    title: "Fill rate",
    footnote: "⁵",
    desc: "We fulfil your order without off-quotes, and wherever possible at the price you see.",
  },
  {
    value: "99.99%+",
    title: "Platform stability",
    footnote: "⁶",
    desc: "We consistently achieve almost 100% core platform uptime, so you can focus on your trading.",
  },
];

const ExecutionReliabilitySection = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 relative pl-4">
              <span className="absolute left-0 top-2 h-8 w-1 bg-gray-900 rounded" />
              Superior execution and reliability
            </h2>

            <p className="text-base md:text-lg leading-relaxed">
              Our pioneering technology and highly-regarded customer service,
              alongside a choice of powerful platforms, offers an ideal
              combination for serious traders.
            </p>
          </div>

          {/* ================= RIGHT STATS ================= */}
          <div className="space-y-3">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="rounded-md p-8 shadow-md"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {item.value}
                </h3>

                <p className="font-semibold text-gray-900 mb-2">
                  {item.title}
                  {item.footnote && (
                    <sup className="text-md">{item.footnote}</sup>
                  )}
                </p>

                <p className="text-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExecutionReliabilitySection;
