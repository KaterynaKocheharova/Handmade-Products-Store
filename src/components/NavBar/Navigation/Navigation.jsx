import CustomNavLink from "components/common/CustomNavLink/CustomNavLink";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={css["nav-list"]}>
      <li className={css["nav-item"]}>
        <CustomNavLink to="/wallets" type="desktop-category-nav-link">
          ГАМАНЦІ
        </CustomNavLink>
      </li>
      <li className={css["nav-item"]}>
        <CustomNavLink to="/bags" type="desktop-category-nav-link">
          СУМКИ
        </CustomNavLink>
      </li>
      <li className={css["nav-item"]}>
        <CustomNavLink to="/belts" type="desktop-category-nav-link">
          РЕМЕНІ
        </CustomNavLink>
      </li>
    </ul>
  );
};

export default Navigation;
