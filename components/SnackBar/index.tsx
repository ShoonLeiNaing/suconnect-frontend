import { Snackbar } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
  open?: boolean;
  handleClose?: any;
}

const SnackbarComponent: FunctionComponent<IProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
    />
  );
};

export default SnackbarComponent;
