import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  text: string;
  color?: string;
  bgColor?: string;
  onClickHandler?: any;
  customWidth?: string;
  customHeight?: string;
}

const SmallButton: FunctionComponent<IProps> = ({
  text,
  color,
  bgColor,
  onClickHandler,
  customWidth,
  customHeight,
}) => {
  return (
    <Box
      px={2}
      // py="4px"
      zIndex={100}
      sx={{ backgroundColor: bgColor, cursor: "pointer" }}
      onClick={onClickHandler}
      height={customHeight || "30px"}
      width={customWidth && customWidth}
      display="flex"
      alignItems="center"
      // margin="auto"
      // fontSize="14px"
      borderRadius="10px"
      // fontWeight={500}
      // cursor="pointer"
    >
      <Typography margin="auto" fontSize="14px" color={color}>
        {text}
      </Typography>
    </Box>
  );
};

SmallButton.defaultProps = {
  color: "white",
  bgColor: colors.primaryColors.lightblue.lightblue1,
};

export default SmallButton;
