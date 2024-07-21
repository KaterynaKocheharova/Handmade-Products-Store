import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import css from "./HeroButton.module.css";

const MotionLink = motion(Link);

// Extract the animation, reuse it in the header

const HeroButton = () => {
  return (
    <MotionLink
      to="/catalog"
      className={css["hero-catalog-button"]}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      КАТАЛОГ
    </MotionLink>
  );
};

export default HeroButton;
