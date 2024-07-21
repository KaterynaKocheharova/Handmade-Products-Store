import { motion } from "framer-motion";
import { Stack } from "@mui/material";
import CustomNavLink from "components/common/CustomNavLink/CustomNavLink";
import css from "./AuthNav.module.css";
import { CiLogin } from "react-icons/ci";
import { scaleAnimation } from "../../animationConfig";

const MotionLink = motion(CustomNavLink);

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <MotionLink animate={scaleAnimation.scale} transition={scaleAnimation.transition} to="/login-signup" type="register-nav-link">
          REGISTER
      </MotionLink>
      <CustomNavLink to="/login-signup" type="login-nav-link">
        <CiLogin className={css.icon} />
      </CustomNavLink>
    </Stack>
  );
};

export default AuthNav;
