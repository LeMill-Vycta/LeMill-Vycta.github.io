"use client";

import React from "react";

import { InfiniteMovingCards } from "./ui/infinitemove";

const testimonialData = [
  {
    image: "/review/t-avt-(10).png",
    name: "Isabella Jackson",
    position: "CEO, Bella's Boutique",
    message:
      "The SEO and branding work completely transformed my business. Since the relaunch, sales and inbound leads have climbed consistently.",
  },
  {
    image: "/review/t-avt-(8).png",
    name: "Imka Amahle",
    position: "Founder",
    message:
      "For more than five years, your guidance has been a strategic advantage across multiple ventures. Reliable, fast, and always thoughtful.",
  },
  {
    image: "/review/t-avt-(2).png",
    name: "Frank Williams",
    position: "Founder, GreenGro",
    message:
      "Our ecommerce platform finally performs the way it should. Visibility increased and conversions improved right after launch.",
  },
  {
    image: "/review/t-avt-(7).png",
    name: "Wilson Kemboi",
    position: "CEO, Wilson Health",
    message:
      "The new website made patient communication dramatically easier. The product feels modern, stable, and trusted by our users.",
  },
  {
    image: "/review/t-avt-(3).png",
    name: "Emma Yang",
    position: "Operations Manager, BuildIt",
    message:
      "Delivery was precise and on schedule. The engineering quality was excellent and the brand direction helped us stand out.",
  },
  {
    image: "/review/t-avt-(4).png",
    name: "Carey Brown",
    position: "Owner, Carey's Bakery",
    message:
      "My vision was translated into a stunning online experience. Customers now find us faster and trust the brand immediately.",
  },
  {
    image: "/review/t-avt-(5).png",
    name: "Oliver Davis",
    position: "Director, Davis Hotels",
    message:
      "AI automation and website upgrades gave us a meaningful edge in customer response and booking operations.",
  },
  {
    image: "/review/t-avt-(6).png",
    name: "Cliff Miller",
    position: "Entrepreneur",
    message:
      "As a startup, we needed speed without sacrificing quality. The final full-stack solution exceeded expectations.",
  },
  {
    image: "/review/t-avt-(9).png",
    name: "Esme Adalaide",
    position: "Manager, QuickFix",
    message:
      "Our old site was outdated and hard to maintain. The redesign delivered cleaner UX and stronger performance across devices.",
  },
  {
    image: "/review/t-avt-(1).png",
    name: "Michael Johnson",
    position: "Artist",
    message:
      "Exceptional craftsmanship from concept to launch. The new presence makes the brand feel premium and future-proof.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="relative flex h-[35rem] flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/25 antialiased">
      <InfiniteMovingCards items={testimonialData} direction="right" speed="slow" />
    </div>
  );
};

export default TestimonialSlider;
