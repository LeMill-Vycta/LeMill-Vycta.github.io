import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import Bulb from "../components/Bulb";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";

const GlobeComponent = dynamic(() => import("../components/GlobeComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-full border border-white/10 bg-black/30" />
  ),
});

const rotatingWords = ["Digital Reality", "Modern Websites", "Global Brands", "AI Products"];

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const currentWord = rotatingWords[loopNum % rotatingWords.length];
    const isWordComplete = !isDeleting && typedText === currentWord;
    const isWordDeleted = isDeleting && typedText === "";

    const timeout = setTimeout(
      () => {
        if (isWordComplete) {
          setIsDeleting(true);
          return;
        }

        if (isWordDeleted) {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          return;
        }

        setTypedText((prev) =>
          isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
        );
      },
      isDeleting ? 55 : isWordComplete ? 850 : 110
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, loopNum]);

  return (
    <section className="relative min-h-screen overflow-hidden px-0 pb-8 pt-28 sm:pt-32 md:pb-10 md:pt-36 xl:pb-0">
      <div className="container mx-auto flex min-h-[calc(100vh-7.5rem)] flex-col justify-center gap-8 xl:flex-row xl:items-center xl:gap-10">
        <div className="w-full xl:w-[52%]">
          <motion.span
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="accent-chip"
          >
            Developer of the Future
          </motion.span>

          <motion.h1
            variants={fadeIn("down", 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mt-6 max-w-4xl font-display"
          >
            Transforming your ideas into
            <span className="mt-2 block text-accent typewriter">{typedText}</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 max-w-2xl text-sm md:text-base xl:text-lg"
          >
            I craft premium web experiences that blend performance, motion, and intelligent systems. The goal is
            simple: products that feel futuristic, load instantly, and convert attention into action.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.42)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-wrap items-center gap-4"
          >
            <ProjectsBtn />

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-accent/60 bg-accent/15 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-accent hover:bg-accent/25 hover:shadow-glow"
            >
              Start Project
            </Link>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.5)} initial="hidden" animate="show" exit="hidden" className="mt-8 grid max-w-xl grid-cols-1 gap-3 min-[420px]:grid-cols-3">
            <div className="section-shell rounded-2xl p-4 text-center">
              <div className="text-xl font-extrabold text-accent">10+</div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Years</p>
            </div>
            <div className="section-shell rounded-2xl p-4 text-center">
              <div className="text-xl font-extrabold text-accent">2400+</div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Projects</p>
            </div>
            <div className="section-shell rounded-2xl p-4 text-center">
              <div className="text-xl font-extrabold text-accent">9</div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">Countries</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="relative w-full xl:w-[48%]"
        >
          <div className="section-shell globe-shell shell-dynamic relative mx-auto">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(156,255,0,0.11),_transparent_56%)]" />
            <div className="relative z-10 h-full w-full">
              <GlobeComponent />
            </div>
          </div>
        </motion.div>
      </div>
      <Bulb />
    </section>
  );
};

export default Home;
