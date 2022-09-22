import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  styled,
  InputBase,
  SelectChangeEvent,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useState, ChangeEvent } from "react";
import {AiFillCalendar} from "react-icons/ai";
import SmallButton from "../Button/SmallButton";
import DateInput from "../Input/DateInput";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import PhoneNumberInput from "../Input/PhoneNumberInput";
import WordsCount from "../Input/WordsCount";
import PasswordInput from "../ResetPasswordForm/PasswordInput";


const StepTwo: FunctionComponent = () => {
  const [bank, setBank] = useState("KBZ");
  const [name, setName] = useState("");
  const [bankAccNo, setBankAccNo] = useState("");
  const [bio, setBio] = useState("");


  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));
  // const [profileImg, setProfileImg] = useState("/images/profile.jpeg");

  const selectProfileImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const profile = URL.createObjectURL(e.target.files[0]);
      // setProfileImg(profile);
    }
  };

  const datePicker = () => {
    return(
      <input type="date" />
    )
  }

  return (
    <Box className="h-screen flex items-center">
      <Box className="flex flex-col justify-center items-center bg-white w-1/2 px-24">
        <Typography className="text-2xl text-[#737373] font-semibold w-full mb-8">
          Build a profile to tell who you are...
        </Typography>
        <Box className="w-full flex flex-col border py-8 px-10 rounded-xl">
          <Box className="mb-6">
            <InputLabel label="Upload profile" />
            <Box className="w-fit ml-2 flex justify-center items-center relative">
            <img
                    style={{
                      width: "55px",
                      height: "70px",
                      borderRadius: "3px",
                      margin: "auto",
                    }}
                    src="/images/upload.svg"
                    alt="avatar"
                  />
                  <input
                    // onChange={selectProfileImage}
                    style={{
                      opacity: "0",
                      position: "absolute",
                      top: "0",
                      width: "55px",
                      height: "70px"
                    }}
                    type="file"
                    accept="image/jpg, image/jpeg, image/png"
                  />
            </Box>
          </Box>
          <Box mb={3}>
            <InputLabel label="Date of birth" isRequired />
            <DateInput customWidth="70%" customHeight="20px"/>
            {/* <Box className="grid grid-cols-4 gap-y-4">
            <DynamicInput
              value={name}
              setValue={setName}
              placeholder="dd"
              maxiWidth="80px"
              customWidth="40px"
              customHeight="50px"
              customBorderRadius="10px"
            />
            <DateInput customWidth="0px"/>
            </Box> */}
          </Box>
          <Box mb={3}>
            <InputLabel label="Gender" isRequired />
            <FormControl className="ml-2 text-[#737373]">
            <RadioGroup
              row
              name="radio-buttons-group"
            >
              <FormControlLabel value="male" control={<Radio className="text-[#3B8CF7]" />} label="Male" />
              <FormControlLabel value="female" control={<Radio className="text-[#3B8CF7]" />} label="Female" />
            </RadioGroup>
            </FormControl>
          </Box>
          <Box>
              <InputLabel label="Describe yourself" />
              <DynamicInput value={bio} setValue={setBio} customWidth="100%" maxiWidth="500px" maxiHeight="70px" isTextArea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed adipiscing" />
              <WordsCount maxCount="250" currentCount={bio.length} />
            </Box>
        </Box>
        {/* <Box className="w-full flex justify-end items-center mt-8">
          <SmallButton
            text="Back"
            customHeight="40px"
            bgColor="white"
            color="#737373"
            customMarginX="1rem"
            customFontSize="15px"
            customBorder="1px solid #BBBBBB"
          />
          <SmallButton text="Next" customHeight="40px" customFontSize="15px" />
        </Box> */}
      </Box>
      <Box className="flex justify-center items-center bg-[#F6F9FE] h-screen w-1/2">
        <Image src="/images/LoginScreen.svg" height={500} width={500} />
      </Box>
    </Box>
  );
};

export default StepTwo;
