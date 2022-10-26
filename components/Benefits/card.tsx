// import { Box, Image, Text } from "@chakra-ui/react";
import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface CardProps {
  icon: string;
  bgColor?: string;
  title: string;
  textColor?: string;
}

const Card: FunctionComponent<CardProps> = ({
  icon,
  bgColor,
  title,
  textColor,
}) => {
  return (
    <Box
      width={{ md: "165px", sm: "150px", xs: "140px" }}
      sx={{ color: textColor, backgroundColor: bgColor, zIndex: 2 }}
      padding={{ md: "1.5rem 1rem 1.5rem 1.2rem", xs: "15px" }}
      borderRadius="20px"
    >
      <img src={icon} alt="benefit icon" height="45px" width="45px" />
      <Typography
        fontWeight={500}
        fontSize={{ md: "17px", sm: "16px", xs: "15px" }}
        marginTop="0.8rem"
      >
        {title}
      </Typography>
    </Box>
  );
};

Card.defaultProps = {
  bgColor: colors.primaryColors.lightblue.lightblue1,
  textColor: "#FFFFFF",
};

export default Card;
