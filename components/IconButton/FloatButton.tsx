import { Box, Fab, styled } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  icon: any;
  onClickHandler: (e: any) => void;
  disable?: boolean;
}

const BootstrapFloatIconButton = styled(Fab)({
  boxShadow: "none",
  color: colors.primaryColors.lightblue.lightblue1,
  height: "100%",
  width: "100%",
  backgroundColor: colors.white.white2,

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
      sx={{ backgroundColor: colors.white.white2 }}
      bgcolor={colors.white.white2}
      height="35px"
      width="35px"
      borderRadius="100%"
      onClick={onClickHandler}
    >
      <BootstrapFloatIconButton disabled={disable}>
        {icon}
      </BootstrapFloatIconButton>
    </Box>
  );
};

FloatButton.defaultProps = {
  disable: false,
};
export default FloatButton;