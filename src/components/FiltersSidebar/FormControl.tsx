import FormControl from "@mui/material/FormControl";

type FormControlProps = {
  children: React.ReactNode;
};

const AppFormControl = ({ children }: FormControlProps) => {
  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      {children}
    </FormControl>
  );
};

export default AppFormControl;
