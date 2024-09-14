import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DialogueType = "informing" | "confirming" | "form" | null;

type DialogueSubtype =
  | "confirming-remove-from-cart"
  | "confirming-remove-from-wishlist"
  | null;

type DialogueState = {
  isOpen: boolean;
  type: DialogueType;
  subtype?: DialogueSubtype;
  text: string | null;
  productId?: string | null;
};

type DialoguePayload = {
  type: DialogueType;
  subtype?: DialogueSubtype;
  text: string | null;
  productId?: string | null;
};

const initialState: DialogueState = {
  isOpen: false,
  type: null,
  subtype: null,
  text: null,
  productId: null,
};

const dialogueSlice = createSlice({
  name: "dialogue",
  initialState,
  reducers: {
    openDialogue(state, action: PayloadAction<DialoguePayload>) {
      state.isOpen = true;
      state.type = action.payload.type;
      state.subtype = action.payload.subtype;
      state.text = action.payload.text;
      if (action.payload.productId) {
        state.productId = action.payload.productId;
      }
    },
    closeDialogue(state) {
      state.isOpen = false;
      state.type = null;
      state.subtype = null;
      state.text = null;
    },
  },
});

export default dialogueSlice.reducer;
export const { openDialogue, closeDialogue } = dialogueSlice.actions;
