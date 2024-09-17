import FormLabel from "@mui/material/FormLabel";

type FormLegendProps = {
  text: string;
};

const FormLegend = ({ text }: FormLegendProps) => {
  return (
    <FormLabel
      component="legend"
      sx={{ fontWeight: "bold", fontSize: "20px", marginBottom: "1rem" }}
    >
      {text}
    </FormLabel>
  );
};

export default FormLegend;
