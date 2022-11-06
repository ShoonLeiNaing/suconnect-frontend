import { useState, ReactNode, FunctionComponent } from "react";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputBase,
  SelectChangeEvent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import InputLabel from "../../Input/InputLabel";
import DynamicInput from "../../Input/DynamicInput";
import OutlineWhiteButton from "../../Button/OutlineWhiteButton";
import SmallButton from "../../Button/SmallButton";

interface IProps {
  text: string;
  open: boolean;
  setOpen: any;
  status: boolean;
  setStatus: any;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 20,
            top: 25,
            zIndex: 2,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const DialogComponent: FunctionComponent<IProps> = ({
  text,
  open,
  setOpen,
  status,
  setStatus,
}) => {
  const [title, setTitle] = useState("Average Assistants");
  const [dropDown, setDropDown] = useState("unselected");

  const handleChange = (event: SelectChangeEvent) => {
    setDropDown(event.target.value as string);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box className="flex justify-start w-full ml-4">
          <Typography className="mt-8 my-4 ml-5 text-base font-semibold text-[#333333]">
            {text}
          </Typography>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          />
        </Box>
        <DialogContent className="w-full max-w-[300px] mr-8 ml-4">
          <Box className="mb-6">
            <InputLabel label="Name" />
            <DynamicInput
              value={title}
              onChangeHandler={(e: any) => setTitle(e.target.value)}
              customWidth="100%"
              placeholder="Type title ..."
            />
          </Box>
          <Box>
            <InputLabel label="Which number you want to see ?" />
            <FormControl
              sx={{
                border: "1px solid grey",
                height: "55px",
                borderRadius: "15px",
              }}
              className="w-full"
            >
              <Select
                value={dropDown}
                onChange={handleChange}
                input={<BootstrapInput />}
                sx={{
                  width: "98%",
                  height: "55px",
                  fontSize: "14px",
                }}
              >
                <MenuItem value="unselected">
                  Total numbers of assistants
                </MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="20">20</MenuItem>
                <MenuItem value="30">30</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions className="flex gap-x-4 mr-8 mb-4">
          <OutlineWhiteButton
            text="Cancel"
            customHeight="40px"
            customWidth="80px"
            onClickHandler={handleClose}
          />
          <SmallButton
            text="Add"
            customHeight="40px"
            customFontSize="15px"
            onClickHandler={() => {
              setStatus(!status);
              setOpen(!open);
            }}
          />
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
};

export default DialogComponent;
