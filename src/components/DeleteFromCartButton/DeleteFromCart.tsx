import { useAppDispatch } from "../../redux/hooks";
import { openDialogue } from "../../redux/dialogue/slice";
import IconButton from "@mui/material/IconButton";
import { IoTrashBin } from "react-icons/io5";

type DeleteFromCartButtonProps = {
  productId: string;
};

const DeleteFromCartButton = ({ productId }: DeleteFromCartButtonProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(
      openDialogue({
        type: "confirming",
        text: "Видалити продукт з корзини?",
        productId,
      })
    );
  };

  return (
    <IconButton onClick={handleDeleteClick}>
      <IoTrashBin />
    </IconButton>
  );
};

export default DeleteFromCartButton;
