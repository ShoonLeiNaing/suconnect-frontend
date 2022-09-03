import { Chip } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  label: string;
  handleDelete: (e: any) => void;
}
const ChipComponent: FunctionComponent<IProps> = ({ label, handleDelete }) => {
  return (
    <Chip
      sx={{
        color: colors.primaryColors.lightblue.lightblue1,
        backgroundColor: colors.white.white2,
        borderRadius: "10px",
      }}
      // icon={<NumberIcon />}
      label={label}
      onDelete={handleDelete}
    />
  );
};

export default ChipComponent;
