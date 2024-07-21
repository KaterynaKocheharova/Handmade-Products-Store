import clsx from "clsx";
import { Link } from "react-router-dom";
import css from "./ProductItem.module.css";

const ProductItem = ({ product: { name, image, description, new_price } }) => {
  return (
    <li className={css["product-item"]}>
      <div className={css["image-container"]}>
          <img className={css["item-image"]} src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{new_price} dollars</p>
      <div className={css["icon-container"]}>
        {/* <Link to="/cart" className={css["product-card-shopping-cart-link"]}>
          
        </Link> */}
        {/* <a className={css["product-card-fav-link"]}>
          <i className="fa-solid fa-heart"></i>
        </a> */}
      </div>
    </li>
  );
};

export default ProductItem;