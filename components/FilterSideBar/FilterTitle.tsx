import { Box, Tooltip, Typography } from "@mui/material";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FunctionComponent, useEffect, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState<number>(filterValue.index);
  const clickNext = () => {
    if (filterValue.index === filterOptions.length - 1) {
      setFilterValue({
        title: filterOptions[0].text,
        data: filterOptions[0].data,
        index: 0,
        filterParam: filterOptions[0].filterParam,
      });
      setCurrentIndex(0);
    } else {
      setFilterValue({
        title: filterOptions[filterValue.index + 1].text,
        data: filterOptions[filterValue.index + 1].data,
        index: filterValue.index + 1,
        filterParam: filterOptions[filterValue.index + 1].filterParam,
      });
      setCurrentIndex(filterValue.index + 1);
    }
  };
  const clickPrev = () => {
    if (filterValue.index === 0) {
      setFilterValue({
        title: filterOptions[filterOptions.length - 1].text,
        data: filterOptions[filterOptions.length - 1].data,
        index: filterOptions.length - 1,
        filterParam: filterOptions[filterOptions.length - 1].filterParam,
      });
      setCurrentIndex(filterOptions.length - 1);
    } else {
      setFilterValue({
        title: filterOptions[filterValue.index - 1].text,
        data: filterOptions[filterValue.index - 1].data,
        index: filterValue.index - 1,
        filterParam: filterOptions[filterValue.index - 1].filterParam,
      });
      setCurrentIndex(filterValue.index - 1);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      color={colors.black.black2}
      pt={4}
      // mb={2}
    >
      {filterOptions?.length > 1 && (
        <MdKeyboardArrowLeft size="20px" onClick={clickPrev} />
      )}
      <Typography mx={3} minWidth="110px" textAlign="center">
        By {title}
      </Typography>

      {filterOptions?.length > 1 && (
        <MdKeyboardArrowRight size="20px" onClick={clickNext} />
      )}
    </Box>
  );
};

export default FilterTitle;
