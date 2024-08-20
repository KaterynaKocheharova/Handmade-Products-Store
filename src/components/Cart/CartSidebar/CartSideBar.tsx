import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import Section from "../../common/Section/Section";
import Container from "../../common/Container/Container";
import CartItems from "../CartItems/CartItems";

type CartSidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (arg: boolean) => void;
  drawerWidth: string;
  drawerVariant: "permanent" | "persistent" | "temporary" | undefined;
};

const CartSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  drawerWidth,
  drawerVariant,
}: CartSidebarProps) => {
  return (
    <Drawer
      open={isSidebarOpen}
      onClose={() => setIsSidebarOpen(false)}
      variant={drawerVariant}
      anchor="right"
      PaperProps={{
        sx: {
          width: drawerWidth,
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
        onClick={() => setIsSidebarOpen(false)}
      >
        <IoMdClose />
      </IconButton>
      <Section type="cart">
        <Container>
          <CartItems />
        </Container>
      </Section>
    </Drawer>
  );
};

export default CartSidebar;
