import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "../Input/InputLabel";
import NumberInput from "../Input/NumberInput";
import AMPMInput from "../Input/AMPMInput";
import { colors } from "../../data/constant";

interface TimeRangePickerProps {
  time?: any;
  setTime?: any;
  labelText: string;
  day?: string;
  separated?: boolean;
}

const TimeRangePicker: FunctionComponent<TimeRangePickerProps> = ({
  time,
  setTime,
  labelText,
  day,
  separated,
}) => {
  return (
    <Box maxWidth="500px" className="gap-3 flex flex-col">
      <InputLabel label={labelText} />

      {separated ? (
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
                value={time?.startTime?.hour}
                setValue={(newValue: any) =>
                  setTime({
                    ...time,
                    startTime: {
                      ...time?.startTime,
                      hour: parseInt(newValue, 10),
                    },
                  })
                }
              />
              <Typography>:</Typography>
              {/* <NumberInput
                  max={60}
                  min={1}
                  value={time.startTime.min}
                  setValue={(newValue: any) =>
                    setTime({
                      ...time,
                      startTime: {
                        ...time.startTime,
                        min: parseInt(newValue, 10),
                      },
                    })
                  }
                /> */}
              {/* <AMPMInput time={time} setTime={setTime} type="startTime" /> */}
            </Box>
          </Box>
          {/* <Box className="flex flex-col gap-2">
              <InputLabel label="To" fontSize="13px" />
              <Box className="flex items-center justify-between gap-2">
                <NumberInput
                  max={12}
                  min={1}
                  value={time.endTime.hour}
                  setValue={(newValue: any) =>
                    setTime({
                      ...time,
                      endTime: {
                        ...time.endTime,
                        hour: parseInt(newValue, 10),
                      },
                    })
                  }
                />
                <Typography>:</Typography>
                <NumberInput
                  max={60}
                  min={1}
                  value={time.endTime.min}
                  setValue={(newValue: any) =>
                    setTime({
                      ...time,
                      endTime: {
                        ...time.endTime,
                        min: parseInt(newValue, 10),
                      },
                    })
                  }
                />
                <AMPMInput time={time} setTime={setTime} type="endTime" />
              </Box>
            </Box> */}
        </Box>
      ) : (
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
                value={time.startTime.hour}
                setValue={(newValue: any) =>
                  setTime({
                    ...time,
                    startTime: {
                      ...time.startTime,
                      hour: parseInt(newValue, 10),
                    },
                  })
                }
              />
              <Typography>:</Typography>
              <NumberInput
                max={60}
                min={1}
                value={time.startTime.min}
                setValue={(newValue: any) =>
                  setTime({
                    ...time,
                    startTime: {
                      ...time.startTime,
                      min: parseInt(newValue, 10),
                    },
                  })
                }
              />
              <AMPMInput time={time} setTime={setTime} type="startTime" />
            </Box>
          </Box>
          <Box className="flex flex-col gap-2">
            <InputLabel label="To" fontSize="13px" />
            <Box className="flex items-center justify-between gap-2">
              <NumberInput
                max={12}
                min={1}
                value={time.endTime.hour}
                setValue={(newValue: any) =>
                  setTime({
                    ...time,
                    endTime: {
                      ...time.endTime,
                      hour: parseInt(newValue, 10),
                    },
                  })
                }
              />
              <Typography>:</Typography>
              <NumberInput
                max={60}
                min={1}
                value={time.endTime.min}
                setValue={(newValue: any) =>
                  setTime({
                    ...time,
                    endTime: {
                      ...time.endTime,
                      min: parseInt(newValue, 10),
                    },
                  })
                }
              />
              <AMPMInput time={time} setTime={setTime} type="endTime" />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TimeRangePicker;
