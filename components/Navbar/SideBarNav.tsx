import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { colors } from "../../data/constant";
import SideBarNavItem from "./SideBarNavItem";
import styles from "./navbar.module.css";

interface IProps {
  allowToggle?: boolean;
  data: any[];
}

const SideBarNav: FunctionComponent<IProps> = ({ allowToggle, data }) => {
  const [slideOpen, setSlideOpen] = useState(true);

  return (
    <Box
      minWidth={slideOpen ? "250px" : "95px"}
      // top={0}
      // left={0}
      className="h-screen shadow-lg rounded-lg relative duration-550 px-8 sticky top-0 "
      // sx={{ overflowY: "scroll" }}
    >
      <img
        alt="logo"
        className={styles.navbar_logo}
        style={{ height: slideOpen ? "50px" : "32px" }}
        src={slideOpen ? "/images/logo.png" : "/images/logosm.png"}
      />
      {data?.map((item) => (
        <SideBarNavItem
          key={item.text}
          status={slideOpen}
          title={item.text}
          icon={item.icon}
          iconBgColor={colors.primaryColors.lightblue.lightblue1}
          dropdown={item}
        />
      ))}
      {/* <SideBarNavItem
        status={slideOpen}
        title="Schedule"
        icon="/images/sidebaricon2.svg"
        iconBgColor={colors.primaryColors.pink.pink1}
      /> */}
      {/* <SideBarNavItem
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
      /> */}
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

      {allowToggle && (
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
      )}
    </Box>
  );
};

export default SideBarNav;
