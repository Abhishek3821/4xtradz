import React from "react";
import {
  Users,
  Megaphone,
  Lightbulb,
  Flame,
  Heart,
} from "lucide-react";

const values = [
  {
    title: "Stand with our clients",
    description:
      "We're as passionate about trading as our clients, and we're here to help them make the most of every opportunity. In everything we do, we put our clients at the centre.",
    icon: Users,
  },
  {
    title: "Focus on impact",
    description:
      "We focus on solving the most important problems that will deliver the biggest impact. We use our time and money wisely and stay focused on the end goal.",
    icon: Megaphone,
  },
  {
    title: "Keep it simple",
    description:
      "In a complex industry, we always strive to keep things as simple as possible. We're honest, reliable and straight-talking.",
    icon: Lightbulb,
  },
  {
    title: "Be bold",
    description:
      "We're not afraid to challenge ourselves or the status quo and we're always looking for ways to improve. If things don't work: we learn, iterate and succeed.",
    icon: Flame,
  },
  {
    title: "Be human",
    description:
      "We’re personable and approachable. We know the value of direct interaction and make ourselves available to talk in person.",
    icon: Heart,
  },
];

const OurValues = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Our values
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We constantly strive to help clients realise their potential,
            and believe in the possibilities of the unrealised.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={28} className="text-gray-900" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurValues;
