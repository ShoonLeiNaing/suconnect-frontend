import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState, FunctionComponent } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { RiCloseCircleLine, RiFilterFill } from "react-icons/ri";
import { colors } from "../../data/constant";
import DynamicEventSchedular from "../EventSchedular/DynamicEventSchedular";
import IconButton from "../IconButton";
import DateInput from "../Input/DateInput";
import InputLabel from "../Input/InputLabel";
import StaticInput from "../Input/StaticInput";
import SearchInput from "../SearchInput";
import PaginationButton from "../Stepper/PaginationButton";
import TimeRangePicker from "../TimeRangePicker";
import EventsItem from "./EventsItem";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const AddLectureForm: FunctionComponent<IProps> = ({
  handleBack,
  handleNext,
}) => {
  const [searchText, setSearchText] = useState("");
  const [showAddEvent, setShowAddEvent] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<any>(Date.now());
  const [startHour, setStartHour] = useState<number>(0);
  const [startMin, setStartMin] = useState<number>(0);
  const [endHour, setEndHour] = useState<number>(0);
  const [endMin, setEndMin] = useState<number>(0);

  return showAddEvent ? (
    <Box
      className="mx-8 border py-6 px-8 rounded-xl"
      height="77vh"
      overflow="scroll"
      color={colors.black.black2}
    >
      <Box className="flex items-center justify-between mb-6">
        <Box className="flex items-center gap-4">
          <FaGraduationCap fontSize="30px" />
          <Typography fontSize="20px" fontWeight={600}>
            Add Lecture Event
          </Typography>
        </Box>
        <RiCloseCircleLine
          onClick={() => setShowAddEvent(false)}
          fontSize="30px"
        />
      </Box>
      <Box className="flex flex-col gap-8">
        <Box>
          <InputLabel label="Event Type" />
          <RadioGroup row defaultValue="Lecture" sx={{ margin: "10px" }}>
            <FormControlLabel
              value="Lecture"
              control={<Radio />}
              label="Lecture"
            />
            <FormControlLabel
              value="events"
              control={<Radio />}
              disabled
              label="Events"
            />
            <FormControlLabel
              value="holidays"
              control={<Radio />}
              disabled
              label="Holidays"
            />
            <FormControlLabel
              value="others"
              disabled
              control={<Radio />}
              label="Others"
            />
          </RadioGroup>
        </Box>
        <Box>
          <InputLabel label="Event Tile" />
          <StaticInput
            maxWidth="400px"
            value="IELTS Preparation Day 1"
            showLock
          />
        </Box>
        <Box>
          <InputLabel label="Date" />
          <DateInput
            customHeight="20px"
            setDateValue={setStartDate}
            dateValue={startDate}
          />
        </Box>
        <Box maxWidth="390px">
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
      </Box>
    </Box>
  ) : (
    <>
      <Box
        className="rounded-xl flex"
        height="77vh"
        color={colors.black.black2}
      >
        <Box width="320px">
          <Box className="flex gap-4">
            <SearchInput
              searchText={searchText}
              setSearchText={setSearchText}
              customWidth="235px"
            />
            <IconButton onClickHandler={() => {}} icon={<RiFilterFill />} />
          </Box>
          <Box className="border rounded-xl mt-4" height="90%">
            <EventsItem {...{ showAddEvent, setShowAddEvent }} />
          </Box>
        </Box>
        <Box paddingX={3}>
          <DynamicEventSchedular />
        </Box>
      </Box>
      <Box className=" my-3 flex justify-end">
        <PaginationButton {...{ handleNext, handleBack }} />
      </Box>
    </>
  );
};

export default AddLectureForm;
