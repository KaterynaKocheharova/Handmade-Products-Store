import { useId } from "react";
import { Stack } from "@mui/material";

const FiltersForm = () => {
  const colorCheckboxId = useId();
  return (
    <form>
      <Stack direction="column" spacing={2}>
        <label htmlFor={`${colorCheckboxId}black`}>
          Чорний
          <input
            id={`${colorCheckboxId}black`}
            type="checkbox"
            name="color"
            value="black"
          />
        </label>
        <label htmlFor={`${colorCheckboxId}brown`}>
          Коричневий
          <input
            id={`${colorCheckboxId}brown`}
            type="checkbox"
            name="color"
            value="brown"
          />
        </label>
        <label htmlFor={`${colorCheckboxId}blue`}>
          Блакитний
          <input
            id={`${colorCheckboxId}blue`}
            type="checkbox"
            name="color"
            value="blue"
          />
        </label>
        <label htmlFor={`${colorCheckboxId}red`}>
          Червоний
          <input
            id={`${colorCheckboxId}red`}
            type="checkbox"
            name="color"
            value="red"
          />
        </label>
        <label htmlFor={`${colorCheckboxId}green`}>
          Зелений
          <input
            id={`${colorCheckboxId}green`}
            type="checkbox"
            name="color"
            value="green"
          />
        </label>
        <label htmlFor={`${colorCheckboxId}gray`}>
          Сірий
          <input
            id={`${colorCheckboxId}gray`}
            type="checkbox"
            name="color"
            value="gray"
          />
        </label>
        <label htmlFor={`${colorCheckboxId}white`}>
          Білий
          <input
            id={`${colorCheckboxId}white`}
            type="checkbox"
            name="color"
            value="white"
          />
        </label>
        <label htmlFor={`${colorCheckboxId}white`}>
          Tan
          <input
            id={`${colorCheckboxId}white`}
            type="checkbox"
            name="color"
            value="tan"
          />
        </label>
      </Stack>
    </form>
  );
};

export default FiltersForm;
