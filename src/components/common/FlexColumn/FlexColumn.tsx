import { Stack } from "@mui/material";

type FlexColumn = {
  children: React.ReactNode;
  spacing?: number;
};

const FlexColumn = ({ children, spacing = 5 }: FlexColumn) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={spacing}
    >
      {children}
    </Stack>
  );
};

export default FlexColumn;
