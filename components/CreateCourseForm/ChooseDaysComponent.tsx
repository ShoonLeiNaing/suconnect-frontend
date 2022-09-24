import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

const sevenDays = [
  {
    prefix: "S",
    word: "Sunday",
  },
  {
    prefix: "M",
    word: "Monday",
  },
  {
    prefix: "T",
    word: "Tuesday",
  },
  {
    prefix: "W",
    word: "Wednesday",
  },
  {
    prefix: "T",
    word: "Thursday",
  },
  {
    prefix: "S",
    word: "Saturday",
  },
];

const ChooseDaysComponent: FunctionComponent = () => {
  const selectedDays = (e: any) => {
    e.target.style.backgroundColor = "#3B8CF7";
  };

  return (
    <Box className="flex items-center ml-2 mt-4">
      {sevenDays.map((data, index) => (
        <Box
          key={index}
          className="w-10 h-10 flex justify-center mr-4 items-center bg-[#BBBBBB] rounded-full"
          onClick={selectedDays}
        >
          <Typography className="text-white font-bold">
            {data.prefix}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ChooseDaysComponent;
