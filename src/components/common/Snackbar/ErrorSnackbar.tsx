import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  selectIsErrorSnackbarOpen,
  selectSnackbarText,
} from "../../../redux/snackbar/selectors";
import { closeSnackbar } from "../../../redux/snackbar/slice";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

const ErrorSnackbar = () => {
  const dispatch = useAppDispatch();
  const isErrorSnackbarOpen = useAppSelector(selectIsErrorSnackbarOpen);
  const text = useAppSelector(selectSnackbarText);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeSnackbar({ type: "error" }));
  };

  return (
    <Snackbar
      open={isErrorSnackbarOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      message={text}
    />
  );
};

export default ErrorSnackbar;
