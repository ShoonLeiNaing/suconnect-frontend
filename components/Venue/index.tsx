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
import { createVenue } from "../../api/venue/create";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const VenueSchema = Yup.object().shape({
  code: Yup.string().required("Venue code is required"),
  location: Yup.string().required("Venue location is required"),
  campus: Yup.string().required("Venue campus is required"),
});

const VenuePage: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

 
  const createVenueHandler = async (values: any) => {
    setLoading(true);

    const res = await createVenue({
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
    code: "",
    location: "",
    classification: "",
    campus: "",
  };


  return (
    <>
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={VenueSchema}
        onSubmit={async (values, errors) => {
          createVenueHandler(values);
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
                <InputLabel label="Venue code" />
                <DynamicInput
                value={values.code}
                onChangeHandler={handleChange}
                id="code"
                name="code"
                placeholder="eg.L6A-IELTS"
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
                  <InputLabel label="Venue location" />
                  <DynamicInput
                    value={values.location}
                    onChangeHandler={handleChange}
                    id="location"
                    name="location"
                    placeholder="Type location"
                  />
                  <Box position="relative">
                    {errors.location && touched.location && (
                      <Typography className="error-message" position="absolute">
                        {errors.location}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box>
                  <InputLabel label="Venue type" />
                  <FormControl
                    sx={{
                      border: "1px solid grey",
                      height: "55px",
                      borderRadius: "15px",
                    }}
                    className="w-full"
                  >
                    <Select
                      value={values.classification}
                      onChange={handleChange}
                      input={<BootstrapInput />}
                      sx={{
                        width: "98%",
                        height: "55px",
                        fontSize: "16px",
                        color: "#737373",
                      }}
                      id="classification"
                      name="classification"
                    >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                    
                    </Select>
                    <Box position="relative">
                      {errors.classification && touched.classification && (
                        <Typography
                          className="error-message"
                          position="absolute"
                        >
                          {errors.classification}
                        </Typography>
                      )}
                    </Box>
                  </FormControl>
                </Box>
                <Box>
                  <InputLabel label="Choose campus" />
                  <FormControl
                    sx={{
                      border: "1px solid grey",
                      height: "55px",
                      borderRadius: "15px",
                    }}
                    className="w-full"
                  >
                    <Select
                      value={values.campus}
                      onChange={handleChange}
                      input={<BootstrapInput />}
                      sx={{
                        width: "98%",
                        height: "55px",
                        fontSize: "16px",
                        color: "#737373",
                      }}
                      id="campus"
                      name="campus"
                    >
                        <MenuItem value="yangon">Yangon Campus</MenuItem>
                        <MenuItem value="mandalay">Mandalay Campus</MenuItem>
                        <MenuItem value="naypyitaw">Nay Pyi Taw Campus</MenuItem>
                    
                    </Select>
                    <Box position="relative">
                      {errors.campus && touched.campus && (
                        <Typography
                          className="error-message"
                          position="absolute"
                        >
                          {errors.campus}
                        </Typography>
                      )}
                    </Box>
                  </FormControl>
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

export default VenuePage;
