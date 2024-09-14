import { useAppDispatch } from "../../../redux/hooks";
import { openDialogue } from "../../../redux/dialogue/slice";
import { Grid, styled } from "@mui/material";
import QuantityControl from "../../common/QuantityControl/QuantityControl";
import css from "./CartItem.module.css";
import { useAppSelector } from "../../../redux/hooks";
import { selectProductById } from "../../../redux/products/selectors";
import { type CartItem } from "../../../redux/cart/cartSlice";
import { MdDeleteOutline } from "react-icons/md";
import { IconButton, Box } from "@mui/material";
import FlexRow from "../../common/FlexRow/FlexRow";
import FlexColumn from "../../common/FlexColumn/FlexColumn";

type CartItemProps = {
  cartItemData: CartItem;
};

const StyledGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  width: "100%",
}));

const CartItem = ({ cartItemData: { productId, quantity } }: CartItemProps) => {
  const currentProduct = useAppSelector(selectProductById(productId));

  if (!currentProduct) {
    return null; // or return a fallback UI
  }

  const { image, name, new_price } = currentProduct;

  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(
      openDialogue({
        type: "confirming",
        text: "Видалити продукт з корзини?",
        subtype: "confirming-remove-from-cart",
        productId,
      })
    );
  };

  return (
    <Box component="li" className={css["cart-item"]}>
      <FlexRow spacing={3}>
        <FlexColumn>
          <IconButton onClick={handleDeleteClick}>
            <MdDeleteOutline className={css["delete-icon"]} />
          </IconButton>
        </FlexColumn>
        <FlexColumn spacing={3} justifyContent="flex-between">
          <img src={image} alt={name} width="80" className={css.image} />
          <h3 className={css.name}>{name}</h3>
        </FlexColumn>
        <FlexColumn spacing={3}>
          <p className={css.price}>{new_price * quantity} грн</p>
          <QuantityControl productId={productId} />
        </FlexColumn>
      </FlexRow>
    </Box>
  );
};

export default CartItem;
