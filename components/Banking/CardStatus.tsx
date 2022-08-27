import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  createdTime: string;
  updatedTime: string;
}

const CardStatus: FunctionComponent<IProps> = ({
  createdTime,
  updatedTime,
}) => {
  return (
    <Box className="mt-4">
      <Typography fontSize="16px" color={colors.grey.grey1}>
        Created on
        <span> {createdTime} </span>
      </Typography>
      <Typography fontSize="16px" color={colors.grey.grey1}>
        Last edited on
        <span> {updatedTime} </span>
      </Typography>
    </Box>
  );
};

export default CardStatus;
