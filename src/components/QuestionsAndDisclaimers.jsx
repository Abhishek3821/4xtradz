import React from "react";

const QuestionsAndDisclaimers = () => {
  return (
    <section className="w-full">

      {/* ================= QUESTIONS ================= */}
      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center space-y-6">
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Do you have any questions?
          </h3>

          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Our global support team is here to help. Reach out by email or phone
            and we’ll get back to you as soon as possible.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <a
              href="mailto:global@cmcmarkets.com"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
              global@cmcmarkets.com
            </a>

            <a
              href="tel:+442030038080"
              className="inline-flex items-center justify-center rounded-full border border-gray-400 px-6 py-3 text-gray-900 font-medium hover:bg-gray-200 transition"
            >
              (UK) +44 20 3003 8080
            </a>
          </div>

          <p className="text-sm text-gray-500 pt-2">
            Lines open 8am to 8pm, Monday to Friday
          </p>
        </div>
      </div>

      {/* ================= DISCLAIMERS ================= */}
      <div className="bg-[#2f3b55] text-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-14 space-y-4 text-sm leading-relaxed">

          <p>
            1. Best Mobile Trading Platform, ADVFN International
            Financial Awards 2024; No.1 Web Platform, ForexBrokers.com Awards
            2023; No.1 Most Currency Pairs, ForexBrokers.com Awards 2023; Best
            Charting (Germany), Investment Trends Leverage Trading Report 2023;
            Best Customer Service (Germany), Investment Trends Leverage Trading
            Report 2023; Best In-House Analysis, Professional Trader Awards 2023;
            No.1 Platform Technology (UK), ForexBrokers.com Awards 2022; Best CFD
            Provider (UK), Online Money Awards 2022; Industry Pioneer with
            “Outstanding” Customer Rating (Germany), Focus Money Test Edition
            36/2022; “Very good” Trading Platform (Germany), Deutsches
            Kundeninstitut (DKI) Survey 2022.
          </p>

          <p>
            2. 1.621 million unique user logins for the 4XTRADZ trading
            and investing platforms globally, as at August 2024.
          </p>

          <p>
            3. Spreads from 0.0 pips on six major forex pairs, and a 25%
            spread discount on 300+ other forex pairs, with a low, fixed
            commission at $2.50 per $100,000 notional value, with our FX Active
            account.
          </p>

          <p>
            4. The CMC Next Generation platform has approximately
            12,000 instruments; MetaTrader 5 has approximately 2,220
            instruments; MetaTrader 4 has 220 instruments.
          </p>

          <p>
            5. 0.0040 seconds CFD median trade execution time on CMC
            Markets web and mobile platforms, 1 April 2023–31 March 2024.
          </p>

          <p>
            6. Reuters news ticker is a registered trademark of Thomson
            Reuters®. Refinitiv® Morningstar is a registered trademark of
            Morningstar Inc.
          </p>

          <p>
            7. 99.29% of MT4 market open orders were filled at quote,
            23 September 2024–31 March 2025.
          </p>

          <p>
            8. 99.99%+ MT4 core platform uptime, 1–31 August 2023.
          </p>

        </div>
      </div>

    </section>
  );
};

export default QuestionsAndDisclaimers;
