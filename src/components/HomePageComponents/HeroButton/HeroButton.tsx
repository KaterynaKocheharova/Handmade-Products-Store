import { Link } from "react-router-dom";
import css from "./HeroButton.module.css";

const HeroButton = () => {
  return (
    <Link
      to="/catalog"
      className={css["hero-catalog-button"]}
    >
      КАТАЛОГ
    </Link>
  );
};

export default HeroButton;


