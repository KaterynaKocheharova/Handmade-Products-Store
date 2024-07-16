import css from "./NavBar.module.css";

const NavItem = ({ children }) => {
  return (
    <li className={css["nav-item"]}>
      <a>{children}</a>
    </li>
  );
};

export default NavItem;
