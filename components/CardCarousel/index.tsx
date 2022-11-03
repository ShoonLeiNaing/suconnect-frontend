// import { Box } from "@chakra-ui/react";
import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

interface IProps {
  children: any;
  maxWidth?: any;
  breakpoints?: any;
}

const CardCarousel: FunctionComponent<IProps> = ({
  children,
  maxWidth,
  breakpoints,
}) => {
  return (
    <Box>
      <Box
        width="100%"
        maxWidth={maxWidth || "100%"}
        py={4}
        zIndex={10}
        // sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          breakpoints={breakpoints}
          // slidesPerView={4}
          modules={[Pagination, Navigation]}
          navigation
        >
          {children}
        </Swiper>
      </Box>

      {/* <Box
        width="100%"
        maxWidth="350px"
        py={1}
        zIndex={10}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          navigation
        >
          {children}
        </Swiper>
      </Box> */}
    </Box>
  );
};

export default CardCarousel;
