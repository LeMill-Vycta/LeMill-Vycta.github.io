import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { useGlobe } from "../components/globe/globeContext";
import ParticlesContainer from "./ParticlesContainer";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  const router = useRouter();
  const { globeReady } = useGlobe();
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showLoader, setShowLoader] = useState(router.pathname === "/");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const onResize = () => setIsMobileView(window.innerWidth < 768);

    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setShowLoader(router.pathname === "/");
  }, [router.pathname]);

  useEffect(() => {
    if (!showLoader) {
      return undefined;
    }

    const fallbackTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 3600);

    if (router.pathname !== "/") {
      setShowLoader(false);
      clearTimeout(fallbackTimeout);
      return undefined;
    }

    if (globeReady) {
      const readyTimeout = setTimeout(() => {
        setShowLoader(false);
      }, 260);

      return () => {
        clearTimeout(readyTimeout);
        clearTimeout(fallbackTimeout);
      };
    }

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, [globeReady, router.pathname, showLoader]);

  if (prefersReducedMotion) {
    return null;
  }

  const transitionLayers = (
    <>
      {showLoader && (
        <motion.div
          role="status"
          className="fixed left-0 top-0 z-[999] h-dvh min-h-screen w-screen overflow-hidden bg-gradient-to-tr from-black via-[#090f2a] to-[#180507]"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.08, duration: 0.55, ease: "easeInOut" }}
          aria-live="polite"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
            <Image
              src="/logo.svg"
              alt="Vycta Lemill logo"
              width={380}
              height={90}
              priority
              className="h-auto w-[250px] md:w-[320px]"
            />
            <Image
              src="/hand.gif"
              alt="Animated hand"
              width={240}
              height={240}
              unoptimized
              className="h-auto w-[170px] md:w-[220px]"
            />
            <p className="text-xs uppercase tracking-[0.32em] text-white/75 md:text-sm">
              Loading Earth core
            </p>
          </div>

          {!isMobileView && <ParticlesContainer />}
        </motion.div>
      )}

      <motion.div
        className="fixed left-0 top-0 z-[998] h-dvh min-h-screen w-screen bg-gradient-to-tr from-[#16070f] via-[#101c4a] to-[#020205]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.32, duration: 0.55, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="fixed left-0 top-0 z-[997] h-dvh min-h-screen w-screen bg-gradient-to-tr from-black via-[#170023] to-[#32080d]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.52, duration: 0.55, ease: "easeInOut" }}
        aria-hidden
      />
    </>
  );

  if (!isMounted) {
    return null;
  }

  return createPortal(transitionLayers, document.body);
};

export default Transition;
