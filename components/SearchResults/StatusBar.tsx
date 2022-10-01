import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
  type?: string;
  dotColor?: string;
  detailView?: boolean;
}

const CalendarStatusBar: FunctionComponent<IProps> = ({
  type,
  dotColor,
  detailView,
}) => {
  return (
    <Box>
      {detailView ? (
        <Box className="flex items-center py-4 w-fit">
          <Box
            className="inline-block p-[0.45rem] rounded-full mr-4"
            sx={{ backgroundColor: dotColor }}
          />
          <Typography className="inline-block text-[0.94rem] text-[#333333]">
            {type}
          </Typography>
        </Box>
      ) : (
        <Box className="flex items-center border rounded-md py-1 px-2 w-fit">
          <Box
            className="inline-block p-[0.35rem] rounded-full mr-1"
            sx={{ backgroundColor: dotColor }}
          />
          <Typography className="inline-block font-light text-gray-500 text-xs">
            {type}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CalendarStatusBar;
