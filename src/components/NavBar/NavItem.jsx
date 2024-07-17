import css from "./NavBar.module.css";
import CustomNavLink from "components/common/CustomNavLink/CustomNavLink";

const NavItem = ({ children }) => {
  return (
    <li className={css["nav-item"]}>
      <CustomNavLink className={css["nav-link"]}>{children}</CustomNavLink>
    </li>
  );
};

export default NavItem;
