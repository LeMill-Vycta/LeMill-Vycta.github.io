import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./style.module.css";

type BeamProps = {
  className?: string;
};

const Beam = ({ className }: BeamProps) => {
  const meteorRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const meteor = meteorRef.current;

    if (!meteor) {
      return;
    }

    const restartAnimation = () => {
      meteor.style.animation = "none";
      void meteor.offsetWidth;
      meteor.style.animation = "";
    };

    const handleAnimationEnd = () => {
      meteor.style.visibility = "hidden";
      const animationDelay = Math.floor(Math.random() * 3);
      const animationDuration = Math.floor(Math.random() * 4);
      const meteorWidth = Math.floor(Math.random() * 80) + 20;

      meteor.style.setProperty("--meteor-delay", `${animationDelay}s`);
      meteor.style.setProperty("--meteor-duration", `${animationDuration}s`);
      meteor.style.setProperty("--meteor-width", `${meteorWidth}px`);

      restartAnimation();
    };

    const handleAnimationStart = () => {
      meteor.style.visibility = "visible";
    };

    meteor.addEventListener("animationend", handleAnimationEnd);
    meteor.addEventListener("animationstart", handleAnimationStart);

    return () => {
      meteor.removeEventListener("animationend", handleAnimationEnd);
      meteor.removeEventListener("animationstart", handleAnimationStart);
    };
  }, []);

  return (
    <span
      ref={meteorRef}
      className={twMerge(
        "absolute z-[40] h-[0.1rem] w-[0.1rem] rotate-[180deg] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10]",
        styles.meteor,
        className
      )}
    />
  );
};

export default Beam;
