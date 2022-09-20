import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  label: string;
  isRequired?: boolean;
  isOptional?: boolean;
  fontSize?: string;
}

const InputLabel: FunctionComponent<IProps> = ({
  label,
  isRequired,
  isOptional,
  fontSize
}) => {
  return (
    <Typography ml={1} mb="2px" fontSize={fontSize} color={colors.grey.grey2}>
      {label} {isRequired && <span style={{ color: "red" }}>*</span>}
      {isOptional && (
        <span style={{ color: colors.grey.grey1 }}>(optional)</span>
      )}
    </Typography>
  );
};

InputLabel.defaultProps = {
  isRequired: false,
  fontSize: "15px"
};

export default InputLabel;
