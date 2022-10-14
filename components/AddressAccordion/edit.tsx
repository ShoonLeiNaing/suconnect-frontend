import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  InputBase,
  SelectChangeEvent,
  styled,
  AccordionDetails,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import InputLabel from "../Input/InputLabel";
import DynamicInput from "../Input/DynamicInput";
import styles from "./accordion.module.css";
import { getAllCountries } from "../../api/countries/list";

interface IProps {
  values: any;
  edit: boolean;
  setEdit: any;
  setAdd: any;
  handleChange?: any;
  errors?: any;
  touched?: any;
}

const AccordionEditComponent: FunctionComponent<IProps> = ({
  values,
  edit,
  setEdit,
  setAdd,
  handleChange,
  errors,
  touched,
}) => {
  // const handleChange = (event: SelectChangeEvent) => {
  //   setCountry(event.target.value as string);
  // };
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
  useEffect(() => {
    fetchCountires();
  }, []);

  return (
    <Box>
      <Box className="flex justify-between px-6">
        <Box className="flex flex-col">
          <Box className="my-4">
            <InputLabel label="House Number" />
            <DynamicInput
              value={values.house_number}
              onChangeHandler={handleChange}
              maxiWidth="300px"
              id="house_number"
              name="house_number"
            />
            {errors.house_number && touched.house_number && (
              <Typography className="error-message" position="absolute">
                {errors.house_number}
              </Typography>
            )}
          </Box>
          <Box className="my-4">
            <InputLabel label="City" />
            <DynamicInput
              value={values.city}
              onChangeHandler={handleChange}
              maxiWidth="300px"
              id="city"
              name="city"
            />
            {errors.city && touched.city && (
              <Typography className="error-message" position="absolute">
                {errors.city}
              </Typography>
            )}
          </Box>
        </Box>
        <Box className="flex flex-col mx-12">
          <Box className="my-4">
            <InputLabel label="Street Name" />
            <DynamicInput
              value={values.street_name}
              onChangeHandler={handleChange}
              maxiWidth="300px"
              id="street_name"
              name="street_name"
            />
            {errors.street_name && touched.street_name && (
              <Typography className="error-message" position="absolute">
                {errors.street_name}
              </Typography>
            )}
          </Box>
          <Box className="my-4">
            <InputLabel label="Country" />
            <FormControl
              sx={{
                border: "1px solid grey",
              }}
              className={styles.form_control}
            >
              <Select
                value={values.country}
                onChange={handleChange}
                input={<BootstrapInput />}
                className={styles.select_box}
                id="country"
                name="country"
              >
                {countries?.map((country) => (
                  <MenuItem value={country[0]}>{country[1]}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors.country && touched.country && (
              <Typography className="error-message" position="absolute">
                {errors.country}
              </Typography>
            )}
          </Box>
        </Box>
        <Box className="flex flex-col">
          <Box className="my-4">
            <InputLabel label="Township" />
            <DynamicInput
              value={values.township}
              onChangeHandler={handleChange}
              maxiWidth="300px"
              id="township"
              name="township"
            />
            {errors.township && touched.township && (
              <Typography className="error-message" position="absolute">
                {errors.township}
              </Typography>
            )}
          </Box>
          <Box className="my-4">
            <InputLabel label="Postal Code" />
            <DynamicInput
              value={values.postal_code}
              onChangeHandler={handleChange}
              maxiWidth="300px"
              id="postal_code"
              name="postal_code"
            />
            {errors.postal_code && touched.postal_code && (
              <Typography className="error-message" position="absolute">
                {errors.postal_code}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AccordionEditComponent;
