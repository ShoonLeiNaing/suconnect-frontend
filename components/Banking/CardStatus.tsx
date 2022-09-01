import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  createdTime: string;
  updatedTime: string;
  customDisplay?: string;
}

const CardStatus: FunctionComponent<IProps> = ({
  createdTime,
  updatedTime,
  customDisplay,
}) => {
  return (
    <Box className="mt-2 mb-6" sx={{ display: customDisplay }}>
      <Typography fontSize="12px" color={colors.grey.grey1}>
        Created on
        <span> {createdTime} : &nbsp; </span>
      </Typography>
      <Typography fontSize="12px" color={colors.grey.grey1}>
        Last edited on
        <span> {updatedTime} </span>
      </Typography>
    </Box>
  );
};

CardStatus.defaultProps = {
  customDisplay: "block",
};

export default CardStatus;
