import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  FormControlLabel,
  Select,
  SelectChangeEvent,
  styled,
  InputBase,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import DateInput from "../../Input/DateInput";
import DynamicInput from "../../Input/DynamicInput";
import InputLabel from "../../Input/InputLabel";
import PaginationButton from "../../Stepper/PaginationButton";
import TimeRangePicker from "../../TimeRangePicker";
import ChooseDaysComponent from "./ChooseDaysComponent";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const StepperOne: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [startHour, setStartHour] = useState<number>(0);
  const [startMin, setStartMin] = useState<number>(0);
  const [endHour, setEndHour] = useState<number>(0);
  const [endMin, setEndMin] = useState<number>(0);
  const [courseCategory, setCourseCategory] = useState(
    "Select course category"
  );
  const [selectCampus, setSelectCampus] = useState("Select campus");
  const handleChange = (event: SelectChangeEvent) => {
    setCourseCategory(event.target.value as string);
  };
  const campusHandleChange = (event: SelectChangeEvent) => {
    setSelectCampus(event.target.value as string);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <>
      <Box
        className="border py-6 px-8 rounded-xl overflow-y-auto"
        height="77vh"
      >
        <Box className="flex flex-col gap-8" maxWidth="400px">
          <Box>
            <InputLabel label="Course name" />
            <DynamicInput
              value={courseName}
              setValue={setCourseName}
              placeholder="Type course name here..."
            />
          </Box>
          <Box>
            <InputLabel label="Course category" />
            <FormControl
              sx={{
                border: "1px solid grey",
                height: "55px",
                borderRadius: "15px",
              }}
              className="w-full"
            >
              <Select
                value={courseCategory}
                onChange={handleChange}
                input={<BootstrapInput />}
                placeholder="Select course category"
                sx={{
                  width: "98%",
                  height: "55px",
                  fontSize: "16px",
                  color: "#737373",
                }}
              >
                <MenuItem className="hidden" value="Select course category">
                  Select course category
                </MenuItem>
                <MenuItem value="IELTS">IELTS Track</MenuItem>
                <MenuItem value="TOFEL">TOFEL Track</MenuItem>
                <MenuItem value="Young Learner">Young Learner Track</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <InputLabel label="Course code" />
            <DynamicInput
              value={courseCode}
              setValue={setCourseCode}
              placeholder="eg. L6A-IELTS"
            />
          </Box>
          <Box>
            <InputLabel label="Course duration" />
            <Box className="flex px-1 my-2">
              <Box className="flex flex-col mr-4">
                <Typography className="text-sm ml-1 text-[#BBBBBB]">
                  Start Date
                </Typography>
                <DateInput customHeight="20px" color="#737373" />
              </Box>
              <Box className="flex flex-col">
                <Typography className="text-sm ml-1 text-[#BBBBBB]">
                  End Date
                </Typography>
                <DateInput customHeight="20px" color="#737373" />
              </Box>
            </Box>
          </Box>
          <Box>
            <InputLabel label="Choose course days" />
            <ChooseDaysComponent />
          </Box>
          <Box>
            <TimeRangePicker
              labelText="Choose course time"
              startHour={startHour}
              endHour={endHour}
              startMin={startMin}
              endMin={endMin}
              setStartHour={setStartHour}
              setEndHour={setEndHour}
              setStartMin={setStartMin}
              setEndMin={setEndMin}
            />
          </Box>
          <Box>
            <Checkbox className="text-[#3B8CF7]" />
            <Typography className="inline-block text-[0.95rem] text-[#737373]">
              Choose separately
            </Typography>
            {}
          </Box>
          <Box>
            <InputLabel label="Repeat on" />
            <Checkbox defaultChecked className="text-[#3B8CF7]" />
            <Typography className="inline-block text-[0.95rem] text-[#737373]">
              Every two weeks
            </Typography>
          </Box>
          <Box>
            <InputLabel label="Class type" />
            <FormControl className="ml-2 text-[#737373]">
              <RadioGroup row name="radio-buttons-group">
                <FormControlLabel
                  value="online-learnig"
                  control={<Radio className="text-[#3B8CF7]" />}
                  label="Online learning"
                />
                <FormControlLabel
                  value="on-campus"
                  control={<Radio className="text-[#3B8CF7]" />}
                  label="On campus"
                />
              </RadioGroup>
            </FormControl>
            <FormControl
              sx={{
                border: "1px solid grey",
                height: "55px",
                borderRadius: "15px",
              }}
              className="w-[385px] mt-3"
            >
              <Select
                value={selectCampus}
                onChange={campusHandleChange}
                input={<BootstrapInput />}
                placeholder="Select campus"
                sx={{
                  width: "98%",
                  height: "55px",
                  fontSize: "16px",
                  color: "#737373",
                }}
              >
                <MenuItem className="hidden" value="Select campus">
                  Select campus
                </MenuItem>
                <MenuItem value="Yangon">Yangon</MenuItem>
                <MenuItem value="Nay Pyi Taw">Nay Pyi Taw</MenuItem>
                <MenuItem value="Mandalay">Mandalay</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <InputLabel label="Course fee per month" />
            <Box className="flex w-full items-center mb-8">
              <DynamicInput
                value={courseName}
                setValue={setCourseName}
                placeholder="Type here..."
              />
              <Typography className="inline-block text-[#737373] ml-4">
                {" "}
                MMK{" "}
              </Typography>
            </Box>
          </Box>
          {/* <Box>
            <InputLabel label="Course fee per month" />
            <Box className="flex w-full items-center mb-8">
              <DynamicInput
                value={courseFee}
                setValue={setCourseFee}
                placeholder="Type here..."
              />
              <Typography className="inline-block text-[#737373] ml-4">
                {" "}
                MMK{" "}
              </Typography>
            </Box>
          </Box> */}
        </Box>
      </Box>
      <Box className=" my-3 flex justify-end">
        <PaginationButton {...{ handleNext, showPrevious: false }} />
      </Box>
    </>
  );
};

export default StepperOne;
