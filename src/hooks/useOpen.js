import { useState } from "react";

export const useOpen = () => {
  const [open, setOpen] = useState(false);
  const openElement = () => {
    setOpen(true);
  };

  const closeElement = () => {
    setOpen(false);
  };

  return {
    open,
    openElement,
    closeElement,
  };
};
