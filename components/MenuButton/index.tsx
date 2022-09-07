/* eslint-disable no-nested-ternary */

import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMdArrowDropdown } from "react-icons/io";
import { FunctionComponent, useState } from "react";
import { colors } from "../../data/constant";
import IconButton from "../IconButton";
import FloatButton from "../IconButton/FloatButton";

interface FilterOption {
  text: string;
  onClickHandler: () => void;
}

interface IProps {
  title?: string;
  filterOptions: FilterOption[];
  isIcon?: boolean;
  icon: any;
  rounded?: boolean;
}

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "10px 15px",
  lineHeight: 1.5,
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

const MenuComponent: FunctionComponent<IProps> = ({
  title,
  filterOptions,
  isIcon,
  icon,
  rounded,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickMenuButton = (onClickHandler: () => void) => {
    onClickHandler();
    handleClose();
  };

  return (
    <>
      {rounded ? (
        <FloatButton icon={icon} onClickHandler={handleClick} />
      ) : isIcon ? (
        <Box
          bgcolor={colors.white.white2}
          width="fit-content"
          minWidth="45px"
          borderRadius="10px"
        >
          <IconButton onClickHandler={handleClick} icon={icon} />
        </Box>
      ) : (
        <Box
          bgcolor={colors.white.white2}
          width="fit-content"
          minWidth="45px"
          borderRadius="10px"
        >
          <BootstrapButton onClick={handleClick} variant="contained">
            {title}
            <IoMdArrowDropdown style={{ marginLeft: "10px" }} />
          </BootstrapButton>
        </Box>
      )}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            padding: "0 10px",
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.07)",
            borderRadius: "10px",
            marginTop: "10px",
          },
        }}
      >
        {filterOptions?.map((filterOption) => (
          <MenuItem
            key={filterOption.text}
            sx={{
              fontSize: "14px",
              color: colors.black.black2,
              padding: "10px 20px",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: colors.white.white2,
              },
            }}
            onClick={() => clickMenuButton(filterOption.onClickHandler)}
          >
            {filterOption.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

MenuComponent.defaultProps = {
  title: "Filter",
  isIcon: false,
  rounded: false,
};

export default MenuComponent;
