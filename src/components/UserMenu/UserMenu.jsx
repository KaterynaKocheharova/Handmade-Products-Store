import { Stack, IconButton } from "@mui/material";
// import Badge from "@mui/material/Badge";
import { Badge } from "@mui/base/Badge";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { buildActiveIconLinkClassname } from "./buildClasses";
import { useSelector } from "react-redux";
import { selectFavoriteProductsIds } from "../../redux/products/selectors";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const favIds = useSelector(selectFavoriteProductsIds);
  const favNumber = favIds.length;

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton>
        <NavLink
          className={({ isActive }) => buildActiveIconLinkClassname(isActive)}
          to="/favoriteProductsPage"
        >
          <Badge
            badgeContent={favNumber}
            slotProps={{ badge: { className: css.badge } }}
            showZero
          >
            <CiHeart className={css.icon} />
          </Badge>
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
