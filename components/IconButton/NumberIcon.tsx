import { Box } from "@mui/material";
import { colors } from "../../data/constant";

const NumberIcon = () => {
  return (
    <Box
      sx={{ backgroundColor: colors.primaryColors.lightblue.lightblue1 }}
      color="white"
      px="4px"
      borderRadius="2px"
      ml="10px"
    >
      12
    </Box>
  );
};

export default NumberIcon;
