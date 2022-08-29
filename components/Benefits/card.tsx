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
      width="200px"
      sx={{ color: textColor, backgroundColor: bgColor, zIndex: 2 }}
      padding="1.5rem 1rem 1.5rem 1.2rem"
      borderRadius="20px"
    >
      <img src={icon} alt="benefit icon" height="45px" width="45px" />
      <Typography fontWeight={500} fontSize="17px" marginTop="0.8rem">
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
