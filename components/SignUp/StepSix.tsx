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
} from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import PhoneNumberInput from "../Input/PhoneNumberInput";
import WordsCount from "../Input/WordsCount";
import PasswordInput from "../ResetPasswordForm/PasswordInput";

const StepSix: FunctionComponent = () => {
  const [mail, setMail] = useState("");
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
    <Box className="h-screen flex items-center">
      <Box className="flex flex-col justify-center items-center bg-white w-1/2 px-24">
        <Typography className="text-2xl text-[#737373] font-semibold w-full mb-8">
          Review your information...
        </Typography>
        <Box className="w-full flex flex-col border py-8 px-10 rounded-xl max-h-[28rem] overflow-y-auto">
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
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="Type number..."
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Block number" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="Type here..."
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Street name" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="eg. Min Ye Kyaw Swar Street"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Township" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="eg. Insein"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="City" />
            <DynamicInput
              value={mail}
              setValue={setMail}
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
              value={mail}
              setValue={setMail}
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
      </Box>
      <Box className="flex justify-center items-center bg-[#F6F9FE] h-screen w-1/2">
        <Image src="/images/Step6.svg" height={500} width={500} />
      </Box>
    </Box>
  );
};

export default StepSix;
