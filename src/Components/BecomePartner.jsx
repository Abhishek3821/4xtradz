import React from "react";

const BecomePartner = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
          Become a CMC Markets partner
        </h2>

        {/* Description */}
        <p className="max-w-4xl text-lg text-gray-700 leading-relaxed mb-12">
          Partner with one of the industry's leading CFD and forex brokers.
          With our advanced IB portal reporting functions and high customer
          conversion rates, our program is designed to help you grow your
          business. Be rewarded with generous remunerations, including support
          for multi-tiered and customisable deals and payments structures.
          Contact us today to talk with one of our experienced regional
          representatives.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Become a partner
          </button>

          <button className="px-8 py-4 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
            Log in to partner portal
          </button>
        </div>

      </div>
    </section>
  );
};

export default BecomePartner;
