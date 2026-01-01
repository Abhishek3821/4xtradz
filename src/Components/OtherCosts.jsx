import { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    title: "Rollover costs",
    content:
      "Rollover costs are charged when you hold a position overnight. These costs depend on the instrument and market conditions.",
  },
  {
    title: "Guaranteed stop-loss orders",
    content:
      "Guaranteed stop-loss orders ensure your trade closes at the specified level, regardless of market volatility. A small premium applies.",
  },
  {
    title: "Market data fees",
    content:
      "Some exchanges charge fees for access to live market data. These fees may vary depending on the market and account type.",
  },
  {
    title: "Account inactivity fee",
    content:
      "An inactivity fee may be charged if there is no trading activity on your account for a prolonged period.",
  },
];

function OtherCosts() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Other costs &amp; considerations
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 max-w-xl">
              There are some other potential costs you may incur, depending on
              the instrument and asset-class you're trading on, and how you
              trade.
            </p>

            <p className="text-gray-700 leading-relaxed max-w-xl">
              These include rollover costs, guaranteed stop-loss orders, market
              data fees and dormancy fees.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default OtherCosts;
