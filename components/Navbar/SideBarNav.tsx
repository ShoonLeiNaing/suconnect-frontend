import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { colors } from "../../data/constant";
import SideBarNavItem from "./SideBarNavItem";
import styles from "./navbar.module.css";

const SideBarNav: FunctionComponent = () => {
  const [slideOpen, setSlideOpen] = useState(false);

  return (
    <Box
      minHeight="100vh"
      // height="fit-content"
      zIndex={1000}
      minWidth={slideOpen ? "250px" : "95px"}
      className="shadow-lg rounded-lg relative duration-550  px-8 sticky"
      // sx={{ overflowY: "scroll" }}
    >
      <img
        alt="logo"
        className={styles.navbar_logo}
        style={{ height: slideOpen ? "50px" : "32px" }}
        src={slideOpen ? "/images/logo.png" : "/images/logosm.png"}
      />
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
      {/* <Box className="flex justify-between items-center mt-36 cursor-pointer">
        <Typography
          className={`${slideOpen ? "block" : "hidden"} `}
          color={colors.secondaryColors.red.red1}
        >
          Log out
        </Typography>
        &nbsp;
        <img src="/images/logout.svg" alt="logout" />
      </Box> */}

      <IoIosArrowBack
        className={`absolute duration-600 ${
          slideOpen ? "left-[14.5rem]" : "left-20"
        } cursor-pointer bg-white rounded-full w-7 h-7 border-2 top-[28rem] ${
          !slideOpen && "rotate-180"
        }`}
        fontSize="20px"
        // style={{ zIndex: 3000 }}
        color={colors.black.black1}
        onClick={() => setSlideOpen(!slideOpen)}
      />
    </Box>
  );
};

export default SideBarNav;
