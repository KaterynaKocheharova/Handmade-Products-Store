import { Stack } from "@mui/material";

type FlexRow = {
  type?: string;
  children: React.ReactNode;
  spacing?: number;
  justifyContent?: string;
};

const FlexRow = ({ children, type, spacing, justifyContent }: FlexRow) => {
  return (
    <Stack
      direction="row"
      justifyContent={justifyContent ? justifyContent : "space-between"}
      alignItems="center"
      spacing={spacing}
      sx={{
        borderBottom:
          type === "cart" ? "1px solid var(--second-color)" : "none",
      }}
    >
      {children}
    </Stack>
  );
};

export default FlexRow;
