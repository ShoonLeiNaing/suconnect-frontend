import {
  Box,
  Button,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import styles from "./dateFilter.module.css";
import { colors } from "../../data/constant";

const DateFilter = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const resetDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <Box display="flex" gap={2} alignItems="center">
      <Box maxWidth="200px">
        <Typography fontSize="14px" color={colors.grey.grey2} margin="0 8px">
          Start Date
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            // label="Start Date"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            renderInput={(params) => (
              <TextField
                sx={{
                  "& .MuiInputBase-input": {
                    height: "10px",
                  },
                }}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
      <Box maxWidth="200px">
        <Typography fontSize="14px" color={colors.grey.grey2} margin="0 8px">
          End Date
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            // label="Start Date"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => (
              <TextField
                sx={{
                  "& .MuiInputBase-input": {
                    height: "10px",
                  },
                }}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
      <Box
        mt="20px"
        p={1}
        borderRadius="8px"
        width="fit-content"
        bgcolor={colors.white.white2}
        height="fit-content"
        onClick={() => resetDates()}
      >
        <BiRefresh
          color={colors.primaryColors.lightblue.lightblue1}
          fontSize="28px"
        />
      </Box>
    </Box>
  );
};

export default DateFilter;
