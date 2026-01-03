import React from "react";
import GetStartedCTA from "./GetStartedCTA";
import QuestionsAndDisclaimers from "./QuestionsAndDisclaimers";
import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0b1220] to-[#0a0f1a] text-gray-300">

      {/* CTA SECTIONS */}
      <GetStartedCTA />
      <QuestionsAndDisclaimers />

      {/* ================= TOP ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-14">

        {/* Brand */}
        <div className="text-lg tracking-wide text-gray-400">
          <span className="uppercase">Institutional</span>{" "}
          <span className="uppercase">Group</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xl font-bold text-white">4XTRADZ</div>
          <span className="border-l border-gray-600 h-5 mx-3" />
          <span className="text-gray-400 text-lg">CFD Trading</span>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-12">

            {/* CONTACT */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg uppercase">
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:+442030038080" className="hover:underline">
                    (UK) +44 20 3003 8080
                  </a>
                </li>
                <li className="text-xs text-gray-400">
                  Lines open 24hrs, Monday – Friday
                </li>
                <li>
                  <a
                    href="mailto:global@4xtradz.com"
                    className="hover:underline"
                  >
                    global@4xtradz.com
                  </a>
                </li>
              </ul>
            </div>

            {/* LOGIN */}
            <div>
              <h4 className="text-white font-semibold mb-4">Login</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">MetaTrader Client Portal</a></li>
                <li><a href="#" className="hover:underline">Partner Portal</a></li>
                <li><a href="#" className="hover:underline">4XTRADZ Next Generation Login</a></li>
                <li><a href="#" className="hover:underline">WebTrader 4 Login</a></li>
                <li><a href="#" className="hover:underline">WebTrader 5 Login</a></li>
              </ul>
            </div>

            {/* SOCIAL MEDIA */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase">
                Follow Us
              </h4>

              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/4xtradz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-pink-600 hover:border-pink-600 transition"
                >
                  <FaInstagram className="text-lg text-white" />
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/4xtradz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-black hover:border-black transition"
                >
                  <FaXTwitter className="text-lg text-white" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61585867649232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-blue-600 hover:border-blue-600 transition"
                >
                  <FaFacebookF className="text-lg text-white" />
                </a>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="space-y-12">

            {/* HQ */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                4XTRADZ Headquarters
              </h4>
              <ul className="space-y-3 text-sm">
                <li>🇧🇲 Washington Mall II, 2nd Floor, Unit I-202, 20 Church Street, Hamilton HM 11</li>
                <li>🇬🇧 133 Houndsditch, London, EC3A 7BX</li>
                <li>🇦🇺 Level 20, Tower 3, International Towers, 300 Barangaroo Avenue</li>
                <li>🇸🇬 2 Central Boulevard, IOI Towers #25-03, 018916, Singapore</li>
              </ul>
            </div>

            {/* APP */}
            <div>
              <h4 className="text-white font-semibold mb-2">
                Download our app
              </h4>
              <p className="text-sm text-gray-400 mb-4 max-w-md">
                With our intuitive trading apps, you can keep an eye on the
                markets and your open positions on the go.
              </p>

              <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Download
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= DISCLAIMER ================= */}
      <div className="border-t border-white max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto py-10 text-lg leading-relaxed space-y-2">
          <p>
            OTC leveraged products, including CFDs, are complex instruments and
            come with a high risk of losing money rapidly due to leverage. 54%
            of retail investor accounts lose money when trading CFDs with this
            provider.
          </p>

          <p>
            4XTRADZ Bermuda Limited is licensed to conduct investment
            business and digital asset business by the Bermuda Monetary
            Authority.
          </p>

          <p>
            The information on this site is not directed at residents of the
            United States, Belgium.
          </p>

          <p>
            Telephone calls and online chat conversations may be recorded.
          </p>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:underline">Legal documents</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Pricing Policy</a>
            <a href="#" className="hover:underline">Important information</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Fraud awareness</a>
            <a href="#" className="hover:underline">Client disclosures</a>
          </div>

          <div>© 2025 4XTRADZ</div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
