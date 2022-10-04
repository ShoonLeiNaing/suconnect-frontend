import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import CalendarStatusBar from "./StatusBar";
import { colors } from "../../data/constant";
import HighlightKeyword from "./Highlight";

interface IProps {
  date: string;
  day: string;
  keyword?: any;
  title: string;
  detailTime: string;
  type?: string;
  onClickHandler?: any;
}

const EventComponent: FunctionComponent<IProps> = ({
  date,
  day,
  keyword,
  title,
  detailTime,
  type,
  onClickHandler,
}) => {
  return (
    <Box
      className="p-4 flex items-center hover:bg-[#B2D4FF80] rounded-md"
      onClick={onClickHandler}
    >
      <Box className="flex flex-col items-center">
        <Typography>{date}</Typography>
        <Typography>{day}</Typography>
      </Box>
      <Box className="flex flex-col ml-8">
        <Typography className="font-light text-[0.94rem] mb-2">
          <HighlightKeyword title={title} keyword={keyword} />
        </Typography>
        <Typography className="text-sm text-gray-500 mb-2">
          {detailTime}
        </Typography>
        {type && type.includes("Work") && (
          <CalendarStatusBar
            type={type}
            dotColor={colors.primaryColors.yellow.yellow1}
          />
        )}
        {type && type.includes("Home") && (
          <CalendarStatusBar
            type={type}
            dotColor={colors.secondaryColors.green.green1}
          />
        )}
      </Box>
    </Box>
  );
};

export default EventComponent;
