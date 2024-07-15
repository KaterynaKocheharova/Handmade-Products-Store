// text animation

import { motion } from "framer-motion";

const FramerAnimation = () => {
  return (
    <motion.h1
      // initial={{ x: -1000 }}
      // animate={{ x: [0, 900, 0] }}
      transition={{ duration: 3, delay: 0.2 }}
      whileHover={{ opacity: 0.5, scale: 0.9}}
    >
      This is animated text
    </motion.h1>
  );
};

export default FramerAnimation;
