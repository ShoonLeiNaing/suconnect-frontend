import { LoadingButton } from "@mui/lab";
import { Box, Typography, Button, styled } from "@mui/material";
import { FunctionComponent } from "react";
import { AiFillAccountBook } from "react-icons/ai";
import { colors } from "../../data/constant";

interface IProps {
  text: string;
  color?: string;
  onClickHandler?: any;
  customWidth?: string;
  customHeight?: string;
  customMarginX?: string;
  customFontSize?: string;
  customBorder?: string;
  icon?: any;
  type?: any;
  loading?: boolean;
  bgColor?: string;
}

const SmallButton: FunctionComponent<IProps> = ({
  text,
  color,
  onClickHandler,
  customWidth,
  customHeight,
  customMarginX,
  customFontSize,
  customBorder,
  icon,
  type,
  loading,
  bgColor,
}) => {
  const BootstrapSmallButton = styled(LoadingButton)({
    "&.MuiButtonBase-root": {
      backgroundColor: bgColor,
    },
    boxShadow: "none",
    textTransform: "none",
    fontSize: "14px",
    lineHeight: 1.5,
    borderRadius: "10px",
    // padding: "10px 20px",

    "&:hover": {
      backgroundColor: bgColor,
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: bgColor,
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return (
    <BootstrapSmallButton
      type={type || "button"}
      variant="contained"
      disableRipple
      onClick={onClickHandler}
      sx={{
        height: customHeight && customHeight,
        width: customWidth && customWidth,
        marginX: customMarginX,
        backgroundColor: bgColor && bgColor,
        color: color && color,
        fontSize: customFontSize,
        border: customBorder && customBorder,
      }}
      startIcon={icon}
      loading={loading}
    >
      {text}

      {/* {!loading && (
        <>
          {icon && icon}
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize={customFontSize}
            color={color}
          >
            {text}
          </Typography>
        </>
      )} */}
    </BootstrapSmallButton>
  );
};

SmallButton.defaultProps = {
  color: "white",
  // customPaddingX: "1rem",
  // customPaddingY: "4px",
  type: "button",
  bgColor: colors.primaryColors.lightblue.lightblue1,
};

export default SmallButton;
