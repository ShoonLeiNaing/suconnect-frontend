import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  FormControlLabel,
  Select,
  SelectChangeEvent,
  styled,
  Input,
  InputBase,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

import DateInput from "../Input/DateInput";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import PaginationButton from "../Stepper/PaginationButton";
import TimeRangePicker from "../TimeRangePicker";
import ChooseDaysComponent from "./ChooseDaysComponent";
import InstructorComponent from "./InstructorComponent";
import SearchInstructorComponent from "./SearchInstructorComponent";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const instructors: {
  prefix: string;
  name: string;
  email: string;
  isAvailable: boolean;
}[] = [
  {
    prefix: "T",
    name: "Thon Thon",
    email: "thon@teachersucenter.com",
    isAvailable: false,
  },
  {
    prefix: "T",
    name: "Thon Thon",
    email: "thon@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "T",
    name: "Thon SuHar",
    email: "thon@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "H",
    name: "Hsu Thar",
    email: "hsuthar@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "S",
    name: "Shoon",
    email: "shoon@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "T",
    name: "Thiha",
    email: "thiha@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "H",
    name: "Hein Htet",
    email: "heinhtet@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "M",
    name: "Min Khant",
    email: "minkhant@teachersucenter.com",
    isAvailable: true,
  },
];

const StepperSix: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
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

  const [searchText, setSearchText] = useState("Thon");

  // const onChangeData = (event: SelectChangeEvent) => {
  //   setSearchText(event.target.value);
  // };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box className="w-full flex flex-col flex-start">
      <Box
        className="flex flex-start border py-0 pl-10 pr-0 rounded-xl overflow-y-auto"
        height="72vh"
      >
        <Box className="w-3/4">
          <Typography className="text-[#737373] font-semibold text-lg my-4 pt-6">
            Main Lecturer
          </Typography>
          <FormControl
            variant="standard"
            className="flex flex-row w-[50rem] !justify-start"
          >
            <Input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{ color: "black" }}
              placeholder="Type a main lecturer name here..."
              className="w-[50rem]"
            />
            <IoIosCloseCircleOutline
              color="black"
              fontSize={30}
              onClick={() => setSearchText("")}
            />
          </FormControl>
          {searchText && (
            <Box className="border my-8 p-4 rounded-md w-[50rem]">
              <Typography className="text-[#3B8CF7] p-4">
                Suggested staff
              </Typography>
              <SearchInstructorComponent
                datas={instructors}
                searchWord={searchText}
              />
            </Box>
          )}
        </Box>
        <Box className="w-[25rem] flex flex-col border-l">
          <Typography className="text-[#737373] font-semibold text-[1.02rem] mt-6 mb-2 text-center pt-6">
            Available Instructors
          </Typography>
          <InstructorComponent datas={instructors} />
        </Box>
      </Box>
      <Box className="mx-8 my-6 flex justify-end">
        <PaginationButton {...{ handleNext, showPrevious: true, handleBack }} />
      </Box>
    </Box>
  );
};

export default StepperSix;
