import { buildSectionClass } from "./SectionHelpers";
import css from "./Section.module.css";

const Section = ({ children, type = "" }) => {
  return <section className={css[buildSectionClass(type)]}>{children}</section>;
};

export default Section;
