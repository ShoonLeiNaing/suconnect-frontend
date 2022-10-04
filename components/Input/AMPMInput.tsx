import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const AMPMInput = () => {
  const [meridiem, setMeridiem] = useState(true);

  const handleClick = () => {
    setMeridiem(!meridiem);
  };

  return (
    <Box className="w-10 flex items-center text-[#737373]">
      <Typography mr="6px" fontSize="12px">
        {meridiem ? "AM" : "PM"}
      </Typography>
      <Box>
        <KeyboardArrowUpIcon fontSize="small" onClick={handleClick} />
        <KeyboardArrowDownIcon fontSize="small" onClick={handleClick} />
      </Box>
    </Box>
  );
};

export default AMPMInput;
