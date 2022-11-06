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
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import PaginationButton from "../Stepper/PaginationButton";
import { storeCampus } from "../../redux/slices/campusSlice";
import { createVenue } from "../../api/venue/create";
import SmallButton from "../Button/SmallButton";

interface IProps {
  handleNext?: any;
  handleBack?: any;
  showCreateButton?: any;
  classifications?: any[];
  campuses?: any[];
}

const VenueSchema = Yup.object().shape({
  code: Yup.string().required("Venue code is required"),
  location: Yup.string().required("Venue location is required"),
  campus: Yup.number().required("Venue campus is required"),
  classification: Yup.number().required("Venue classification is required"),
});

const VenuePage: FunctionComponent<IProps> = ({
  handleNext,
  handleBack,
  showCreateButton,
  classifications,
  campuses,
}) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  const createVenueHandler = async (values: any) => {
    setLoading(true);

    const res = await createVenue(values);
    if (res?.code === "ERR_BAD_REQUEST") {
      toast.error("Something went wrong with creating campus form", {
        position: "top-right",
        className: "hot-toast",
      });
    } else {
      toast.success("Campus created successfully", {
        position: "top-right",
        className: "hot-toast",
      });

      dispatch(storeCampus(res?.data?.data));
      if (handleNext) {
        handleNext();
      }
    }
    setLoading(false);
  };

  const initialValues = {
    code: "",
    location: "",
    classification: null,
    campus: null,
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
        {({ handleSubmit, values, handleChange, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Box
              className="border py-6 px-8 rounded-xl overflow-y-auto"
              height="77vh"
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
                      {classifications?.map((item) => (
                        <MenuItem key={item.name} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
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
                      {campuses?.map((item) => (
                        <MenuItem key={item.name} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
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
            {showCreateButton ? (
              <Box className="mx-0 my-3 flex justify-end">
                <SmallButton
                  text="Create"
                  onClickHandler={handleSubmit}
                  customHeight="40px"
                />
              </Box>
            ) : (
              <Box className="mx-8 my-3 flex justify-end">
                <PaginationButton
                  {...{ handleNext: handleSubmit, showPrevious: false }}
                />
              </Box>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};

export default VenuePage;
