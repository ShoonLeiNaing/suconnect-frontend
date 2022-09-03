import { Button, styled } from "@mui/material";
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
  backgroundColor: colors.white.white2,

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
interface IProps {
  icon: any;
  onClickHandler: (e: any) => void;
}
const IconButton: FunctionComponent<IProps> = ({ icon, onClickHandler }) => {
  return (
    <BootstrapIconButton variant="contained" onClick={onClickHandler}>
      {icon}
    </BootstrapIconButton>
  );
};

export default IconButton;
