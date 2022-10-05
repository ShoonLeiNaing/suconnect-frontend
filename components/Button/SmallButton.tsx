import { Box, Typography, Button, styled } from "@mui/material";
import { FunctionComponent } from "react";
import { AiFillAccountBook } from "react-icons/ai";
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
  customBorder?: string;
  icon?: any;
  type?: any;
}

const BootstrapSmallButton = styled(Button)({
  "&.MuiButtonBase-root": {
    backgroundColor: colors.primaryColors.lightblue.lightblue1,
  },
  boxShadow: "none",
  textTransform: "none",
  fontSize: "14px",
  lineHeight: 1.5,
  borderRadius: "10px",
  // padding: "10px 20px",

  "&:hover": {
    backgroundColor: colors.primaryColors.lightblue.lightblue1,
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: colors.primaryColors.lightblue.lightblue1,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

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
  customBorder,
  icon,
  type,
}) => {
  return (
    <BootstrapSmallButton
      type={type || "button"}
      variant="contained"
      disableRipple
      sx={{
        height: customHeight && customHeight,
        width: customWidth && customWidth,
        marginX: customMarginX,
      }}
      startIcon={icon}
    >
      {icon && icon}{" "}
      <Typography
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={customFontSize}
        color={color}
      >
        {text}
      </Typography>
    </BootstrapSmallButton>
  );
};

SmallButton.defaultProps = {
  color: "white",
  bgColor: colors.primaryColors.lightblue.lightblue1,
  customPaddingX: "1rem",
  customPaddingY: "4px",
  customFontSize: "14px",
  type: "button",
};

export default SmallButton;
