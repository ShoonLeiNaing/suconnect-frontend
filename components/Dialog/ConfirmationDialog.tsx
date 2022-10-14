import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AiFillExclamationCircle } from "react-icons/ai";
import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import OutlineWhiteButton from "../Button/OutlineWhiteButton";
import SmallButton from "../Button/SmallButton";
import { colors } from "../../data/constant";

interface IProps {
  open: boolean;
  handleClose?: any;
  type?: string;
  btnLabel?: string;
  dialogTitle: string;
  dialogBody: string;
}
const ConfirmationDialog: FunctionComponent<IProps> = ({
  open,
  handleClose,
  type,
  btnLabel,
  dialogTitle,
  dialogBody,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ paddingY: "20px" }} id="alert-dialog-title">
        <Box className="flex items-center gap-4">
          {type === "warning" && (
            <AiFillExclamationCircle
              fontSize="32px"
              color={colors.primaryColors.yellow.yellow1}
            />
          )}
          <Typography color={colors.black.black2} fontSize="18px">
            {dialogTitle}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ maxWidth: "500px" }}>
        <DialogContentText>{dialogBody}</DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{ gap: "10px", marginBottom: "15px", marginRight: "15px" }}
      >
        <OutlineWhiteButton
          customHeight="40px"
          customWidth="85px"
          text="Cancel"
          onClickHandler={handleClose}
        />

        <SmallButton
          customHeight="28px"
          customWidth="45px"
          text={btnLabel || "Save"}
          type="submit"
        />
      </DialogActions>
    </Dialog>
  );
};

ConfirmationDialog.defaultProps = {
  btnLabel: "Save",
};

export default ConfirmationDialog;
