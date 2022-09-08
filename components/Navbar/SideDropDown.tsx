import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../data/constant";

interface IProps {
  title: string;
  icon: any;
  iconColor?: string;
}

const SideDropDown: FunctionComponent<IProps> = ({
  title,
  icon,
  iconColor,
}) => {
  return (
    <Box
      // className={` ${dropStatus ? "flex" : "hidden"} ${
      //   sideStatus ? "" : "hidden"
      // } duration-100 py-4`}
      className="cursor-pointer flex duration-100 py-[0.9rem]"
    >
      <Box display="flex" marginLeft="0.5rem" color={iconColor} fontSize="20px">
        {icon}
        <Typography
          color={colors.black.black1}
          fontSize="14px"
          marginLeft="1rem"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default SideDropDown;
