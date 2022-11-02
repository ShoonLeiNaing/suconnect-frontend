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
  Radio,
  RadioGroup,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import DateInput from "../Input/DateInput";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import InstructorComponent from "../CreateCourseForm/AssignInstructorForm/InstructorComponent";
import WordsCount from "../Input/WordsCount";
import EventsItem from "../CreateCourseForm/AddLecture/EventsItem";

const instructors = [
  {
    prefix: "T",
    name: "Thon Thon",
    email: "thon@teachersucenter.com",
  },
];

const CourseDetailForm: FunctionComponent = () => {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [bio, setBio] = useState("");
  const [id, setId] = useState<number | false>();

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
    <Box className="flex">
      <Box className="w-2/3 flex flex-col">
        <Typography className="text-[#737373] font-semibold mt-2">
          Main Lecturer
        </Typography>
        <Box className="-ml-8 mt-1">
          <InstructorComponent
            datas={instructors}
            color="#FF7FEB"
            hover={false}
          />
        </Box>
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
            <InputLabel label="Course code" />
            <DynamicInput
              value={courseCode}
              setValue={setCourseCode}
              placeholder="eg. L6A-IELTS"
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
            <InputLabel label="Description" />
            <DynamicInput
              value={bio}
              setValue={setBio}
              customWidth="100%"
              maxiWidth="500px"
              maxiHeight="100px"
              isTextArea
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing"
            />
            <WordsCount maxCount="250" currentCount={bio.length} />
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
          </Box>
          <Box>
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
          </Box>
        </Box>
      </Box>
      <Box
        // backgroundColor="red"
        className="border rounded-xl mt-4"
        width="350px"
        height="68vh"
      >
        <EventsItem
          {...{ btnText: "View all in calendar" }}
          // {...{
          //   showAddEvent,
          //   setShowAddEvent,
          //   selectedEvent,
          //   setSelectedEvent,
          // }}
        />
      </Box>{" "}
      {/* <Box
        className="w-1/3 flex flex-col border rounded-l-lg px-4 py-8 overflow-y-auto"
        maxHeight="131vh"
      >
        <Typography className="px-1 pb-2 text-[#737373] font-semibold">
          {" "}
          Important events{" "}
        </Typography>
        <Typography className="mt-4 mb-2 font-semibold text-gray-500 text-sm px-1">
          August 2022
        </Typography>
        <EventComponent
          date="23"
          day="Tue"
          title="1st Pre-Test"
          detailTime="9:00 AM - 10:30 AM"
          onClickHandler={() => setId(1)}
        />
        <IndicatorLine show />
        <EventComponent
          date="30"
          day="Tue"
          title="Speaking Test 1"
          detailTime="9:00 AM - 10:30 AM"
          onClickHandler={() => setId(2)}
        />
        <Typography className="my-2 mt-6 font-semibold text-gray-500 text-sm px-1">
          September 2022
        </Typography>
        <EventComponent
          date="06"
          day="Tue"
          title="2nd Pre-Test"
          detailTime="9:00 AM - 10:30 AM"
          onClickHandler={() => setId(3)}
        />
        <EventComponent
          date="13"
          day="Tue"
          title="Speaking Test 2"
          detailTime="9:00 AM - 10:30 AM"
          onClickHandler={() => setId(4)}
        />
        <Typography className="my-2 mt-6 font-semibold text-gray-500 text-sm px-1">
          October 2022
        </Typography>
        <EventComponent
          date="06"
          day="Tue"
          title="3rd Pre-Test"
          detailTime="9:00 AM - 10:30 AM"
          onClickHandler={() => setId(5)}
        />
        <EventComponent
          date="13"
          day="Tue"
          title="Speaking Test 3"
          detailTime="9:00 AM - 10:30 AM"
          onClickHandler={() => setId(6)}
        />
        <EventComponent
          date="06"
          day="Tue"
          title="4th Pre-Test"
          detailTime="9:00 AM - 10:30 AM"
          onClickHandler={() => setId(7)}
        />
        <EventComponent
          date="13"
          day="Tue"
          title="Speaking Test 4"
          detailTime="9:00 AM - 10:30 AM"
          onClickHandler={() => setId(8)}
        />
        <SmallButton
          text="View all in calendar"
          customHeight="40px"
          // customPaddingX="0.5rem"
          // customPaddingY="1.5rem"
        />
      </Box> */}
    </Box>
  );
};

export default CourseDetailForm;
