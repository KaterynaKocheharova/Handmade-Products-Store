import { Stack } from "@mui/material";

type FlexColumn = {
  children: React.ReactNode;
  spacing?: number;
  justifyContent?: string;
};

const FlexColumn = ({ children, spacing = 5, justifyContent = "center" }: FlexColumn) => {
  return (
    <Stack
      direction="column"
      justifyContent={justifyContent}
      alignItems="center"
      spacing={spacing}
    >
      {children}
    </Stack>
  );
};

export default FlexColumn;
