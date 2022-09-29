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
  searchText: string;
  setSearchText: any;
  customWidth?: string;
}

const SearchInput: FunctionComponent<IProps> = ({
  searchText,
  setSearchText,
  customWidth,
}) => {
  return (
    <Box>
      <Box display="flex">
        <Box
          px={2}
          width={customWidth || "250px"}
          display="flex"
          alignItems="center"
          bgcolor="#F5F5F5"
          height="43px"
          borderRadius="10px 0 0 10px"
        >
          <input
            placeholder="Search the web"
            className="search_input"
            onChange={(e) => setSearchText(e.target.value.trim())}
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
