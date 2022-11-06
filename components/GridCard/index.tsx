// import { Box, Image, Text } from "@chakra-ui/react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import ArrowButton from "../Button/ArrowButton";
import styles from "./gridcard.module.css";

interface IProps {
  color: string;
  bgColor?: string;
}
const GridCard: FunctionComponent<IProps> = ({ color, bgColor }) => {
  const router = useRouter();
  return (
    <Box
      // cursor="pointer"
      className={styles.card_container}
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
      <Box px={2} py={{ lg: 2, md: 0 }}>
        <Typography
          fontSize={{ lg: "18px", md: "15px", sm: "14px" }}
          fontWeight={600}
          color={color}
        >
          Distribution
        </Typography>
        <Typography
          fontSize={{ lg: "15px", xs: "13px" }}
          my={{ lg: 1, md: "4px", sm: 1 }}
          color={colors.grey.grey2}
        >
          The distribution of algal species has been fairly well studied since
          the founding.
        </Typography>
        <Box
          pt={1}
          onClick={() => router.push("/announcements/123")}
          className="cursor"
        >
          <ArrowButton buttonColor={color} />
        </Box>
      </Box>
    </Box>
  );
};

GridCard.defaultProps = {
  bgColor: "#FFFFFF",
};

export default GridCard;
