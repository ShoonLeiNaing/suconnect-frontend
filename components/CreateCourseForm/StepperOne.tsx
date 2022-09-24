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
import DateInput from "../Input/DateInput";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import ChooseDaysComponent from "./ChooseDaysComponent";

const StepperOne: FunctionComponent = () => {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseCategory, setCourseCategory] = useState(
    "Select course category"
  );
  const handleChange = (event: SelectChangeEvent) => {
    setCourseCategory(event.target.value as string);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box className="h-screen flex items-center">
      <Box className="flex flex-col justify-center items-center bg-white">
        <Box className="w-full flex flex-col border py-8 px-10 rounded-xl">
          <Box className="mb-6">
            <InputLabel label="Course name" />
            <DynamicInput
              value={courseName}
              setValue={setCourseName}
              maxiWidth="500px"
              placeholder="Type course name here..."
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Course Category" />
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
          <Box className="mb-6">
            <InputLabel label="Course Code" />
            <DynamicInput
              value={courseCode}
              setValue={setCourseCode}
              maxiWidth="500px"
              placeholder="eg. L6A-IELTS"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Course Duration" />
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
          <Box className="mb-6">
            <InputLabel label="Choose Course Days" />
            <ChooseDaysComponent />
          </Box>
          <Box className="mb-6">
            <Checkbox className="text-[#3B8CF7]" />
            <Typography className="inline-block text-[0.95rem] text-[#737373]">
              Choose separately
            </Typography>
          </Box>
          <Box className="mb-6">
            <InputLabel label="Repeat On" />
            <Checkbox defaultChecked className="text-[#3B8CF7]" />
            <Typography className="inline-block text-[0.95rem] text-[#737373]">
              Every two weeks
            </Typography>
          </Box>
          <Box className="mb-6">
            <InputLabel label="Class Type" />
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StepperOne;
