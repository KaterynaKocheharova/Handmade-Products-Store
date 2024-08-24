import { useAppDispatch } from "../../../redux/hooks";
import { openDialogue, closeDialogue } from "../../../redux/dialogue/slice";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import StyledDialog from "./StyledDialogue";

type FormDialogue = {
  isDialogueOpen: boolean;
  dialogueText: string;
};

const FormDialogue = ({ isDialogueOpen, dialogueText }: FormDialogue) => {
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      openDialogue({
        type: "informing",
        text: "Ми вам скоро передзвонемо!",
      })
    );
  };

  const handleClose = () => {
    dispatch(closeDialogue());
  };

  return (
    <StyledDialog
      open={isDialogueOpen}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const tel = formJson.tel;
          console.log(tel);
          handleSubmit();
        },
        sx: {
          bgcolor: "var(--third-color)",
        },
      }}
    >
      <DialogTitle>Дякуємо за замовлення!</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogueText}</DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="tel"
          name="tel"
          label="Ваш номер"
          type="tel"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Назад
        </Button>
        <Button variant="outlined" type="submit">
          Відправити
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default FormDialogue;
