import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import { IoMdClose } from "react-icons/io";

type BaseDrawer = {
  closeDrawer: () => void;
  drawerIsOpen: boolean;
  children: React.ReactNode;
};

const BaseDrawer = ({ closeDrawer, drawerIsOpen, children }: BaseDrawer) => (
  <Drawer
    open={drawerIsOpen}
    onClose={closeDrawer}
    variant="persistent"
    anchor="right"
    PaperProps={{
      sx: {
        width: "450px",
        height: "100%",
        boxShadow: "var(--third-color-shadow)",
      },
    }}
  >
    <IconButton
      sx={{
        position: "absolute",
        top: "5px",
        right: "5px",
        border: "1px solid var(--second-color)",
      }}
      onClick={closeDrawer}
    >
      <IoMdClose />
    </IconButton>

    {children}
  </Drawer>
);

export default BaseDrawer;
