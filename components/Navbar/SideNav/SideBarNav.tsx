import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import SideBarNavItems from "./SideBarNavItems";
import styles from "../navbar.module.css";
import { colors } from "../../../data/constant";

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
      className="shadow-lg rounded-lg relative duration-550 pt-2 px-6 sticky top-0 "
      sx={{ display: { xs: "none", md: "block" } }}
      height="100vh"
    >
      <Link href="/">
        <a>
          <Image
            alt="logo"
            className={styles.navbar_logo}
            height={50}
            width={200}
            src={slideOpen ? "/images/logo.svg" : "/images/logosm.png"}
          />
        </a>
      </Link>

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
