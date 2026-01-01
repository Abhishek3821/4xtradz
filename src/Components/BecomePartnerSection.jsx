import React from "react";

const BecomePartnerSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl space-y-8">

          {/* ================= TITLE ================= */}
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 relative pl-4">
            <span className="absolute left-0 top-2 h-8 w-1 bg-gray-900 rounded" />
            Become a CMC Markets partner
          </h2>

          {/* ================= DESCRIPTION ================= */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Partner with one of the industry's leading CFD and forex brokers.
            With our advanced IB portal reporting functions and high customer
            conversion rates, our program is designed to help you grow your
            business. Be rewarded with generous remunerations, including support
            for multi-tiered and customisable deals and payments structures.
            Contact us today to talk with one of our experienced regional
            representatives.
          </p>

          {/* ================= CTA BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Become a partner
            </button>

            <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Log in to partner portal
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BecomePartnerSection;
