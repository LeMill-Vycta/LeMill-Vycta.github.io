"use client";

import { KeyboardEvent, useEffect, useId, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const activeIndicatorId = useId();
  const [activeValue, setActiveValue] = useState<string>(propTabs[0]?.value ?? "");

  useEffect(() => {
    if (!propTabs.length) {
      return;
    }

    const activeExists = propTabs.some((tab) => tab.value === activeValue);
    if (!activeExists) {
      setActiveValue(propTabs[0].value);
    }
  }, [activeValue, propTabs]);

  const activeTab = useMemo(
    () => propTabs.find((tab) => tab.value === activeValue) ?? propTabs[0],
    [activeValue, propTabs]
  );

  if (!propTabs.length || !activeTab) {
    return null;
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") {
      return;
    }

    event.preventDefault();

    if (event.key === "Home") {
      setActiveValue(propTabs[0].value);
      return;
    }

    if (event.key === "End") {
      setActiveValue(propTabs[propTabs.length - 1].value);
      return;
    }

    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + offset + propTabs.length) % propTabs.length;
    setActiveValue(propTabs[nextIndex].value);
  };

  return (
    <>
      <div
        role="tablist"
        aria-label="Content tabs"
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, index) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={activeValue === tab.value}
            tabIndex={activeValue === tab.value ? 0 : -1}
            onClick={() => setActiveValue(tab.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={cn(
              "relative px-3 py-1 rounded-lg focus:outline-none",
              tabClassName
            )}
          >
            {activeValue === tab.value && (
              <motion.div
                layoutId={`clickedbutton-${activeIndicatorId}`}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-matte border border-accent rounded-lg ",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block text-black dark:text-white tracking-widest text-xs xl:text-sm font-semibold">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <div className={cn("relative mt-10 w-full", contentClassName)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab.value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};
