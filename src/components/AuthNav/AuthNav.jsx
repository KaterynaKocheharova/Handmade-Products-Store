import { Stack } from "@mui/material";
import CustomNavLink from "components/common/CustomNavLink/CustomNavLink";
import css from "./AuthNav.module.css";
import { CiLogin } from "react-icons/ci";

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <CustomNavLink>
        <p className={css["register-text"]}>REGISTER</p>
      </CustomNavLink>
      <CustomNavLink>
        <CiLogin className={css.icon} />
      </CustomNavLink>
    </Stack>
  );
};

export default AuthNav;
