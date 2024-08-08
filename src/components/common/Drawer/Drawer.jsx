import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import { IoMdClose } from "react-icons/io";

const CustomDrawer = ({ closeDrawer, drawerIsOpen, children }) => (
  <Drawer
    open={drawerIsOpen}
    onClose={closeDrawer}
    sx={{
      flexShrink: 0,
      width: "240px",
      position: "relative",
      height: "auto"
    }}
    variant="persistent"

    // anchor="right"
    // PaperProps={{
    //   sx: { maxWidth: "50%", height: "auto", marginRight: "auto", marginLeft: "auto" },
    // }}
  >
    <IconButton sx={{ position: "absolute", top: "5px", right: "5px" }} onClick={closeDrawer}>
      <IoMdClose />
    </IconButton>

    {children}
  </Drawer>
);

export default CustomDrawer;
