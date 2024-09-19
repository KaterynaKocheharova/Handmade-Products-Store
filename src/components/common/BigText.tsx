import { Typography } from "@mui/material";
type BigTextProps = {
  children: React.ReactNode;
};

const BigText = ({ children }: BigTextProps) => {
  return (
    <Typography
      variant="h6"
      component="p"
      align="center"
      color="var(--accent-color)"
    >
      {children}
    </Typography>
  );
};

export default BigText;
