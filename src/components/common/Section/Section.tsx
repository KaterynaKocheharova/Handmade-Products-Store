import clsx from "clsx";
import { buildSectionClass } from "./SectionHelpers";
import css from "./Section.module.css";

type Section = {
  children: React.ReactNode;
  type?: string;
};

const Section = ({ children, type }: Section) => {
  return (
    <section className={clsx(css.section, css[buildSectionClass(type)])}>
      {children}
    </section>
  );
};

export default Section;
