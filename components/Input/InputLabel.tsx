import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  label: string;
  isRequired?: boolean;
  isOptional?: boolean;
}

const InputLabel: FunctionComponent<IProps> = ({
  label,
  isRequired,
  isOptional,
}) => {
  return (
    <Typography ml={1} mb="2px" fontSize="15px" color={colors.grey.grey2}>
      {label} {isRequired && <span style={{ color: "red" }}>*</span>}
      {isOptional && (
        <span style={{ color: colors.grey.grey1 }}>(optional)</span>
      )}
    </Typography>
  );
};

InputLabel.defaultProps = {
  isRequired: false,
};

export default InputLabel;
