import { Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  text: string;
}
const Tagline: FunctionComponent<IProps> = ({ text }: IProps) => {
  return (
    <Text fontSize="15px" my={2} maxW="500px" color={colors.grey.grey2}>
      {text}
    </Text>
  );
};

export default Tagline;
