import HeroTitle from "./HeroTitle/HeroTitle";
import { Link } from "react-router-dom";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css["hero-text-and-btn-container"]}>
      <HeroTitle />
      <Link className={css["hero-catalog-button"]}>КАТАЛОГ</Link>
    </div>
  );
};

export default Hero;
