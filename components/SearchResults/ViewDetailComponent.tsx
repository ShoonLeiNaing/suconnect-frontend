import { FunctionComponent } from "react";
import { Typography } from "@mui/material";
import { FaClock } from "react-icons/fa";
import { Today } from "@mui/icons-material";
import CalendarStatusBar from "./StatusBar";
import { colors } from "../../data/constant";

interface IProps {
  date: string;
  day: string;
  title: string;
  time: string;
  type: string;
}

const ViewDetailComponent: FunctionComponent<IProps> = ({
  date,
  day,
  title,
  time,
  type,
}) => {
  return (
    <>
      <Typography className="text-[0.94rem] text-[#333333] py-4 border-b">
        <Today fontSize="small" /> <span className="ml-[0.3rem]">{title}</span>
      </Typography>
      <Typography className="text-[0.94rem] text-[#333333] py-4 border-b flex items-center">
        {" "}
        <FaClock fontSize="medium" />{" "}
        <span className="ml-3 mr-4">
          {day} {date}
        </span>{" "}
        {time}
      </Typography>
      {type.includes("Work") ? (
        <CalendarStatusBar
          type={type}
          dotColor={colors.primaryColors.yellow.yellow1}
          detailView
        />
      ) : (
        <CalendarStatusBar
          type={type}
          dotColor={colors.secondaryColors.green.green1}
          detailView
        />
      )}
    </>
  );
};

export default ViewDetailComponent;
