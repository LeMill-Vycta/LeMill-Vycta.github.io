export const fadeIn = (direction, delay = 0) => {
  const distance = 42;

  return {
    hidden: {
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};
