// import { Box, Image, Text } from "@chakra-ui/react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { colors } from "../../data/constant";
import Button from "./Button";
import styles from "./navbar.module.css";

interface IProps {
  changeLanguage?: boolean;
}
const Navbar: FunctionComponent<IProps> = ({ changeLanguage }) => {
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
  return (
    <Box height="70px" className={styles.navbar_container}>
      <Box
        width="100%"
        height="70px"
        paddingX="80px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/">
          <a>
            <Image
              height={50}
              width={140}
              src="/images/logo.svg"
              alt="logo"
              layout="fixed"
            />
          </a>
        </Link>

        <Box
          flex="1"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Typography
            fontWeight={600}
            color={colors.primaryColors.lightblue.lightblue1}
            mr={4}
            fontSize="15px"
          >
            Sign in
          </Typography>
          <Button />
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

export default Navbar;
