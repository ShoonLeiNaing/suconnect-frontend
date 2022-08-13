import { Box, Icon, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

interface IProps {
  title: string;
  icon: boolean;
  color?: string;
}
const SubTitle: FunctionComponent<IProps> = ({ title, icon, color }) => {
  return (
    <Box display="flex" alignItems="center">
      <Text fontWeight={600} fontSize="20px">
        {title}
      </Text>
      {icon && (
        <Icon
          ml={4}
          fontSize="28px"
          color={color}
          as={IoIosArrowDropdownCircle}
        />
      )}
    </Box>
  );
};

export default SubTitle;
