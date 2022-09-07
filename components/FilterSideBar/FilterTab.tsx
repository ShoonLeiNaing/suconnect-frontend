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
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import { dateRange } from "../../data/testData";
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
  selectedRange?: any;
  setSelectedRange?: any;
  startDate?: any;
  setStartDate?: any;
  endDate?: any;
  setEndDate?: any;
}

const FilterTab: FunctionComponent<IProps> = ({
  filterData,
  setFilterData,
  filterValue,
  setFilterValue,
  filterOptions,
  selectedRange,
  setSelectedRange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const BootstrapFormLabel = styled(FormControlLabel)(() => ({
    "& .MuiTypography-root": {
      fontSize: "14px",
    },
  }));
  const clickCheckboxHandler = (e: any) => {
    if (e.target.checked) {
      if (!filterData[filterValue.title]) {
        const temp = { ...filterData, [filterValue.title]: [e.target.value] };
        setFilterData(temp);
      } else {
        const temp = {
          ...filterData,
          [filterValue.title]: [
            ...filterData[filterValue.title],
            e.target.value,
          ],
        };
        setFilterData(temp);
      }
    } else {
      const newArray = filterData[filterValue.title].filter(
        (item: any) => item !== e.target.value
      );
      setFilterData({
        ...filterData,
        [filterValue.title]: newArray,
      });
    }
  };
  const handleDelete = (check: any) => {
    const newArray = filterData[filterValue.title].filter(
      (item: any) => item !== check
    );
    // console.log({ newArray });
    setFilterData({ ...filterData, [filterValue.title]: newArray });
  };

  return (
    <Box>
      <FilterTitle
        title={filterValue.title}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        filterOptions={filterOptions}
      />
      {filterValue.title !== "Date" ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          my={2}
          mt={3}
        >
          <SearchInput
            outline
            placeholderText={`Search ${filterValue.title}`}
          />
        </Box>
      ) : (
        <Box mx="10px">
          <Typography fontSize="14px" color={colors.grey.grey2}>
            Date Range
          </Typography>
          <RadioGroup
            sx={{ marginY: "15px" }}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => setSelectedRange(e.target.value)}
          >
            <Grid container>
              {dateRange?.map((range) => (
                <Grid item xs={6}>
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
            <Box display="flex" gap={1}>
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
      <Box mx={2}>
        <Grid container maxHeight="310px" overflow="scroll" my={3}>
          {filterValue?.data.map((item: any) => (
            <Grid item xs={6} display="flex" alignItems="center">
              <BootstrapFormLabel
                control={
                  <Checkbox
                    value={item.value}
                    size="small"
                    onChange={clickCheckboxHandler}
                    checked={filterData[filterValue.title]?.includes(
                      item.value
                    )}
                  />
                }
                label={item.value}
              />
            </Grid>
          ))}
        </Grid>
        {filterData[filterValue.title]?.length > 0 && (
          <Box>
            <Typography fontSize="14px">Filtered :</Typography>
            <Box gap={1} display="flex" flexWrap="wrap" mb={2} mt={1}>
              {filterData[filterValue.title]?.map((item: any) => (
                <Chip
                  key={item}
                  sx={{
                    color: colors.primaryColors.lightblue.lightblue1,
                    backgroundColor: colors.white.white2,
                    borderRadius: "10px",
                  }}
                  label={item}
                  onDelete={() => handleDelete(item)}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FilterTab;
