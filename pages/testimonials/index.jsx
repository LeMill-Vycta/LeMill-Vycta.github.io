import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import { fadeIn } from "../../variants";

const TestimonialSlider = dynamic(() => import("../../components/TestimonialSlider"), {
  ssr: false,
});

const Testimonials = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-0 pb-14 pt-32 md:pt-36">
      <div className="container mx-auto flex flex-col gap-6">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center"
        >
          <span className="accent-chip">Testimonials</span>
          <h1 className="h1 mt-6">
            What clients <span className="text-accent">say</span> after launch.
          </h1>
          <p className="mx-auto max-w-2xl text-sm md:text-base xl:text-lg">
            Long-term collaborations, measurable outcomes, and products users actually love using.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/60">Hover to pause - move away to resume</p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="section-shell rounded-[2rem] p-4 md:p-6"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
      <Bulb />
    </section>
  );
};

export default Testimonials;
