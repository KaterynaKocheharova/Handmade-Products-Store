import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Container from "components/common/Container/Container";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import Stack from "@mui/material/Stack";
// import logo from "../../assets/My_Assets/logo.jpg";
import css from "./NavBar.module.css";
import clsx from "clsx";

const NavBar = ({ openDrawer }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "10px",
          backgroundColor: "var(--main-font-color)}",
          width: "100%",
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
          paddingTop="10px"
          paddingBottom="10px"
        >
          <MobileMenu />
          <Navigation />
          {isLoggedIn ? <UserMenu openDrawer={openDrawer} /> : <AuthNav />}
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
        <a
          className={clsx(css["contact-link"], css["tel-link"])}
          href="tel:+380123456789"
        >
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
