import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const reviews = [
  {
    title: "Great platform and easy to understand",
    text: "Great platform and easy to understand. It is laid out very well. The number of products...",
    author: "Martin McKendry",
    date: "December 20",
  },
  {
    title: "They answer to my email quickly",
    text: "They answer to my email quickly",
    author: "Mohammad",
    date: "December 20",
  },
  {
    title: "Great platforms, great spreads",
    text: "Great platforms, great spreads, great customer service. Well done CMC and keep up the...",
    author: "VINCE TESTA",
    date: "December 20",
  },
  {
    title: "System friendly",
    text: "Very easy to trade the platform.",
    author: "John",
    date: "December 19",
  },
  {
    title: "Invited review",
    text: "Learn more about review types",
    author: "Angela",
    date: "December 17",
  },
  {
    title: "Great platform and easy to understand",
    text: "Great platform and easy to understand. It is laid out very well. The number of products...",
    author: "Martin McKendry",
    date: "December 20",
  },
  {
    title: "They answer to my email quickly",
    text: "They answer to my email quickly",
    author: "Mohammad",
    date: "December 20",
  },
  {
    title: "Great platforms, great spreads",
    text: "Great platforms, great spreads, great customer service. Well done CMC and keep up the...",
    author: "VINCE TESTA",
    date: "December 20",
  },
  {
    title: "System friendly",
    text: "Very easy to trade the platform.",
    author: "John",
    date: "December 19",
  },
  {
    title: "Invited review",
    text: "Learn more about review types",
    author: "Angela",
    date: "December 17",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="w-full bg-gray-200 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
            What are other traders saying about CMC Markets?
          </h2>
          <p className="text-black max-w-3xl mx-auto text-lg">
            As a financial services pioneer, we combine technical excellence with 35 years‘ industry know-how. That‘s why 1.5 million+ global traders and investors put their confidence in us.⁵

          </p>
        </div>

        {/* ================= SLIDER ================= */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="flex items-stretch"
            >
              {/* CARD */}
              <div className="flex flex-col w-full min-h-56 bg-white  p-6 shadow-sm">
                
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-green-500 text-lg">★</span>
                  ))}
                  <span className="ml-2 text-xs text-gray-500">Invited</span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                  {review.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {review.text}
                </p>

                {/* Footer */}
                <p className="text-xs text-gray-500 mt-auto">
                  <span className="font-medium">{review.author}</span>,{" "}
                  {review.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= FOOTER ================= */}
        <div className="text-center mt-2 text-md text-gray-600">
          Rated <strong>4.3 / 5</strong> based on{" "}
          <strong>2,746 reviews</strong>. Showing our 5-star reviews.
          <div className="flex justify-center items-center gap-2 mt-2 text-green-600 font-semibold">
            ★ Trustpilot
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSlider;
