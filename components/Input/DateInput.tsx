import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FunctionComponent, useState } from "react";
import { TextField } from "@mui/material";
import moment from "moment";

interface IProps {
  customWidth?: string;
  customHeight?: string;
  dateValue?: number | Date | string;
  setDateValue?: any;
  color?: string;
  onChangeHandler?: any;
  maxWidth?: string;
}

const DateInput: FunctionComponent<IProps> = ({
  customWidth,
  customHeight,
  dateValue,
  setDateValue,
  color,
  onChangeHandler,
  maxWidth,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={dateValue}
        onChange={onChangeHandler}
        // onChange={(newValue) => {
        //   setDateValue(moment(newValue).format("YYYY-MM-DD"));
        // }}
        renderInput={(params) => (
          <TextField
            sx={{
              width: customWidth && customWidth,
              maxWidth: maxWidth && maxWidth,
              "& .MuiInputBase-input": {
                height: customHeight || "10px",
                color: color && color,
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
