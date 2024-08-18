import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f0f0f0",
      paper: "#f0f0f0",
    },
    text: {
      primary: "#4a4a4a",
      secondary: "#4a4a4a",
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
    body1: {
      color: "#4a4a4a",
    },
    body2: {
      color: "#4a4a4a",
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         padding: "10px 20px",
  //         color: "#f0f0f0",
  //         backgroundColor: "#4a4a4a",
  //         boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",

  //         "&:hover": {
  //           backgroundColor: "#4a4a4a",
  //           color: "#f0f0f0",
  //           borderColor: "none",
  //           boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  //         },
  //       },
  //     },
  //   },
  // },
});

export default theme;
