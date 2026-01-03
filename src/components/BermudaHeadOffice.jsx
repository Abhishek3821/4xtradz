import React from "react";

export default function BermudaHeadOffice() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="w-1 h-16 bg-black mt-2" />
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                Bermuda head<br />office
              </h2>
            </div>

            <div className="space-y-2 text-gray-800 text-lg leading-relaxed">
              <p>4XTRADZ Bermuda Limited</p>
              <p>Park Place</p>
              <p>55 Par-La-Ville Road, Third Floor</p>
              <p>Hamilton HM11,</p>
              <p>Bermuda</p>
            </div>

            <div className="space-y-3 pt-4 text-lg">
              <a
                href="tel:+442030038080"
                className="block text-gray-900 underline underline-offset-4 hover:text-blue-600 transition"
              >
                +44 (0)20 3003 8080
              </a>

              <a
                href="mailto:global@cmcmarkets.com"
                className="block text-gray-900 underline underline-offset-4 hover:text-blue-600 transition"
              >
                global@cmcmarkets.com
              </a>
            </div>
          </div>

          {/* ================= MAP ================= */}
          <div className="w-full h-[420px] rounded-xl overflow-hidden border shadow-sm">
            <iframe
              title="4XTRADZ Bermuda Office"
              src="https://www.google.com/maps?q=Park%20Place%2C%2055%20Par-La-Ville%20Rd%2C%20Hamilton%2C%20Bermuda&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
