import { Stack } from "@mui/material";

type FlexRow = {
  type?: string;
  children: React.ReactNode;
  spacing?: number;
};

const FlexRow = ({ children, type, spacing }: FlexRow) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
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
