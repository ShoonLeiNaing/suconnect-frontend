import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FunctionComponent } from "react";

interface IProps {
  time: any;
  setTime: any;
  type: string;
}

const AMPMInput: FunctionComponent<IProps> = ({ time, setTime, type }) => {
  const handleClick = () => {
    if (time[type].prefix === "AM") {
      setTime({ ...time, [type]: { ...time[type], prefix: "PM" } });
    } else {
      setTime({ ...time, [type]: { ...time[type], prefix: "AM" } });
    }
  };

  return (
    <Box className="w-10 flex items-center text-[#737373]">
      <Typography mr="6px" fontSize="12px">
        {time[type].prefix}
      </Typography>
      <Box>
        <KeyboardArrowUpIcon fontSize="small" onClick={handleClick} />
        <KeyboardArrowDownIcon fontSize="small" onClick={handleClick} />
      </Box>
    </Box>
  );
};

export default AMPMInput;
