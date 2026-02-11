import Link from "next/link";
import { motion } from "framer-motion";
import { RxArrowTopRight, RxBlendingMode, RxModulzLogo, RxRocket } from "react-icons/rx";
import { BsRobot } from "react-icons/bs";
import { SiVisualstudiocode } from "react-icons/si";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BackgroundBeams } from "./ui/backgroundbeams";

import "swiper/css";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: BsRobot,
    title: "AI Engineering",
    description:
      "Custom LLM workflows, intelligent assistants, and automation pipelines designed to reduce repetitive work and accelerate delivery for your teams.",
  },
  {
    Icon: SiVisualstudiocode,
    title: "Web Development",
    description:
      "Fast, maintainable full-stack products built with modern architecture, responsive UX, and production-ready code quality across every release.",
  },
  {
    Icon: RxRocket,
    title: "SEO Growth Systems",
    description:
      "Technical SEO, structured content strategy, and performance optimization that compound your discoverability and lower acquisition cost over time.",
  },
  {
    Icon: RxModulzLogo,
    title: "Brand Systems",
    description:
      "Distinct visual and messaging systems that align product experience with business positioning so your brand is memorable and market-ready.",
  },
  {
    Icon: RxBlendingMode,
    title: "Creative Product Design",
    description:
      "Interface and interaction design grounded in usability, clarity, and motion storytelling to produce experiences users trust and remember.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        425: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 14,
        },
        760: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 16,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      slidesPerGroup={1}
      className="h-[540px] md:h-[620px]"
      style={{
        "--swiper-pagination-color": "#f13024",
        "--swiper-pagination-bullet-inactive-color": "#7f8698",
        "--swiper-pagination-bullet-inactive-opacity": "0.35",
        "--swiper-pagination-bullet-size": "11px",
        "--swiper-pagination-bottom": "8px",
      }}
    >
      {serviceData.map((item) => (
        <SwiperSlide key={item.title}>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="group relative h-[490px] overflow-hidden rounded-3xl border border-accent/35 bg-matte/90 p-6 md:h-[560px]"
          >
            <div className="relative z-10 flex h-full flex-col">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/45 bg-accent/10 text-3xl text-accent">
                <item.Icon aria-hidden />
              </span>

              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
              <p className="flex-1 text-sm leading-7 text-white/80 md:text-base">{item.description}</p>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 transition-all duration-300 hover:border-accent/50 hover:text-accent"
              >
                Start collaboration
                <RxArrowTopRight aria-hidden className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <BackgroundBeams className="hidden opacity-60 xl:block" />
          </motion.article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
