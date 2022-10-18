import { Box } from "@mui/material";
import { SwiperSlide, Swiper } from "swiper/react";
import CardCarousel from "../CardCarousel";
import LinkComponent from "./LinkComponent";

const links = ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 6"]

const LinkSection = () => {
  return (
    <>
      <Box display="flex" gap={1}>
        <Box
          sx={{
            width: {xs: "230px", sm: "450px"},
            overflow: "scroll"
          }}
        >
          <Box
            display="flex"
            gap={1}
          >
            {
              links.map((link, index) => (
                <LinkComponent text={link} key={index}/>
              ))
            }
          </Box>
        </Box>
          <LinkComponent next />
      </Box>
      {/* <Box alignItems="center" justifyContent="center" gap={1} display={{xs: "flex", sm: "none"}}>
        <LinkComponent text="Link 1" />
        <LinkComponent text="Link 2" />
        <LinkComponent next />
      </Box> */}
    </>
  );
};

export default LinkSection;
