import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    customColors: {
      mainBgColor: '#f0f0f0', // Very light grey
      secondaryBgColor: '#e1e2e6', // Light grey 1
      mainFontColor: '#4a4a4a', // Darker grey
      secondaryFontColor: '#787775', // Dark grey
      accentColor: '#c4b3a9', // Warm beige
      highlightColor: '#b0a296', // Slightly darker beige
    }
  }
});
