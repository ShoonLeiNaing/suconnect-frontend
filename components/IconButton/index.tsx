import { Box, Button, styled } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

const BootstrapIconButton = styled(Button)({
  boxShadow: "none",
  fontSize: "22px",
  height: "45px",
  padding: "5px",
  minWidth: "50px",
  borderRadius: "10px",
  color: "#3B8CF7",

  "&:hover": {
    backgroundColor: "#F6F9FE",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#F6F9FE",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    backgroundColor: "#F6F9FE",
  },
});
const BootstrapIconButtonActive = styled(Button)({
  boxShadow: "none",
  fontSize: "22px",
  height: "45px",
  padding: "5px",
  minWidth: "50px",
  borderRadius: "10px",
  color: "#F6F9FE",

  // backgroundColor: colors.white.white2,

  "&:hover": {
    backgroundColor: "#3B8CF7",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#3B8CF7",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    backgroundColor: "#3B8CF7",
  },
});
interface IProps {
  icon: any;
  onClickHandler: (e: any) => void;
  isActive?: any;
}
const IconButton: FunctionComponent<IProps> = ({
  icon,
  onClickHandler,
  isActive,
}) => {
  if (isActive) {
    return (
      <Box sx={{ backgroundColor: "#3B8CF7" }} borderRadius="10px">
        <BootstrapIconButtonActive variant="contained" onClick={onClickHandler}>
          {icon}
        </BootstrapIconButtonActive>
      </Box>
    );
  }
  return (
    <Box sx={{ backgroundColor: "#F6F9FE" }} borderRadius="10px">
      <BootstrapIconButton variant="contained" onClick={onClickHandler}>
        {icon}
      </BootstrapIconButton>
    </Box>
  );
};

IconButton.defaultProps = {
  isActive: false,
};

export default IconButton;
