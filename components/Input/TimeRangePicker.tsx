/* eslint-disable array-callback-return */

import { FunctionComponent, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import { Dayjs } from "dayjs";
import { TimePicker } from "@mui/x-date-pickers";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "./InputLabel";
import { colors } from "../../data/constant";

interface IProps {
  values?: any;
  setFieldValue?: any;
  labelText: string;
  errors?: any;
  touched?: any;
}

const TimePickerComponent: FunctionComponent<IProps> = ({
  values,
  setFieldValue,
  labelText,
  errors,
  touched,
}) => {
  const [startTime, setStartTime] = useState<Dayjs | null | any>(null);
  const [endTime, setEndTime] = useState<Dayjs | null | any>(null);
  return (
    <Box maxWidth="500px" className="gap-3 flex flex-col" mb={4}>
      <InputLabel label={labelText} />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          className="flex items-center justify-between gap-4"
          color={colors.grey.grey1}
        >
          <Box>
            <InputLabel label="Start Time" />
            <TimePicker
              value={startTime}
              onChange={(e) => {
                setStartTime(e);
                setFieldValue("time_from", moment(e?.$d).format("HH:mm"));
              }}
              renderInput={(params) => (
                <TextField
                  placeholder="6:30 AM"
                  sx={{
                    width: "100%",
                    "& fieldset": {
                      borderRadius: "13px",
                    },
                  }}
                  {...params}
                />
              )}
            />

            <Box position="relative">
              {errors.time_to && touched.time_to && (
                <Typography className="error-message" position="absolute">
                  {errors.time_to}
                </Typography>
              )}
            </Box>
          </Box>
          <Box>
            <InputLabel label="End Time" />
            <TimePicker
              minTime={startTime}
              value={endTime}
              onChange={(e) => {
                setEndTime(e);
                setFieldValue("time_to", moment(e?.$d).format("HH:mm"));
              }}
              renderInput={(params) => (
                <TextField
                  placeholder="9:30 AM"
                  sx={{
                    width: "100%",
                    "& fieldset": {
                      borderRadius: "13px",
                    },
                  }}
                  {...params}
                />
              )}
            />
            <Box position="relative">
              {errors.time_from && touched.time_from && (
                <Typography className="error-message" position="absolute">
                  {errors.time_from}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
        {/* <Box my={3} display="flex" justifyContent="flex-end">
          <OutlineWhiteButton
            customHeight="35px"
            text={separated ? `confirm time for ${day}` : "confirm time"}
            // onClickHandler={confirmTimeHandler}
          />
        </Box> */}
      </LocalizationProvider>
    </Box>
  );
};

export default TimePickerComponent;
