// import { Box, Image, Text } from "@chakra-ui/react";
import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

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
      width="200px"
      // color={textColor}
      sx={{ color: textColor, backgroundColor: bgColor }}
      // cursor="pointer"
      // bgColor={bgColor}
      padding="1.5rem 1rem 1.5rem 1.2rem"
      borderRadius="20px"
    >
      <img src={icon} alt="benefit icon" height="45px" width="45px" />
      <Typography fontWeight={500} fontSize="18px" marginTop="0.5rem">
        {title}
      </Typography>
    </Box>
  );
};

Card.defaultProps = {
  bgColor: "#FFD233",
  textColor: "#FFFFFF",
};

export default Card;
