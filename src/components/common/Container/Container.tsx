import clsx from "clsx";
import css from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  type?: string;
};

const Container = ({ children, type }: ContainerProps) => {
  return <div className={clsx(css.container, type === "products" && css["products-container"] )}>{children}</div>;
};

export default Container;
