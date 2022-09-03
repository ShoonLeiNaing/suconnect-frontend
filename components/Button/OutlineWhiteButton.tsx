import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  text: string;
  onClickHandler?: any;
  customWidth?: string;
  customHeight?: string;
}

const OutlineWhiteButton: FunctionComponent<IProps> = ({
  text,
  customHeight,
  customWidth,
  onClickHandler,
}) => {
  return (
    <Box
      p="4px"
      px="8px"
      // mb="8px"
      fontSize="14px"
      border="1px solid #BBBBBB"
      borderRadius="10px"
      onClick={onClickHandler}
      height={customHeight && customHeight}
      width={customWidth && customWidth}
      color={colors.grey.grey1}
      className="cursor"
      display="flex"
      alignItems="center"
    >
      <Typography margin="auto" fontSize="14px" color={colors.grey.grey1}>
        {text}
      </Typography>
    </Box>
  );
};

export default OutlineWhiteButton;
