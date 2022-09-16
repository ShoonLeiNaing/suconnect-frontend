import { Box, Button, styled, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

const BootstrapIconButton = styled(Button)({
  boxShadow: "none",
  fontSize: "22px",
  height: "45px",
  padding: "5px",
  minWidth: "50px",
  borderRadius: "10px",
  color: colors.primaryColors.lightblue.lightblue1,

  "&:hover": {
    backgroundColor: colors.white.white2,
    borderColor: "#0062cc",
    boxShadow: "none",
  },
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
const BootstrapIconButtonActive = styled(Button)({
  boxShadow: "none",
  fontSize: "22px",
  height: "45px",
  padding: "5px",
  minWidth: "50px",
  borderRadius: "10px",
  color: colors.white.white2,

  // backgroundColor: colors.white.white2,

  "&:hover": {
    backgroundColor: colors.primaryColors.lightblue.lightblue1,
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: colors.primaryColors.lightblue.lightblue1,
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    backgroundColor: colors.primaryColors.lightblue.lightblue1,
  },
});
interface IProps {
  icon?: any;
  onClickHandler: (e: any) => void;
  isActive?: any;
  text?: string;
}
const IconButton: FunctionComponent<IProps> = ({
  icon,
  onClickHandler,
  isActive,
  text,
}) => {
  if (isActive) {
    return (
      <Box
        sx={{ backgroundColor: colors.primaryColors.lightblue.lightblue1 }}
        borderRadius="10px"
      >
        <BootstrapIconButtonActive variant="contained" onClick={onClickHandler}>
          {icon} <Typography fontSize="15px"> {text} </Typography>
        </BootstrapIconButtonActive>
      </Box>
    );
  }
  return (
    <Box sx={{ backgroundColor: colors.white.white2 }} borderRadius="10px">
      <BootstrapIconButton variant="contained" onClick={onClickHandler}>
        {icon} <Typography className={` ${text ? "block" : "hidden" } capitalize py-4 px-2`}> {text} </Typography>
      </BootstrapIconButton>
    </Box>
  );
};

IconButton.defaultProps = {
  isActive: false,
};

export default IconButton;
