import { Stack } from "@mui/material";

const FlexRow = ({ children, type, spacing }) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-between"
      alignItems="center"
      spacing={spacing}
      sx={{
        borderBottom: type === "cart" ? "1px solid var(--second-color)" : "none",
      }}
      // flexWrap="wrap"
    >
      {children}
    </Stack>
  );
};

export default FlexRow;
