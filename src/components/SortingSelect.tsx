import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SortingSelect() {


//   const sorting = [
//     { value: "newest", text: "з найновіших" },
//     { value: "oldest", text: "зі старіших" },
//     { value: "mostExpensive", text: "з найдорожчих" },
//     { value: "cheapest", text: "з найдешевши" },
//   ];

  
//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="sorting-select">Сортування</InputLabel>
        {/* <Select
          labelId="sorting-select"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
      </FormControl>
    </Box>
  );
}
