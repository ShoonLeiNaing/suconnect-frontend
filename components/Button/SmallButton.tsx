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
  customPaddingX?: string;
  customPaddingY?: string;
  customFontSize?: string;
  customMarginX?: string;
}

const SmallButton: FunctionComponent<IProps> = ({
  text,
  color,
  bgColor,
  onClickHandler,
  customWidth,
  customHeight,
  customPaddingX,
  customPaddingY,
  customFontSize,
  customMarginX,
}) => {
  return (
    <Box
      px={customPaddingX}
      py={customPaddingY}
      zIndex={100}
      sx={{ backgroundColor: bgColor, cursor: "pointer" }}
      onClick={onClickHandler}
      height={customHeight && customHeight}
      width={customWidth && customWidth}
      mx={customMarginX}
      // fontSize="14px"
      borderRadius="10px"
      // fontWeight={500}
      // cursor="pointer"
    >
      <Typography fontSize={customFontSize} color={color}>
        {text}
      </Typography>
    </Box>
  );
};

SmallButton.defaultProps = {
  color: "white",
  bgColor: colors.primaryColors.lightblue.lightblue1,
  customPaddingX: "1rem",
  customPaddingY: "4px",
  customFontSize: "14px",
};

export default SmallButton;
