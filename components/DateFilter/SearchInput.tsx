import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { BiSearchAlt2 } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import { FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { colors } from "../../data/constant";

interface IProps {
  setFilterText?: any;
  setSearchText: any;
  placeholderText?: string;
  showFilter?: boolean;
  searchText?: string;
}

const SearchInput: FunctionComponent<IProps> = ({
  setFilterText,
  setSearchText,
  placeholderText,
  showFilter,
  searchText,
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
      padding: "12px 26px 9px 12px",
      color: colors.primaryColors.lightblue.lightblue1,
      width: "83px",
      height: "29px",
    },
  }));

  return (
    <Box>
      <Box display="flex">
        {showFilter && (
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
        )}
        <Box
          px={2}
          width="250px"
          display="flex"
          alignItems="center"
          bgcolor="#F5F5F5"
          height="50px"
          borderRadius={showFilter ? "0" : "10px 0px 0px 10px"}
        >
          <input
            placeholder={placeholderText || "Search the web"}
            // style={{ height: "40px" }}
            className="search_input"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Box>
        <Box
          borderRadius="0 10px 10px 0"
          bgcolor={colors.white.white2}
          width="50px"
          height="50px"
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

SearchInput.defaultProps = {
  showFilter: false,
  placeholderText: "Search the web",
};

export default SearchInput;
