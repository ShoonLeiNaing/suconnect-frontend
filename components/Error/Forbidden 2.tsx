import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { colors } from "../../data/constant";

const Forbidden = () => {
  return (
    <Box
      className="flex items-center justify-center"
      sx={{
        height: "100vh",
      }}
    >
      <Box className="flex flex-col items-center">
        <Typography className="text-black font-semibold text-2xl">
          <span className="font-[1000] text-5xl">403</span> Forbidden
        </Typography>
        <Typography color={colors.grey.grey2}>
          You don’t have permission to accept.
        </Typography>
        <Image
          src="/images/access-denied.svg"
          alt="403"
          width={500}
          height={300}
        />
      </Box>
    </Box>
  );
};

export default Forbidden;
