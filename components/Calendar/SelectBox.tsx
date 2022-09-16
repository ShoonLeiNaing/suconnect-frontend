import { FunctionComponent, useState } from "react";
import Box from "@mui/material/Box";
import {
  MenuItem,
  styled,
  InputBase,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styles from "./calendar.module.css";

const SelectBox: FunctionComponent = () => {
  const [day, setDay] = useState("Day");

  const handleChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box className="my-4">
      <FormControl className={styles.form_control}>
        <Select
          value={day}
          onChange={handleChange}
          input={<BootstrapInput />}
          className={styles.select_box}
        >
          <MenuItem className="hidden" value="Day">
            Day
          </MenuItem>
          <MenuItem value="Mon">Monday</MenuItem>
          <MenuItem value="Tue">Tuesday</MenuItem>
          <MenuItem value="Wed">Wednesday</MenuItem>
          <MenuItem value="Thurs">Thursday</MenuItem>
          <MenuItem value="Fri">Friday</MenuItem>
          <MenuItem value="Sat">Saturday</MenuItem>
          <MenuItem value="Sun">Sunday</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectBox;
