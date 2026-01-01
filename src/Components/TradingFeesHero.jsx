import { Search } from "lucide-react";
import heroImage from "../assets/xz6.png";

export default function TradingFeesHero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Trading fees background"
          className="w-full h-full object-cover object-right"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5f8fa3]/95 via-[#5f8fa3]/85 to-[#0b1220]/95" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center">
        <div className="max-w-2xl text-white">

          {/* TITLE */}
          <div className="flex items-start gap-4 mb-6">
            <span className="w-1.5 h-14 bg-blue-500 rounded-full mt-1" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Our trading fees
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Discover all the costs involved in{" "}
            <span className="underline underline-offset-4 decoration-blue-400">
              CFD trading
            </span>
            , including spreads and overnight holding costs.
          </p>

          {/* ================= SEARCH CARD ================= */}
          <div className="relative max-w-lg mb-16">
            <div className="flex items-center gap-3 bg-white rounded-full shadow-xl px-5 py-3">

              {/* ICON */}
              <Search className="text-gray-400" size={20} />

              {/* INPUT */}
              <input
                type="text"
                placeholder="Search instruments (e.g. EUR/USD, Gold)"
                className="w-full text-gray-900 placeholder-gray-500 bg-transparent focus:outline-none text-base"
              />

              {/* BUTTON */}
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-full text-sm font-medium">
                Search
              </button>
            </div>
          </div>

          {/* ================= TRUSTPILOT ================= */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/90">
            <span className="font-medium">Excellent</span>

            <div className="flex items-center gap-1 text-green-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <span>4.3 out of 5</span>
            <span className="opacity-80">on Trustpilot</span>
          </div>

        </div>
      </div>
    </section>
  );
}
