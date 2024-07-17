import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import NavBar from "components/NavBar/NavBar";
import Hero from "components/structural/Hero/Hero";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
