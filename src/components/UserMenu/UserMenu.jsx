import { Stack, IconButton } from "@mui/material";
import { Badge } from "@mui/base/Badge";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { buildActiveIconLinkClassname } from "./buildClasses";
import { useSelector } from "react-redux";
import { selectFavoriteProducts } from "../../redux/products/selectors";
import { selectCartProductsQuantity } from "../../redux/cart/cartSelectors";

import css from "./UserMenu.module.css";

const UserMenu = ({ openDrawer }) => {
  const favProducts = useSelector(selectFavoriteProducts);
  const cartProductsQuantity = useSelector(selectCartProductsQuantity);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton>
        <NavLink
          className={({ isActive }) => buildActiveIconLinkClassname(isActive)}
          to="/favoriteProductsPage"
        >
          <Badge
            badgeContent={favProducts.length}
            slotProps={{ badge: { className: css.badge } }}
            showZero
          >
            <CiHeart className={css.icon} />
          </Badge>
        </NavLink>
      </IconButton>
      <IconButton onClick={openDrawer}>
        <Badge
          badgeContent={cartProductsQuantity}
          slotProps={{ badge: { className: css.badge } }}
          showZero
        >
          <CiShoppingCart className={css.icon} />
        </Badge>
      </IconButton>
      <NavLink>
        <CiLogout className={css.icon} />
      </NavLink>
    </Stack>
  );
};

export default UserMenu;
