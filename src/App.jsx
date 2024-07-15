import styled from '@emotion/styled';
import { ThemeProvider } from "@emotion/react";
// adjust alias here
import { theme } from "./theme";
import { Button } from "@mui/material";
import FramerAnimation from './FramerAnimation';



const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.accentColor,
  color: theme.palette.customColors.mainFontColor,
  '&:hover': {
    backgroundColor: theme.palette.customColors.highlightColor,
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <StyledButton variant="contained">Contained Button</StyledButton>
        <FramerAnimation/>
      </div>
    </ThemeProvider>
  );
}

export default App;