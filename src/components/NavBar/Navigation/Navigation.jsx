import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const categories = [
  { category: "wallets", label: "ГАМАНЦІ" },
  { category: "bags", label: "СУМКИ" },
  { category: "belts", label: "РЕМЕНІ" },
  { category: "backpacks", label: "РЮКЗАКИ" },
  { category: "home", label: "ГОЛОВНА" },
];

const buildActiveClass = ({ isActive }) =>
  clsx(css["nav-link"], { [css["active-link"]]: isActive });

const Navigation = () => {
  return (
    <ul className={css["nav-list"]}>
      {categories.map(({ category, label }) => (
        <li key={category} className={css["nav-item"]}>
          <NavLink
            className={buildActiveClass}
            to={label === "ГОЛОВНА" ? "/home" : `/products/${category}`}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
