import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ImArrowLeft2 } from "react-icons/im";
import { colors } from "../../data/constant";

const PreviousPage = () => {
  const router = useRouter();
  return (
    <Box
      display="flex"
      alignItems="center"
      color={colors.primaryColors.lightblue.lightblue1}
      onClick={() => router.back()}
    >
      <ImArrowLeft2 />
      <Typography mx={2} fontSize="14px">
        Back
      </Typography>
    </Box>
  );
};

export default PreviousPage;
