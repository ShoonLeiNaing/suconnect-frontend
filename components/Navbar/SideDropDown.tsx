import { FunctionComponent } from "react";
import { Box, Typography, Icon } from "@mui/material";
import { useRouter } from "next/router";
import { colors } from "../../data/constant";

interface IProps {
  data: any;
  color: string;
}

const SideDropDown: FunctionComponent<IProps> = ({ data, color }) => {
  const router = useRouter();
  return (
    <Box
      className="cursor-pointer flex duration-100"
      padding="10px"
      paddingY="12px"
      onClick={() => router.push(data.link)}
      sx={{
        backgroundColor:
          router.pathname === data.link ? colors.white.white2 : "none",
        borderRadius: router.pathname === data.link ? "10px" : "none",
        "&:hover": {
          backgroundColor: colors.white.white2,
          borderRadius: "10px",
        },
      }}
    >
      <Box display="flex" marginLeft="0.5rem" color={color} fontSize="20px">
        <Icon component={data.icon} fontSize="small" />

        <Typography
          color={colors.black.black1}
          fontSize="14px"
          marginLeft="1rem"
        >
          {data.text}
        </Typography>
      </Box>
    </Box>
  );
};

export default SideDropDown;
