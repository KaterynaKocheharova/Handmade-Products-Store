import { Stack } from "@mui/material";
import CustomNavLink from "components/common/CustomNavLink/CustomNavLink";
import css from "./AuthNav.module.css";
import { CiLogin } from "react-icons/ci";
import { motion } from "framer-motion";

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <CustomNavLink to="/login-signup" type="register-nav-link">
        <motion.p
          animate={{
            x: 0,
            y: 0,
            scale: 1.2,
            rotate: 0,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          REGISTER
        </motion.p>
      </CustomNavLink>
      <CustomNavLink to="/login-signup" type="login-nav-link">
        <CiLogin className={css.icon} />
      </CustomNavLink>
    </Stack>
  );
};

export default AuthNav;
