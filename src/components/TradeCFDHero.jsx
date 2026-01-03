import React from "react";

const TradeCFDHero = ({
  title,
  bullets = [],
  stats = [],
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "Trading Platform",
}) => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8">

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              <span className="relative pl-4 block">
                <span className="absolute left-0 top-1 h-full w-1 bg-blue-600 rounded" />
                {title}
              </span>
            </h1>

            {/* Bullet Points */}
            {bullets.length > 0 && (
              <ul className="space-y-1 text-gray-700 text-base md:text-md list-disc list-inside">
                {bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {/* Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-1 gap-2 pt-2 text-gray-800">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-xl">{stat.icon}</span>
                    <span>{stat.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {primaryCta && (
                <button
                  onClick={primaryCta.onClick}
                  className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition w-full sm:w-auto"
                >
                  {primaryCta.label}
                </button>
              )}

              {secondaryCta && (
                <button
                  onClick={secondaryCta.onClick}
                  className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition w-full sm:w-auto"
                >
                  {secondaryCta.label}
                </button>
              )}
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">
            {image && (
              <img
                src={image}
                alt={imageAlt}
                className="relative z-10 w-full "
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TradeCFDHero;
