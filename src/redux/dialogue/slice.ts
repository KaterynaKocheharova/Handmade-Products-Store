import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DialogueType = "informing" | "confirming" | "form" | null;

type DialogueState = {
  isOpen: boolean;
  type: DialogueType;
  text: string | null;
};

type DialoguePayload = {
  type: DialogueType,
  text: string | null
};

const initialState: DialogueState = {
  isOpen: false,
  type: null,
  text: null,
};

const dialogueSlice = createSlice({
  name: "dialogue",
  initialState,
  reducers: {
    openDialogue(state, action: PayloadAction<DialoguePayload>) {
      state.isOpen = true;
      state.type = action.payload.type;
      state.text = action.payload.text;
    },
    closeDialogue(state) {
      state.isOpen = false;
      state.type = null;
      state.text = null;
    },
  },
});

export default dialogueSlice.reducer;
export const { openDialogue, closeDialogue } = dialogueSlice.actions;
