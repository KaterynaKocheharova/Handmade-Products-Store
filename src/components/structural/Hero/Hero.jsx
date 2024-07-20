import HeroTitle from "./HeroTitle/HeroTitle";
import HeroButton from "./HeroButton/HeroButton";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css["hero-text-and-btn-container"]}>
      <HeroTitle />
      <HeroButton />
    </div>
  );
};

export default Hero;
