import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { closeDialogue } from "../../../redux/dialogue/slice";
import { openSnackbar } from "../../../redux/snackbar/slice";
import { removeFromCart } from "../../../redux/cart/cartSlice";
import { toggleWishlist } from "../../../redux/wishlist/wishlistSlice";
import { selectProductId } from "../../../redux/dialogue/selectors";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import StyledDialog from "./StyledDialogue";

type ConfirmingDialogueProps = {
  isDialogueOpen: boolean;
  dialogueText: string;
  dialogueSubtype?: string;
};

const ConfirmingDialogue = ({
  isDialogueOpen,
  dialogueText,
  dialogueSubtype,
}: ConfirmingDialogueProps) => {

  const dispatch = useAppDispatch();

  const productId = useAppSelector(selectProductId);

  const handleClose = () => {
    dispatch(closeDialogue());
  };

  const onWishlistRemovalConfirmation = () => {
    dispatch(toggleWishlist(productId));
    handleClose();
    dispatch(
      openSnackbar({
        type: "success",
        text: "Продукт видалено зі списку улюблених товарів",
      })
    );
  };

  const onCartRemovalConfirmation = () => {
    dispatch(removeFromCart(productId as string));
    dispatch(
      openSnackbar({ type: "success", text: "Продукт видалено з корзини" })
    );
    handleClose();
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
        <Button
          onClick={
            dialogueSubtype === "confirming-remove-from-cart"
              ? onCartRemovalConfirmation
              : onWishlistRemovalConfirmation
          }
          variant="outlined"
        >
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
