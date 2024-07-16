import Container from "components/common/Container/Container";
import NavList from "./NavList";
import NavBarMenu from "./Menu";
import { CiShoppingCart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import Stack from "@mui/material/Stack";
// import { CiLogout } from "react-icons/ci";

import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={css.header}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <NavList />
          <NavBarMenu />
          <div className={css["user-menu"]}>
            <CiShoppingCart className={css.icon} />
            <CiLogin className={css.icon} />
          </div>
        </Stack>

        {/* <CiLogout /> */}
      </Container>
    </header>
  );
};

export default NavBar;
