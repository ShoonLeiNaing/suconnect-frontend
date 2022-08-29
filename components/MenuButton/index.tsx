import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMdArrowDropdown } from "react-icons/io";
import { FunctionComponent, useState } from "react";
import { colors } from "../../data/constant";

interface FilterOption {
  text: string;
  onClickHandler: () => void;
}

interface IProps {
  title?: string;
  filterOptions: FilterOption[];
}

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "10px 15px",
  lineHeight: 1.5,
  //   backgroundColor: colors.white.white2,
  color: colors.primaryColors.lightblue.lightblue1,
  backgroundColor: "red",

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

const Filter: FunctionComponent<IProps> = ({ title, filterOptions }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box bgcolor={colors.white.white2} width="fit-content" borderRadius="10px">
      <BootstrapButton onClick={handleClick} variant="contained">
        {title}
        <IoMdArrowDropdown style={{ marginLeft: "10px" }} />
      </BootstrapButton>

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
            sx={{
              fontSize: "14px",
              color: colors.black.black2,
              padding: "10px 20px",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: colors.white.white2,
              },
            }}
            onClick={handleClose}
          >
            {filterOption.text}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

Filter.defaultProps = {
  title: "Filter",
};

export default Filter;
