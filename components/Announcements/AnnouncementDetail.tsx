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

const AnnouncementDetailComponent = () => {
  return (
    <Box>
      <Box style={{ display: "grid" }} px={6}>
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

        <Typography sx={{ zIndex: 1 }} my={2} color={colors.black.black1}>
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
        mt={{ lg: 8 }}
      >
        <Box
          sx={{ display: "flex",
                flexDirection: "column",
             }}
        >
          <Box
            my={{ lg: 1 }}
            mx={4}
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
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
          <CardCarousel maxWidth="1180px">
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
  );
};

export default AnnouncementDetailComponent;
