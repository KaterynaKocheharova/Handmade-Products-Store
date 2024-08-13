import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editQuantity } from "../../../redux/cart/cartSlice.ts";
import { selectQuantity } from "../../../redux/cart/cartSelectors.js";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FlexRow from "../FlexRow/FlexRow.tsx";
import { styled } from "@mui/material";
import css from "./QuantityControl.module.css";

type QuantityControl = {
  itemId: string;
};

const StyledIconButton = styled(IconButton)({
  backgroundColor: "var(--first-color)",
  "&:hover": {
    backgroundColor: "var(--first-color)",
    border: "none",
  },
});

const QuantityControl = ({ itemId }: QuantityControl) => {
  const currentStateQuantity = useSelector(selectQuantity(itemId));
  const [quantity, setQuantity] = useState(currentStateQuantity);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(editQuantity({ quantity, productId: itemId }));
  }, [quantity, dispatch, itemId]);

  const handleIncrease = () => {
    setQuantity((prevQuantity: number) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity: number) =>
      prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };

  return (
    <FlexRow spacing={1}>
      <StyledIconButton
        onClick={handleDecrease}
        className={css["quantity-control-btn"]}
      >
        <RemoveIcon className={css["control-icon"]} />
      </StyledIconButton>
      <p>{quantity}</p>
      <StyledIconButton
        onClick={handleIncrease}
        className={css["quantity-control-btn"]}
      >
        <AddIcon className={css["control-icon"]} />
      </StyledIconButton>
    </FlexRow>
  );
};

export default QuantityControl;
