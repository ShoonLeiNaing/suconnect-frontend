import { FunctionComponent } from "react";
import { Box, Typography, Icon } from "@mui/material";
import { colors } from "../../data/constant";

interface IProps {
  sideStatus: boolean;
  dropStatus: boolean;
  title: string;
  icon: any;
  iconColor?: string;
}

const SideDropDown: FunctionComponent<IProps> = ({
  sideStatus,
  dropStatus,
  title,
  icon,
  iconColor,
}) => {
  return (
    <Box
      className={` ${dropStatus ? "flex" : "hidden"} ${
        sideStatus ? "" : "hidden"
      } duration-100 py-4`}
    >
      <Box display="flex" marginLeft="0.5rem" color={iconColor} fontSize="20px">
        <Icon component={icon} fontSize="small" />

        {/* <Icon as={icon} sx={{ color: iconColor, marginRight: "1rem" }} /> */}
        {/* <Icon sx={{ color: iconColor, marginRight: "1rem" }}>{icon}</Icon> */}
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
