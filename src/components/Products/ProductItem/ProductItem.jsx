import clsx from "clsx";
import { useDispatch } from "react-redux";
import {
  addToWishList,
  removeFromWishlist,
} from "../../../redux/products/slice";
import { selectFavoriteProductsIds } from "../../../redux/products/selectors";
import { useSelector } from "react-redux";
import { Stack, IconButton, Button } from "@mui/material";
import { Typography } from "@mui/material";
import FlexRow from "../../common/FlexRow/FlexRow";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

import { addFavClass } from "./buildClasses";
import css from "./ProductItem.module.css";
import { addToCart } from "../../../redux/cart/cartSlice";

const ProductItem = ({
  product: { id, name, image, description, new_price },
}) => {
  const dispatch = useDispatch();
  const favoriteProductsIds = useSelector(selectFavoriteProductsIds);

  const handleFavButtonClick = () => {
    if (favoriteProductsIds.includes(id)) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishList(id));
    }
  };

  const handleCartButtonClick = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
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
          <Button
            variant="contained"
            size="small"
            onClick={handleCartButtonClick}
            sx={{paddingRight: "5px", paddingLeft: "5px"}}
          >
            <FlexRow spacing={2}>
              <GoPlus className={css.icon} />
              <CiShoppingCart className={css.icon} />
            </FlexRow>
          </Button>
          <IconButton onClick={handleFavButtonClick}>
            <CiHeart
              className={clsx(
                css.icon,
                css["heart-icon"],
                css[addFavClass(favoriteProductsIds, id)]
              )}
            />
          </IconButton>
        </Stack>
      </div>
    </li>
  );
};

export default ProductItem;
