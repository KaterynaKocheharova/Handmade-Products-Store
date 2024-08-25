import { RootState } from "../store";

type SelectIsOpen = (state: RootState) => boolean;
type SelectText = (state: RootState) => string;


export const selectIsSuccessSnackbarOpen: SelectIsOpen = (state) => state.snackbar.isSuccessSnackbarOpen;
export const selectIsErrorSnackbarOpen: SelectIsOpen = (state) => state.snackbar.isErrorSnackbarOpen;
export const selectSnackbarText: SelectText = (state) => state.snackbar.text;