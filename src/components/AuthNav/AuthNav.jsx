import CustomNavLink from "components/common/CustomNavLink/CustomNavLink";
import css from "./AuthNav.module.css";
import { CiLogin } from "react-icons/ci";

const AuthNav = () => {
  return (
    <div className={css["auth-bar"]}>
      <CustomNavLink><p className={css["register-text"]}>REGISTER</p></CustomNavLink>
      <CustomNavLink>
        <CiLogin className={css.icon} />
      </CustomNavLink>
    </div>
  );
};

export default AuthNav;
