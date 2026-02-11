"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "../../utils/cn";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    name: string;
    position: string;
    message: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) {
      return;
    }

    const scrollerNode = scrollerRef.current;
    if (scrollerNode.dataset.duplicated !== "true") {
      const scrollerContent = Array.from(scrollerNode.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerNode.appendChild(duplicatedItem);
      });
      scrollerNode.dataset.duplicated = "true";
    }

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    const duration = speed === "fast" ? "30s" : speed === "normal" ? "40s" : "60s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    const frame = requestAnimationFrame(() => setStart(true));
    return () => cancelAnimationFrame(frame);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative w-[82vw] max-w-full flex-shrink-0 rounded-2xl border border-accent/40 bg-matte px-5 py-6 min-[420px]:w-[340px] min-[420px]:px-7 md:w-[440px] md:px-8"
            key={`${item.name}-${index}`}
          >
            <blockquote>
              <span className="relative z-20 text-sm leading-[1.7] text-gray-100 xl:text-base">{item.message}</span>
              <div className="relative z-20 mt-6 flex flex-col items-center">
                <div className="mx-auto mb-2">
                  <Image src={item.image} width={80} height={80} alt={item.name} loading="lazy" />
                </div>

                <div className="text-sm xl:text-lg">{item.name}</div>
                <div className="text-xs font-light uppercase tracking-widest text-white/70 xl:text-[12px]">
                  {item.position}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
