import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f0f0f0",
      paper: "#f0f0f0",
    },
    text: {
      primary: "rgb(47, 47, 47)",
      secondary: "rgb(47, 47, 47)",
    },
    primary: {
      main: "#4a4a4a",
    },
    secondary: {
      main: "#4a4a4a",
    },
    action: {
      disabled: "rgba(74, 74, 74, 0.5)",
      hover: "rgba(74, 74, 74, 0.5)",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    body1: {
      color: "rgb(47, 47, 47)",
    },
    body2: {
      color: "rgb(47, 47, 47)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "var(--thick-border)",
          "&:hover": {
            border: "var(--thick-border)",
          },
        },
      },
    },
  },
});

export default theme;
