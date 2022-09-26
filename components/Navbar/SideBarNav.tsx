import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { colors } from "../../data/constant";
import SideBarNavItems from "./SideBarNavItems";
import styles from "./navbar.module.css";

interface IProps {
  allowToggle?: boolean;
  data: any[];
  panel?: string;
}

const SideBarNav: FunctionComponent<IProps> = ({
  allowToggle,
  data,
  panel,
}) => {
  const [slideOpen, setSlideOpen] = useState(true);

  return (
    <Box
      minWidth={slideOpen ? "250px" : "95px"}
      className="h-screen shadow-lg rounded-lg relative duration-550 px-6 sticky top-0 "
    >
      <img
        alt="logo"
        className={styles.navbar_logo}
        style={{ height: slideOpen ? "50px" : "32px" }}
        src={slideOpen ? "/images/logo.svg" : "/images/logosm.png"}
      />

      <SideBarNavItems data={data} status={slideOpen} panel={panel} />
      <Box
        position="absolute"
        display="flex"
        width="100%"
        bottom={0}
        px={slideOpen ? 2 : 0}
        py={2}
        justifyContent="space-between"
      >
        {slideOpen && (
          <Typography
            // className={`${slideOpen ? "block" : "hidden"} `}
            color={colors.secondaryColors.red.red1}
          >
            Log out
          </Typography>
        )}

        <img
          src="/images/logout.svg"
          alt="logout"
          style={{ paddingRight: slideOpen ? "50px" : "0" }}
        />
      </Box>

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

SideBarNav.defaultProps = {
  allowToggle: false,
};
export default SideBarNav;
