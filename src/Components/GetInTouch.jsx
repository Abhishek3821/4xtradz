import React from "react";

// Replace with your actual background image
import bgImage from "../assets/xz6.png";

const GetInTouch = () => {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* Background image */}
      <img
        src={bgImage}
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0b1220]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-white relative pl-6 mb-6">
            <span className="absolute left-0 top-2 h-8 w-1 bg-blue-600 rounded" />
            Want to get in touch?
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-4">
            Our experienced customer service team are happy to help.
          </p>

          {/* Contact details */}
          <p className="text-lg text-gray-200 leading-relaxed">
            We're available Monday to Friday, from 8am to 8pm by phone on{" "}
            <a
              href="tel:+442030038080"
              className="underline font-medium hover:text-white"
            >
              +44 (0)20 3003 8080
            </a>{" "}
            or by email at{" "}
            <a
              href="mailto:global@cmmarkets.com"
              className="underline font-medium hover:text-white"
            >
              global@cmmarkets.com
            </a>.
          </p>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
