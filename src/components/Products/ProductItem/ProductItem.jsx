import clsx from "clsx";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectFavoriteProductsIds } from "../../../redux/products/selectors";
import {
  addToWishList,
  removeFromWishlist,
} from "../../../redux/products/slice";
import FlexRow from "../../common/FlexRow/FlexRow.tsx";
import { Typography, IconButton } from "@mui/material";
import { CiHeart } from "react-icons/ci";
import { addFavClass } from "./buildClasses";
import AddToCartButton from "../../AddToCartButton/AddToCartButton.tsx";
import css from "./ProductItem.module.css";
import { selectCartProducts } from "../../../redux/cart/cartSelectors.js";

const ProductItem = ({ product: { id, name, image, new_price } }) => {
  const dispatch = useDispatch();
  const favoriteProductsIds = useSelector(selectFavoriteProductsIds);

  const cartProducts = useSelector(selectCartProducts);
  const currentCartProduct = useMemo(
    () => cartProducts.find((item) => item.productId === id),
    [cartProducts, id]
  );

  const quantity = currentCartProduct ? currentCartProduct.quantity + 1 : 1;

  const handleFavButtonClick = () => {
    if (favoriteProductsIds.includes(id)) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishList(id));
    }
  };

  return (
    <li className={css["product-item"]}>
      <Link to={`/${id}`} className={css["item-link"]}>
        <div className={css["image-container"]}>
          <img className={css["item-image"]} src={image} alt={name} />
        </div>
      </Link>
      <div className={css["card-group-box"]}>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <p>{new_price} гривень</p>
        <FlexRow>
          <IconButton onClick={handleFavButtonClick}>
            <CiHeart
              className={clsx(
                css.icon,
                css["heart-icon"],
                css[addFavClass(favoriteProductsIds, id)]
              )}
            />
          </IconButton>
          <AddToCartButton
            productData={{ productId: id, quantity }}
            type="card"
          />
        </FlexRow>
      </div>
    </li>
  );
};

export default ProductItem;
