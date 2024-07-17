import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Container from "components/common/Container/Container";
import NavList from "./NavList";
import NavBarMenu from "./Menu";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import Stack from "@mui/material/Stack";
import css from "./NavBar.module.css";

const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Stack>
      </Container>
    </header>
  );
};

export default NavBar;
