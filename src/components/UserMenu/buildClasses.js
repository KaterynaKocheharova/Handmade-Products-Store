import css from "./UserMenu.module.css";

export const buildActiveIconLinkClassname = (isActive) => {
  return isActive ? css["active"] : "";
};
