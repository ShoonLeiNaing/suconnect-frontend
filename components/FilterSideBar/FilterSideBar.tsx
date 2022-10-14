import { Box, Drawer } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { filterCourses } from "../../api/courses/filter";
import { colors } from "../../data/constant";
import { getFilterParams } from "../../utils/common/getFilterParams";
import { removeFromObject } from "../../utils/common/removeFromObj";
import OutlineWhiteButton from "../Button/OutlineWhiteButton";
import SmallButton from "../Button/SmallButton";
import FilterTab from "./FilterTab";

interface IProps {
  open: boolean;
  setShowSideFilter: any;
  filterValue: any;
  filterOptions: any;
  setFilterValue: any;
  filterData?: any;
  setFilterData?: any;
  filterConfirmHandler?: any;
  //   toggleDrawer: any;
}

const FilterSideBar: FunctionComponent<IProps> = ({
  open,
  setShowSideFilter,
  filterValue,
  filterOptions,
  setFilterValue,
  filterData,
  setFilterData,
  filterConfirmHandler,
  //   toggleDrawer,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const deleteHandler = () => {
    const newOption = removeFromObject(filterData, filterValue.filterParam);
    setFilterData(newOption);
  };

  const searchHandler = async () => {};

  return (
    <Drawer anchor="right" open={open} onClose={() => setShowSideFilter(false)}>
      <Box sx={{ width: "400px" }} p={2}>
        <RiCloseCircleLine
          fontSize="22px"
          style={{ float: "right", color: colors.grey.grey2 }}
          onClick={() => setShowSideFilter(false)}
        />

        <FilterTab
          {...{
            filterData,
            setFilterData,
            filterValue,
            setFilterValue,
            filterOptions,
            searchValue,
            setSearchValue,
            searchHandler,
          }}
        />
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <OutlineWhiteButton
            text="Clear"
            customHeight="40px"
            customWidth="95px"
            onClickHandler={deleteHandler}
          />
          <SmallButton
            text="Confirm"
            type="submit"
            customWidth="65px"
            onClickHandler={() => filterConfirmHandler()}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterSideBar;
