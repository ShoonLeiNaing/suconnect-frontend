import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  styled,
  InputBase,
  SelectChangeEvent,
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

const StepFive: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
  const [bank, setBank] = useState("KBZ");
  const [name, setName] = useState("");
  const [bankAccNo, setBankAccNo] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setBank(event.target.value as string);
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
        <Box className="w-full mb-8">
          <img
            alt="logo"
            className="hidden md:block -ml-4"
            style={{ height: "50px" }}
            src="/images/logo.svg"
          />
        </Box>
        <Typography className="text-[1.15rem] -mt-10 md:mt-0 sm:text-[1.3rem] md:text-xl text-[#737373] font-semibold w-full mb-8">
          Provide your bank information...
        </Typography>
        <Box className="w-full flex flex-col border px-6 py-6 sm:py-7 md:py-8 rounded-xl">
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
              customWidth="100%"
            />
          </Box>
          <Box>
            <InputLabel label="Bank Account Number" />
            <DynamicInput
              value={bankAccNo}
              setValue={setBankAccNo}
              placeholder="xxxx-xxxx-xxxx-xxxx"
              maxiWidth="500px"
              customWidth="100%"
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

export default StepFive;
