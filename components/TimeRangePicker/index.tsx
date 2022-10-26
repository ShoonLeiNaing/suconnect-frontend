/* eslint-disable array-callback-return */

import { FunctionComponent, useState } from "react";
import Box from "@mui/material/Box";
import moment from "moment";
import Typography from "@mui/material/Typography";
import InputLabel from "../Input/InputLabel";
import NumberInput from "../Input/NumberInput";
import AMPMInput from "../Input/AMPMInput";
import { colors } from "../../data/constant";
import SmallButton from "../Button/SmallButton";
import OutlineWhiteButton from "../Button/OutlineWhiteButton";

interface TimeRangePickerProps {
  time?: any;
  setTime?: any;
  labelText: string;
  day?: string;
  separated?: boolean;
  selectedDays?: any[];
}

const TimeRangePicker: FunctionComponent<TimeRangePickerProps> = ({
  time,
  setTime,
  labelText,
  day,
  separated,
  selectedDays,
}) => {
  const [currentTime, setCurrentTime] = useState({
    startTime: { hour: 9, min: 30, prefix: "AM" },
    endTime: { hour: 12, min: 30, prefix: "PM" },
  });

  const confirmTimeHandler = () => {
    if (separated) {
      let temp: any = time?.filter((item: any) => Object.keys(item)[0] !== day);
      temp = [
        ...temp,
        {
          [day]: currentTime,
        },
      ];
      setTime(temp);
    } else {
      const temp: any = [];
      selectedDays?.map((item) => {
        temp.push({
          [item.date]: currentTime,
        });
      });
      setTime(temp);
    }
  };

  // const setTimeHandler = (
  //   newValue: string,
  //   selected: string | null,
  //   prefix: string,
  //   timeDef: string
  // ) => {
  //   if (separated) {
  //     console.log("separated");
  //   } else {
  //     const temp: any = [];
  //     selectedDays?.forEach((obj: any) => {
  //       temp.push({
  //         [obj.date]: {
  //           [obj.date.timeDef]: {
  //             ...[obj.date.timeDef],
  //             [obj.date.timeDef.prefix]: newValue,
  //           },
  //           // endTime: { hour: 12, min: 30, prefix: "PM" },
  //         },
  //       });
  //     });
  //     console.log({ temp });
  //   }
  // };
  return (
    <Box maxWidth="500px" className="gap-3 flex flex-col">
      <InputLabel label={labelText} />

      <Box>
        <Box
          className="flex items-center justify-between mx-2"
          color={colors.grey.grey1}
        >
          <Box className="flex flex-col gap-2">
            <InputLabel label="From" fontSize="13px" />
            <Box className="flex items-center justify-between gap-2">
              <NumberInput
                max={12}
                min={1}
                value={currentTime?.startTime?.hour}
                setValue={(newValue: any) => {
                  // setTimeHandler(newValue, null, "hour", "startTime");
                  setCurrentTime({
                    ...currentTime,
                    startTime: {
                      ...currentTime?.startTime,
                      hour: parseInt(newValue, 10),
                    },
                  });
                }}
              />
              <Typography>:</Typography>
              <NumberInput
                max={60}
                min={1}
                value={currentTime.startTime.min}
                setValue={(newValue: any) =>
                  setCurrentTime({
                    ...currentTime,
                    startTime: {
                      ...currentTime.startTime,
                      min: parseInt(newValue, 10),
                    },
                  })
                }
              />
              <AMPMInput
                time={currentTime}
                setTime={setCurrentTime}
                type="startTime"
              />
            </Box>
          </Box>
          <Box className="flex flex-col gap-2">
            <InputLabel label="To" fontSize="13px" />
            <Box className="flex items-center justify-between gap-2">
              <NumberInput
                max={12}
                min={1}
                value={currentTime.endTime.hour}
                setValue={(newValue: any) =>
                  setCurrentTime({
                    ...currentTime,
                    endTime: {
                      ...currentTime.endTime,
                      hour: parseInt(newValue, 10),
                    },
                  })
                }
              />
              <Typography>:</Typography>
              <NumberInput
                max={60}
                min={1}
                value={currentTime.endTime.min}
                setValue={(newValue: any) =>
                  setCurrentTime({
                    ...currentTime,
                    endTime: {
                      ...currentTime.endTime,
                      min: parseInt(newValue, 10),
                    },
                  })
                }
              />
              <AMPMInput
                time={currentTime}
                setTime={setCurrentTime}
                type="endTime"
              />
            </Box>
          </Box>
        </Box>
        <Box my={3} display="flex" justifyContent="flex-end">
          <OutlineWhiteButton
            customHeight="35px"
            text={separated ? `confirm time for ${day}` : "confirm time"}
            onClickHandler={confirmTimeHandler}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TimeRangePicker;
