import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { filterCourses } from "../../api/courses/filter";
import { colors } from "../../data/constant";
import { getFilterParams } from "../../utils/common/getFilterParams";
import { removeFromObject } from "../../utils/common/removeFromObj";
import ChipComponent from "../ChipComponent";

interface IProps {
  filterData: any;
  setFilterData: any;
  setIsFiltering: any;
  setPage: any;
  setData: any;
  setTotalPages: any;
  size: number;
  filterFunction: any;
}

const FilterValueList: FunctionComponent<IProps> = ({
  filterData,
  setFilterData,
  setIsFiltering,
  setPage,
  setData,
  setTotalPages,
  size,
  filterFunction,
}) => {
  const handleDelete = async (val: string) => {
    setPage(1);
    const newOptions = removeFromObject(filterData, val);
    setFilterData(newOptions);
    const params = getFilterParams(newOptions);
    const res = await filterFunction(size, 1, params);
    setData(res?.data);
    setTotalPages(res?.total_pages);
  };
  const clearAllHandler = async () => {
    setPage(1);
    setFilterData([]);
    setIsFiltering(false);
  };
  const chips = Object.entries(filterData).map(([key, value]) => (
    <Box key={key}>
      <ChipComponent label={key} handleDelete={() => handleDelete(key)} />
    </Box>
  ));

  return (
    <Box my={2}>
      <Box display="flex" alignItems="center" gap={2}>
        {chips}
        {/* {Object.keys(filterOptions) &&
          Object.keys(filterOptions).forEach((key, index) => (
            <Box key={index}>
              <ChipComponent
                // label={`by ${filterOptions[key]}`}
                label="hehe"
                handleDelete={handleDelete}
              />
              <Typography
                color={colors.secondaryColors.red.red1}
                fontSize="14px"
                className="cursor"
              >
                Clear all
              </Typography>
            </Box>
          ))} */}
        {chips.length > 0 && (
          <Typography
            color={colors.secondaryColors.red.red1}
            fontSize="14px"
            className="cursor"
            onClick={clearAllHandler}
          >
            Clear all
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FilterValueList;
