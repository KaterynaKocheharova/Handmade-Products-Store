import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    padding: "20px",
    backgroundColor: "var(--first-color)",
    boxShadow: "var(--second-color-inset-shadow)",
  },
}));

export default StyledDialog;
