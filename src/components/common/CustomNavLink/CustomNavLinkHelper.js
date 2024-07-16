import clsx from "clsx";
import css from "./CustomNavLink.module.css";

export const buildActiveClass = ({ isActive }) => {
    return clsx(css["nav-link"], isActive && css["active-link"]);
  };