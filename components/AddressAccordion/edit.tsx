import { FunctionComponent, useState } from "react";
import {
  Box,
  InputBase,
  SelectChangeEvent,
  styled,
  AccordionDetails,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import InputLabel from "../Input/InputLabel";
import DynamicInput from "../Input/DynamicInput";

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

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box>
      <Box className="flex justify-between px-6">
        <Box className="flex flex-col">
          <Box className="mt-4">
            <InputLabel label="House Number" />
            <DynamicInput
              value={values.house_number}
              onChangeHandler={handleChange}
              maxiWidth="300px"
              id="house_number"
              name="house_number"
            />
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
          </Box>
        </Box>
        <Box className="flex flex-col mx-12">
          <Box className="mt-4">
            <InputLabel label="Street Name" />
            <DynamicInput
              value={values.street_name}
              onChangeHandler={handleChange}
              maxiWidth="300px"
              id="street_name"
              name="street_name"
            />
          </Box>
          {/* <Box className="my-4">
            <InputLabel label="Country" />
            <FormControl
              sx={{
                border: "1px solid grey",
              }}
              className={styles.form_control}
            >
              <Select
                value={values.country}
                // onChange={handleChange}
                input={<BootstrapInput />}
                className={styles.select_box}
              >
                <MenuItem value="Myanmar">Myanmar</MenuItem>
                <MenuItem value="Singapore">Singapore</MenuItem>
                <MenuItem value="Thailand">Thailand</MenuItem>
              </Select>
            </FormControl>
          </Box> */}
        </Box>
        <Box className="flex flex-col">
          <Box className="mt-4">
            <InputLabel label="Township" />
            <DynamicInput
              value={values.township}
              onChangeHandler={handleChange}
              maxiWidth="300px"
              id="township"
              name="township"
            />
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AccordionEditComponent;
