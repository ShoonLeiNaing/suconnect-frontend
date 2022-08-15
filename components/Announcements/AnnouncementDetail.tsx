import { Image, Box, Text } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import { colors } from "../../data/constant";
import SmallButton from "../Button/SmallButton";
import CardCarousel from "../CardCarousel";
import GridCard from "../GridCard";
import SubTitle from "../SubTitle";

const AnnouncementDetailComponent = () => {
  return (
    <>
      <Box px={{ lg: 10 }}>
        <Image
          my={{ lg: 6 }}
          src="/images/background.jpg"
          alt="announcement detail"
          w="100%"
          h={{ lg: "550px" }}
          borderRadius="20px"
        />
        <SubTitle title="Announcement Title" />

        <Text color={colors.grey.grey2} fontSize="14px">
          01/01/2022
        </Text>

        <Text my={{ lg: 4 }} color={colors.black.black1}>
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
        </Text>
      </Box>
      <Box mt={{ lg: 16 }}>
        <Box
          my={{ lg: 4 }}
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
      </Box>
    </>
  );
};

export default AnnouncementDetailComponent;
