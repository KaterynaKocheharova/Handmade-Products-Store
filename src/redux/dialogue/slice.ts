import { createSlice } from "@reduxjs/toolkit";

type ButtonText = {
  leftButton: string;
  rightButton: string;
};

type buttonClickHandlers = {
  leftButton: () => void;
  rightButton: () => void;
};

type dialogueState = {
  isOpen: boolean;
  type: "infroming" | "confirming" | "form" | null;
  modalTitle?: string | null;
  modalText?: string | null;
  modalQuestion?: string | null;
  buttonTexts?: ButtonText[] | null;
  buttonClickHandlers?: buttonClickHandlers[] | null;
};

const initialState: dialogueState = {
  isOpen: false,
  type: null,
  modalTitle: null,
  modalText: null,
  modalQuestion: null,
  buttonTexts: null,
  buttonClickHandlers: null,
};

const dialogueSlice = createSlice({
  name: "dialogue",
  initialState,
  reducers: {
    // change modal depending on the action dispatched
  },
});
