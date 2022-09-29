import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  Select,
  FormControlLabel,
  Radio,
  SelectChangeEvent,
  styled,
  InputBase,
  MenuItem,
  Button,
} from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import PhoneNumberInput from "../Input/PhoneNumberInput";
import WordsCount from "../Input/WordsCount";
import PasswordInput from "../Input/PasswordInput";
import SmallButton from "../Button/SmallButton";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const StepSix: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
  const [mail, setMail] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [blockNo, setBlockNo] = useState("");
  const [streetName, setStreetName] = useState("");
  const [township, setTownship] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("Myanmar");
  const [bank, setBank] = useState("KBZ");
  const [name, setName] = useState("");
  const [bankAccNo, setBankAccNo] = useState("");
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
      width="100%"
    >
      <Box>
      <Box className="w-full mb-2 -mt-4">
            <img
              alt="logo"
              className="-ml-4"
              style={{ height: "50px" }}
              src="/images/logo.svg"
            />
          </Box>
        <Typography className="text-2xl text-[#737373] font-semibold w-full mb-8">
          Review your information...
        </Typography>
        <Box className="w-full flex flex-col border py-8 px-10 rounded-xl max-h-[32rem] overflow-y-auto">
          <Box className="mb-6">
            <InputLabel label="Mail" isRequired />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="example@gmail.com"
            />
          </Box>
          <Box>
            <InputLabel label="Password" isRequired />
            <PasswordInput />
          </Box>
          <Box>
            <InputLabel label="Confirm Password" isRequired />
            <PasswordInput />
          </Box>
          <Box>
            <InputLabel label="Upload profile" />
            <Box mb={3}>
              <Box
                height="75px"
                width="75px"
                position="relative"
                sx={{
                  backgroundColor: "#F6F9FE",
                }}
                className="flex-row"
                color="white"
                borderRadius="100%"
              >
                <input
                  // onChange={selectProfileImage}
                  style={{ opacity: "0", position: "absolute", top: "0" }}
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                />
                <BsCameraFill size="35px" color="#71ADFB" />
              </Box>
            </Box>
          </Box>
          <Box mb={3}>
            <InputLabel label="Gender" isRequired />
            <FormControl className="ml-2 text-[#737373]">
              <RadioGroup row name="radio-buttons-group">
                <FormControlLabel
                  value="male"
                  control={<Radio className="text-[#3B8CF7]" />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio className="text-[#3B8CF7]" />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <InputLabel label="Describe yourself" />
            <DynamicInput
              value={bio}
              setValue={setBio}
              customWidth="100%"
              maxiWidth="500px"
              maxiHeight="70px"
              isTextArea
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing"
            />
            <WordsCount maxCount="250" currentCount={bio.length} />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Secondary Mail" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="example@gmail.com"
            />
          </Box>
          <Box mb={3}>
            <InputLabel label="Primary Contact" isRequired />
            <PhoneNumberInput width="100%" />
          </Box>
          <Box mb={3}>
            <InputLabel label="Secondary Contact" isOptional />
            <PhoneNumberInput width="100%" />
          </Box>
          <Box className="mb-6">
            <InputLabel label="House number" />
            <DynamicInput
              value={houseNo}
              setValue={setHouseNo}
              maxiWidth="500px"
              placeholder="Type number..."
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Block number" />
            <DynamicInput
              value={blockNo}
              setValue={setBlockNo}
              maxiWidth="500px"
              placeholder="Type here..."
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Street name" />
            <DynamicInput
              value={streetName}
              setValue={setStreetName}
              maxiWidth="500px"
              placeholder="eg. Min Ye Kyaw Swar Street"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Township" />
            <DynamicInput
              value={township}
              setValue={setTownship}
              maxiWidth="500px"
              placeholder="eg. Insein"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="City" />
            <DynamicInput
              value={city}
              setValue={setCity}
              maxiWidth="500px"
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
          <Box className="mb-6">
            <InputLabel label="Postal code" />
            <DynamicInput
              value={postalCode}
              setValue={setPostalCode}
              maxiWidth="500px"
              placeholder="eg. 11361"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Bank Type" />
            <FormControl
              sx={{
                border: "1px solid grey",
                height: "55px",
                borderRadius: "15px",
              }}
              className="w-full"
            >
              <Select
                value={bank}
                onChange={handleChange}
                input={<BootstrapInput />}
                sx={{
                  width: "98%",
                  height: "55px",
                  fontSize: "16px",
                }}
              >
                <MenuItem value="KBZ">KBZ</MenuItem>
                <MenuItem value="AYA">AYA</MenuItem>
                <MenuItem value="UAB">UAB</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mb={3}>
            <InputLabel label="Bank Account Name" />
            <DynamicInput
              value={name}
              setValue={setName}
              placeholder="eg. Thiha Swan Htet"
              maxiWidth="500px"
            />
          </Box>
          <Box>
            <InputLabel label="Bank Account Number" />
            <DynamicInput
              value={bankAccNo}
              setValue={setBankAccNo}
              placeholder="xxxx-xxxx-xxxx-xxxx"
              maxiWidth="500px"
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

export default StepSix;
