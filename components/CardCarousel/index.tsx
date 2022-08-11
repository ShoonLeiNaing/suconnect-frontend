import { Box } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors } from "../../data/constant";
import GridCard from "../GridCard";

const CardCarousel = () => {
  return (
    <Box w="100%" py={4} maxW="1250px">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        slidesPerView={4}
        // spaceBetween={30}
        modules={[Pagination, Navigation]}
        navigation
      >
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
      </Swiper>
    </Box>
  );
};

export default CardCarousel;
