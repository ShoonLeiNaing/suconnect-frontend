// import { Image, Box, Text } from "@chakra-ui/react";
import { Box, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { colors } from "../../data/constant";
import SmallButton from "../Button/SmallButton";
import CardCarousel from "../CardCarousel";
import GridCard from "../GridCard";
import PreviousPage from "../PreviousPage";
import SubTitle from "../SubTitle";
import styles from "./announcementDetail.module.css";

const breakpoints = {
  520: {
    slidesPerView: 2,
  },
  750: {
    slidesPerView: 3,
  },
  1400: { slidesPerView: 4 },
};

const AnnouncementDetailComponent = () => {
  return (
    <Box maxWidth="1400px" margin="auto">
      <Box style={{ display: "grid" }} px={{ lg: 6, sm: 4, xs: 2 }}>
        <PreviousPage />

        <img
          style={{ zIndex: 1, borderRadius: "1rem" }}
          className="max-w-full my-4 max-h-full"
          src="/images/background.jpg"
          alt="announcement detail"
        />

        <SubTitle title="Announcement Title" />

        <Typography
          sx={{ zIndex: 1 }}
          color={colors.grey.grey2}
          fontSize="14px"
        >
          01/01/2022
        </Typography>

        <Typography
          sx={{ zIndex: 1 }}
          my={2}
          color={colors.black.black1}
          fontSize={{ lg: "16px", xs: "14px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet.
          <br />
          <br /> Pellentesque commodo lacus at sodales sodales. Quisque sagittis
          orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu
          eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
          urna. Pellentesque sit amet sapien fringilla, mattis ligula
          consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam
          quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
          interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
          fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
          Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
          In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
          hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
          consectetur, ultrices mauris.
          <br />
          <br />
          Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
          auctor ornare leo, non suscipit magna interdum eu. Curabitur
          pellentesque nibh nibh, at maximus ante fermentum sit amet.
          Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci
          ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros,
          eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
          ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
          augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
          Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
          Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci
          ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros,
          eget tempus orci facilisis id.
        </Typography>
      </Box>
      <Box
        sx={{ position: "relative" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={{ xl: 6, lg: 2 }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            my={1}
            mx={{ sm: 4, xs: "none" }}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <SubTitle title="Related Announcements" />
            <SmallButton
              text="see all"
              color={colors.primaryColors.lightblue.lightblue1}
              bgColor={colors.white.white2}
            />
          </Box>
          <Box className={styles.carousel_container}>
            <CardCarousel maxWidth="100%" breakpoints={breakpoints}>
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
        </Box>
      </Box>
    </Box>
  );
};

export default AnnouncementDetailComponent;
