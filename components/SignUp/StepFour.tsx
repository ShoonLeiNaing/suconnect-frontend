import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  styled,
  InputBase,
  Button,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import SmallButton from "../Button/SmallButton";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const StepFour: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
  const [mail, setMail] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [blockNo, setBlockNo] = useState("");
  const [streetName, setStreetName] = useState("");
  const [township, setTownship] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("Myanmar");
  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={{ lg: "500px", md: "430px", sm: "370px", xs: "360px" }}
    >
      <Box maxWidth="500px" className="w-full">
        <Box className="w-full mb-2 -mt-4">
          <img
            alt="logo"
            className="hidden md:block -ml-4"
            style={{ height: "50px" }}
            src="/images/logo.svg"
          />
        </Box>
        <Typography className="text-[1.15rem] -mt-2 md:mt-0 sm:text-[1.3rem] md:text-xl text-[#737373] font-semibold w-full mb-8">
          Let&lsquo;s us know where you live...
        </Typography>
        <Box className="w-full flex flex-col border px-6 py-6 sm:py-7 md:py-8 rounded-xl max-h-[32rem] overflow-y-auto">
          <Box className="mb-6">
            <InputLabel label="House number" />
            <DynamicInput
              value={houseNo}
              // setValue={setHouseNo}
              maxiWidth="500px"
              customWidth="100%"
              placeholder="Type number..."
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Block number" />
            <DynamicInput
              value={blockNo}
              // setValue={setBlockNo}
              maxiWidth="500px"
              customWidth="100%"
              placeholder="Type here..."
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Street name" />
            <DynamicInput
              value={streetName}
              // setValue={setStreetName}
              maxiWidth="500px"
              customWidth="100%"
              placeholder="eg. Min Ye Kyaw Swar Street"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Township" />
            <DynamicInput
              value={township}
              // setValue={setTownship}
              maxiWidth="500px"
              customWidth="100%"
              placeholder="eg. Insein"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="City" />
            <DynamicInput
              value={city}
              // setValue={setCity}
              maxiWidth="500px"
              customWidth="100%"
              placeholder="eg. Yangon"
            />
          </Box>
          <Box className="mb-6">
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
                value={country}
                onChange={handleChange}
                input={<BootstrapInput />}
                sx={{
                  width: "98%",
                  height: "55px",
                  fontSize: "16px",
                }}
              >
                <MenuItem value="Myanmar">Myanmar</MenuItem>
                <MenuItem value="Thailand">Thailand</MenuItem>
                <MenuItem value="Singapore">Singapore</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <InputLabel label="Postal code" />
            <DynamicInput
              value={postalCode}
              // setValue={setPostalCode}
              maxiWidth="500px"
              customWidth="100%"
              placeholder="eg. 11361"
            />
          </Box>
        </Box>
        <Box className="flex justify-end items-center mt-6">
          <Button
            onClick={handleBack}
            className="mx-4 text-[#737373] bg-white capitalize"
            sx={{
              fontSize: "15px",
              border: "1px solid #BBBBBB",
              height: "40px",
              borderRadius: "10px",
            }}
          >
            Back
          </Button>

          <SmallButton
            onClickHandler={handleNext}
            text="Next"
            customHeight="40px"
            customFontSize="15px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StepFour;
