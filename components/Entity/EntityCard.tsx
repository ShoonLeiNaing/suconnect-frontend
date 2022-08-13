import { Box, Image, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import SubButtonIcon from "../SubButton/SubButtonIcon";

interface IProps {
  title: string;
  text: string;
  color: string;
  icon?: string;
}

const EntityCard: FunctionComponent<IProps> = ({
  title,
  text,
  color,
  icon,
}: IProps) => {
  return (
    <Box
      h={{ lg: "220px" }}
      w={{ lg: "220px" }}
      color="white"
      cursor="pointer"
      bgColor={color}
      py={3}
      px={4}
      borderRadius="20px"
    >
      <Image src={icon} h={{ lg: "50px" }} />
      <Text fontWeight={500} fontSize="18px">
        {title}
      </Text>
      <Text my={2} mb={4} fontSize="15px">
        {text}
      </Text>
      <Box float="right">
        <SubButtonIcon color={color} fill={false} />
      </Box>
    </Box>
  );
};

export default EntityCard;
