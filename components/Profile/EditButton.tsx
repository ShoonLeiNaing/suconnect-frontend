import { Box } from "@mui/material";
import { colors } from "../../data/constant";

const EditButton = () => {
  return (
    <Box
      p="4px"
      px="8px"
      mb="8px"
      fontSize="14px"
      border="1px solid #BBBBBB"
      borderRadius="6px"
      color={colors.grey.grey1}
      className="cursor"
    >
      Edit
    </Box>
  );
};

export default EditButton;
