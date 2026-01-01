import React from "react";
import img1 from "../assets/xz8.webp";
import img2 from "../assets/xz9.webp";
import { Apple, Play } from "lucide-react";

export default function GetTradingViewApp() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Get the TradingView app
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Visit{" "}
              <a
                href="#"
                className="font-medium underline underline-offset-4 decoration-blue-500 hover:text-blue-600 transition"
              >
                TradingView
              </a>{" "}
              or download the app for desktop or mobile.
            </p>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-gray-900 text-center">
              Desktop
            </h3>

            <ImageCard src={img1} alt="TradingView desktop app" />

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <PlatformButton icon="🐧" label="Linux" />
              <PlatformButton icon="🪟" label="Windows" />
              <PlatformButton icon="🍎" label="MacOS" />
            </div>
          </div>

          {/* ================= MOBILE ================= */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-gray-900 text-center">
              Mobile
            </h3>

            <ImageCard src={img2} alt="TradingView mobile app" />

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <PlatformButton icon={<Play size={16} />} label="Google Play" />
              <PlatformButton icon={<Apple size={16} />} label="App Store" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= IMAGE CARD ================= */

const ImageCard = ({ src, alt }) => {
  return (
    <div className="group relative overflow-hidden bg-white transition">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover transition-transform duration-500"
      />

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
};

/* ================= BUTTON ================= */

const PlatformButton = ({ icon, label }) => {
  return (
    <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-blue-500 text-blue-600 text-sm font-medium
      hover:bg-blue-50 hover:shadow-sm transition active:scale-95">
      <span className="text-lg flex items-center">{icon}</span>
      {label}
    </button>
  );
};
