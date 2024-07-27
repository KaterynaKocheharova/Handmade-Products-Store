import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Container from "components/common/Container/Container";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import MobileMenu from "./MobileMenu/MobileMenu";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import logo from "../../assets/My_Assets/logo.jpg";
import css from "./NavBar.module.css";

const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "10px",
          backgroundColor: "var(--main-font-color)}",
        }}
      >
        <p className={css.text}>Вітаємо у нашому магазині!</p>
      </Stack>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Navigation />
          {/* <img src={logo} alt="logo"/> */}
          <MobileMenu />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Stack>
      </Container>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{
          padding: "10px",
          backgroundColor: "var(--main-font-color)}",
        }}
      >
        <a className={css["contact-link"]} href="tel:+380123456789">
          +380123456789
        </a>
        <a className={css["contact-link"]} href="mailto:example@gmail.com">
        example@gmail.com
        </a>
        <a
          className={css["contact-link"]}
          href="https://www.instagram.com/yourprofile"
        >
          Instagram
        </a>
      </Stack>
    </Header>
  );
};

export default NavBar;
