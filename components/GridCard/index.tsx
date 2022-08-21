// import { Box, Image, Text } from "@chakra-ui/react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import ArrowButton from "../Button/ArrowButton";

interface IProps {
  color: string;
  bgColor?: string;
}
const GridCard: FunctionComponent<IProps> = ({ color, bgColor }) => {
  const router = useRouter();
  return (
    <Box
      // cursor="pointer"
      width="250px"
      height="350px"
      borderRadius="25px"
      boxShadow="0px 6px 20px rgba(0, 0, 0, 0.07)"
      margin="auto"
      sx={{ backgroundColor: bgColor }}
    >
      <Image
        height={250}
        width={400}
        style={{ borderRadius: "25px 25px 0 0" }}
        src="/images/background.jpg"
      />
      <Box p={2}>
        <Typography fontSize="18px" fontWeight={500} color={color}>
          Distribution
        </Typography>
        <Typography fontSize="15px" my={1} color={colors.grey.grey2}>
          The distribution of algal species has been fairly well studied since
          the founding.
        </Typography>
        <Box pt={1} onClick={() => router.push("/announcements/123")}>
          <ArrowButton buttonColor={color} />
        </Box>
      </Box>
    </Box>
  );
};

GridCard.defaultProps = {
    bgColor: "#FFFFFF"
}

export default GridCard;
