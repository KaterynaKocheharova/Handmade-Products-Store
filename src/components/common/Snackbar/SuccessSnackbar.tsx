import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  selectIsSuccessSnackbarOpen,
  selectSnackbarText,
} from "../../../redux/snackbar/selectors";
import { closeSnackbar } from "../../../redux/snackbar/slice";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

const SuccessSnackbar = () => {
  const dispatch = useAppDispatch();
  const isSuccessSnackbarOpen = useAppSelector(selectIsSuccessSnackbarOpen);
  const text = useAppSelector(selectSnackbarText);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeSnackbar({ type: "success" }));
  };

  return (
    <Snackbar
      open={isSuccessSnackbarOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      message={text}
    />
  );
};

export default SuccessSnackbar;
