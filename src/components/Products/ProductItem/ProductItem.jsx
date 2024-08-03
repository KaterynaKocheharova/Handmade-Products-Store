import clsx from "clsx";
import { useDispatch } from "react-redux";
import {
  addToCartlist,
  addToWishList,
  removeFromCartlist,
  removeFromWishlist,
  deleteProduct
} from "../../../redux/products/slice";
import {
  selectCartProductsIds,
  selectFavoriteProductsIds,
} from "../../../redux/products/selectors";
import { useSelector } from "react-redux";
import { Stack, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { addFavClass } from "./buildClasses";
import css from "./ProductItem.module.css";

const ProductItem = ({
  product: { id, name, image, description, new_price },
}) => {
  const dispatch = useDispatch();
  const favoriteProductsIds = useSelector(selectFavoriteProductsIds);
  const cartProductsIds = useSelector(selectCartProductsIds);
  console.log(cartProductsIds);

  const handleFavButtonClick = () => {
    if (favoriteProductsIds.includes(id)) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishList(id));
    }
  };

  const handleCartButtonClick = () => {
    if (cartProductsIds.includes(id)) {
      dispatch(removeFromCartlist(id));
    } else {
      dispatch(addToCartlist(id));
    }
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(id));
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
          <IconButton onClick={handleCartButtonClick}>
            <CiShoppingCart className={css.icon} />
          </IconButton>
          <IconButton onClick={handleFavButtonClick}>
            <CiHeart
              className={clsx(
                css.icon,
                css[addFavClass(favoriteProductsIds, id)]
              )}
            />
          </IconButton>
          <button onClick={handleDeleteProduct}>Delete</button>
        </Stack>
      </div>
    </li>
  );
};

export default ProductItem;
