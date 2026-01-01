import React from "react";
import { Phone, Mail } from "lucide-react";

// Replace with your actual image
import aboutImg from "../assets/xz10.webp";

const AboutCMCMarkets = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-xl">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 relative pl-6 mb-8">
              <span className="absolute left-0 top-2 h-8 w-1 bg-gray-900" />
              About CMC Markets
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Founded over 35 years ago, we remain dedicated to supporting our
              clients on their trading journey.
            </p>

            {/* Divider */}
            <hr className="border-gray-900 mb-10" />

            {/* Contact Info */}
            <div className="space-y-4 mb-6 text-gray-800">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <a
                  href="tel:+442071708200"
                  className="underline hover:text-gray-900"
                >
                  +44 (0)20 7170 8200
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:clientmanagement@cmmarkets.co.uk"
                  className="underline hover:text-gray-900"
                >
                  clientmanagement@cmmarkets.co.uk
                </a>
              </div>
            </div>

            {/* Trustpilot */}
            <div className="flex items-center gap-2 text-sm text-gray-800 mb-10">
              <span>Excellent</span>
              <span>4.3 out of 5</span>
              <span className="text-green-500 font-semibold">★</span>
              <span>Trustpilot</span>
            </div>

            {/* CTA */}
            <button className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Create account
            </button>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative w-full h-full">
            <img
              src={aboutImg}
              alt="About CMC Markets"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCMCMarkets;
