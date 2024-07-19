import clsx from "clsx";
import css from "./CustomNavLink.module.css";

export const buildActiveClass = ({ isActive, type = "" }) => {
  return clsx({
    [css["nav-link"]]:
      type === "desktop-category-nav-link" ||
      type === "login-nav-link" ||
      type === "register-nav-link",
    [css["mobile-menu-nav-link"]]: type === "mobile-menu-nav-link",
    [css["register-nav-link"]]: type === "register-nav-link",
    [css["active-link"]]: isActive,
  });
};
