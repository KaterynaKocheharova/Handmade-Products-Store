import css from "./Container.module.css";

type Container = {
  children: React.ReactNode;
};

const Container = ({ children }: Container) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
