import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { colors } from "../../data/constant";
import { dateRange } from "../../data/testData";
import { returnDateRange } from "../../utils/common/returnDateRange";
import SearchInput from "../HeroParallax/SearchInput";
import DateInput from "../Input/DateInput";
import InputLabel from "../Input/InputLabel";
import FilterTitle from "./FilterTitle";

interface IProps {
  filterData?: any;
  setFilterData?: any;
  filterValue: any;
  setFilterValue?: any;
  filterOptions?: any;
  searchValue?: string;
  setSearchValue?: any;
  searchHandler?: any;
}

const FilterTab: FunctionComponent<IProps> = ({
  filterData,
  setFilterData,
  filterValue,
  setFilterValue,
  filterOptions,
  searchValue,
  setSearchValue,
  searchHandler,
}) => {
  const BootstrapFormLabel = styled(FormControlLabel)(() => ({
    "& .MuiTypography-root": {
      fontSize: "14px",
    },
  }));

  const [selectedRange, setSelectedRange] = useState<string>(" ");
  // const [startDate, setStartDate] = useState<any>(
  //   moment(Date.now()).format("YYYY-MM-DD")
  // );
  // const [endDate, setEndDate] = useState<any>(
  //   moment(Date.now()).format("YYYY-MM-DD")
  // );
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);

  const clickCheckboxHandler = (e: any) => {
    if (e.target.checked) {
      if (!filterData[filterValue.filterParam]) {
        const temp = {
          ...filterData,
          [filterValue.filterParam]: [JSON.parse(e.target.value)],
        };
        setFilterData(temp);
      } else {
        const temp = {
          ...filterData,
          [filterValue.filterParam]: [
            ...filterData[filterValue.filterParam],
            JSON.parse(e.target.value),
          ],
        };
        setFilterData(temp);
      }
    } else {
      const newArray = filterData[filterValue.filterParam].filter(
        (item: any) => item.id !== JSON.parse(e.target.value).id
      );
      setFilterData({
        ...filterData,
        [filterValue.filterParam]: newArray,
      });
    }
  };
  const selectDateRangeHandler = (e: any) => {
    setSelectedRange(e.target.value);

    if (e.target.value !== "custom") {
      const dateFilterRange = returnDateRange(e.target.value);
      const temp = {
        ...filterData,
        [filterValue.filterParam]: dateFilterRange,
      };
      setFilterData(temp);
    }
  };
  const handleDelete = (check: any) => {
    const newArray = filterData[filterValue.filterParam].filter(
      (item: any) => item !== check
    );
    setFilterData({ ...filterData, [filterValue.filterParam]: newArray });
  };

  const updateCustomDate = () => {
    const dateFilterRange = {
      range: true,
      value: "custom",
      startDate,
      endDate,
    };
    const temp = {
      ...filterData,
      [filterValue.filterParam]: dateFilterRange,
    };
    setFilterData(temp);
  };
  useEffect(() => {
    setSelectedRange(filterData[filterValue.filterParam]?.value || " ");
  }, [filterValue]);
  useEffect(() => {
    if (startDate !== null && endDate !== null) {
      updateCustomDate();
    }
  }, [startDate, endDate]);
  return (
    <Box>
      <FilterTitle
        {...{
          title: filterValue.title,
          filterValue,
          setFilterValue,
          filterOptions,
        }}
      />
      {!filterValue.title?.includes("Date") ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          my={2}
          mt={3}
        >
          {/* <SearchInput
            outline
            {...{
              searchValue,
              setSearchValue,
              placeholderText: `Search ${filterValue.title}`,
              searchHandler,
            }}
          /> */}
          <Box mx={2}>
            <Grid container maxHeight="310px" overflow="scroll" my={1}>
              {filterValue?.data.map((item: any, index: number) => (
                <Grid
                  item
                  xs={6}
                  display="flex"
                  alignItems="center"
                  key={index}
                >
                  <BootstrapFormLabel
                    control={
                      <Checkbox
                        value={`{ "name": "${item.name}", "id": "${item.id}" }`}
                        size="small"
                        onChange={clickCheckboxHandler}
                        checked={filterData[filterValue.filterParam]?.some(
                          (val: any) => val.name === item.name
                        )}
                      />
                    }
                    label={item.name}
                  />
                </Grid>
              ))}
            </Grid>
            {filterData[filterValue.filterParam]?.length > 0 && (
              <Box>
                <Typography fontSize="14px">Filtered :</Typography>
                <Box gap={1} display="flex" flexWrap="wrap" mb={2} mt={1}>
                  {filterData[filterValue.filterParam]?.map(
                    (item: any, index: number) => (
                      <Chip
                        key={index}
                        sx={{
                          color: colors.primaryColors.lightblue.lightblue1,
                          backgroundColor: colors.white.white2,
                          borderRadius: "10px",
                        }}
                        label={item.name}
                        onDelete={() => handleDelete(item)}
                      />
                    )
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      ) : (
        <Box mx="10px">
          {/* <Typography fontSize="14px" color={colors.grey.grey2} my={2}>
            Date Range
          </Typography> */}
          <RadioGroup
            sx={{ marginY: "25px" }}
            value={
              filterData[filterValue.filterParam]?.value || selectedRange || " "
            }
            onChange={(e) => selectDateRangeHandler(e)}
          >
            <Grid container>
              {dateRange?.map((range, index) => (
                <Grid item xs={6} key={index}>
                  <BootstrapFormLabel
                    value={range.value}
                    control={<Radio />}
                    label={range.value}
                  />
                </Grid>
              ))}
              <Grid item xs={6}>
                <BootstrapFormLabel
                  value="custom"
                  control={<Radio />}
                  label="Custom Range"
                />
              </Grid>
            </Grid>
          </RadioGroup>
          {selectedRange === "custom" && (
            <Box display="flex" gap={1} mb={4}>
              <Box>
                <InputLabel label="Start Date" />
                <DateInput dateValue={startDate} setDateValue={setStartDate} />
              </Box>
              <Box>
                <InputLabel label="End Date" />
                <DateInput dateValue={endDate} setDateValue={setEndDate} />
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default FilterTab;
