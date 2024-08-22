import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

type InformingDialogueProps = {
  isDialogueOpen: boolean;
  setIsDialogueOpen: (arg: boolean) => void;
};

const InformingDialogue = ({ isDialogueOpen, setIsDialogueOpen }: InformingDialogueProps) => (
  <Dialog onClose={() => setIsDialogueOpen(false)} open={isDialogueOpen}>
    <DialogTitle>Ми вам скоро передзвонемо!</DialogTitle>
  </Dialog>
);

export default InformingDialogue;
