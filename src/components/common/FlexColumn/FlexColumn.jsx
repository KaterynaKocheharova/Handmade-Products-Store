import { Stack } from "@mui/material";

const FlexColumn = ({ children }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Stack>
  );
};

export default FlexColumn;
