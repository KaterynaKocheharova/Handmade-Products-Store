import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import StyledDialog from "./StyledDialogue";

type FormDialogueProps = {
  isDialogueOpen: boolean;
  setDialogueType: (arg: "successful-order") => void;
  setIsDialogueOpen: (arg: boolean) => void;
};

const FormDialogue = ({
  isDialogueOpen,
  setIsDialogueOpen,
  setDialogueType,
}: FormDialogueProps) => (
  <StyledDialog
    open={isDialogueOpen}
    onClose={() => setIsDialogueOpen(false)}
    PaperProps={{
      component: "form",
      onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const tel = formJson.tel;
        console.log(tel);
        setDialogueType("successful-order");
      },
      sx: {
        bgcolor: "var(--third-color)",
      },
    }}
  >
    <DialogTitle>Дякуємо за замовлення!</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Введіть свій номер і ми вам зателефонуємо для підтвердження
      </DialogContentText>
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
      <Button variant="outlined" onClick={() => setIsDialogueOpen(false)}>
        Назад
      </Button>
      <Button variant="outlined" type="submit">
        Відправити
      </Button>
    </DialogActions>
  </StyledDialog>
);

export default FormDialogue;
