// import { Box } from "@chakra-ui/react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { SwiperSlide } from "swiper/react";
import { colors } from "../../data/constant";
import { announcements } from "../../data/testData";
import SmallButton from "../Button/SmallButton";
import CardCarousel from "../CardCarousel";
import GridCard from "../GridCard";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import styles from "./announcementDetail.module.css";

const breakpoints = {
  520: {
    slidesPerView: 2,
  },
  750: {
    slidesPerView: 3,
  },
  1300: { slidesPerView: 4 },
};

const Announcements = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/announcements");
  };
  const chooseColor = (index: number) => {
    if (index === 1 || index === 7) {
      return colors.primaryColors.lightblue.lightblue1;
    } else if (index === 2 || index === 8) {
      return colors.primaryColors.pink.pink1;
    } else if (index === 3 || index === 9) {
      return colors.primaryColors.yellow.yellow4;
    } else if (index === 4 || index === 10) {
      return colors.secondaryColors.green.green3;
    } else if (index === 5 || index === 11) {
      return colors.secondaryColors.red.red1;
    } else {
      return colors.secondaryColors.orange.orange1;
    }
  };
  return (
    <Box my={4}>
      <img
        className={styles.bg_element}
        src="../../images/bgelement2.svg"
        alt=""
      />
      <Box
        className="inner-container"
        display="block"
        flexDirection="column"
        alignItems="center"
      >
        <SubTitle
          title="Recent Announcements"
          icon
          color={colors.primaryColors.lightblue.lightblue1}
        />
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          mb={2}
          justifyContent={{ xs: "center", sm: "space-between" }}
        >
          <Tagline text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac ultrices nunc commodo nunc consequat." />

          <SmallButton
            onClickHandler={onClickHandler}
            text="see all"
            color={colors.primaryColors.lightblue.lightblue1}
            bgColor={colors.white.white2}
          />
        </Box>
        <Box
          display="block"
          width={{ xl: "100%", md: "90%", xs: "100%" }}
          margin="auto"
        >
          <CardCarousel breakpoints={breakpoints} maxWidth="100%">
            {announcements.map((announcement, index) => (
              <SwiperSlide key={index}>
                <GridCard color={chooseColor(index + 1)} />
              </SwiperSlide>
            ))}
          </CardCarousel>
        </Box>
      </Box>
    </Box>
  );
};

export default Announcements;
