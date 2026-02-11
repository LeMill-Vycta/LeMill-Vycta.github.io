import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import { fadeIn } from "../../variants";

const ServiceSlider = dynamic(() => import("../../components/ServiceSlider"), {
  ssr: false,
});

const Services = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-0 pb-14 pt-32 md:pt-36">
      <div className="container mx-auto flex flex-col gap-6 xl:flex-row xl:items-start xl:gap-8">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:w-[33%]"
        >
          <span className="accent-chip">Services</span>
          <h1 className="h1 mt-6">
            Future-ready service stack for <span className="text-accent">fast-moving brands</span>.
          </h1>
          <p className="mb-4 max-w-xl text-sm md:text-base xl:text-lg">
            From intelligent automation to high-performance web systems, each service is engineered to raise your brand
            standard and produce measurable business outcomes.
          </p>
          <p className="text-xs uppercase tracking-[0.24em] text-white/60 xl:hidden">
            Swipe to explore services
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.36)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:w-[67%]"
        >
          <div className="section-shell shell-dynamic rounded-[2rem] p-4 md:p-6">
            <ServiceSlider />
          </div>
        </motion.div>
      </div>
      <Bulb />
    </section>
  );
};

export default Services;
