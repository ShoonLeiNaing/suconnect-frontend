import { Box, Typography } from "@mui/material";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FunctionComponent, useEffect } from "react";
import { colors } from "../../data/constant";

interface IProps {
  title: string;
  filterValue: any;
  setFilterValue?: any;
  filterOptions?: any;
}

const FilterTitle: FunctionComponent<IProps> = ({
  title,
  filterValue,
  setFilterValue,
  filterOptions,
}) => {
  console.log({ filterOptions });
  const position = filterOptions?.map((option: any) => {
    let index;
    if (option.text === filterValue.title) {
      index = filterOptions.indexOf(option);
    }
    return index;
  });
  console.log({ position });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      color={colors.black.black2}
      mt={4}
      mb={2}
    >
      <MdKeyboardArrowLeft size="20px" />
      <Typography mx={3}>By {title}</Typography>
      <MdKeyboardArrowRight size="20px" />
    </Box>
  );
};

export default FilterTitle;
