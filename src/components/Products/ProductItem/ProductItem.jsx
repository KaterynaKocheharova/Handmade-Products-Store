import clsx from "clsx";
import { useDispatch } from "react-redux";
import {
  addToWishList,
  removeFromWishlist,
} from "../../../redux/products/slice";
import {
  selectFavoriteProducts,
  selectFavoriteProductsIds,
} from "../../../redux/products/selectors";
import { useSelector } from "react-redux";
import { Stack, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import css from "./ProductItem.module.css";

const ProductItem = ({
  product: { id, name, image, description, new_price },
}) => {
  const dispatch = useDispatch();
  const favoriteProductsIds = useSelector(selectFavoriteProductsIds);

  const addFavClass = () => {
    if (favoriteProductsIds.includes(id)) {
      return "favorite";
    }
  };

  const handleFavButtonClick = () => {
    if (favoriteProductsIds.includes(id)) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishList(id));
    }
  };

  return (
    <li className={css["product-item"]}>
      <div className={css["image-container"]}>
        <img className={css["item-image"]} src={image} alt={name} />
      </div>
      <div className={css["card-group-box"]}>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <p>{description}</p>
        <p>{new_price} гривень</p>
        <Stack direction="row" justifyContent="space-between">
          <IconButton>
            <CiShoppingCart className={css.icon} />
          </IconButton>
          <IconButton onClick={handleFavButtonClick}>
            <CiHeart className={clsx(css.icon, css[addFavClass()])} />
          </IconButton>
        </Stack>
      </div>
    </li>
  );
};

export default ProductItem;
