import { Box, Button, Fab, styled } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  icon: any;
  onClickHandler: (e: any) => void;
  disable?: boolean;
}

const BootstrapFloatIconButton = styled(Button)({
  boxShadow: "none",
  color: "#3B8CF7",
  height: "100%",
  width: "100%",
  backgroundColor: "#F6F9FE",

  "&:active": {
    boxShadow: "none",
    backgroundColor: colors.white.white2,
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    backgroundColor: colors.white.white2,
  },
});

const FloatButton: FunctionComponent<IProps> = ({
  icon,
  onClickHandler,
  disable,
}) => {
  return (
    <Box
      sx={{ backgroundColor: "#F6F9FE" }}
      color="#3B8CF7"
      bgcolor="#F6F9FE"
      height="35px"
      width="35px"
      borderRadius="100%"
      onClick={onClickHandler}
    >
      <BootstrapFloatIconButton
        // sx={{ backgroundColor: "red" }}
        disabled={disable}
      >
        {icon}
      </BootstrapFloatIconButton>
    </Box>
  );
};

FloatButton.defaultProps = {
  disable: false,
};
export default FloatButton;
