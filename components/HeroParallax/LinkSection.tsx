import { Box } from "@mui/material";
import LinkComponent from "./LinkComponent";

const LinkSection = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
      <LinkComponent text="Link 1" />
      <LinkComponent text="Link 2" />
      <LinkComponent text="Link 3" />
      <LinkComponent text="Link 4" />
      <LinkComponent next />
    </Box>
  );
};

export default LinkSection;
