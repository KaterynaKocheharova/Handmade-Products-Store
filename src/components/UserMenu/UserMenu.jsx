import { Stack, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { buildActiveIconLinkClassname } from "./buildClasses";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton>
        <NavLink className={({isActive}) => buildActiveIconLinkClassname(isActive)} to="/favoriteProductsPage">
          <CiHeart className={css.icon} />
        </NavLink>
      </IconButton>
      <NavLink>
        <CiShoppingCart className={css.icon} />
      </NavLink>
      <NavLink>
        <CiLogout className={css.icon} />
      </NavLink>
    </Stack>
  );
};

export default UserMenu;
