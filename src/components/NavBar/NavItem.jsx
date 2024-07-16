import css from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavItem = ({ children }) => {
  return (
    <li className={css["nav-item"]}>
      <NavLink className={css["nav-link"]}>{children}</NavLink>
    </li>
  );
};

export default NavItem;
