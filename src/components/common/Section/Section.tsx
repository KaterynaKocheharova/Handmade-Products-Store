import css from "./Section.module.css";

type Section = {
  children: React.ReactNode;
  type?: string;
};

const Section = ({ children, type }: Section) => {
  return (
    <section className={type !== "hero" ? css.section : undefined}>
      {children}
    </section>
  );
};

export default Section;
