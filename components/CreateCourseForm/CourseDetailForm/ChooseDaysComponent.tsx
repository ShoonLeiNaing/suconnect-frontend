/* eslint-disable camelcase, no-loop-func, array-callback-return */

import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import moment from "moment";
import { FunctionComponent, useEffect, useState } from "react";
import { colors } from "../../../data/constant";
import SmallButton from "../../Button/SmallButton";
import InputLabel from "../../Input/InputLabel";
import TimeRangePicker from "./TimeRangePicker";

const sevenDays = [
  {
    prefix: "S",
    word: "Sunday",
    number: 0,
  },
  {
    prefix: "M",
    word: "Monday",
    number: 1,
  },
  {
    prefix: "T",
    word: "Tuesday",
    number: 2,
  },
  {
    prefix: "W",
    word: "Wednesday",
    number: 3,
  },
  {
    prefix: "T",
    word: "Thursday",
    number: 4,
  },
  {
    prefix: "F",
    word: "Friday",
    number: 5,
  },
  {
    prefix: "S",
    word: "Saturday",
    number: 6,
  },
];

interface Events {
  date: string;
  number?: number;
  time_from?: string;
  time_to?: string;
}
interface IProps {
  selectedDays: Events[];
  setFieldValue: any;
  values: any;
  errors?: any;
  touched?: any;
}

const ChooseDaysComponent: FunctionComponent<IProps> = ({
  selectedDays,
  setFieldValue,
  values,
  errors,
  touched,
}) => {
  const [time, setTime] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);
  const [chooseSeparately, setChooseSeparately] = useState<boolean>(false);

  const days = (e: any, data: any) => {
    let temp = [];
    const isExist = selectedDays.some((val: any) => val.date === data.word);
    if (isExist) {
      temp = selectedDays?.filter((item) => item.date !== data.word);
      setFieldValue("selected_days", temp);
      if (chooseSeparately && time.length > 0) {
        const timeTemp = time.filter(
          (item: any) => Object.keys(item)[0] !== data.word
        );
        setTime(timeTemp);
      }
    } else {
      temp = [...selectedDays, { date: data.word, number: data.number }];
      setFieldValue("selected_days", temp);
    }
  };

  const generateEvents = () => {
    const eventsArray: Events[] = [];
    let startDate = values.start_date;

    while (moment(startDate).isSameOrBefore(values.end_date)) {
      selectedDays?.map((day) => {
        if (moment(startDate).day() === day?.number) {
          const dayName = day.date;
          let time_to;
          let time_from;

          time?.map((item: any) => {
            if (Object.keys(item)[0] === dayName) {
              time_to = item[Object.keys(item)[0]].endTime;
              time_from = item[Object.keys(item)[0]].startTime;
            }
          });

          eventsArray.push({
            date: moment(startDate).format("YYYY-MM-DD"),
            time_to,
            time_from,
          });
        }
      });
      startDate = moment(startDate).add(1, "d");
    }

    console.log({ eventsArray });
    setFieldValue("events", eventsArray);
    setTotal(eventsArray.length);
  };

  useEffect(() => {
    if (selectedDays.length === 0) {
      setTotal(0);
    }
  }, [selectedDays]);

  return (
    <>
      <InputLabel label="Choose course days" />
      <Box className="flex items-center mt-3 ml-2">
        {sevenDays.map((data, index) => (
          <Box
            key={index}
            bgcolor={{
              backgroundColor: selectedDays.some(
                (val: any) => val.date === data.word
              )
                ? colors.primaryColors.lightblue.lightblue1
                : "#BBBBBB",
            }}
            className="w-10 cursor h-10 flex justify-center mr-4 items-center bg-['#BBBBBB'] rounded-full"
            onClick={(e) => days(e, data)}
          >
            <Typography className="text-white font-bold">
              {data.prefix}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box position="relative" mt="2px" ml={1}>
        {touched.selected_days && errors.selected_days && (
          <Typography className="error-message" position="absolute">
            {errors.selected_days}
          </Typography>
        )}
      </Box>

      {!chooseSeparately ? (
        <Box my={3}>
          {/* <TimeRangePicker
            labelText="Choose course time"
            {...{ time, setTime, selectedDays }}
          /> */}
          <TimeRangePicker
            labelText="Choose course time"
            {...{ time, setTime, selectedDays }}
          />
        </Box>
      ) : (
        <Box my={3}>
          {selectedDays?.map((selected: any) => (
            <TimeRangePicker
              key={selected.date}
              labelText={`Choose course time for ${selected.date}`}
              {...{ time, setTime, separated: true, day: selected.date }}
            />
            // <TimeRangePicker
            //   labelText={`Choose course time for ${selected.date}`}
            //   {...{ time, setTime, separated: true, day: selected.date }}
            // />
          ))}
        </Box>
      )}
      {total > 0 && selectedDays?.length > 0 && (
        <Box mt={2} color={colors.black.black2} fontSize="14px">
          Total {total} course days for the course
        </Box>
      )}
      {selectedDays?.length > 0 && (
        <Box display="flex" justifyContent="flex-end" pr={1} my={2}>
          <SmallButton
            customHeight="45px"
            customWidth="100%"
            text="Confirm Course Days"
            onClickHandler={generateEvents}
          />
        </Box>
      )}

      <Box color={colors.black.black2}>
        <FormControlLabel
          sx={{ marginLeft: "2px", marginTop: "8px" }}
          control={
            <Checkbox
              value={chooseSeparately}
              onChange={(e) => {
                setChooseSeparately(e.target.checked);
                setTime([]);
              }}
            />
          }
          label="Choose separately"
        />
      </Box>
    </>
  );
};

export default ChooseDaysComponent;
