import clsx from "clsx";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import css from "./ProductItem.module.css";

const ProductItem = ({ product: { name, image, description, new_price } }) => {
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
          <Link to="/cart">
            <CiShoppingCart className={css.icon} />
          </Link>
          <Link>
            <CiHeart className={css.icon} />
          </Link>
        </Stack>
      </div>
    </li>
  );
};

export default ProductItem;
