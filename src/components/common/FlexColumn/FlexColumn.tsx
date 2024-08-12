import { Stack } from "@mui/material";

type FlexColumn = {
  children: React.ReactNode;
};

const FlexColumn = ({ children }: FlexColumn) => {
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
