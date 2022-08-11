import { Box, Text, Icon } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface IProps {
  text: string;
  icon?: any;
  color: string;
  hoverColor: string;
}

const VerticleButton: FunctionComponent<IProps> = ({
  text,
  icon,
  color,
  hoverColor,
}) => {
  return (
    <Box
      cursor="pointer"
      color="white"
      backgroundColor={color}
      borderRadius="15px"
      w="140px"
      py={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      transition="all 0.3s"
      _hover={{ bgColor: hoverColor }}
    >
      <Icon
        fontSize="38px"
        as={icon}
        bgColor="white"
        color={color}
        borderRadius="full"
        p="2"
        mb="1"
      />
      <Text fontWeight={500}>{text}</Text>
    </Box>
  );
};

export default VerticleButton;
