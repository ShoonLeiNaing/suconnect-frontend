import { Box, Typography, SelectChangeEvent } from "@mui/material";
import { FunctionComponent, useState } from "react";

interface IProps {
  datas: any;
}

const InstructorComponent: FunctionComponent<IProps> = ({ datas }) => {
  return (
    <Box className="flex flex-col mx-4 overflow-y-auto pb-6" maxHeight="65vh">
      {datas.map((data: any, index: number) => (
        <Box
          key={index}
          className="flex items-center hover:bg-[#B2D4FF80] rounded-md p-3 pl-4 cursor-pointer"
        >
          <Box className="w-10 h-10 flex justify-center mr-4 items-center bg-[#BBBBBB] rounded-full">
            <Typography className="text-white font-bold">
              {data.prefix}
            </Typography>
          </Box>
          <Box className="flex flex-col">
            <Typography className="text-[#737373]">{data.name}</Typography>
            <Typography className="text-[#737373] text-sm">
              {data.email}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default InstructorComponent;
