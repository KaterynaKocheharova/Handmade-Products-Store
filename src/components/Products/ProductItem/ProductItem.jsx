import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectFavoriteProductsIds } from "../../../redux/products/selectors";
import {
  addToWishList,
  removeFromWishlist,
} from "../../../redux/products/slice";
import FlexRow from "../../common/FlexRow/FlexRow.tsx";
import ToggleCartProductButton from "../../Cart/ToggleCartProductButton/ToggleCartProductButton";
import { Typography, IconButton } from "@mui/material";
import { CiHeart } from "react-icons/ci";
import { addFavClass } from "./buildClasses";
import css from "./ProductItem.module.css";

// !!! extract a separate add to fav control comp

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

  return (
    <li className={css["product-item"]}>
      <Link to={`/${id}`} className={css["item-link"]}>
        <div className={css["image-container"]}>
          <img className={css["item-image"]} src={image} alt={name} />
        </div>
        <div className={css["card-group-box"]}>
          <Typography variant="h5" component="h3">
            {name}
          </Typography>
          {/* <p>{description}</p> */}
          <p>{new_price} гривень</p>
          <FlexRow>
            <ToggleCartProductButton productId={id} />
            <IconButton onClick={handleFavButtonClick}>
              <CiHeart
                className={clsx(
                  css.icon,
                  css["heart-icon"],
                  css[addFavClass(favoriteProductsIds, id)]
                )}
              />
            </IconButton>
          </FlexRow>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
