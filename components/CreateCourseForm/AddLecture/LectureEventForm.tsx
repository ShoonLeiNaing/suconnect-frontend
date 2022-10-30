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
import toast, { Toaster } from "react-hot-toast";
import { FaGraduationCap } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { colors } from "../../../data/constant";
import OutlineWhiteButton from "../../Button/OutlineWhiteButton";
import SmallButton from "../../Button/SmallButton";
import DateInput from "../../Input/DateInput";
import InputLabel from "../../Input/InputLabel";
import StaticInput from "../../Input/StaticInput";
import TimePickerComponent from "../../Input/TimeRangePicker";
import { createEvent } from "../../../api/events/create";

interface IProps {
  setShowForm: any;
  course?: any;
  stateUpdate?: boolean;
  setStateUpdate?: any;
  selectedEvent?: any;
  setSelectedEvent?: any;
}

const EventSchema = Yup.object().shape({
  time_to: Yup.string().required("Start time is required"),
  time_from: Yup.string().required("End time is required"),
  date: Yup.string().required("Event date is required"),
});

const LectureEventForm: FunctionComponent<IProps> = ({
  setShowForm,
  course,
  stateUpdate,
  setStateUpdate,
  selectedEvent,
  setSelectedEvent,
}) => {
  const [loading, setLoading] = useState(false);

  const createEventHandler = async (values: any) => {
    setLoading(true);
    const res = await createEvent(values);
    if (res.code === "ERR_BAD_REQUEST") {
      toast.error(res?.response?.data?.details[0] || "Something went wrong", {
        position: "top-right",
        className: "hot-toast",
      });
    } else {
      setStateUpdate(!stateUpdate);
      setTimeout(() => {
        toast.success("Lecture added successfully", {
          position: "top-right",
          className: "hot-toast",
        });
      }, 500);
      setShowForm(false);
    }
    setLoading(false);
  };

  console.log({ selectedEvent });
  const initialValues = {
    time_to: "",
    time_from: "",
    date: moment().format("YYYY-MM-DD"),
    course: course?.id,
    accout: 1,
    classification: 10,
  };

  return (
    <>
      {/* <Toaster /> */}
      <Formik
        initialValues={initialValues}
        validationSchema={EventSchema}
        onSubmit={async (values) => {
          await createEventHandler(values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          setFieldValue,
          errors,
          touched,
        }) => (
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
                    {selectedEvent ? "Edit Lecture Event" : "Add Lecture Event"}
                  </Typography>
                </Box>
                <RiCloseCircleLine
                  onClick={() => {
                    setShowForm(false);
                    if (selectedEvent) {
                      setSelectedEvent(null);
                    }
                  }}
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
                    onChangeHandler={(newValue: any) =>
                      setFieldValue(
                        "date",
                        moment(newValue).format("YYYY-MM-DD")
                      )
                    }
                    dateValue={values.date}
                  />
                  <Box position="relative">
                    {errors.date && touched.date && (
                      <Typography className="error-message" position="absolute">
                        {errors.date}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box maxWidth="400px">
                  <TimePickerComponent
                    labelText="Choose event time"
                    {...{ values, setFieldValue, errors, touched }}
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
              <SmallButton
                type="submit"
                text="Create"
                onClickHandler={handleSubmit}
                customHeight="35px"
              />
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

// LectureEventForm.defaultProps = {
//   isEdit: false,
// };

export default LectureEventForm;
