import DialogTitle from "@mui/material/DialogTitle";
import StyledDialog from "./StyledDialogue";

type InformingDialogueProps = {
  isDialogueOpen: boolean;
  setIsDialogueOpen: (arg: boolean) => void;
};

const InformingDialogue = ({ isDialogueOpen, setIsDialogueOpen }: InformingDialogueProps) => (
  <StyledDialog onClose={() => setIsDialogueOpen(false)} open={isDialogueOpen}>
    <DialogTitle>Ми вам скоро передзвонемо!</DialogTitle>
  </StyledDialog>
);

export default InformingDialogue;
