import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";

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
    prefix: "F",
    word: "Friday",
  },
  {
    prefix: "S",
    word: "Saturday",
  },
];

const ChooseDaysComponent: FunctionComponent = () => {
  const [selectedDots, setSelectedDots] = useState([""]);

  const selectedDays = (e: any, data: any) => {
    e.target.style.backgroundColor = "#3B8CF7";
    setSelectedDots((oldDatas) => [...oldDatas, data.word]);
    selectedDots.map((clicked) => {
      if (data.word === clicked) {
        e.target.style.backgroundColor = "#BBBBBB";
      }
      return "hello";
    });
  };

  return (
    <Box className="flex items-center ml-2 mt-4">
      {sevenDays.map((data, index) => (
        <Box
          key={index}
          className="w-10 h-10 flex justify-center mr-4 items-center bg-[#BBBBBB] rounded-full"
          onClick={(e) => selectedDays(e, data)}
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
