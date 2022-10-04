import {
  Box,
  Typography,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import DateInput from "../Input/DateInput";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import WordsCount from "../Input/WordsCount";
import SmallButton from "../Button/SmallButton";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const StepTwo: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
  const [bio, setBio] = useState("");
  const [date, setDate] = useState<any>(null);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      {/* <Box className="flex flex-col justify-center items-center bg-white px-24"> */}
      <Box width="500px">
        <Box className="w-full mb-2 -mt-4">
          <img
            alt="logo"
            className="-ml-4"
            style={{ height: "50px" }}
            src="/images/logo.svg"
          />
        </Box>
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
            <DateInput
              dateValue={date}
              setDateValue={setDate}
              customWidth="70%"
              customHeight="20px"
            />
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
      {/* </Box> */}
    </Box>
  );
};

export default StepTwo;
