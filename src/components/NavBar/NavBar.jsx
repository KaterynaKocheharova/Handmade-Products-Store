import clsx from "clsx";
import Header from "./Header/Header";
import Container from "components/common/Container/Container";
import Navigation from "./Navigation/Navigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import UserMenu from "components/UserMenu/UserMenu";
import Stack from "@mui/material/Stack";
import FlexRow from "../common/FlexRow/FlexRow";
// import logo from "../../assets/My_Assets/logo.jpg";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Header>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "10px",
          backgroundColor: "var(--second-color)}",
        }}
      >
        <p className={css.text}>Вітаємо у нашому магазині!</p>
      </Stack>
      <Container>
        <FlexRow>
          <MobileNavigation />
          <Navigation />
          <UserMenu />
        </FlexRow>
      </Container>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{
          padding: "10px",
          backgroundColor: "var(--second-color)}",
        }}
      >
        <a
          className={clsx(css["contact-link"], css["tel-link"])}
          href="tel:+380123456789"
        >
          +380123456789
        </a>
        <a
          className={css["contact-link"]}
          href="https://www.instagram.com/yourprofile"
        >
          Instagram
        </a>
        <a
          className={clsx(css["contact-link"], css["tel-link"])}
          href="tel:+380123456789"
        >
          +380123456789
        </a>
      </Stack>
    </Header>
  );
};

export default NavBar;
