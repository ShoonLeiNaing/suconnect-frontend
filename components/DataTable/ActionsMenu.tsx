import { Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { RiMore2Fill } from "react-icons/ri";
import FloatButton from "../IconButton/FloatButton";

interface IProps {
  onClickEdit: any;
  onClickDelete: any;
}

const ActionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <FloatButton
        icon={<RiMore2Fill fontSize="20px" />}
        onClickHandler={handleClick}
      />

      <Menu
        id="basic-menu"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        PaperProps={{
          style: {
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.07)",
            borderRadius: "10px",
            marginTop: "10px",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </Box>
  );
};

export default ActionsMenu;
