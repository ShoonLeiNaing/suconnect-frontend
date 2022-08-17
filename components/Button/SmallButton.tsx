import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
  text: string;
  color: string;
  bgColor: string;
}

const SmallButton: FunctionComponent<IProps> = ({ text, color, bgColor }) => {
  return (
    <Box
      px={2}
      py="4px"
      sx={{ backgroundColor: bgColor, cursor: "pointer" }}
      // fontSize="14px"
      borderRadius="10px"
      // fontWeight={500}
      // cursor="pointer"
    >
      <Typography fontSize="14px" color={color}>
        {text}
      </Typography>
    </Box>
  );
};

export default SmallButton;
