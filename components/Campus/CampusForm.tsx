/* eslint-disable camelcase */

import { useState, FunctionComponent, useEffect } from "react";
import {
  Box,
  Typography,
  Select,
  FormControl,
  MenuItem,
  styled,
  InputBase,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import PaginationButton from "../Stepper/PaginationButton";
import TimePickerComponent from "../Input/TimeRangePicker";
import { createCampus } from "../../api/campus/create";
import { storeCampus } from "../../redux/slices/campusSlice";
import { getAllCountries } from "../../api/countries/list";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const CampusSchema = Yup.object().shape({
  name: Yup.string().required("Campus name is required"),
  opening_time: Yup.string().required("Start time is required"),
  closing_time: Yup.string().required("End time is required"),
  house_number: Yup.string().required("House number is required"),
  street_name: Yup.string().required("Street name is required"),
  township: Yup.string().required("Township name is required"),
  city: Yup.string().required("City name is required"),
  country: Yup.string().required("Country name is required"),
  postal_code: Yup.number()
    .typeError("Postal code should be a number")
    .required("Postal code is required"),
});

const CampusForm: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(true);

  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  const fetchCountires = async () => {
    const res = await getAllCountries();
    setCountries(res?.data?.countries);
  };

  const createCampusHandler = async (values: any) => {
    setLoading(true);

    const res = await createCampus({
      name: values.name,
      opening_time: values.opening_time,
      closing_time: values.closing_time,
      house_number: values.house_number,
      block_number: values.block_number,
      street_name: values.street_name,
      township: values.township,
      city: values.city,
      country: values.country,
      postal_code: values.postal_code,
    });
    if (res?.code === "ERR_BAD_REQUEST") {
      toast.error("Something went wrong with creating campus form", {
        position: "top-right",
        className: "hot-toast",
      });
    } else {
      toast.success("Created successfully", {
        position: "top-right",
        className: "hot-toast",
      });

      dispatch(storeCampus(res?.data?.data));
      handleNext();
    }
    setLoading(false);
  };

  const initialValues = {
    name: "",
    opening_time: "",
    closing_time: "",
    house_number: "",
    block_number: "",
    street_name: "",
    township: "",
    city: "",
    country: "",
    postal_code: "",
  };

  useEffect(() => {
    fetchCountires();
  }, []);

  return (
    <>
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={CampusSchema}
        onSubmit={async (values, errors) => {
          createCampusHandler(values);
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
              className="mx-8 border py-6 px-8 rounded-xl overflow-y-auto"
              minHeight="77vh"
            >
              <Box className="flex flex-col gap-8" maxWidth="400px">
                <Box>
                  <InputLabel label="Campus name" />
                  <DynamicInput
                    value={values.name}
                    onChangeHandler={(e: any) => {
                      handleChange(e);
                    }}
                    id="name"
                    name="name"
                    placeholder="Type campus name here..."
                  />
                  <Box position="relative">
                    {errors.name && touched.name && (
                      <Typography className="error-message" position="absolute">
                        {errors.name}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <TimePickerComponent
                  labelText="Available hours"
                  {...{
                    values,
                    setFieldValue,
                    errors,
                    touched,
                    isEdit,
                  }}
                />
                <Box>
                  <InputLabel label="House number" />
                  <DynamicInput
                    value={values.house_number}
                    onChangeHandler={handleChange}
                    id="house_number"
                    name="house_number"
                    placeholder="Type number..."
                  />
                  <Box position="relative">
                    {errors.house_number && touched.house_number && (
                      <Typography className="error-message" position="absolute">
                        {errors.house_number}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box>
                  <InputLabel label="Block number" />
                  <DynamicInput
                    value={values.block_number}
                    onChangeHandler={handleChange}
                    id="block_number"
                    name="block_number"
                    placeholder="Type here"
                  />
                  <Box position="relative">
                    {errors.block_number && touched.block_number && (
                      <Typography className="error-message" position="absolute">
                        {errors.block_number}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box>
                  <InputLabel label="Street name" />
                  <DynamicInput
                    value={values.street_name}
                    onChangeHandler={handleChange}
                    id="street_name"
                    name="street_name"
                    placeholder="eg.Min Ye Kyaw Swar street"
                  />
                  <Box position="relative">
                    {errors.street_name && touched.street_name && (
                      <Typography className="error-message" position="absolute">
                        {errors.street_name}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box>
                  <InputLabel label="Township" />
                  <DynamicInput
                    value={values.township}
                    onChangeHandler={handleChange}
                    id="township"
                    name="township"
                    placeholder="eg.Insein"
                  />
                  <Box position="relative">
                    {errors.township && touched.township && (
                      <Typography className="error-message" position="absolute">
                        {errors.township}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box>
                  <InputLabel label="City" />
                  <DynamicInput
                    value={values.city}
                    onChangeHandler={handleChange}
                    id="city"
                    name="city"
                    placeholder="eg.Yangon"
                  />
                  <Box position="relative">
                    {errors.city && touched.city && (
                      <Typography className="error-message" position="absolute">
                        {errors.city}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box>
                  <InputLabel label="Country" />
                  <FormControl
                    sx={{
                      border: "1px solid grey",
                      height: "55px",
                      borderRadius: "15px",
                    }}
                    className="w-full"
                  >
                    <Select
                      value={values.country}
                      onChange={handleChange}
                      input={<BootstrapInput />}
                      sx={{
                        width: "98%",
                        height: "55px",
                        fontSize: "16px",
                        color: "#737373",
                      }}
                      id="country"
                      name="country"
                    >
                      {countries?.map((country) => (
                        <MenuItem value={country[0]}>{country[1]}</MenuItem>
                      ))}
                    </Select>
                    <Box position="relative">
                      {errors.country && touched.country && (
                        <Typography
                          className="error-message"
                          position="absolute"
                        >
                          {errors.country}
                        </Typography>
                      )}
                    </Box>
                  </FormControl>
                </Box>
                <Box>
                  <InputLabel label="Postal code" />
                  <DynamicInput
                    value={values.postal_code}
                    onChangeHandler={handleChange}
                    id="postal_code"
                    name="postal_code"
                    placeholder="eg.11011"
                  />
                  <Box position="relative">
                    {errors.postal_code && touched.postal_code && (
                      <Typography className="error-message" position="absolute">
                        {errors.postal_code}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="mx-8 my-3 flex justify-end">
              <PaginationButton
                {...{ handleNext: handleSubmit, showPrevious: false }}
              />
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CampusForm;
