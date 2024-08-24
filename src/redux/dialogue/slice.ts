import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type dialogueState = {
  isOpen: boolean;
  type: "informing" | "confirming" | "form" | null;
  text: string | null;
};

const initialState: dialogueState = {
  isOpen: false,
  type: null,
  text: null,
};

const dialogueSlice = createSlice({
  name: "dialogue",
  initialState,
  reducers: {
    openInformingDialogue(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.type = "informing";
      state.text = action.payload;
    },
    openConfirmingDialogue(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.type = "confirming";
      state.text = action.payload;
    },
    openFormDilaogue(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.type = "form";
      state.text = action.payload;
    },
    closeDialogue(state) {
      state.isOpen = false;
      state.type = null;
      state.text = null;
    },
  },
});


export default dialogueSlice.reducer;
export const {openInformingDialogue, openConfirmingDialogue, openFormDilaogue} = dialogueSlice.actions;
