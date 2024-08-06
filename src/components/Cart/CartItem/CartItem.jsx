import { TableCell, TableRow } from "@mui/material";
import FlexRow from "components/common/FlexRow/FlexRow";
import QuantityControl from "components/common/QuantityControl/QuantityControl";

const CartItem = ({ product: { id, new_price, name, image } }) => {
  return (
    <TableRow key={id}>
      <TableCell>
        <FlexRow spacing={3}>
          <img src={image} alt="cart product image" width="100" />
          <p>{name}</p>
          <p>{new_price} грн</p>
          <QuantityControl itemId={id} />
        </FlexRow>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
