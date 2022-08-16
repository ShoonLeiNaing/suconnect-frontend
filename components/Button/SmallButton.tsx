import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface IProps {
  text: string;
  color: string;
  bgColor: string;
}

const SmallButton: FunctionComponent<IProps> = ({ text, color, bgColor }) => {
  return (
    <Box
      color={color}
      bgColor={bgColor}
      px={4}
      py={1}
      fontSize="14px"
      borderRadius="10px"
      fontWeight={500}
      cursor="pointer"
    >
      {text}
    </Box>
  );
};

export default SmallButton;
