import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import ChipComponent from "../ChipComponent";

interface IProps {
  filterOptions: any;
}

const FilterValueList: FunctionComponent<IProps> = ({ filterOptions }) => {
  const handleDelete = () => {};
  return (
    <Box>
      <Box display="flex" alignItems="center" gap={2}>
        {filterOptions.map((option: any) => (
          <ChipComponent
            key={option.text}
            label={`by ${option.text.toLowerCase()}`}
            handleDelete={handleDelete}
          />
        ))}
        <Typography
          color={colors.secondaryColors.red.red1}
          fontSize="14px"
          className="cursor"
        >
          Clear all
        </Typography>
      </Box>
    </Box>
  );
};

export default FilterValueList;
