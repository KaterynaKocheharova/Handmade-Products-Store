import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ListSubheader, Checkbox, ListItemText } from "@mui/material";
import { styled } from "@mui/material";

export default function SortingSelect() {
  const StyledListSubheader = styled(ListSubheader)({
    fontWeight: "600",
  });

  const sorting = [
    { value: "newest", text: "з найновіших" },
    { value: "oldest", text: "зі старіших" },
    { value: "mostExpensive", text: "з найдорожчих" },
    { value: "cheapest", text: "з найдешевших" },
  ];

  const [sort, setSort] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof sort>) => {
    const {
      target: { value },
    } = event;
    setSort(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl size="small">
      <InputLabel id="sorting-select">Сортування</InputLabel>
      <Select
        labelId="sorting-select"
        id="sorting-select"
        value={sort}
        label="Сортування"
        onChange={handleChange}
      >
        <StyledListSubheader>За новизною</StyledListSubheader>
        {sorting.slice(0, 2).map((item, index) => (
          <MenuItem
            value={item.value}
            key={`${item.value}${item.text}${index}`}
          >
            <Checkbox checked={sort.includes(item.value)} />
            <ListItemText primary={item.text} />
          </MenuItem>
        ))}
        <StyledListSubheader>За ціною</StyledListSubheader>
        {sorting.slice(2, 4).map((item, index) => (
          <MenuItem
            value={item.value}
            key={`${item.value}${item.text}${index}`}
          >
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
