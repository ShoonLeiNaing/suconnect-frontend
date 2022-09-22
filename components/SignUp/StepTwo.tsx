import {
  Box,
  Typography,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import DateInput from "../Input/DateInput";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import WordsCount from "../Input/WordsCount";

const StepTwo: FunctionComponent = () => {
  const [bio, setBio] = useState("");

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
                  height: "70px",
                }}
                type="file"
                accept="image/jpg, image/jpeg, image/png"
              />
            </Box>
          </Box>
          <Box mb={3}>
            <InputLabel label="Date of birth" isRequired />
            <DateInput customWidth="70%" customHeight="20px" />
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
        </Box>
      </Box>
      <Box className="flex justify-center items-center bg-[#F6F9FE] h-screen w-1/2">
        <Image src="/images/Step2.svg" height={500} width={500} />
      </Box>
    </Box>
  );
};

export default StepTwo;
