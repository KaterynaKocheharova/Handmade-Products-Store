import HeroTitle from "../HomePageComponents/HeroTitle/HeroTitle";
import HeroButton from "../HomePageComponents/HeroButton/HeroButton";
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
