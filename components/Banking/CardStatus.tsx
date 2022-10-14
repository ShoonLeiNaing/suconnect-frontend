import { Box, Typography } from "@mui/material";
import moment from "moment";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  data: any;
  customDisplay?: string;
}

const CardStatus: FunctionComponent<IProps> = ({ data, customDisplay }) => {
  return (
    <Box className="ml-3 mb-4" sx={{ display: customDisplay }}>
      <Typography fontSize="14px" color={colors.grey.grey1}>
        Created on
        <span> {moment(data?.created_at).format("YYYY-MM-DD")} : &nbsp; </span>
      </Typography>
      <Typography fontSize="14px" color={colors.grey.grey1}>
        Last edited on
        <span> {moment(data?.updated_at).format("YYYY-MM-DD")} </span>
      </Typography>
    </Box>
  );
};

CardStatus.defaultProps = {
  customDisplay: "block",
};

export default CardStatus;
