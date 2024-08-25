import { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

const SuccessSnackbar = () => {
    // redux state {isSuccessSnackbarOpen, isErrorSnackbarOpen, text: null}
    // closeSuccessSnackbar
    // get this state from redux - if state
  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    // dispatch closeSnackbar
    setOpen(false);
  };

  return (
      <Snackbar
    //   get it from the redux
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        // get message from the redux
        message="This Snackbar will be dismissed in 5 seconds."
      />
  );
};

export default SuccessSnackbar;
