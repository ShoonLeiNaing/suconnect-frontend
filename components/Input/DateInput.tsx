import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FunctionComponent, useState } from "react";
import { TextField } from "@mui/material";

interface IProps {
  customWidth?: string;
  customHeight?: string;
  dateValue?: number | Date | string;
  setDateValue?: any;
}

const DateInput: FunctionComponent<IProps> = ({
  customWidth,
  customHeight,
  dateValue,
  setDateValue,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        // label="Start Date"
        value={dateValue}
        onChange={(newValue) => {
          setDateValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            sx={{
              "& .MuiInputBase-input": {
                height: customHeight || "10px",
                width: customWidth && customWidth,
              },
              "& fieldset": {
                borderRadius: "13px",
              },
            }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
