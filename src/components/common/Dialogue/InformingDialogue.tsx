import { useAppDispatch } from "../../../redux/hooks";
import { closeDialogue } from "../../../redux/dialogue/slice";
import DialogTitle from "@mui/material/DialogTitle";
import StyledDialog from "./StyledDialogue";

type InformingDialogueProps = {
  isDialogueOpen: boolean;
  dialogueText: string;
};

const InformingDialogue = ({
  isDialogueOpen,
  dialogueText,
}: InformingDialogueProps) => {
  const dispatch = useAppDispatch();

  const handleInformingDialogueClose = () => {
    dispatch(closeDialogue());
  };
  return (
    <StyledDialog onClose={handleInformingDialogueClose} open={isDialogueOpen}>
      <DialogTitle>{dialogueText}</DialogTitle>
    </StyledDialog>
  );
};

export default InformingDialogue;
