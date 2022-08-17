// import { Box } from "@chakra-ui/react";
import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

interface IProps {
  children: any;
}

const CardCarousel: FunctionComponent<IProps> = ({ children }) => {
  return (
    <Box width="100%" py={4} zIndex={10}>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        slidesPerView={4}
        modules={[Pagination, Navigation]}
        navigation
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default CardCarousel;
