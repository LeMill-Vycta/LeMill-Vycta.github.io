import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import { fadeIn } from "../../variants";

const WorkSlider = dynamic(() => import("../../components/WorkSlider"), {
  ssr: false,
});

const Work = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-0 pb-14 pt-32 md:pt-36">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mx-auto mb-6 max-w-4xl text-center"
        >
          <span className="accent-chip">Design Lab</span>
          <h1 className="h1 mt-6">
            Interface design collection for <span className="text-accent">global products</span>.
          </h1>
          <p className="text-sm md:text-base xl:text-lg">
            Curated experiments and production-ready templates across business, ecommerce, personal brands, and advanced
            3D web experiences.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/60">Choose a category tab below</p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="section-shell rounded-[2rem] p-4 md:p-6"
        >
          <WorkSlider />
        </motion.div>
      </div>
      <Bulb />
    </section>
  );
};

export default Work;
