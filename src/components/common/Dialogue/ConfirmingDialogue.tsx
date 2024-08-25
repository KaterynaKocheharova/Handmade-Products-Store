import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { closeDialogue } from "../../../redux/dialogue/slice";
import { removeFromCart } from "../../../redux/cart/cartSlice";
import { selectProductId } from "../../../redux/dialogue/selectors";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import StyledDialog from "./StyledDialogue";

type ConfirmingDialogueProps = {
  isDialogueOpen: boolean;
  dialogueText: string;
};

const ConfirmingDialogue = ({
  isDialogueOpen,
  dialogueText,
}: ConfirmingDialogueProps) => {
  const dispatch = useAppDispatch();

  const productId = useAppSelector(selectProductId);

  const handleClose = () => {
    dispatch(closeDialogue());
  };

  const onConfirmation = async () => {
    await dispatch(removeFromCart(productId as string));
    dispatch(closeDialogue());
  };

  const onCancellation = () => {
    handleClose();
  };

  return (
    <StyledDialog onClose={handleClose} open={isDialogueOpen}>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogueText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirmation} variant="outlined">
          Так
        </Button>
        <Button onClick={onCancellation} variant="outlined" autoFocus>
          Ні
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default ConfirmingDialogue;
