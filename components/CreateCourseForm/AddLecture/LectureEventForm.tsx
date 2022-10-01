import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { colors } from "../../../data/constant";
import OutlineWhiteButton from "../../Button/OutlineWhiteButton";
import SmallButton from "../../Button/SmallButton";
import DateInput from "../../Input/DateInput";
import DynamicInput from "../../Input/DynamicInput";
import InputLabel from "../../Input/InputLabel";
import SelectInput from "../../Input/SelectInput";
import StaticInput from "../../Input/StaticInput";
import TimeRangePicker from "../../TimeRangePicker";

interface IProps {
  setShowForm: any;
  isEdit?: boolean;
}

const LectureEventForm: FunctionComponent<IProps> = ({
  setShowForm,
  isEdit,
}) => {
  const [startDate, setStartDate] = useState<any>(Date.now());
  const [startHour, setStartHour] = useState<number>(0);
  const [startMin, setStartMin] = useState<number>(0);
  const [endHour, setEndHour] = useState<number>(0);
  const [endMin, setEndMin] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const types = ["venue 1", "venue 2"];
  const [type, setType] = useState<string>("Select Venue");
  return (
    <>
      <Box
        className="border py-6 px-8 rounded-xl"
        height="74vh"
        overflow="scroll"
        color={colors.black.black2}
      >
        <Box className="flex items-center justify-between mb-6">
          <Box className="flex items-center gap-4">
            <FaGraduationCap fontSize="30px" />
            <Typography fontSize="20px" fontWeight={600}>
              {isEdit ? "Edit Lecture Event" : "Add Lecture Event"}
            </Typography>
          </Box>
          <RiCloseCircleLine
            onClick={() => setShowForm(false)}
            fontSize="30px"
          />
        </Box>
        <Box className="flex flex-col gap-8" width="450px">
          <Box>
            <InputLabel label="Event Type" />
            <RadioGroup row defaultValue="Lecture">
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
          <Box>
            <InputLabel label="Class Type" />
            <RadioGroup row defaultValue="Lecture">
              <FormControlLabel
                value="Lecture"
                control={<Radio />}
                label="Online meeting"
              />
              <FormControlLabel
                value="events"
                control={<Radio />}
                label="On campus"
              />
            </RadioGroup>
          </Box>
          <Box>
            <SelectInput
              maxWidth="400px"
              value={type}
              setValue={setType}
              options={types}
            />
          </Box>
          <Box mb={2}>
            <DynamicInput
              {...{
                value: description,
                setValue: setDescription,
                isTextArea: true,
                placeholder: "Add a description or attach documents",
                customWidth: "400px",
                // maxiWidth: "400px",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-end gap-4 mt-3">
        <OutlineWhiteButton
          text="Clear"
          customWidth="65px"
          customHeight="35px"
        />
        <SmallButton text="Create" customHeight="35px" />
      </Box>
    </>
  );
};

LectureEventForm.defaultProps = {
  isEdit: false,
};

export default LectureEventForm;
