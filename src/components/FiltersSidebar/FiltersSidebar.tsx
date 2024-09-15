import { useState } from "react";
import Drawer from "@mui/material/Drawer";

const FiltersSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleDrawer}
        variant="persistent"
        PaperProps={{
          sx: {
            top: "131px",
            borderRight: "var(--thick-border)",
          },
        }}
      >
        FILTRATION WILL BE HERE
      </Drawer>
    </>
  );
};

export default FiltersSidebar;
