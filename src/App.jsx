import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import NavBar from "components/NavBar/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
    </ThemeProvider>
  );
}

export default App;
