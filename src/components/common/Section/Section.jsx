
import css from "./Section.module.css";

const Section = ({ children, type }) => {
  return <section className={type !== "hero" && css.section}>{children}</section>;
};

export default Section;
