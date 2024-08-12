
export const titleVariants = {
  initial: { x: 0, opacity: 0 },
  animate: {
    x: [0, 10, -10, 0],
    opacity: [0.3, 0.5, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: "loop", // Changed from repeatType to repeat
    },
  },
};
// ========================== BUTTONS

export const scaleAnimation = {
  animate: {
    scale: [1, 1.2, 1],
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "linear",
  },
};
