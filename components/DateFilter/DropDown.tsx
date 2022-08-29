import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { colors } from "../../data/constant";

interface IProps {
  setFilterText: any;
}

const DropDown: FunctionComponent<IProps> = ({
  setFilterText,
}) => {
  const [filterValue, setFilterValue] = useState("all");
  const handleChange = (event: SelectChangeEvent) => {
    setFilterValue(event.target.value);
    setFilterText(event.target.value);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      borderRadius: "10px 0px 0px 10px",
      position: "relative",
      backgroundColor: colors.white.white2,
      fontSize: 14,
      padding: "10px 26px 10px 12px",
      color: colors.primaryColors.lightblue.lightblue1,
      width: "50px",
    },
  }));

  return (
    <Box>
      <Box display="flex">
        <Select
          id="demo-simple-select"
          value={filterValue}
          onChange={handleChange}
          input={<BootstrapInput />}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem sx={{ fontSize: "14px" }} value="all">
            Sort by
          </MenuItem>
          <MenuItem sx={{ fontSize: "14px" }} value="today">
            Today
          </MenuItem>
          <MenuItem sx={{ fontSize: "14px" }} value="yesterday">
            Yesterday
          </MenuItem>
          <MenuItem sx={{ fontSize: "14px" }} value="last 7 days">
            Last 7 days
          </MenuItem>
          <MenuItem sx={{ fontSize: "14px" }} value="last 30 days">
            Last 30 days
          </MenuItem>
          <MenuItem sx={{ fontSize: "14px" }} value="this month">
            This Month
          </MenuItem>
          <MenuItem sx={{ fontSize: "14px" }} value="last month">
            Last Month
          </MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default DropDown;
