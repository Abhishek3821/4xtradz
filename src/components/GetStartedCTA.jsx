import React from "react";
import logo from "../assets/xz15.webp";
const GetStartedCTA = () => {
  return (
    <section className="w-full bg-white py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* ================= TOP LABEL ================= */}
        <p className="text-lg font-semibold tracking-widest text-gray-900 uppercase mb-6">
          Stock Trading
        </p>

        {/* ================= ICON ================= */}
        <div className="mx-auto mb-6 flex h-24 w-64 items-center justify-center">
          <img src={logo} alt="logo" className="w-48 h-48" />
        </div>

        {/* ================= TITLE ================= */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
          Ready to get started?
        </h2>

        {/* ================= DESCRIPTION ================= */}
        <p className="text-black text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          If you already have an account, log in to your chosen platform.
          <br className="hidden sm:block" />
          Don&apos;t have one yet? Open an account now.
        </p>

        {/* ================= CTA BUTTONS ================= */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
            Log in
          </button>

          <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Open account
          </button>
        </div>

      </div>
    </section>
  );
};

export default GetStartedCTA;
