// import { Box, Image, Text } from "@chakra-ui/react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";

interface CardProps {
  image: string;
  title: string;
  titleColor: string;
  text: string;
  textColor?: string;
}

const Card: FunctionComponent<CardProps> = ({
  image,
  title,
  titleColor,
  text,
  textColor,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="350px"
      // cursor="pointer"
    >
      <Image src={image} width={200} height={200} />
      <Typography
        fontWeight={500}
        fontSize="20px"
        marginTop="1rem"
        color={titleColor}
      >
        {title}
      </Typography>
      <Typography
        fontSize="16px"
        marginTop="0.6rem"
        textAlign="center"
        color={textColor}
      >
        {text}
      </Typography>
    </Box>
  );
};

Card.defaultProps = {
  textColor: "#BBBBBB",
};

export default Card;
