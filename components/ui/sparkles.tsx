"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";

import { cn } from "../../utils/cn";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: ParticlesProps) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (!container) return;

    controls.start({
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    });
  }, [controls]);

  const particleOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 1,
      },
      background: {
        color: {
          value: background || "transparent",
        },
      },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
          resize: true,
        },
      },
      particles: {
        number: {
          value: particleDensity || 90,
          density: {
            enable: true,
            width: 900,
            height: 900,
          },
        },
        color: {
          value: particleColor || "#ffffff",
        },
        opacity: {
          value: {
            min: 0.08,
            max: 0.7,
          },
          animation: {
            enable: true,
            speed: speed || 2,
            sync: false,
          },
        },
        size: {
          value: {
            min: minSize || 0.5,
            max: maxSize || 1.9,
          },
        },
        move: {
          enable: true,
          speed: {
            min: 0.12,
            max: 0.6,
          },
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        shape: {
          type: "circle",
        },
        links: {
          enable: false,
        },
      },
    }),
    [background, maxSize, minSize, particleColor, particleDensity, speed]
  );

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || "tsparticles"}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
        />
      )}
    </motion.div>
  );
};
