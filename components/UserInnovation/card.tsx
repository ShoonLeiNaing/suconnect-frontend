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
      width={{ lg: "330px", md: "280px", sm: "200px", xs: "80%" }}
      // cursor="pointer"
    >
      <Box width={{ lg: "200px", md: "150px", sm: "100px", xs: "150px" }}>
        <Image src={image} width={200} height={200} />
      </Box>
      <Typography
        fontWeight={500}
        fontSize={{ md: "20px", sm: "16px" }}
        marginTop="1rem"
        color={titleColor}
      >
        {title}
      </Typography>
      <Typography
        fontSize={{ md: "16px", xs: "14px" }}
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
