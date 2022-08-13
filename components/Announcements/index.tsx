import { Box } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import { colors } from "../../data/constant";
import SmallButton from "../Button/SmallButton";
import CardCarousel from "../CardCarousel";
import GridCard from "../GridCard";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";

const Announcements = () => {
  return (
    <Box mb={8}>
      <SubTitle
        title="Recent Announcements"
        icon
        color={colors.primaryColors.lightblue.lightblue1}
      />
      <Box
        display="flex"
        alignItems="center"
        mb={2}
        justifyContent="space-between"
      >
        <Tagline text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac ultrices nunc commodo nunc consequat." />
        <SmallButton
          text="see all"
          color={colors.primaryColors.lightblue.lightblue1}
          bgColor={colors.white.white2}
        />
      </Box>
      <CardCarousel>
        <SwiperSlide>
          <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        </SwiperSlide>
        <SwiperSlide>
          <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        </SwiperSlide>
        <SwiperSlide>
          <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        </SwiperSlide>
        <SwiperSlide>
          <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        </SwiperSlide>
      </CardCarousel>
    </Box>
  );
};

export default Announcements;
