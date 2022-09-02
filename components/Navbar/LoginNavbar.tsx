// import { Box, Image, Text } from "@chakra-ui/react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { colors } from "../../data/constant";
import styles from "./navbar.module.css";
import SearchInput from "../HeroParallax/SearchInput";

interface IProps {
  changeLanguage?: boolean;
  showSideNav?: boolean;
}
const LoginNavbar: FunctionComponent<IProps> = ({
  changeLanguage,
  showSideNav,
}) => {
  // const { locale } = useRouter();
  const router = useRouter();
  const [language, setLanguage] = useState<string>(router.locale || "en");
  const [lightMode, setLightMode] = useState<boolean>(true);

  const changeLanguageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log({ anchorEl });
  return (
    <Box
      width="100%"
      // maxWidth="1400px"
      margin="auto"
      height="70px"
      className={styles.login_navbar_container}
      color={colors.primaryColors.lightblue.lightblue1}
    >
      <Box
        // maxWidth="1600px"
        margin="auto"
        height="70px"
        paddingX="40px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap={3}>
          {!showSideNav && (
            <Image
              height={50}
              width={140}
              src="/images/logo.png"
              alt="logo"
              layout="fixed"
            />
          )}
          <Box display="flex" ml={2}>
            <Typography>Welcome Thiha! </Typography>
            <img src="/images/celebrate.svg" alt="celebrate" />
          </Box>
        </Box>

        <SearchInput />
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Box display="flex" gap={1}>
            <img alt="setting" src="/images/setting.svg" />
            <img alt="help" src="/images/help.svg" />
            <img alt="noti" src="/images/noti.svg" />
          </Box>
          <Box
            borderRadius="30px"
            py={1}
            px={3}
            ml={2}
            display="flex"
            sx={{ backgroundColor: colors.white.white2 }}
            color={colors.primaryColors.lightblue.lightblue1}
            gap={1}
            alignItems="center"
          >
            <img
              className={styles.profile_img}
              alt="profile"
              src="/images/profile.jpeg"
            />
            <Typography fontSize="13px">Loreum Ipsm</Typography>
          </Box>

          <Box
            ml={1}
            borderRadius="100%"
            sx={{ backgroundColor: colors.white.white2 }}
          >
            <IconButton onClick={handleClick}>
              {anchorEl ? (
                <IoIosArrowUp
                  fontSize="20px"
                  color={colors.primaryColors.lightblue.lightblue1}
                />
              ) : (
                <IoIosArrowDown
                  fontSize="20px"
                  color={colors.primaryColors.lightblue.lightblue1}
                />
              )}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  marginTop: "10px",
                  width: "130px",
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.07)",
                  borderRadius: "10px",
                  padding: "0 8px",
                },
              }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: "14px",
                  color: colors.black.black2,
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: colors.white.white2,
                  },
                }}
              >
                Logout
              </MenuItem>
              <MenuItem
                onClick={() => router.push("/profile")}
                sx={{
                  fontSize: "14px",
                  color: colors.black.black2,
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: colors.white.white2,
                  },
                }}
              >
                Profile
              </MenuItem>
            </Menu>
          </Box>

          {changeLanguage && (
            <select
              className="select"
              value={language}
              onChange={changeLanguageHandler}
            >
              <option value="en">Eng</option>
              <option value="my">မြန်မာ</option>
            </select>
          )}
          {/* <Box
            sx={{
              backgroundColor: lightMode ? "black" : "white",
            }}
            color={
              lightMode
                ? colors.primaryColors.lightblue.lightblue2
                : colors.primaryColors.lightblue.lightblue1
            }
            ml={2}
            height="40px"
            width="40px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            // cursor="pointer"
          >
            <Icon fontSize="medium" onClick={() => setLightMode(!lightMode)}>
              {lightMode ? <RiMoonClearLine /> : <FiSun />}
            </Icon>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginNavbar;