import { Stack } from "@mui/material";
import CustomNavLink from "components/common/CustomNavLink/CustomNavLink";
import { CiLogout } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <CustomNavLink>
        <CiShoppingCart className={css.icon} />
      </CustomNavLink>
      <a>
        <CiLogout className={css.icon} />
      </a>
    </Stack>
  );
};

export default UserMenu;
