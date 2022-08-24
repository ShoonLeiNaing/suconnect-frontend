import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  label: string;
}

const InputLabel: FunctionComponent<IProps> = ({ label }) => {
  return (
    <Typography ml={1} mb="2px" fontSize="15px" color={colors.grey.grey1}>
      {label}
    </Typography>
  );
};

export default InputLabel;
