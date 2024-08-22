import FormDialogue from "./FormDialogue";
import InformingDialogue from "./InformingDialogue";

type DialogueProps = {
  isDialogueOpen: boolean;
  setIsDialogueOpen: (arg: boolean) => void;
  dialogueType: "successful-order" | "fill-in-number";
  setDialogueType: (arg: "successful-order" | "fill-in-number") => void;
};

const Dialogue = ({
  isDialogueOpen,
  setIsDialogueOpen,
  dialogueType,
  setDialogueType,
}: DialogueProps) => {
  if (dialogueType === "fill-in-number") {
    return (
      <FormDialogue
        isDialogueOpen={isDialogueOpen}
        setDialogueType={setDialogueType}
      />
    );
  }

  if (dialogueType === "successful-order") {
    return (
      <InformingDialogue
        isDialogueOpen={isDialogueOpen}
        setIsDialogueOpen={setIsDialogueOpen}
      />
    );
  }

  return null;
};

export default Dialogue;
