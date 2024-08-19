import { useAppDispatch } from "../../../redux/hooks.ts";
import { removeFromCart } from "../../../redux/cart/cartSlice.ts";
import { TableCell, TableRow, IconButton } from "@mui/material";
import FlexRow from "../../common/FlexRow/FlexRow.tsx";
import QuantityControl from "../../common/QuantityControl/QuantityControl.jsx";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "@emotion/styled";
import css from "./CartItem.module.css";
import { type Product } from "../../../types.ts";

type CartItem = {
  product: Product;
};

const CartItem = ({ product: { id, new_price, name, image } }: CartItem) => {
  const StyledTableCell = styled(TableCell)({
    padding: "8px",
  });

  const dispatch = useAppDispatch();
  const handleDeleteClick = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <TableRow key={id}>
      <StyledTableCell>
        <FlexRow spacing={3}>
          <IconButton onClick={handleDeleteClick}>
            <AiOutlineDelete className={css["delete-icon"]} />
          </IconButton>
          <img src={image} alt="cart product image" width="100" />
          <p>{name}</p>
          <p>{new_price} грн</p>
          <QuantityControl productId={id} />
        </FlexRow>
      </StyledTableCell>
    </TableRow>
  );
};

export default CartItem;
