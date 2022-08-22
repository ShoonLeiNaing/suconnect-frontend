// import { Image, Box, Text } from "@chakra-ui/react";
import { Box, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { colors } from "../../data/constant";
import SmallButton from "../Button/SmallButton";
import CardCarousel from "../CardCarousel";
import GridCard from "../GridCard";
import SubTitle from "../SubTitle";
import styles from "./announcementDetail.module.css";

const AnnouncementDetailComponent = () => {
  return (
    <div className="relative" style={{ width: "100%" }}>
      <Box style={{ display: "grid" }} px={8}>
        <img
          style={{
            position: "absolute",
            top: "-10rem",
            right: "-3.7rem",
            width: "22rem",
          }}
          src="../../images/announcementbg1.svg"
          alt=""
        />
        <img
          style={{ zIndex: 1, borderRadius: "1rem" }}
          className={styles.announcement_img}
          src="/images/background.jpg"
          alt="announcement detail"
        />
        {/* <Image
          my={{ lg: 6 }}
          src="/images/background.jpg"
          alt="announcement detail"
          w="100%"
          h={{ lg: "550px" }}
          borderRadius="20px"
        /> */}
        <SubTitle title="Announcement Title" />

        <Typography
          sx={{ zIndex: 1 }}
          color={colors.grey.grey2}
          fontSize="14px"
        >
          01/01/2022
        </Typography>
        <img
          style={{
            position: "absolute",
            top: "10rem",
            left: "-5rem",
            width: "22rem",
          }}
          src="../../images/announcementbg2.svg"
          alt=""
        />
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
        <img
          style={{
            position: "absolute",
            top: "55rem",
            right: "-3.7rem",
            width: "30rem",
          }}
          src="../../images/announcementbg3.svg"
          alt=""
        />
      </Box>
      <Box sx={{ position: "relative" }} mt={{ lg: 8 }}>
        <Box
          my={{ lg: 1 }}
          display="flex"
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
        <img
          style={{
            position: "absolute",
            top: "20rem",
            left: "-5rem",
            height: "30rem",
          }}
          src="../../images/announcementbg4.svg"
          alt=""
        />
      </Box>
    </div>
  );
};

export default AnnouncementDetailComponent;
