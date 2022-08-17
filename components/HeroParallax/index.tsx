// import { Box, Icon, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { Box, Typography } from "@mui/material";
import { colors } from "../../data/constant";
import ArrowButton from "../Button/ArrowButton";
import SearchInput from "./SearchInput";
import LinkSection from "./LinkSection";
import styles from "./heroParallax.module.css";

const HeroParallax = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box className={styles.parallax_bg}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="white"
          height="100%"
          sx={{ position: "relative" }}
        >
          <Typography fontSize="40px" fontWeight={700}>
            {t("landing:title")}
          </Typography>
          <Typography
            fontSize="20px"
            my={4}
            textAlign="center"
            maxWidth="700px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquam volutpat malesuada vel quis vitae ultrices
            porta.
          </Typography>

          <Box mt={4} sx={{ cursor: "pointer" }}>
            <ArrowButton
              buttonColor={colors.primaryColors.lightblue.lightblue1}
              textColor="white"
            />
          </Box>
        </Box>
      </Box>
      <Box height="25vh">
        <Box
          mt={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          // margin="auto"
        >
          <SearchInput />
        </Box>
        <Box my={6} mb={16}>
          <LinkSection />
        </Box>
      </Box>
    </>
  );
};

export default HeroParallax;
