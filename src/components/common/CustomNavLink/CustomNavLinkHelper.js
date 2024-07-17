import clsx from "clsx";
import css from "./CustomNavLink.module.css";

export const buildActiveClass = ({ isActive, type = "" }) => {
  return clsx(
    css["nav-link"],
    {
      [css["register-nav-link"]]: type === "register",
    },
    {
      [css["active-link"]]: isActive,
    }
  );
};
