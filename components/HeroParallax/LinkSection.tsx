import { Box } from "@chakra-ui/react";
import LinkComponent from "./LinkComponent";

const LinkSection = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={4}>
      <LinkComponent text="Link 1" />
      <LinkComponent text="Link 2" />
      <LinkComponent text="Link 3" />
      <LinkComponent text="Link 4" />
      <LinkComponent next />
    </Box>
  );
};

export default LinkSection;
