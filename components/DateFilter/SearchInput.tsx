import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { BiSearchAlt2 } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import { FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { colors } from "../../data/constant";

interface IProps {
  setFilterText: any;
  setSearchText: any;
}

const SearchInput: FunctionComponent<IProps> = ({
  setFilterText,
  setSearchText,
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
      width: "83px",
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
            All Data
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
        <Box
          px={2}
          width="250px"
          display="flex"
          alignItems="center"
          bgcolor="#F5F5F5"
          height="43px"
        >
          <input
            placeholder="Search the web"
            // style={{ height: "40px" }}
            className="search_input"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Box>
        <Box
          borderRadius="0px 10px 10px 0px"
          bgcolor={colors.white.white2}
          width="40px"
          height="43px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BiSearchAlt2
            color={colors.primaryColors.lightblue.lightblue1}
            fontSize="24px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchInput;
