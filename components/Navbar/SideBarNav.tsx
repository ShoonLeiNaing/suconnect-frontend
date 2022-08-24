import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { colors } from "../../data/constant";
import SideBarNavItem from "./SideBarNavItem";

const SideBarNav: FunctionComponent = () => {
  const [slideOpen, setSlideOpen] = useState(false);

  return (
    <div
      className={` ${
        slideOpen ? "w-72" : "w-24"
      } h-fit bg-white shadow-xl rounded-lg relative duration-300 pt-8 px-8 sticky top-12`}
    >
      <SideBarNavItem
        status={slideOpen}
        title="Dashboard"
        icon="/images/sidebaricon1.svg"
        iconBgColor={colors.primaryColors.lightblue.lightblue1}
      />
      <SideBarNavItem
        status={slideOpen}
        title="Schedule"
        icon="/images/sidebaricon2.svg"
        iconBgColor={colors.primaryColors.pink.pink1}
      />
      <SideBarNavItem
        status={slideOpen}
        title="Courses"
        icon="/images/sidebaricon3.svg"
        iconBgColor={colors.primaryColors.yellow.yellow1}
      />
      <SideBarNavItem
        status={slideOpen}
        title="Payroll"
        icon="/images/sidebaricon4.svg"
        iconBgColor={colors.secondaryColors.green.green1}
      />
      <SideBarNavItem
        status={slideOpen}
        title="User Table"
        icon="/images/sidebaricon5.svg"
        iconBgColor={colors.secondaryColors.orange.orange1}
      />
      <SideBarNavItem
        status={slideOpen}
        title="My Profile"
        icon="/images/sidebaricon6.svg"
        iconBgColor={colors.secondaryColors.red.red1}
      />
      <Box className="flex justify-between items-center mt-36 mb-12 cursor-pointer">
        <Typography
          className={`${slideOpen ? "block" : "hidden"} `}
          color={colors.secondaryColors.red.red1}
        >
          {" "}
          Log out{" "}
        </Typography>
        &nbsp;
        <img src="/images/logout.svg" alt="logout" />
      </Box>

      <IoIosArrowBack
        className={`absolute duration-300 ${
          slideOpen ? "left-[14.5rem]" : "left-20"
        } cursor-pointer bg-white rounded-full w-7 h-7 border-2 top-[28rem] ${
          !slideOpen && "rotate-180"
        }`}
        fontSize="20px"
        color={colors.black.black1}
        onClick={() => setSlideOpen(!slideOpen)}
      />
    </div>
  );
};

export default SideBarNav;
