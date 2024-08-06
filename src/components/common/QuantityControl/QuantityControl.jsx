import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editQuantity } from "../../../redux/cart/cartSlice";
import { selectQuantity } from "../../../redux/cart/cartSelectors";

import FlexRow from "../FlexRow/FlexRow";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import css from "./QuantityControl.module.css";


const QuantityControl = ({ itemId }) => {
  const currentStateQuantity = useSelector(selectQuantity(itemId));
  const [quantity, setQuantity] = useState(currentStateQuantity);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(editQuantity({ quantity, productId: itemId }));
  }, [quantity, dispatch, itemId]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <FlexRow spacing={0.5}>
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
