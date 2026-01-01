import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// ================= FAQ DATA =================
const faqData = {
  cfd: {
    title: "New to CFD trading?",
    items: [
      {
        q: "What are CFDs?",
        a: <>A contract for difference (CFD) is a derivative product which enables you to trade on the price movements of underlying financial assets (such as forex, indices, commodities, shares and treasuries). It's an agreement to exchange the difference in the value of an asset from the time the contract is opened until the time it's closed.
<p><br />
With a CFD, you never actually own the asset or instrument you're trading, but you can still benefit if the market moves in your favour, or make a loss should the market move against you.
</p>
<p><br />
Trading CFDs involves trading on leverage, which means that you can enter a position with a set initial deposit, known as the margin requirement. It's important to remember that leverage amplifies your gains and losses in equal measure, based on the full value of the trade, and not just the initial margin amount. Learn more about CFD trading
</p>
</>
      },
      {
        q: "What's the difference between trading CFDs and share trading?",
        a: "CFD trading allows leverage and short-selling, whereas share trading involves owning the underlying shares.",
      },
      {
        q: "What are the risks with CFD trading?",
        a: "CFDs are leveraged products, meaning losses can exceed deposits if risk management is not applied properly.",
      },
    ],
  },

  cmc: {
    title: "New to CMC Markets?",
    items: [
      { q: "Is CMC Markets regulated?", a: "Yes, CMC Markets is regulated by top-tier global financial authorities." },
      { q: "How does CMC Markets protect my money?", a: "Client funds are held in segregated trust accounts with leading banks." },
      { q: "How do I place a trade?", a: "You can place trades through our web platform, MetaTrader, or TradingView." },
      { q: "What is the maximum leverage offered by CMC Markets?", a: "Leverage depends on the asset class and your regulatory region." },
      { q: "What is TradingView?", a: "TradingView is an advanced charting platform integrated with CMC Markets." },
      {
        q: "What are the key differences between MT4, MT5, TradingView and CMC's trading platforms?",
        a: "Each platform offers unique tools, execution methods, and charting capabilities tailored to different trading styles.",
      },
      { q: "Can I hedge positions in MetaTrader?", a: "Yes, MetaTrader allows hedging by holding long and short positions simultaneously." },
      { q: "How can I withdraw my funds?", a: "Withdrawals can be requested through the secure client portal." },
      { q: "How do I reset my password?", a: "You can reset your password using the ‘Forgot password’ option on the login page." },
      { q: "What is the complaints procedure at CMC Markets?", a: "CMC Markets follows a structured complaints handling process in line with regulations." },
    ],
  },
};

// ================= ACCORDION ITEM =================
const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-white rounded-xl shadow-sm">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-gray-900"
    >
      {question}
      <ChevronDown
        className={`w-5 h-5 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {isOpen && (
      <div className="px-6 pb-4 text-md text-gray-800 leading-relaxed">
        {answer}
      </div>
    )}
  </div>
);

// ================= MAIN COMPONENT =================
const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (key) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className="w-full bg-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-16 relative pl-4">
          <span className="absolute left-0 top-2 h-8 w-1 bg-gray-900 rounded" />
          FAQs
        </h2>

        {/* ================= FAQ GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ===== LEFT COLUMN ===== */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {faqData.cfd.title}
            </h3>

            <div className="space-y-4">
              {faqData.cfd.items.map((item, idx) => {
                const key = `cfd-${idx}`;
                return (
                  <AccordionItem
                    key={key}
                    question={item.q}
                    answer={item.a}
                    isOpen={openIndex === key}
                    onClick={() => toggle(key)}
                  />
                );
              })}
            </div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {faqData.cmc.title}
            </h3>

            <div className="space-y-4">
              {faqData.cmc.items.map((item, idx) => {
                const key = `cmc-${idx}`;
                return (
                  <AccordionItem
                    key={key}
                    question={item.q}
                    answer={item.a}
                    isOpen={openIndex === key}
                    onClick={() => toggle(key)}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
