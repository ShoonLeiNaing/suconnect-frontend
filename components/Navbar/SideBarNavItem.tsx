import { FunctionComponent, useState } from "react";
import { Box, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { FaPoll, FaCog, FaBookReader } from "react-icons/fa";
import SideDropDown from "./SideDropDown";
import { colors } from "../../data/constant";

interface IProps {
  status: boolean;
  title: string;
  icon: string;
  iconBgColor?: string;
}

const SideBarNavItem: FunctionComponent<IProps> = ({
  status,
  title,
  icon,
  iconBgColor,
}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0.8rem 0"
      >
        <Box className="flex items-center cursor-pointer">
          <Box
            width="2.5rem"
            padding="0.5rem"
            borderRadius="9px"
            sx={{ backgroundColor: iconBgColor }}
          >
            <img className="w-6 h-6" src={icon} alt="sideicons" />
          </Box>
          {status && (
            <Typography
              marginLeft="15px"
              fontSize="15px"
              className={`${status ? "block" : "hidden"} `}
              color={colors.black.black1}
            >
              {title}
            </Typography>
          )}
        </Box>
        <Box
          padding="3px"
          className={` ${
            status ? "block" : "hidden"
          } cursor-pointer rounded-full`}
          sx={{ backgroundColor: iconBgColor }}
          onClick={() => setDropDownOpen(!dropDownOpen)}
        >
          <IoIosArrowDown fontSize="14px" color="white" />
        </Box>
      </Box>
      <Box className={` ${dropDownOpen ? "mb-4" : ""} `}>
        <SideDropDown
          sideStatus={status}
          dropStatus={dropDownOpen}
          title="DropDown 1"
          iconColor={iconBgColor}
          icon={FaBookReader}
        />
        <SideDropDown
          sideStatus={status}
          dropStatus={dropDownOpen}
          title="DropDown 2"
          iconColor={iconBgColor}
          icon={FaPoll}
        />
        <SideDropDown
          sideStatus={status}
          dropStatus={dropDownOpen}
          title="DropDown 3"
          iconColor={iconBgColor}
          icon={FaCog}
        />
      </Box>
    </Box>
  );
};

export default SideBarNavItem;
