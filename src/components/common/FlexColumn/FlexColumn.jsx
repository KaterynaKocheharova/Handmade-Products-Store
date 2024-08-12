import { Stack } from "@mui/material";

const FlexColumn = ({ children }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="10"
    >
      {children}
    </Stack>
  );
};

export default FlexColumn;
