import { Grid, styled } from "@mui/material";
import QuantityControl from "../../common/QuantityControl/QuantityControl";
import css from "./CartItem.module.css";
import { useAppSelector } from "../../../redux/hooks";
import { selectProductById } from "../../../redux/products/selectors";
import { type CartItem } from "../../../redux/cart/cartSlice";

type CartItemProps = {
  cartItemData: CartItem;
};

const StyledGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
}));

const CartItem = ({ cartItemData: { productId, quantity } }: CartItemProps) => {
  const currentProduct = useAppSelector(selectProductById(productId));

  if (!currentProduct) {
    return null; // or return a fallback UI
  }

  const { image, name, new_price } = currentProduct;

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={1}
      justifyContent="center"
      alignItems="center"
      className={css["cart-item"]}
    >
      <StyledGridItem item xs={6}>
        <img src={image} alt={name} width="80" className={css.image} />
      </StyledGridItem>
      <StyledGridItem item xs={6}>
        <h3 className={css.name}>{name}</h3>
      </StyledGridItem>
      <StyledGridItem item xs={6}>
        <p className={css.price}>{new_price * quantity} грн</p>
      </StyledGridItem>
      <StyledGridItem item xs={6}>
        <QuantityControl productId={productId} />
      </StyledGridItem>
    </Grid>
  );
};

export default CartItem;
