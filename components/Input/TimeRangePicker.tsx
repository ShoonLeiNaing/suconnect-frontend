/* eslint-disable array-callback-return */

import { FunctionComponent, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import moment from "moment";
import { TimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "./InputLabel";
import { colors } from "../../data/constant";

interface IProps {
  time?: any;
  setTime?: any;
  labelText: string;
  day?: string;
  separated?: boolean;
  selectedDays?: any[];
}

const TimePickerComponent: FunctionComponent<IProps> = ({
  time,
  setTime,
  labelText,
  day,
  separated,
  selectedDays,
}) => {
  const [startTime, setStartTime] = useState<Dayjs | null | any>(null);
  const [endTime, setEndTime] = useState<Dayjs | null | any>(null);

  const startTimeChangeHandler = (e: any) => {
    if (separated && day) {
      let temp: any = time?.filter((item: any) => Object.keys(item)[0] !== day);
      temp = [
        ...temp,
        {
          [day]: {
            startTime: moment(e.$d).format("HH:mm"),
            endTime: moment(endTime?.$d).format("HH:mm"),
          },
        },
      ];
      setTime(temp);
    } else {
      const temp: any = [];
      selectedDays?.map((item) => {
        temp.push({
          [item.date]: {
            startTime: moment(e.$d).format("HH:mm"),
            endTime: moment(endTime?.$d).format("HH:mm"),
          },
        });
      });
      setTime(temp);
    }
  };

  const endTimeChangeHandler = (e: any) => {
    if (separated && day) {
      let temp: any = time?.filter((item: any) => Object.keys(item)[0] !== day);
      temp = [
        ...temp,
        {
          [day]: {
            startTime: moment(startTime?.$d).format("HH:mm"),
            endTime: moment(e.$d).format("HH:mm"),
          },
        },
      ];
      setTime(temp);
    } else {
      const temp: any = [];
      selectedDays?.map((item) => {
        temp.push({
          [item.date]: {
            startTime: moment(startTime?.$d).format("HH:mm"),
            endTime: moment(e.$d).format("HH:mm"),
          },
        });
      });
      setTime(temp);
    }
  };

  return (
    <Box
      maxWidth="500px"
      className="gap-3 flex flex-col"
      mb={separated ? 4 : 0}
    >
      <InputLabel label={labelText} />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          className="flex items-center justify-between mx-2"
          color={colors.grey.grey1}
        >
          <Box>
            <InputLabel label="Start Time" />
            <TimePicker
              value={startTime}
              onChange={(e) => {
                setStartTime(e);
                startTimeChangeHandler(e);
              }}
              renderInput={(params) => (
                <TextField
                  placeholder="6:30 AM"
                  sx={{
                    width: "180px",
                    "& fieldset": {
                      borderRadius: "13px",
                    },
                  }}
                  {...params}
                />
              )}
            />
          </Box>
          <Box>
            <InputLabel label="End Time" />
            <TimePicker
              value={endTime}
              minTime={startTime}
              onChange={(e) => {
                setEndTime(e);
                endTimeChangeHandler(e);
              }}
              renderInput={(params) => (
                <TextField
                  placeholder="9:30 AM"
                  sx={{
                    width: "180px",
                    "& fieldset": {
                      borderRadius: "13px",
                    },
                  }}
                  {...params}
                />
              )}
            />
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
