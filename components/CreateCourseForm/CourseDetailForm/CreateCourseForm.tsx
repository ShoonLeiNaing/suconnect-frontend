/* eslint-disable no-param-reassign */
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
import { Formik } from "formik";
import * as Yup from "yup";
import { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import { getAllCategories } from "../../../api/categories/list";
import DateInput from "../../Input/DateInput";
import DynamicInput from "../../Input/DynamicInput";
import InputLabel from "../../Input/InputLabel";
import PaginationButton from "../../Stepper/PaginationButton";
import ChooseDaysComponent from "./ChooseDaysComponent";
import { createCourse } from "../../../api/courses/create";
import { createEvent } from "../../../api/events/create";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const CourseSchema = Yup.object().shape({
  name: Yup.string().required("Course name is required"),
  code: Yup.string().required("Course code is required"),
  description: Yup.string().required("Course description is required"),
  monthly_fee: Yup.number()
    .min(0)
    .typeError("Monthly fee is required")
    .required("Monthly fee is required"),
  category: Yup.number().required("Category is required"),
  start_date: Yup.string().required("Start date is required"),
  end_date: Yup.string().required("End date is required"),
  selected_days: Yup.array()
    .min(1, "Course day is required")
    .of(
      Yup.object().shape({
        date: Yup.string(),
      })
    )
    .required("Course day is required"),
});

const StepperOne: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any>([]);
  const [startDate, setStartDate] = useState<any>(Date.now());
  const [endDate, setEndDate] = useState<any>(moment().add(1, "M"));

  const [selectCampus, setSelectCampus] = useState("Select campus");

  const campusHandleChange = (event: SelectChangeEvent) => {
    setSelectCampus(event.target.value as string);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  const fetchCategories = async () => {
    const res = await getAllCategories(-1, 1);
    setCategories(res?.data);
  };

  const createCourseHandler = async (values: any) => {
    // console.log({ hhe: values });
    setLoading(true);
    console.log({ values });
    await createCourse({
      name: values.name,
      description: values.description,
      code: values.code,
      monthly_fee: values.monthly_fee,
      category: values.category,
      start_date: values.start_date,
      end_date: values.end_date,
    }).then((result) => {
      if (result.code === "ERR_BAD_REQUEST") {
        toast.error("Something went wrong with creating course", {
          position: "top-right",
          className: "hot-toast",
        });
      } else {
        const id = result?.data?.data?.id;
        values.events.forEach((obj: any) => {
          obj.course = id;
          obj.classification = 10;
        });
        values.events?.map(async (event: any) => {
          const res = await createEvent(event);
          if (res.code === "ERR_BAD_REQUEST") {
            toast.error(
              `Something went wrong with creating ${event.date} event`,
              {
                position: "top-right",
                className: "hot-toast",
              }
            );
          }
        });
        handleNext();
      }
    });
    // const res = await createCourse({
    //   name: values.name,
    //   description: values.description,
    //   code: values.code,
    //   monthly_fee: values.monthly_fee,
    //   category: values.category,
    //   start_date: values.start_date,
    //   end_date: values.end_date,
    // });
    // if (res.code === "ERR_BAD_REQUEST") {
    //   toast.error("Something went wrong with creating course", {
    //     position: "top-right",
    //     className: "hot-toast",
    //   });
    // } else {
    // toast.success("Address created successfully", {
    //   position: "top-right",
    //   className: "hot-toast",
    // });
    // handleNext();
    // }
    setLoading(false);
  };

  const initialValues = {
    name: "",
    description: "",
    code: "",
    monthly_fee: "",
    category: "",
    start_date: moment().format("YYYY-MM-DD"),
    end_date: moment().add(1, "M").format("YYYY-MM-DD"),
    is_campus: "online-learnig",
    selected_days: [],
    events: [],
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={CourseSchema}
        onSubmit={async (values, errors) => {
          console.log({ errors });
          createCourseHandler(values);
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          errors,
          touched,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              className="border py-6 px-8 rounded-xl overflow-y-auto"
              height="77vh"
            >
              <Box className="flex flex-col gap-8" maxWidth="400px">
                <Box>
                  <InputLabel label="Course name" />
                  <DynamicInput
                    value={values.name}
                    onChangeHandler={handleChange}
                    id="name"
                    name="name"
                    placeholder="Type course name here..."
                  />
                  <Box position="relative">
                    {errors.name && touched.name && (
                      <Typography className="error-message" position="absolute">
                        {errors.name}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box>
                  <InputLabel label="Course description" />
                  <DynamicInput
                    value={values.description}
                    onChangeHandler={(e: any) => {
                      setFieldValue("description", e.target.value);
                    }}
                    id="description"
                    name="description"
                    isTextArea
                    placeholder="Type course description here..."
                  />
                  <Box position="relative">
                    {errors.description && touched.description && (
                      <Typography className="error-message" position="absolute">
                        {errors.description}
                      </Typography>
                    )}
                  </Box>
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
                      value={values.category}
                      onChange={(e: any) => {
                        setFieldValue("category", e.target.value);
                      }}
                      input={<BootstrapInput />}
                      placeholder="Select course category"
                      sx={{
                        width: "98%",
                        height: "55px",
                        fontSize: "16px",
                        color: "#737373",
                      }}
                    >
                      {categories?.map((category: any) => (
                        <MenuItem key={category.name} value={category.id}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <Box position="relative">
                      {errors.category && touched.category && (
                        <Typography
                          className="error-message"
                          position="absolute"
                        >
                          {errors.category}
                        </Typography>
                      )}
                    </Box>
                  </FormControl>
                </Box>
                <Box>
                  <InputLabel label="Course code" />
                  <DynamicInput
                    value={values.code}
                    onChangeHandler={handleChange}
                    id="code"
                    name="code"
                    placeholder="eg. L6A-IELTS"
                  />
                  <Box position="relative">
                    {errors.code && touched.code && (
                      <Typography className="error-message" position="absolute">
                        {errors.code}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box>
                  <InputLabel label="Course duration" />
                  <Box className="flex px-1 my-2">
                    <Box className="flex flex-col mr-4">
                      <Typography className="text-sm ml-1 text-[#BBBBBB]">
                        Start Date
                      </Typography>
                      <DateInput
                        dateValue={startDate}
                        onChangeHandler={(newValue: any) => {
                          setStartDate(newValue);
                          setFieldValue(
                            "start_date",
                            moment(newValue).format("YYYY-MM-DD")
                          );
                        }}
                        customHeight="20px"
                        color="#737373"
                      />
                      <Box position="relative">
                        {errors.start_date && touched.start_date && (
                          <Typography
                            className="error-message"
                            position="absolute"
                          >
                            {errors.start_date}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <Box className="flex flex-col">
                      <Typography className="text-sm ml-1 text-[#BBBBBB]">
                        End Date
                      </Typography>
                      <DateInput
                        dateValue={endDate}
                        onChangeHandler={(newValue: any) => {
                          setEndDate(newValue);
                          setFieldValue(
                            "end_date",
                            moment(newValue).format("YYYY-MM-DD")
                          );
                        }}
                        customHeight="20px"
                        color="#737373"
                      />
                      <Box position="relative">
                        {errors.end_date && touched.end_date && (
                          <Typography
                            className="error-message"
                            position="absolute"
                          >
                            {errors.end_date}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <ChooseDaysComponent
                    selectedDays={values.selected_days}
                    {...{ setFieldValue, values, errors, touched }}
                  />
                </Box>

                {/* <Box>
                  <InputLabel label="Repeat on" />
                  <Checkbox defaultChecked className="text-[#3B8CF7]" />
                  <Typography className="inline-block text-[0.95rem] text-[#737373]">
                    Every two weeks
                  </Typography>
                </Box> */}
                <Box>
                  <InputLabel label="Class type" />
                  <FormControl className="ml-2 text-[#737373]">
                    <RadioGroup
                      row
                      name="radio-buttons-group"
                      value={values.is_campus}
                      onChange={(e) =>
                        setFieldValue("is_campus", e.target.value)
                      }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            value="online-learnig"
                            className="text-[#3B8CF7]"
                          />
                        }
                        label="Online learning"
                      />
                      <FormControlLabel
                        control={
                          <Radio value="on-campus" className="text-[#3B8CF7]" />
                        }
                        label="On campus"
                      />
                    </RadioGroup>
                  </FormControl>
                  {values.is_campus === "on-campus" && (
                    <Box mt={2} pr={2}>
                      <InputLabel label="Course Campus" />
                      <FormControl
                        sx={{
                          border: "1px solid grey",
                          height: "55px",
                          borderRadius: "15px",
                        }}
                        className="w-full"
                      >
                        <Select
                          value={selectCampus}
                          onChange={campusHandleChange}
                          input={<BootstrapInput />}
                          sx={{
                            height: "55px",
                            fontSize: "16px",
                            color: "#737373",
                          }}
                        >
                          <MenuItem value="Yangon">Yangon</MenuItem>
                          <MenuItem value="Nay Pyi Taw">Nay Pyi Taw</MenuItem>
                          <MenuItem value="Mandalay">Mandalay</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  )}
                </Box>
                <Box>
                  <InputLabel label="Course fee per month" />
                  <Box className="mb-8">
                    <Box className="flex w-full items-center">
                      <DynamicInput
                        placeholder="Type here..."
                        value={values.monthly_fee}
                        customType="number"
                        onChangeHandler={(e: any) =>
                          setFieldValue(
                            "monthly_fee",
                            parseInt(e.target.value, 10)
                          )
                        }
                        id="monthly_fee"
                        name="monthly_fee"
                      />
                      <span className="inline-block text-[#737373] ml-2">
                        MMK
                      </span>
                    </Box>
                    <Box position="relative">
                      {errors.monthly_fee && touched.monthly_fee && (
                        <Typography
                          className="error-message"
                          position="absolute"
                        >
                          {errors.monthly_fee}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className=" my-3 flex justify-end">
              <PaginationButton
                {...{
                  handleNext: handleSubmit,
                  showPrevious: false,
                }}
              />
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default StepperOne;
