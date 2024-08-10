import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const buildActiveClass = ({ isActive }) => 
  clsx(css["nav-link"], { [css["active-link"]]: isActive });

const Navigation = () => {
  return (
    <ul className={css["nav-list"]}>
      <li className={css["nav-item"]}>
        <NavLink
          className={buildActiveClass}
          to="/wallets"
        >
          ГАМАНЦІ
        </NavLink>
      </li>
      <li className={css["nav-item"]}>
        <NavLink
          className={buildActiveClass}
          to="/bags"
        >
          СУМКИ
        </NavLink>
      </li>
      <li className={css["nav-item"]}>
        <NavLink
          className={buildActiveClass}
          to="/belts"
        >
          РЕМЕНІ
        </NavLink>
      </li>
      <li className={css["nav-item"]}>
        <NavLink
          className={buildActiveClass}
          to="/backpacks"
        >
          РЮКЗАКИ
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
