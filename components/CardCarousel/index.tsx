// import { Box } from "@chakra-ui/react";
import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

interface IProps {
  children: any;
  maxWidth?: string;
}

const CardCarousel: FunctionComponent<IProps> = ({ children, maxWidth }) => {
  return (
    <Box>
      <Box width="100%" maxWidth={maxWidth} py={4} zIndex={10}
        sx={{ display: {xs: 'none', sm: 'block'} }}
      >
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
      
      <Box width="100%" maxWidth="350px" py={1} zIndex={10}
        sx={{ display: {xs: 'block', sm: 'none'} }}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          navigation
        >
          {children}
        </Swiper>
      </Box>
      
    </Box>
  );
};

export default CardCarousel;
