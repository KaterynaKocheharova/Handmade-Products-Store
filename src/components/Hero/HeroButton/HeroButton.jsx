import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import css from "./HeroButton.module.css";
import { scaleAnimation } from "../../../animationConfig";

const MotionLink = motion(Link);

const HeroButton = () => {
  return (
    <MotionLink
      to="/catalog"
      className={css["hero-catalog-button"]}
      animate={scaleAnimation.animate}
      transition={scaleAnimation.transition}
    >
      КАТАЛОГ
    </MotionLink>
  );
};

export default HeroButton;


