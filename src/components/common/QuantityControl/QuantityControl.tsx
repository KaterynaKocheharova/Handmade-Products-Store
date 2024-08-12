import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editQuantity } from "../../../redux/cart/cartSlice.ts";
import { selectQuantity } from "../../../redux/cart/cartSelectors.js";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FlexRow from "../FlexRow/FlexRow.tsx";
import css from "./QuantityControl.module.css";

type QuantityControl = {
  itemId: string;
};

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
    <FlexRow spacing={0}>
      <IconButton onClick={handleDecrease}>
        <RemoveIcon className={css["control-icon"]} />
      </IconButton>
      <Typography sx={{ fontSize: "14px" }}>{quantity}</Typography>
      <IconButton onClick={handleIncrease}>
        <AddIcon className={css["control-icon"]} />
      </IconButton>
    </FlexRow>
  );
};

export default QuantityControl;
