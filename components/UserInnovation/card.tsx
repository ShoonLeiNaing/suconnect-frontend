import { Box, Image, Text } from "@chakra-ui/react";
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
      cursor="pointer"
    >
      <Image src={image} width="200px" height="200px" />
      <Text
        fontWeight={500}
        fontSize="20px"
        marginTop="1rem"
        color={titleColor}
      >
        {title}
      </Text>
      <Text
        fontSize="16px"
        marginTop="0.6rem"
        textAlign="center"
        color={textColor}
      >
        {text}
      </Text>
    </Box>
  );
};

Card.defaultProps = {
  textColor: "#BBBBBB",
};

export default Card;
