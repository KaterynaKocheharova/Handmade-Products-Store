import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectCartProductsIds } from "../../../redux/cart/cartSelectors";
import { addToCart, removeFromCart } from "../../../redux/cart/cartSlice";
import { Button } from "@mui/material";
import FlexRow from "../../common/FlexRow/FlexRow.tsx";
import { CiShoppingCart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoIosRemove } from "react-icons/io";
import css from "./ToggleCartProductButton.module.css";

type ToggleCartProductButton = {
  productId: string;
}

const ToggleCartProductButton = ({ productId }: ToggleCartProductButton) => {
  const cartProductsIds = useAppSelector(selectCartProductsIds);

  const dispatch = useAppDispatch();

  const handleCartButtonClick = () => {
    if (cartProductsIds.includes(productId)) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(addToCart({ productId: productId, quantity: 1 }));
    }
  };

  return (
    <Button
      variant="contained"
      size="small"
      onClick={handleCartButtonClick}
      sx={{ paddingRight: "5px", paddingLeft: "5px" }}
    >
      <FlexRow spacing={2}>
        {cartProductsIds.includes(productId) ? (
          <IoIosRemove className={css.icon} size="30px" />
        ) : (
          <GoPlus className={css.icon} size="30px" />
        )}
        <CiShoppingCart className={css.icon} size="30px" />
      </FlexRow>
    </Button>
  );
};

export default ToggleCartProductButton;
