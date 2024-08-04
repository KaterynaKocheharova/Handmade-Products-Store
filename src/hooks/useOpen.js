import { useState } from "react";

export const useOpen = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return {
    open,
    setOpen,
    toggleOpen,
  };
};
