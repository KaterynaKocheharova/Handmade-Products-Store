import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SnackbarType = "success" | "error" | null;

type SnackbarState = {
  isSuccessSnackbarOpen: boolean;
  isErrorSnackbarOpen: boolean;
  text: string | "";
};

type SnackbarOpenPayload = {
  type: SnackbarType;
  text: string | "";
};

type SnackbarClosePayload = Pick<SnackbarOpenPayload, "type">;

const initialState: SnackbarState = {
  isSuccessSnackbarOpen: false,
  isErrorSnackbarOpen: false,
  text: "",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar(state, action: PayloadAction<SnackbarOpenPayload>) {
      const { type, text } = action.payload;
      switch (type) {
        case "success":
          state.isSuccessSnackbarOpen = true;
          state.text = text;
          break;
        case "error":
          state.isErrorSnackbarOpen = true;
          state.text = text;
          break;
      }
    },
    closeSnackbar(state, action: PayloadAction<SnackbarClosePayload>) {
      const { type } = action.payload;
      switch (type) {
        case "success":
          state.isSuccessSnackbarOpen = false;
          state.text = "";
          break;
        case "error":
          state.isErrorSnackbarOpen = false;
          state.text = "";
          break;
      }
    },
  },
});

export default snackbarSlice.reducer;
export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;
