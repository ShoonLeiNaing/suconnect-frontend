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
import { colors } from "../../data/constant";
import styles from "./accordion.module.css";
import DynamicInput from "../Input/DynamicInput";
import SmallButton from "../Button/SmallButton";

interface IProps {
  edit: boolean;
  setEdit: any;
}

const AccordionEditComponent: FunctionComponent<IProps> = ({
  edit,
  setEdit,
}) => {
  const [houseNo, setHouseNo] = useState("12");
  const [city, setCity] = useState("Yangon");
  const [street, setStreet] = useState("Buddha Street");
  const [country, setCountry] = useState("Myanmar");
  const [township, setTownship] = useState("Bahan");
  const [postalCode, setPostalCode] = useState("15011");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

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
              value={houseNo}
              setValue={setHouseNo}
              maxWidth="300px"
            />
          </Box>
          <Box className="my-4">
            <InputLabel label="City" />
            <DynamicInput value={city} setValue={setCity} maxWidth="300px" />
          </Box>
        </Box>
        <Box className="flex flex-col mx-12">
          <Box className="mt-4">
            <InputLabel label="Street Name" />
            <DynamicInput
              value={street}
              setValue={setStreet}
              maxWidth="300px"
            />
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
                value={country}
                onChange={handleChange}
                input={<BootstrapInput />}
                className={styles.select_box}
              >
                <MenuItem value="Myanmar">Myanmar</MenuItem>
                <MenuItem value="Singapore">Singapore</MenuItem>
                <MenuItem value="Thailand">Thailand</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box className="flex flex-col">
          <Box className="mt-4">
            <InputLabel label="Township" />
            <DynamicInput
              value={township}
              setValue={setTownship}
              maxWidth="300px"
            />
          </Box>
          <Box className="my-4">
            <InputLabel label="Postal Code" />
            <DynamicInput
              value={postalCode}
              setValue={setPostalCode}
              maxWidth="300px"
            />
          </Box>
        </Box>
      </Box>
      <Box className="flex-col px-6">
        <Box className="flex justify-end mt-4 mb-4">
          <SmallButton
            text="Cancel"
            bgColor="white"
            customPaddingY="0.5rem"
            color={colors.black.black1}
            customFontSize="15px"
            customMarginX="1rem"
            onClickHandler={() => setEdit(!edit)}
          />
          <SmallButton
            text="Save"
            customPaddingY="0.5rem"
            customFontSize="15px"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default AccordionEditComponent;
