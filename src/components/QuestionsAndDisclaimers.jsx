import React from "react";

const QuestionsAndDisclaimers = () => {
  return (
    <section className="w-full bg-gray-200">

      {/* ================= QUESTIONS ================= */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h3 className="text-xl md:text-3xl font-medium text-gray-900 mb-4">
          Do you have any questions?
        </h3>

        <p className="text-gray-700 text-sm md:text-lg">
          Email us at{" "}
          <a
            href="mailto:global@cmcmarkets.com"
            className="underline hover:text-blue-600"
          >
            global@cmcmarkets.com
          </a>
          , or call us on{" "}
          <a
            href="tel:+442030038080"
            className="underline hover:text-blue-600"
          >
            (UK) +44 20 3003 8080
          </a>{" "}
          (Lines open 8am to 8pm, Monday to Friday).
        </p>
      </div>

      {/* ================= DISCLAIMERS ================= */}
      <div className="w-full bg-[#2f3b55] text-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 text-md space-y-2">

          <p>
            <sup>1</sup>Best Mobile Trading Platform, ADVFN International
            Financial Awards 2024; No.1 Web Platform, ForexBrokers.com Awards
            2023; No.1 Most Currency Pairs, ForexBrokers.com Awards 2023; Best
            Charting (Germany), Investment Trends Leverage Trading Report 2023;
            Best Customer Service (Germany), Investment Trends Leverage Trading
            Report 2023; Best In-House Analysis, Professional Trader Awards 2023;
            No.1 Platform Technology (UK), ForexBrokers.com Awards 2022; Best CFD
            Provider (UK), Online Money Awards 2022; Industry Pioneer with
            "Outstanding" Customer Rating (Germany), Focus Money Test Edition
            36/2022; "Very good" Trading Platform (Germany), Deutsches
            Kundeninstitut (DKI) Survey 2022.
          </p>

          <p>
            <sup>2</sup>1.621 million unique user logins for the 4XTRADZ
            trading and investing platforms globally, as at August 2024.
          </p>

          <p>
            <sup>3</sup>Spreads from 0.0 pips on six major forex pairs, and a 25%
            spread discount on 300+ other forex pairs, with a low, fixed
            commission at $2.50 per $100,000 notional value, with our FX Active
            account.
          </p>

          <p>
            <sup>4</sup>The CMC Next Generation platform has approximately 12,000
            instruments; MetaTrader 5 has approximately 2,220 instruments;
            MetaTrader 4 has 220 instruments.
          </p>

          <p>
            <sup>5</sup>0.0040 seconds CFD median trade execution time on CMC
            Markets web and mobile platforms, 1 April 2023–31 March 2024.
          </p>

          <p>
            <sup>6</sup>Reuters news ticker is a registered trademark of Thomson
            Reuters®. Refinitiv® Morningstar is a registered trademark of
            Morningstar Inc.
          </p>

          <p>
            <sup>7</sup>99.29% of MT4 market open orders were filled at quote, 23
            September 2024–31 March 2025.
          </p>

          <p>
            <sup>8</sup>99.99%+ MT4 core platform uptime, 1–31 August 2023.
          </p>

        </div>
      </div>

    </section>
  );
};

export default QuestionsAndDisclaimers;
