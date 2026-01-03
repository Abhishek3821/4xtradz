import React from "react";

// Replace these with your actual SVG / image assets
import clientsIcon from "../assets/xz11.webp";
import qualityIcon from "../assets/xz12.webp";
import standardsIcon from "../assets/xz13.webp";

const values = [
  {
    title: "Put clients first",
    description:
      "Our business is built around our clients. We're proud to have long lasting relationships by understanding and supporting them every step of the way.",
    icon: clientsIcon,
  },
  {
    title: "Lead with quality",
    description:
      "Our commitment to quality is at the heart of our culture. Whatever we do, we do it properly. When faced with the choice, we always prioritise quality over quantity.",
    icon: qualityIcon,
  },
  {
    title: "Set the standards",
    description:
      "We're clear, open and honest with our clients, and with each other. We don't wait for others, but set the standards for others to follow.",
    icon: standardsIcon,
  },
];

const TheCMCWay = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0b1220] to-[#070c16] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-20">
          The CMC way
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/30 p-8 text-white backdrop-blur-sm bg-white/5"
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-32 mb-8"
              />

              {/* Divider */}
              <hr className="border-white/40 mb-6" />

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TheCMCWay;
