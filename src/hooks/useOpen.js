import { useState } from "react";

export const useOpen = () => {
  const [isElementOpen, setOpen] = useState(false);
  const openElement = () => {
    setOpen(true);
  };

  const closeElement = () => {
    setOpen(false);
  };

  return {
    isElementOpen,
    openElement,
    closeElement,
  };
};
