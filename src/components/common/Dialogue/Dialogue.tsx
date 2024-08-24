import { useAppSelector } from "../../../redux/hooks";
import {
  selectIsDialogueOpen,
  selectDialogueType,
  selectDialogueText,
} from "../../../redux/dialogue/selectors";
import FormDialogue from "./FormDialogue";
import InformingDialogue from "./InformingDialogue";
import ConfirmingDialogue from "./ConfirmingDialogue";

const Dialogue = () => {
  const isDialogueOpen = useAppSelector(selectIsDialogueOpen);
  const dialogueType = useAppSelector(selectDialogueType);
  const dialogueText = useAppSelector(selectDialogueText);

  if (!isDialogueOpen) return null;

  if (dialogueType === "form") {
    return (
      <FormDialogue
        isDialogueOpen={isDialogueOpen}
        dialogueText={dialogueText}
      />
    );
  }

  if (dialogueType === "informing") {
    return (
      <InformingDialogue
        isDialogueOpen={isDialogueOpen}
        dialogueText={dialogueText}
      />
    );
  }

  if (dialogueType === "confirming") {
    return (
      <ConfirmingDialogue
        isDialogueOpen={isDialogueOpen}
        dialogueText={dialogueText}
      />
    );
  }
};

export default Dialogue;
