import { Stack } from "@mui/material";
import CustomNavLink from "components/common/CustomNavLink/CustomNavLink";
import { CiLogout } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <CustomNavLink to="/favoriteProductsPage">
        <CiHeart className={css.icon} />
      </CustomNavLink>
      <CustomNavLink>
        <CiShoppingCart className={css.icon} />
      </CustomNavLink>
      <CustomNavLink>
        <CiLogout className={css.icon} />
      </CustomNavLink>
    </Stack>
  );
};

export default UserMenu;
