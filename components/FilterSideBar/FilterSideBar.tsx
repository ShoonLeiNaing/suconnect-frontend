import { Box, Drawer } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { colors } from "../../data/constant";
import OutlineWhiteButton from "../Button/OutlineWhiteButton";
import SmallButton from "../Button/SmallButton";
import FilterTab from "./FilterTab";

interface IProps {
  open: boolean;
  setShowSideFilter: any;
  filterValue: any;
  filterOptions: any;
  setFilterValue: any;
  //   toggleDrawer: any;
}

const FilterSideBar: FunctionComponent<IProps> = ({
  open,
  setShowSideFilter,
  filterValue,
  filterOptions,
  setFilterValue,
  //   toggleDrawer,
}) => {
  const [filterData, setFilterData] = useState<any>({});
  const [selectedRange, setSelectedRange] = useState<string>("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <Drawer anchor="right" open={open} onClose={() => setShowSideFilter(false)}>
      <Box sx={{ width: "400px" }} p={2}>
        <RiCloseCircleLine
          fontSize="22px"
          style={{ float: "right", color: colors.grey.grey2 }}
          onClick={() => setShowSideFilter(false)}
        />

        <FilterTab
          filterData={filterData}
          setFilterData={setFilterData}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          filterOptions={filterOptions}
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <OutlineWhiteButton
            text="Clear"
            customHeight="40px"
            customWidth="95px"
            onClickHandler={() =>
              setFilterData({ ...filterData, [filterValue.title]: [] })
            }
          />
          <SmallButton text="Confirm" customHeight="40px" customWidth="95px" />
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterSideBar;
