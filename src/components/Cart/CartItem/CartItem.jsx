import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectQuantity } from "../../../redux/cart/cartSelectors";
import { removeFromCart } from "../../../redux/cart/cartSlice";
import { TableCell, TableRow, IconButton } from "@mui/material";
import FlexRow from "components/common/FlexRow/FlexRow";
import QuantityControl from "components/common/QuantityControl/QuantityControl";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "@emotion/styled";
import css from "./CartItem.module.css";

const CartItem = ({ product: { id, new_price, name, image } }) => {
  const quantity = useSelector(selectQuantity(id));
  const totalProductGroupPrice = useMemo(
    () => quantity * new_price,
    [quantity, new_price]
  );

  const StyledTableCell = styled(TableCell)({
    padding: "8px",
  });

  const dispatch = useDispatch();
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
          <QuantityControl itemId={id} />
          <p>Загальна ціна за партію - {totalProductGroupPrice}</p>
        </FlexRow>
      </StyledTableCell>
    </TableRow>
  );
};

export default CartItem;
