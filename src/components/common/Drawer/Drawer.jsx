import Drawer from "@mui/material/Drawer";

const CustomDrawer = ({ closeDrawer, drawerIsOpen, children }) => (
  <Drawer
    open={drawerIsOpen}
    onClose={closeDrawer}
    // PaperProps={{
    //   sx: { width: "30%" },
    // }}
  >
    {children}
  </Drawer>
);

export default CustomDrawer;
