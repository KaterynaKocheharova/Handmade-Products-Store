import css from "./NavBar.module.css";
import CustomNavLink from "components/common/CustomNavLink/CustomNavLink";

const NavItem = ({ children }) => {
  return (
    <li className={css["nav-item"]}>
      <CustomNavLink>{children}</CustomNavLink>
    </li>
  );
};

export default NavItem;
