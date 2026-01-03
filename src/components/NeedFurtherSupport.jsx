import React from "react";
import { Phone, Mail } from "lucide-react";

const NeedFurtherSupport = () => {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-16">
          Need further support?
        </h2>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ================= CALL US ================= */}
          <div className="bg-white rounded-xl shadow-sm p-10 text-center hover:shadow-md transition">
            <div className="flex justify-center mb-6">
              <Phone size={28} className="text-gray-800" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Call us
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Lines open 24 hours, Monday to Friday.
            </p>

            <a
              href="tel:+442030038080"
              className="text-sm font-medium underline underline-offset-4 hover:text-blue-600 transition"
            >
              +44 (0)20 3003 8080
            </a>
          </div>

          {/* ================= EMAIL US ================= */}
          <div className="bg-white rounded-xl shadow-sm p-10 text-center hover:shadow-md transition">
            <div className="flex justify-center mb-6">
              <Mail size={28} className="text-gray-800" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Email us
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              With any queries or questions.
            </p>

            <a
              href="mailto:global@cmcmarkets.com"
              className="text-sm font-medium underline underline-offset-4 hover:text-blue-600 transition"
            >
              global@cmcmarkets.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NeedFurtherSupport;
