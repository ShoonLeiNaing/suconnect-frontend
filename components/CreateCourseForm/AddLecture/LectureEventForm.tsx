import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { FaGraduationCap } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { colors } from "../../../data/constant";
import OutlineWhiteButton from "../../Button/OutlineWhiteButton";
import SmallButton from "../../Button/SmallButton";
import DateInput from "../../Input/DateInput";
import InputLabel from "../../Input/InputLabel";
import StaticInput from "../../Input/StaticInput";
import TimePickerComponent from "../../Input/TimeRangePicker";

interface IProps {
  setShowForm: any;
  isEdit?: boolean;
  course?: any;
}

const EventSchema = Yup.object().shape({
  time_to: Yup.string().required("Start time is required"),
  time_from: Yup.string().required("End time is required"),
  date: Yup.string().required("Event date is required"),
});

const LectureEventForm: FunctionComponent<IProps> = ({
  setShowForm,
  isEdit,
  course,
}) => {
  const [startDate, setStartDate] = useState<any>(Date.now());

  const createEventHandler = async () => {};
  const initialValues = {
    time_to: "",
    time_from: "",
    date: moment().format("YYYY-MM-DD"),
    course: course?.id,
    accout: 1,
    classification: 10,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EventSchema}
      onSubmit={async (values) => {
        console.log({ values });
        // await createEventHandler();
      }}
    >
      {({ values, handleSubmit, handleChange, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Box
            className="border py-6 px-8 rounded-xl"
            height="77vh"
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
            <Box className="flex flex-col gap-8">
              <Box width="450px">
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
                <InputLabel label="Course Name" />
                <StaticInput maxWidth="400px" value={course?.name} showLock />
              </Box>
              <Box>
                <InputLabel label="Date" />
                <DateInput
                  customWidth="400px"
                  customHeight="20px"
                  setDateValue={setStartDate}
                  dateValue={startDate}
                />
              </Box>
              <Box maxWidth="400px">
                <TimePickerComponent
                  labelText="Choose event time"
                  {...{ values, setFieldValue }}
                />
              </Box>
              {/* <Box>
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
           */}
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
        </form>
      )}
    </Formik>
  );
};

LectureEventForm.defaultProps = {
  isEdit: false,
};

export default LectureEventForm;
