

import { motion} from "framer-motion";

const titleVariants = {
  offscreen: {
    x: 20,
    opacity: 0,
  },
  onscreen: {
    x: [100, 50],
    opacity: [0.3, 0.5, 1],
    transition: {
      type: "spring",
      bounce: 1,
      duration: 2,
    },
  },
};

const AnimatedTitle = ({ children }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}

    >
      <motion.h2 variants={titleVariants}>{children}</motion.h2>
    </motion.div>
  );
};

export default AnimatedTitle;
