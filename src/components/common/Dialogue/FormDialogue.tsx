import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type FormDialogueProps = {
  isDialogueOpen: boolean;
  setIsDialogueOpen: (arg: boolean) => void;
  setDialogueType: (arg: "successful-order") => void;
};

const FormDialogue = ({ isDialogueOpen, setIsDialogueOpen, setDialogueType }: FormDialogueProps) => (
  <Dialog
    open={isDialogueOpen}
    onClose={() => setDialogueType("successful-order")}
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
    }}
  >
    <DialogTitle>Дякуємо за замовлення!</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Введіть свій номер і ми вам зателефонуємо для підтвердження дзвінка
      </DialogContentText>
      <TextField
        autoFocus
        required
        margin="dense"
        id="tel"
        name="tel"
        label="telephone number"
        type="tel"
        fullWidth
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => setDialogueType("successful-order")}
      >
        Назад
      </Button>
      <Button type="submit">Підтвердити номер</Button>
    </DialogActions>
  </Dialog>
);

export default FormDialogue;
